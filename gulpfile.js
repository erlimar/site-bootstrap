var gulp = require('gulp'),
    gutil = require('gulp-util')

gulp.task('copy-lib', [], () => {
    // Copy Bootstrap lib
    gulp.src('node_modules/bootstrap/dist/**/*.{js,css,map}')
        .pipe(gulp.dest('src/static'))

    // Copy Bootstrap dependency lib, jquery
    gulp.src('node_modules/jquery/dist/jquery.{js,min.js,min.map}')
        .pipe(gulp.dest('src/static/js'))

    // Copy Bootstrap dependency lib, tether
    gulp.src('node_modules/tether/dist/**/*.{js,css,map}')
        .pipe(gulp.dest('src/static'))
})

gulp.task('default', ['build'])
gulp.task('build', ['copy-lib'])