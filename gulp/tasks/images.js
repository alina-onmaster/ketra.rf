import responsive from "gulp-responsive";
import responsiveConfig from "gulp-responsive-config";
/*import imagemin from "gulp-imagemin";*/
import webp from "gulp-webp";
import gulpAvif from "gulp-avif";
import newer from "gulp-newer";
import svgo from "gulp-svgo";

import tinypng from "gulp-tinypng-extended";

export const imgopt = (done) => {
    console.log(app.blocks);
    app.blocks.forEach (function (block) {
        // Возьми все изображения из папки
        return app.gulp.src(app.basePath.blocks + '/' + block + '/*.{jpg,jpeg,png}')

            .pipe(app.plugins.plumber(
                app.plugins.notify.onError({
                    title: "IMAGES-OPT",
                    message: "Error: <%= error.message %>"
                }))
            )

            .pipe(tinypng({
                key: 'jO4jokCHdaoyAiRSqQifbkbQzjh9LaQD',
                sigFile: app.path.src.imgOpt + '/.tinypng-sigs',
                log: true,
            }))

            .pipe(app.gulp.dest(app.path.src.imgOpt + '/' + block + '/'))

    });
    done();
}

export const img = (done) => {
    app.blocks.forEach (function (block) {
        var config = responsiveConfig([
            app.basePath.blocks + '/' + block + '/*.scss',
            app.basePath.blocks + '/' + block + '/*.html'
        ]);


        // Возьми все изображения из папки
        return app.gulp.src(app.path.src.imgOpt + '/' + block + '/*.{jpg,jpeg,png}')

            .pipe(app.plugins.plumber(
                app.plugins.notify.onError({
                    title: "IMAGES",
                    message: "Error: <%= error.message %>"
                }))
            )

            .pipe(app.gulp.dest(app.path.build.images + '/' + block + '/'))
            .pipe(webp())
            .pipe(app.gulp.dest(app.path.build.images + '/' + block + '/'))

    });
    done();
}



export const copysvg = () => {
    return app.gulp.src([app.path.src.svgOpt + '**/*.svg', '!src/img-optimized/**/icon-*.svg'])
        .pipe(app.gulp.dest(app.path.build.images))
}