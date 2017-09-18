/**
 * Configuration for clean task(s)
 */

const taskConfig = (grunt) => {
  grunt.config.set('clean', {
    server: ['<%= yeogurt.staticServer %>/'],
    dist: ['<%= yeogurt.dist %>/'],
    temp: [
      '.tmp'
    ]
  })
}

module.exports = taskConfig
