module.exports = function(grunt) {
  'use strict'

  var packager = require('electron-packager');

  grunt.registerTask('buildPackages', 'Builds electron packages', function(buildOption) {
    var buildOptions, done, options;

    buildOptions = grunt.option('buildOptions');
    done = this.async();

    grunt.log.subhead('Building '+ buildOptions.applicationName +' for '+ buildOptions.platform +' platform(s)\n');

    options = {
      dir:  './',
      name: buildOptions.applicationName,
      platform: buildOptions.platform,
      arch: buildOptions.arch,
      version: buildOptions.electronVersion,
      out: buildOptions.buildsDirectory,
      ignore: buildOptions.ignorePackages,
      asar: true,
      'version-string': {
        CompanyName: buildOptions.authors,
        LegalCopyright: "Copyright © " + (new Date().getFullYear()) + " " + buildOptions.authors,
        FileDescription: buildOptions.applicationName,
        ProductVersion: require('../../package.json').version,
        ProductName: buildOptions.applicationName
      }
    };

    packager(options, done);

  });

  grunt.registerTask('build', [ 'clean', 'buildPackages']);
};
