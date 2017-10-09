/**
 * Created by John on 2017/10/9.
 */
var gulp = require("gulp");
var concat = require("gulp-concat");
var rename = require("gulp-rename");
var uglify = require("gulp-uglify");
var minify = require("gulp-minify-css");
gulp.task("js", function () {
    gulp.src("js/*.js")
        .pipe(concat("min.js"))
        .pipe(rename({suffix:".min"}))
        .pipe(minify())
        .pipe(gulp.dest("js"))

});