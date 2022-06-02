'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');

gulp.task('scripts', function () {
    return gulp.src('./assets/js/*.js')
        .pipe(concat('scripts.js'))
        .pipe(gulp.dest('./build/js'));
});

gulp.task('styles', function () {
    return gulp.src('./assets/scss/*.scss')
        .pipe(sass({
            outputStyle: 'compressed'
        }).on('error', sass.logError))
        .pipe(concat('main.min.css'))
        .pipe(gulp.dest('./build/css'));
});