module.exports = function(grunt, options) {
  var man = options.manifest;
  var karma = {
    unit : {
      singleRun : false,
      plugins   : [
        'karma-jasmine',
        'karma-spec-reporter',
        'karma-phantomjs-launcher'
      ],
      browsers  : ['PhantomJS'],
      frameworks: ['jasmine'],
      reporters : ['spec'],
      logLevel  : 'ERROR',
      files     : {
        src : [
          man.vendor.scripts,
          man.vendor.testScripts,
          man.source.scripts,
          man.source.testScripts
        ]
      }
    }
  };
  return karma;
};
