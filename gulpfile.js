var gulp    = require('gulp'),
    babel   = require("gulp-babel"),
    concat  = require('gulp-concat'),
    clean   = require('gulp-clean'),
    uglify  = require('gulp-uglify');

gulp.task('clean', function () {
    return gulp.src('www/compiled', {read: false})
        .pipe(clean());
});

gulp.task('merge', ['clean'], function () {
    return gulp.src([
            'www/js/**/*.js'
        ])
        .pipe(concat('angular-compiled.js'))
        .pipe(gulp.dest('www/compiled'));
});

gulp.task('compress', ['merge'], function () {
    return gulp.src('www/compiled/angular-compiled.js')
        .pipe(uglify())
        .pipe(gulp.dest('web/js/compiled'));
});

gulp.task("default", ['merge']);