module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-karma');
  grunt.initConfig({
    karma: {
      unit: {
        plugins: [
          'karma-jasmine',
          'karma-spec-reporter',
          'karma-phantomjs-launcher'
        ],
        browsers: ['PhantomJS'],
        frameworks: ['jasmine'],
        reporters: ['spec'],
        logLevel: 'ERROR',
        autoWatch: true,
        files : {
          src: ['test/**/*.spec.js']
        }
      }
    }
  });

  grunt.registerTask('default', ['karma:unit']);
};
