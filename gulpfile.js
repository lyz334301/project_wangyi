const gulp = require('gulp');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
// const rename = require('gulp-rename');
const cssnano= require('gulp-cssnano');
const sass = require('gulp-sass');
const imagemin=require('gulp-imagemin');
gulp.task('js',function(){
			gulp.src('./src/js/*.js').pipe(uglify()).pipe(concat('index.min.js')).pipe(gulp.dest('./dist'));
			
})
gulp.task('css',function(){
			gulp.src('./src/scss/*.css').pipe(sass()).pipe(cssnano()).pipe(gulp.dest('./dist'));
			
})
gulp.task('img',function(){
			gulp.src('./src/img/*.*').pipe(imagemin()).pipe(gulp.dest('./dist'));
			
})
gulp.task('default',function(){
			gulp.watch('./src/*.*',['js']);
})