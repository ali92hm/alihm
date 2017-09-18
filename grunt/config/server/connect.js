/**
 * Configuration for connect task(s)
 */

const taskConfig = (grunt) => {
  grunt.config.set('connect', {
    options: {
      port: 9000,
      livereload: 35729,
      hostname: 'localhost'
    },
    server: {
      options: {
        open: 'http://localhost:9000/',
        base: '<%= yeogurt.client %>/.serve'
      }
    },
    dist: {
      options: {
        open: 'http://localhost:9000/',
        base: '<%= yeogurt.dist %>',
        livereload: false
      }
    }
  })
}

module.exports = taskConfig
