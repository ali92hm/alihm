/**
 * Configuration for HTMLmin task(s)
 */

const taskConfig = (grunt) => {
  grunt.config.set('htmlmin', {
    dist: {
      options: {
        removeEmptyAttributes: true
      },
      files: [{
        expand: true,
        cwd: '<%= yeogurt.dist %>',
        src: [
          '*.html', 'views/**/*.html'
        ],
        dest: '<%= yeogurt.dist %>'
      }]
    }
  })
}

module.exports = taskConfig
