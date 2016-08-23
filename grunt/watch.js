module.exports = function (grunt, options) {
    var man = options.manifest;
    var utils = options.utils.common;
    utils.load( options.manifest );
    return {
        js: {
            files: man.source.scripts,
            tasks: ['concat:source']
        },
        html: {
          files: man.source.html,
          tasks: ['html2js:source']
        },
        css: {
            files: man.modulePath + '/**/*.css',
            tasks: ['concat:sourceCss']
        },
        livereload: {
            options: {
              livereload: true
            },
            files: [
              options.utils.common.getOutputFile('source','.js'),
              options.utils.common.getOutputFile('tpl','.js'),
              options.utils.common.getOutputFile('vendor','.js'),
              options.utils.common.getOutputFile('source','.css')
            ].concat( options.utils.common.getExampleFiles() )
        }
    }
};
