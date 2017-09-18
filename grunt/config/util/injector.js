/**
 * Configuration for injector task(s)
 */

const taskConfig = (grunt) => {
  grunt.config.set('injector', {
    options: {

    },
    // Inject application script files into index.html (doesn't include bower)
    scripts: {
      options: {
        transform: (filePath) => {
          filePath = filePath.replace('/client/', '')
          return '<script src="' + filePath + '"></script>'
        },
        starttag: '<!-- [injector:js] -->',
        endtag: '<!-- [endinjector] -->'
      },
      files: {
        '<%= yeogurt.client %>/index.html': [
          '<%= yeogurt.client %>/scripts/**/*.js',
          '!<%= yeogurt.client %>/scripts/app.js'
        ]
      }
    },
    // Inject component css into index.html
    css: {
      options: {
        transform: (filePath) => {
          filePath = filePath.replace('/client/', '')
          return '<link rel="stylesheet" href="' + filePath + '">'
        },
        starttag: '<!-- [injector:css] -->',
        endtag: '<!-- [endinjector] -->'
      },
      files: {
        '<%= yeogurt.client %>/index.html': [
          '<%= yeogurt.client %>/styles/**/*.css',
          '!<%= yeogurt.client %>/styles/main.css'
        ]
      }
    }
  })
}

module.exports = taskConfig
