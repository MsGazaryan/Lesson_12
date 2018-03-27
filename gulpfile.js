'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
 
gulp.task('sass', function () {
  return gulp.src('App/SASS/*.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('App/CSS/'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('App/SASS/*.sass', ['sass']);
});

gulp.task('default', ['sass:watch']);