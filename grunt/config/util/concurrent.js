/**
 * Configuration for concurrent task(s)
 */

const taskConfig = (grunt) => {
  grunt.config.set('concurrent', {
    compile: [
      'imagemin:dist',
      'svgmin:dist'
    ]
  })
}

module.exports = taskConfig
