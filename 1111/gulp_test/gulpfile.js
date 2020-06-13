var gulp = require('gulp');
var concat = require("gulp-concat");
var uglify = require("gulp-uglify");
var rename = require("gulp-rename");

gulp.task("js", function () {
  return gulp.src("src/js/*.js")//输入路径
    .pipe(concat("build.js"))//合并js
    .pipe(gulp.dest("dist/js"))//输出路径
    .pipe(uglify())//压缩js
    .pipe(rename("build.min.js"))//重命名
    .pipe(gulp.dest("dist/js/"))//输出路径
})

//注册默认任务
// gulp.task('default',['js']);