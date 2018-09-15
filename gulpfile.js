'use strict';

// Require
const gulp        = require('gulp'),
      gutil       = require('gulp-util'),
      sass        = require('gulp-sass'),
      postcss     = require('gulp-postcss'),
      sourcemaps  = require('gulp-sourcemaps'),
      cssnano     = require('gulp-cssnano'),
      concat      = require('gulp-concat'),
      babel       = require('gulp-babel'),
      uglify      = require('gulp-uglify'),
      browserSync = require('browser-sync'),
      imagemin    = require('gulp-imagemin'),
      console     = require('better-console'),
      del         = require('del'),
      plumber     = require('gulp-plumber'),
      rename      = require('gulp-rename'),
      markdown    = require('gulp-markdown'),
      cp          = require('child_process'),
      cssnext     = require('postcss-cssnext');

// Default source and build folder
var   src         = './_src',
      dist        = './assets';

// Folders ( Make sure you add new jekyll folders to the jekyll line as needed )
var path = {
      scss: [src + '/scss/**/*.scss'],
      js: [
        // Vendors
        'node_modules/jquery/dist/jquery.js',
        'node_modules/clipboard/dist/clipboard.js',
        // Local JS
        src + '/js/**/*.js'
      ],
      images: [src + '/images/**/*'],
      fonts: [src + '/fonts/**/*'],
      jekyll: ['index.html', '_pages/**/*', '_layouts/**/*', '_includes/**/*', '_data/**/*', 'assets/**/*']
    };

var config = {
  serverPort: 3000
};

// Build the Jekyll Site
gulp.task('jekyll-build', function(done) {
    return cp.spawn('jekyll', ['build'], {stdio: 'inherit'})
    done();
});

// Rebuild Jekyll & do page reload
gulp.task('jekyll-rebuild', gulp.series('jekyll-build', function(done) {
    browserSync.reload();
    done();
}));

// CSS
gulp.task('css', function(done) {

  var processors = [
    cssnext({
      browsers: ['last 6 version']
    })
  ];

  return gulp.src(src + '/scss/**/*.scss')
  .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(postcss(processors))
    .pipe(cssnano({ discardComments: { removeAll: true }}))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(dist + '/css/'))
    .pipe(browserSync.stream());

    done();
});

// Javascript
gulp.task('js', function(done) {
  return gulp.src(path.js)
    .pipe(concat('bundle.js'))
    .pipe(babel({
      presets: ['env'],
      compact: true
    }))
    .pipe(uglify())
    .pipe(gulp.dest(dist + '/js/'))
    .pipe(browserSync.stream());

    done();
});

// Images
gulp.task('imagemin', function(done) {
	return gulp.src(path.images)
    .pipe(plumber((error) => {
      gutil.log(gutil.colors.red(error.message));
      gulp.task('imagemin').emit('end');
    }))
	  .pipe(imagemin())
    .pipe(gulp.dest(dist + '/images/'))
    .pipe(browserSync.stream());

    done();
});

// Copy font files
gulp.task('fonts', function(done) {
  return gulp.src(path.fonts)
    .pipe(gulp.dest(dist + '/fonts/'));

    done();
});

// Parse README.md to HTML
gulp.task('readme', function(done) {
    return gulp.src('README.md')
        .pipe(markdown())
        .pipe(gulp.dest('_includes'));

        done();
});

// Clean build folders
gulp.task('clean', function(done) {
  return del([
    '_site',
    'assets'
  ]);
  done();
});

// Wait for jekyll-build, then launch the Server
gulp.task('browser-sync', gulp.series('css', 'jekyll-build', function(done) {
  browserSync.init({
    server: {
        baseDir: '_site'
    },
    port: config.serverPort
  });
  done();
}));

// Watch for changes
gulp.task('watch', function(done){
    gulp.watch(path.scss, gulp.series('css'));
    gulp.watch(path.js, gulp.series('js'));
    gulp.watch(path.images, gulp.series('imagemin'));
    gulp.watch(path.jekyll, gulp.series('jekyll-rebuild'));
    done();
});

// Re-build everything
gulp.task('build', gulp.series('clean', gulp.parallel('css', 'js', 'imagemin', 'fonts', 'readme'), function(done) {
  done();
}));

// Start Everything with the default task
gulp.task('default', gulp.series('browser-sync', 'watch'));
