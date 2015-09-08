'use strict';

var gulp = require('gulp');
var webpack = require('webpack-stream');
var webpackConfig = require('./config/webpack.js');

/**
 * @function webpack
 * @requires babel gulp task
 * @returns {Object}
 * @description Gulp task that triggers browserify tranformation
 */
gulp.task('webpack', ['babel'], function() {
  return gulp.src('build/app/app.js')
    .pipe(webpack(webpackConfig))
    .pipe(gulp.dest('build/public/js'));
});
