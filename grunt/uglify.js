var utils = require('./task-utils');

module.exports = function(grunt, options) {
  var man = options.manifest;
  var task = {
    options: {
      mangle: false,
      screwIE8: true
    },
    bundle : { files : {} },
  };
  task.bundle.files[ utils.getOutputFile('bundle','.min.js',man)] = [ utils.getOutputFile( 'bundle', '.js', man ) ];

  return task;
};
