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


      

//    var done = this.async();
//    var command = [ options.bin, 'add', options.files].join(' ');
/*
  exec(command, options.execOpts, function (error, stdout) {
      grunt.log.write(stdout);
      if (error !== null) {
        grunt.log.error('\n#' + command + "\n" + error);
      }
      done(true);
    });
*/
/*
    // Iterate over all specified file groups.
    this.files.forEach(function(f) {
      // Concat specified files.
      var src = f.src.filter(function(filepath) {
        // Warn on and remove invalid source files (if nonull was set).
        //if (!grunt.file.exists(filepath)) {
        //  grunt.log.warn('Source file "' + filepath + '" not found.');
        // / return false;
       // } else {
       //   return true;
       // }
      }).map(function(filepath) {
        // Read file source.
     //   var command = [ options.bin, 'add', options.files].join(' ');
     //   return grunt.file.read(filepath);
        return grunt.file.read(filepath);
      }).join(grunt.util.normalizelf(options.separator));

      // Handle options.
//      src += options.punctuation;

      // Write the destination file.
//      grunt.file.write(f.dest, src);

      // Print a success message.
      grunt.log.writeln('File "' + f.dest + '" created.');
    });
*/
  });

};
