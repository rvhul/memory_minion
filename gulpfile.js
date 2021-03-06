// FIRST STEP - MAKE A REPO
// When creating new project and want to use this process, first install gulp dependencies via terminal (npm install --save-dev gulp gulp-coffee gulp-sass) within new project folder. Then paste this code (FOLLOW SAME FOLDER STRUCTURE AS HERE) within gulpfile.js
// BOWER - Once above process is completed, within terminal and in root directory of new project execute 'bower init' -> 'bower install --save-dev'. Then install/search for component needed (ie. jquery/normalize.css/animate.css/bootstrap.css etc)

var gulp = require('gulp');
var gutil = require('gulp-util');
var coffee = require('gulp-coffee');
var sass = require('gulp-sass');

// Task for CoffeeScript
gulp.task('coffee', function() {
  gulp.src('./assets/js/coffee/*.coffee')
    .pipe(coffee({bare: true}).on('error', gutil.log))
    .pipe(gulp.dest('./assets/js/'))
});
// Task for watching CoffeeScript Folder
gulp.watch('./assets/js/coffee/*.coffee', ['coffee']);

// Task for Sass
gulp.task('sass', function () {
  gulp.src('./assets/css/src/brain.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./assets/css/'));
});

// Task for watching Sass folder
gulp.watch('./assets/css/src/*.scss', ['sass']);

// Task for initializing gulp processes (defined within the array) by simply entering 'gulp' in terminal
gulp.task('default', ['coffee', 'sass']);
