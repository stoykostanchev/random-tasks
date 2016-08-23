var modulePath = 'src/ads/';
var moduleName = 'ads';

module.exports = {
  modulePath : modulePath,
  moduleName : moduleName,
  source : {
    scripts : [
      'src/**/module.*.js',
      'src/**/*.js',
      '!src/**/example/**/*.js',
      '!src/**/*.spec.js'
    ],
    testScripts : [
      'src/**/*.spec.js'
    ],
    styles : [
      modulePath + '**/*.css'
    ],
    html : [
      modulePath + '**/*.html',
      '!src/**/example/**/*.html'
    ]
  },
  vendor : {
    scripts : [
      'bower_components/angular/angular.min.js'
    ],
    testScripts : [
      'bower_components/angular-mocks/angular-mocks.js',
    ]
  }
};
