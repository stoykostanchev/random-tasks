'use strict';
var utils = require('./task-utils');

module.exports = function (grunt, options) {
  var man = options.manifest;
  var task = {
    // copy pasted from github example, not sure if we need them
    options: {
      shorthandCompacting: false,
      roundingPrecision: -1
    },
    bundle : { files : {} },
  };
  task.bundle.files[ utils.getOutputFile('bundle','.min.css',man)] = [ utils.getOutputFile( 'bundle', '.css', man ) ];

  return task;
};


