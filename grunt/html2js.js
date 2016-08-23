var utils = require('./task-utils');

module.exports = function (grunt, options) {
    var sourceFiles = options.manifest.source.html;
    //var hbsSourceFiles = options.manifest.source.hbs;
    var htmlmin = {
        collapseBooleanAttributes: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true,
        removeComments: true,
        removeEmptyAttributes: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true
    };

    return {
        options: {
            base: 'src/tpl',
            module: options.manifest.moduleName,
            singleModule: true,
            existingModule:true,
            rename: renameTemplates
        },
        source: {
            src: sourceFiles,//.concat(hbsSourceFiles),
            dest: utils.getOutputFile('tpl','.js',options.manifest),
            options: {
                htmlmin: htmlmin
            }
        }
    };

    function renameTemplates(name) {
        name = name.split('/');
        return options.manifest.moduleName + '/' + name[name.length - 1];
    }
};
