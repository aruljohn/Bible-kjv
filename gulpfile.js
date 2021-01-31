// Import
const gulp = require("gulp"),
  minify = require("gulp-minify");

// Tasks
gulp.task("clean", function () {
  return del(["min"]);
});

gulp.task("compress", function () {
  gulp.src("src/*.json")
    .pipe(minify({
      ext: {
        src: ".json",
        min: ".json"
      },
    }))
    .pipe(gulp.dest("min"))
});

// Combined tasks
gulp.task("default", gulp.series("clean", "compress"));