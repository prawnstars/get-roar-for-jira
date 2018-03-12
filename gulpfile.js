var browserSync = require('browser-sync').create();
var del = require('del');
var gulp = require('gulp');
var sass = require('gulp-sass');


var path = {
  BUILD: 'dist/'
};


var glob = {
  BUILD: path.BUILD + '**',
  SASS: 'src/sass/**/*.scss',
  STATIC: 'static/**/*.*'
};


gulp.task('delete:all', function() {
  return del(glob.BUILD);
});

// // Compile sass into CSS & auto-inject into browsers
gulp.task('sass:build', function() {
  return gulp.src(glob.SASS)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(path.BUILD + 'css/'))
    .pipe(browserSync.stream());
});


gulp.task('static:copy', function() {
  return gulp.src(glob.STATIC)
    .pipe(gulp.dest(path.BUILD));
});


// Static Server + watching scss/html files
gulp.task('serve', function() {
  browserSync.init({
    server: path.BUILD
  });

  gulp.watch(glob.SASS, gulp.series('sass:build'));
  gulp.watch(glob.STATIC, gulp.series('static:copy'));
  gulp.watch(path.BUILD + '*.html').on('change', browserSync.reload);
});


gulp.task('build', gulp.parallel('sass:build', 'static:copy'));
gulp.task('default', gulp.series('delete:all', 'build', 'serve'));
