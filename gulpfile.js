/*!
 * gulp
 * $ npm install gulp-ruby-sass gulp-autoprefixer gulp-minify-css gulp-jshint gulp-concat gulp-uglify gulp-imagemin gulp-notify gulp-rename gulp-livereload gulp-cache del --save-dev
 */

// Load plugins
var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    // notify = require('gulp-notify'),
    cache = require('gulp-cache'),
    livereload = require('gulp-livereload'),
    del = require('del'),
    useref = require('gulp-useref');

// Copy files
gulp.task('copy', function () {
  var assets = useref.assets();

  gulp.src('app/index.html')
  .pipe(assets)
  .pipe(assets.restore())
  .pipe(useref())
  .pipe(gulp.dest('build/'));

  gulp.src('app/scripts/**/*.json')
  .pipe(gulp.dest('build/scripts/'));

  gulp.src('app/styles/fonts/**/*')
  .pipe(gulp.dest('build/styles/fonts/'));
});

// Styles
gulp.task('styles', function () {
  var assets = useref.assets();

  return sass('app/styles/main.scss', { style: 'expanded' })
    .pipe(autoprefixer('last 2 version'))
    .pipe(gulp.dest('app/styles'))
    //.pipe(sourcemaps('.'))

    .pipe(rename({ suffix: '.min' }))
    .pipe(minifycss())
    .pipe(gulp.dest('build/styles'))
    // .pipe(notify({ message: 'Styles task complete' }))
    ;
});

// Scripts
gulp.task('scripts', function () {
  return gulp.src('app/scripts/**/*.js')
    //.pipe(jshint('.jshintrc'))
    //.pipe(jshint.reporter('default'))
    .pipe(concat('main.js'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(uglify())
    .pipe(gulp.dest('build/scripts'))
    // .pipe(notify({ message: 'Scripts task complete' }))
    ;
});

// Images
gulp.task('images', function () {
  return gulp.src('app/images/**/*')
    .pipe(cache(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true })))
    .pipe(gulp.dest('build/images'))
    // .pipe(notify({ message: 'Images task complete' }))
    ;
});

// Clean
gulp.task('clean', function (cb) {
  del(['build/index.html', 'build/css', 'build/js', 'build/img'], cb);
});

// Default task
gulp.task('default', ['clean'], function () {
  gulp.start('copy', 'styles', 'scripts', 'images');
});

// Watch
gulp.task('watch', function () {

  // Watch .html files
  gulp.watch('app/**/*.html', ['copy']);

  // Watch .scss files
  gulp.watch('app/styles/**/*.scss', ['styles']);

  // Watch .js files
  gulp.watch('app/scripts/**/*.js', ['scripts']);

  // Watch image files
  gulp.watch('app/images/**/*', ['images']);

  // Create LiveReload server
  livereload.listen();

  // Watch any files in dist/, reload on change
  gulp.watch(['build/**']).on('change', livereload.changed);

});




// Dev
gulp.task('dev', function () {

  // Watch .scss files
  gulp.watch('app/styles/**/*.scss', ['styles']);

  // Create LiveReload server
  livereload.listen();

  // If CSS generated or HTML changes, reload
  gulp.watch([
    'app/styles/**/*.css',
    'app/*.html'
    ]).on('change', livereload.changed);

});
