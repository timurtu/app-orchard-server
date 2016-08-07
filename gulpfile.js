/**
 * Created by timur on 7/26/16.
 */

const gulp = require('gulp')
const babel = require('gulp-babel')


const paths = {
  source: 'src/**/*.js',
  dist: 'dist'
}

gulp.task('watch', () => gulp.watch(paths.source, ['build']))

gulp.task('build', () => {
  gulp.src(paths.source)
    .pipe(babel({ presets: ['es2015'] }))
    .pipe(gulp.dest(paths.dist))
})
