var gulp = require('gulp');
var browserSync = require('browser-sync');

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

gulp.task('bs-reload', function () {
    browserSync.reload();
});

gulp.task('default', ['browserSyncTask']);
