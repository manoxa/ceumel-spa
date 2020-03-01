// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

//process.env.CHROME_BIN = require('puppeteer').executablePath();

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      'karma-jasmine',
      'karma-coverage',
      'karma-jasmine-html-reporter',
      'karma-coverage-istanbul-reporter',
      'karma-chrome-launcher',
      '@angular-devkit/build-angular/plugins/karma'
    ],
    client: {
      clearContext: false
    },

    files: [
    ],
    mime: {
      'text/x-typescript': ['ts', 'tsx']
    },
    preprocessors: {

    },

    coverageReporter: {
      reporters: [{
        dir: 'build/reports',
        type: 'lcovonly',
        subdir: 'coverage'
      }]
    },


    coverageIstanbulReporter: {
      reports: ['html', 'lcovonly'],
      dir: 'build/reports/coverage',
      'report-config': { html: { subdir: 'html' } }
    },


    htmlReporter: {
      outputFile: './testreports/report.html',
      pageTitle: 'Relatório de testes Santander',
      subPageTitle: 'spavh',
      groupSuites: true,
      useCompactStyle: true,
      useLegacyStyle: false
    },
    reporters: ['progress', 'kjhtml', 'coverage-istanbul'],
    port: 8205,
    colors: true,
    logLevel: config.LOG_DEBUG,
    autoWatch: false,
    browsers: ['ChromeHeadlessNoSandbox'],
    customLaunchers: {
      ChromeHeadlessNoSandbox: {
        base: 'ChromeHeadless',
        flags: ['--no-sandbox']
      }
    },
    singleRun: true,
    captureTimeout: 400000,
    browserDisconnectTimeout: 400000,
    browserDisconnectTolerance: 3,
    browserNoActivityTimeout: 240000,
    browserSocketTimeout: 120000

  });

};
