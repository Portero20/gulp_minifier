const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');
const htmlmin = require('gulp-htmlmin');

// Tarea para minificar CSS
gulp.task('minify-css', () => {
    return gulp.src('src/css/*.css') // Ruta a tus archivos CSS
        .pipe(cleanCSS({ compatibility: 'ie8' }))
        .pipe(gulp.dest('dist/css')); // Ruta de salida para los archivos minificados
});

// Tarea para minificar HTML
gulp.task('minify-html', () => {
    return gulp.src('src/*.html') // Ruta a tus archivos HTML
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('dist')); // Ruta de salida para los archivos minificados
});

// Tarea por defecto para ejecutar todas las tareas de minificación
gulp.task('default', gulp.series('minify-css', 'minify-html'));
