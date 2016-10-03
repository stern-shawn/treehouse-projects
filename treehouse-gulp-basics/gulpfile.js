'use strict'

var gulp = require('gulp')
var concat = require('gulp-concat')
var uglify = require('gulp-uglify')
var rename = require('gulp-rename')
var sass = require('gulp-sass')

gulp.task('concatScripts', function () {
  gulp.src([
        'js/jquery.js',
        'js/sticky/jquery.sticky.js',
        'js/main.js'
        ])
    .pipe(concat('app.js'))
    .pipe(gulp.dest('js'))
})

gulp.task('minifyScripts', function () {
  gulp.src('js/app.js')
      .pipe(uglify())
      .pipe(rename('app.min.js'))
      .pipe(gulp.dest('js'))
})

gulp.task('compileSass', function () {
  gulp.src('scss/application.scss')
      .pipe(sass())
      .pipe(gulp.dest('css'))
})

gulp.task('default', ['hello'], function () {
  console.log('the default task!!!!')
})
