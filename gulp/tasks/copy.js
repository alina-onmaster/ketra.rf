export const copycss = () => {
    return app.gulp.src(app.path.src.csslib)
        .pipe(app.gulp.dest(app.path.build.css))
}

export const copyjs = () => {
    return app.gulp.src(app.path.src.jslib)
        .pipe(app.gulp.dest(app.path.build.js))
}