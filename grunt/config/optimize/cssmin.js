/**
 * Configuration for cssmin task(s)
 */
'use strict'

var taskConfig = function (grunt) {
  grunt.config.set('cssmin', {
    target: {
      files: [{
        expand: true,
        cwd: 'release/css',
        src: ['*.css', '!*.min.css'],
        dest: 'release/css',
        ext: '.min.css'
      }]
    },
    options: {
      sourceMap: true
    }
  })
}

module.exports = taskConfig
