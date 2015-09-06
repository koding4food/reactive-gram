'use strict';

var gulp = require('gulp');
var webpack = require('webpack-stream');
var webpackConfig = require('./config/webpack.js');


gulp.task('webpack', ['babel'], function(callback) {
  return gulp.src('build/app/app.js')
    .pipe(webpack(webpackConfig))
    .pipe(gulp.dest('build/public/js'));
});
