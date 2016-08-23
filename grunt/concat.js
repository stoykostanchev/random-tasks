module.exports = function (grunt, options) {
  var getOutputFile = require('./task-utils').getOutputFile;
  var output =  {
    options: {
        sourceMap: false,
        separator: ';\n'
    },
    vendor : { files : {} },
    source : { files : {} },
    sourceCss : { files : {} },
    bundle : { files : {} }
  }
  var man = options.manifest;
  var outputDirs = {
    sourceJs : getOutputFile('source', '.js' , man),
    vendorJs : getOutputFile('vendor', '.js' , man),
    bundleJs : getOutputFile('bundle', '.js' , man),
    sourceCss: getOutputFile('source', '.css', man),
    vendorCss: getOutputFile('vendor', '.css', man),
    bundleCss: getOutputFile('bundle', '.css', man)
  }
  var jsBundleFiles = [
    outputDirs.vendorJs,
    outputDirs.sourceJs,
    getOutputFile('tpl', '.js', man)
  ]
  output.source.files[ outputDirs.sourceJs ] = man.source.scripts || [];

  output.sourceCss.files[outputDirs.sourceCss] = man.source.styles  || [];

  output.vendor.files[outputDirs.vendorJs ] = man.vendor.scripts || [];
  output.vendor.files[outputDirs.vendorCss] = man.vendor.styles  || [];

  output.bundle.files[outputDirs.bundleJs ] = jsBundleFiles;
  output.bundle.files[outputDirs.bundleCss] = [ outputDirs.vendorCss, outputDirs.sourceCss ];

  return output;
};
