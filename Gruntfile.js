module.exports = function(grunt) {
  var manifesto = require('./manifest');
  var utils     = require('./grunt/task-utils');

  require('load-grunt-config')(grunt, {
    configPath : __dirname + '/grunt',
    init : true,
    data : {
      manifest : manifesto,
      utils: {
        common : utils
      },
      settings : {
        distFolder : 'dist'
      }
    },
    jitGrunt : true,
    loadGruntTasks : {
      pattern : ['grunt-*', '@*/grunt-*'],
      config  : require('./package.json'),
      scope   : 'devDependencies'
    }
  });
};
