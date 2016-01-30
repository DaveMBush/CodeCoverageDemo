var gulp = require('gulp');
var Server = require('karma').Server;

gulp.task('test', function (done) {
    new Server({
        configFile: __dirname + '\\jsTests\\karma.conf.js',
        singleRun: true,
        browserNoActivityTimeout: 60000
    }, function () { done(); }).start();
});