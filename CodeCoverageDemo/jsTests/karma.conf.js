module.exports = function (config) {
    var path = require('path');
    config.set({
        browsers: ['PhantomJS'],
        phantomjsLauncher: {
            cmd: {
                win32: path.join(__dirname, '/phantomjs/phantomjs.exe')
            }
        },
        // this tells Karma to start Jasmine
        frameworks: ['jasmine'],
        files: [
           '../app/**/*.js',
           '../jsTests/app/**/*.js'
        ],

        // coverage reporter generates the coverage 
        reporters: ['progress', 'coverage'],

        preprocessors: {
            '../app/**/*.js': ['coverage']
        },

        // optionally, configure the reporter 
        coverageReporter: {
            type: 'html',
            dir: 'coverage/'
        }
    });
};