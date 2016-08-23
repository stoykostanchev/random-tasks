module.exports = function(grunt, options) {
  return {
    source: {
      files: [{
        expand: true,
        cwd: options.manifest.modulePath,
        src: 'assets/**',
        dest: options.settings.distFolder + '/'+  options.manifest.moduleName +'/'
      }]
    },
  };
};
