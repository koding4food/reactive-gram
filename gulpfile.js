'use strict';

var gulp = require('gulp');
require('./bin/gulp-tasks');


gulp.task('build', ['babel', 'webpack']);
