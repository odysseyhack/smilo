var webpackConfig = require('./webpack.test.js');
process.env.CHROME_BIN = require('puppeteer').executablePath();

module.exports = function(config) {
  var _config = {
    basePath: '../',

    frameworks: ['jasmine'],

    captureTimeout: 60000,
    browserDisconnectTolerance: 3,
    browserDisconnectTimeout : 2000,
    browserNoActivityTimeout : 10000,

    files: [
      {
        pattern: './karma/karma-test-shim.js',
        watched: true
      },
      {
        pattern: './src/assets/imgs/**',
        watched: false,
        included: false,
        served: true,
        nocache: false
      }
    ],

    proxies: {
      '/assets/': '/base/src/assets/'
    },

    preprocessors: {
      './karma/karma-test-shim.js': ['webpack', 'sourcemap']
    },

    webpack: webpackConfig,

    webpackMiddleware: {
      stats: 'errors-only'
    },

    webpackServer: {
      noInfo: true
    },

    browserConsoleLogOptions: {
      level: 'log',
      format: '%b %T: %m',
      terminal: true
    },

    coverageIstanbulReporter: {
      reports: [ 'html', 'lcovonly' ],
      fixWebpackSourcePaths: true
    },

    reporters: config.coverage ? ['kjhtml', 'spec', 'coverage-istanbul'] : ['kjhtml', 'spec'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['HeadlessChrome'],

    customLaunchers: {
      HeadlessChrome: {
        base: 'ChromeHeadless',
        flags: [
          '--disable-web-security',
          '--disable-gpu',
          '--no-sandbox',
          "--max_old_space_size=4096"
       ]
      }
    },

    singleRun: false
  };

  config.set(_config);
};
