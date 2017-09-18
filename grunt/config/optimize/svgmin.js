/**
 * Configuration for SVGmin task(s)
 */

const taskConfig = (grunt) => {
  grunt.config.set('svgmin', {
    dist: {
      files: [{
        expand: true,
        cwd: '<%= yeogurt.client %>/images',
        src: '**/*.svg',
        dest: '<%= yeogurt.dist %>/images'
      }]
    }
  })
}

module.exports = taskConfig
