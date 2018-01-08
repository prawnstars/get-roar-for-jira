var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
// var watch = require('gulp-watch');


// Static Server + watching scss/html files
gulp.task('serve', function() {
  browserSync.init({
      server: './public'
  });

  gulp.watch('src/sass/*.scss', gulp.series('sass:build'));
  gulp.watch('public/*.html').on('change', browserSync.reload);
});


// // Compile sass into CSS & auto-inject into browsers
gulp.task('sass:build', function() {
  return gulp.src('src/sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('public/css'))
    .pipe(browserSync.stream());
});


gulp.task('build', gulp.parallel('sass:build'));
gulp.task('default', gulp.series('build', 'serve'));
