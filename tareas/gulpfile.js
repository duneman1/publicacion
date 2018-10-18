const gulp = require('gulp')
const autoprefixer = require('gulp-autoprefixer');
const postcss = require('gulp-postcss');
const cssnext = require('postcss-cssnext')
 
const plugins = [
    cssnext()
]

gulp.task('hacerAlgo', () => {
    return gulp.src()
    .pipe()
    .pipe(gulp.dest())
})
gulp.task('postcss', () => {
    gulp.src('src/style.css')
    .pipe(postcss(plugins))
    .pipe(gulp.dest('dist'))
})

gulp.task('css', () =>
    gulp.src('src/style.css')
        .pipe(autoprefixer())
        .pipe(gulp.dest('dist'))
);

gulp.task('whatch-css', () => {
    gulp.watch('src/*.css', ['css', 'postcss'])
})


gulp.task('build', ['css', 'postcss']);
gulp.task('default', ['css', 'postcss', 'whatch-css']);