// Import
const gulp = require("gulp"),
  del = require("del"),
  jsonminify = require("gulp-jsonminify");

// Tasks
gulp.task("clean", function () {
  return del(["min"]);
});

gulp.task("minify", function () {
  return gulp.src(["src/*.json"])
    .pipe(jsonminify())
    .pipe(gulp.dest("min"));
});

// Combined tasks
gulp.task("default", gulp.series("clean", "minify"));