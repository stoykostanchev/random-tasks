module.exports = function(grunt, options) {
  var task = {
    source : {
      options: {
        /*Uses grunt-contrib-connect under the hood*/
        livereload: true,
        open : {
          target : 'http://localhost:8000/' + options.manifest.modulePath + '/example'
        }
      }
    }
  };

  return task;
}
