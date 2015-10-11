var gulp = require('gulp');
var browserify = require('gulp-browserify');
var rename = require("gulp-rename");
var watch = require("gulp-watch");
 
// Basic usage 
gulp.task('scripts', function() {
    // Single entry point to browserify 
    gulp.src('*.jsx')
        .pipe(browserify({
          insertGlobals : true,
          debug : !gulp.env.production,
          transform : ["reactify"]
        }))
        .pipe(rename('bundle.js'))
        .pipe(gulp.dest('public'))
});
