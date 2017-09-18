/**
 * Defaults to building a production ready version of your site.
 */

const taskConfig = (grunt) => {
  grunt.registerTask('default', 'Defaults to building a production ready version of your site.', [
    'test',
    'build'
  ])
}

module.exports = taskConfig
