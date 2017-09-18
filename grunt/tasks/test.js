/**
 * Builds out an optimised site through minification of CSS and HTML, as well as  uglification and optimisation of Javascript.
 */

var taskConfig = (grunt) => {
  grunt.registerTask('test', 'Perform tests on JavaScript', (target) => {
    grunt.task.run([
      'build'
    ])
  })
}

module.exports = taskConfig
