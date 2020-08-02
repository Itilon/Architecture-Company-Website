const gulp = require('gulp');
const composer = require('gulp-uglify/composer');
const uglifyes = require('uglify-es');
const uglifycss = require('gulp-uglifycss');
const nodemon = require('gulp-nodemon');
const { pipeline } = require('readable-stream');

const uglify = composer(uglifyes, console);

gulp.task('server', () => {
    return require('./server');
});
    
gulp.task('dev', () => {
    return nodemon({
        ext: 'js',
        script: 'server.js'
    });
});

gulp.task('compress-js', () => {
    return pipeline(
        gulp.src('static/js/*.js'),
        uglify(),
        gulp.dest('dist/js')
    );
});

gulp.task('compress-css', () => {
    return pipeline(
        gulp.src('static/css/*.css'),
        uglifycss({ "maxLineLen": 80, "uglyComments": true }),
        gulp.dest('dist/css')
    );
});