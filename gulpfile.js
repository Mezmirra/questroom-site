var gulp = require('gulp');
var less = require('gulp-less');
var concatCss = require('gulp-concat-css');
var cleanCSS = require('gulp-clean-css');
 
gulp.task('css', function() {
    return gulp.src('app/styles/bootstrap.less')
        .pipe(less())
        .pipe(concatCss('project.css', {rebaseUrls: false}))
        .pipe(cleanCSS())
        .pipe(gulp.dest('dist/css'));
});

gulp.task('watch', function () {
    gulp.watch('app/styles/*.less', ['css']);
});

gulp.task('default', ['css', 'watch']);