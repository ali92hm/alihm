/**
 * Configuration for cssmin task(s)
 */
'use strict';

var taskConfig = function(grunt) {

    grunt.config.set('cssmin', {
        options: {
            sourceMap: true
        },
        target: {
    	files: [{
      		expand: true,
      		cwd: '<%= yeogurt.client %>/styles',
      		src: ['*.css', '!*.min.css'],
      		dest: '<%= yeogurt.dist %>/styles',
      		ext: '.min.css'
    		}]
  		}
    });

};

module.exports = taskConfig;