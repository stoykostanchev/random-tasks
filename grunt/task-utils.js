module.exports = {
  getExampleFiles : getExampleFiles,
  getOutputFile : getOutputFile,
  load : load,
  man : null
}

function getOutputFile( target, extension, man ) {
  man = man || module.exports.man;
  return './dist/' + man.moduleName +'/'+ target + extension;
}

function getExampleFiles() {
  return '**/example/**';
}

function load( manifest ) {
  module.exports.man = manifest;
}
