var gulp        = require('gulp');
var browserSync = require('browser-sync');
var nodemon     = require('gulp-nodemon');

gulp.task('browserSyncTask', function() {
    browserSync({
            proxy: "localhost:3000"
    });

    gulp.watch("./public/stylesheets/*.css", function() {
        browserSync.reload();
    });
    gulp.watch("./public/javascripts/*.js", function() {
        browserSync.reload();
    });
    gulp.watch("./views/*.ejs", function() {
        browserSync.reload();
    });
});

gulp.task('reload', function () {
    browserSync.reload();
});

gulp.task('dev', function() {
    nodemon({ script: './bin/www', ext: 'js ejs json', env: { 'NODE_ENV': 'development' }})
        .on('restart', function () {
            console.log('restarted!');
        });
});

gulp.task('default', ['browserSyncTask']);
