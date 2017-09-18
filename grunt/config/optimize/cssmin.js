/**
 * Configuration for cssmin task(s)
 */

const taskConfig = (grunt) => {
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
