# Front-end web project starter files

This is the current setup I use to create my front-end web design projects.

## Requeriments
NodeJS (http://nodejs.org)
Npm (https://www.npmjs.com)

and Gulp–after installing node and NPM, use the following in terminal to install Gulp

```
npm install -g gulp
```
Gulp is the one that will run all the compilation, watchers and others tasks. To learn more about Gulp and all it's magical abilities check out there website [here.](https://gulpjs.com/)

## Install
In order to start using the project you need to clone it to your computer. You can download the the zip version.

Once you have the files open, navigate to the folder within terminal

```
cd directory/folder name
```

 and install all the dependencies (found in gulpfile.js and package.json) using the command below

```
npm install
```

## How to use
After navigating to the folder using terminal and installing the required dependancies type 'gulp' in the command line and the site will open in a browser and be ready for use.

When 'gulp' is entered and executed, two new folders will be created in the directory. 'site' and 'assets'. You NEVER should need to touch these folders ('site' is the folder you would upload to FTP or send to your client)

The only files you need to work with are the html files found in the root folder, html files found in the 'includes' folder, html files found in the 'layouts' folder, yml files found in the 'data' folder and markup files found in the 'posts' folder. and then the primary css, images and js files found in 'src'.

Here are a few commands to use whilst working.

* **clean**: Removes the 'site' folder so you can push to repo
* **js**: Compile the JavaScript files
* **css**: Compile the Sass styles
* **imagemin**: Compress images and push to site folder
* **fonts**: Copy the fonts to the site folder

note: the 'gulp' command automatically executes js, css and imagemin so these aren't always necessary.
