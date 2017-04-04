const gulp = require('gulp');
const concat = require('gulp-concat');
const browserSync = require('browser-sync').create();
const compass = require('gulp-compass');
const runSequence = require('run-sequence');
const cleanCSS = require('gulp-clean-css');
const include = require('gulp-include');
const del = require('del');
const autoprefixer = require('gulp-autoprefixer');
const uglify = require('gulp-uglify');

gulp.task('default', function() {
    return runSequence(['clean'],['build'],['server','watch']);
});
gulp.task('clean', function() {
    return del('./dist/*',function() {
        console.log('task clean completed');
    })
});
gulp.task('build', function () {
    return runSequence(['css', 'img', 'html','trans-hlayer','uglify-js'], function() {
        console.log('task build is completed!');
    });
});

gulp.task('img', function() {
    return gulp.src('./src/img/**/*.*')
        .pipe(gulp.dest('./dist/img/'))
});

// gulp.task('concat-js', function() {
//     return gulp.src('./src/js/*.js')
//         .pipe(concat('main.js'))
//         .pipe(gulp.dest('./dist/js/'));
// });
gulp.task('uglify-js', function() {
    return gulp.src(['./src/js/**/*.js','!./src/js/**/*.min.js'])
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js/'));
});
gulp.task('trans-hlayer', function(){
    return gulp.src('./src/js/hlayer/**/*.css')
      .pipe(gulp.dest('./dist/js/hlayer/'))
});
gulp.task('server', function() {
    browserSync.init({
        server:'./dist/',
        port: 8001
    });
});

gulp.task('reload', function() {
    return browserSync.reload();
});

gulp.task('css', function() {
    return gulp.src('./src/sass/**/*.scss')
        .pipe(compass({
            config_file: './config.rb',
            css: './src/css',
            sass: './src/sass'
        }))
        .on('error', function(err) {
            console.log(err);
            this.emit('end');
        })
        .pipe(cleanCSS())
        .pipe(autoprefixer({
            browsers: ['last 5 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('./dist/css'));
});

gulp.task('html', function() {
    return gulp.src('./src/html/*.html')
        .pipe(include())
        .pipe(gulp.dest('./dist/'));
});

gulp.task('watch', function() {
    return gulp.watch([
        './src/**/*.*'
    ], function() {
        return runSequence(['build'],['reload']);
    });
});
