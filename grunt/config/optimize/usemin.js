/**
 * Configuration for usemin task(s)
 */

const taskConfig = (grunt) => {
  grunt.config.set('useminPrepare', {
    html: '<%= yeogurt.dist %>/index.html',
    options: {
      root: '<%= yeogurt.client %>',
      dest: '<%= yeogurt.dist %>'
    }
  })

  grunt.config.set('usemin', {
    html: '<%= yeogurt.dist %>/*.html',
    options: {
      assetsDirs: ['<%= yeogurt.client %>', '<%= yeogurt.client %>/images']
    }
  })
}

module.exports = taskConfig
