'use strict';

var gulp = require('gulp');
var babel = require('gulp-babel');

/**
 * @function babel
 * @returns {String}
 * @description Gulp task that triggers babel ES6 transformation
 */
gulp.task('babel', function () {
  return gulp.src(['src/**/*.js*'])
    .pipe(babel())
    .pipe(gulp.dest('build'));
});
