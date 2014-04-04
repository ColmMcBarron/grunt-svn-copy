/*
 * grunt-svn-copy
 * https://github.com/colmmcbarron/grunt-svn-copy
 *
 * Copyright (c) 2014 Colm McBarron
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('svn_copy', 'SVN copy command in grunt', function() {
    // Merge task-specific and/or target-specific options with these defaults.
    var exec = require('child_process').exec;
    var options = this.options({
      bin: 'svn',
      execOpts: {}
    });

    var done = this.async();

    setTimeout(function(){

      this.files.forEach(function(f) {
        var source = f.orig.dest;
        var target = f.orig.src;
        var command = [ options.bin, 'copy', source, target].join(' ');
        grunt.log.write('SVN copy: ' + source + ' >>> ' + target + '\n');

        exec(command, options.execOpts, function (error, stdout) {
          grunt.log.write(stdout);
          if (error !== null) {
            grunt.log.error('\n#' + command + "\n" + error);
          }
          done(true);
        });
      });
        
    }, 5000);

  });

};
