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
    var all_commands = '';
    this.files.forEach(function(f) {
      var source = f.orig.dest;
      var target = f.orig.src;
      var command = [ options.bin, 'copy', source, target].join(' ');
      if (all_commands != '') {
        all_commands = [all_commands, command].join(' && ');
      } else {
        all_commands = command;
      }
    });
    
    // build a task object, we do this so it's quicker to run and grunt will wait for us.
    exec(all_commands, options.execOpts, function (error, stdout) {
      grunt.log.write(stdout);
      if (error !== null) {
        grunt.log.error('\n#' + all_commands + "\n" + error);
      }
      done(true);
    });


  });

};
