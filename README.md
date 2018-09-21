# Front-end web project starter files by Josh Millgate

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

Once you have the files open, navigate to the folder within terminal (cd folder/root) and install all the dependencies (found in gulpfile.js amd package.json)

```
npm install
```

## How to use
Once you have the project open you should be able to open your terminal and type gulp in the command line and the site will open in a browser and be ready for use. Upon typing and executing the gulp command, new files will be created in the site structure. When the site is launched, all the files are compiled, combined and pushed into the folder called 'site' (this is the folder you would upload to FTP or send to your client) Here are a few commands to use whilst working.


* **clean**: Removes the 'site' folder so you can push to repo
* **js**: Compile the JavaScript files
* **css**: Compile the Sass styles
* **imagemin**: Compress images and push to site folder
* **fonts**: Copy the fonts to the site folder

note: the 'gulp' command automatically executes js, css and imagemin so these aren't always necessary. 
