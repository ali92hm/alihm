/**
 * Configuration for watch task(s)
 */

const taskConfig = (grunt) => {
  // Configuration
  const config = {
    configFiles: {
      files: [
        'Gruntfile.js',
        'grunt/**/*.js',
        '*.json'
      ],
      options: {
        reload: true,
        interrupt: true
      },
      tasks: [
        'serve:nowatch'
      ]
    },
    html: {
      files: [
        '<%= yeogurt.client %>/templates/**/*.html'
      ],
      tasks: [
        'newer:copy:server',
        'clean:temp'
      ]
    },
    injectCss: {
      files: [
        '<%= yeogurt.client %>/styles/**/*.css'
      ],
      tasks: [
        'injector:css',
        'autoprefixer:server'
      ]
    },
    injectJs: {
      files: [
        '<%= yeogurt.client %>/scripts/**/*.js',
        '!<%= yeogurt.client %>/scripts/app.js'
      ],
      tasks: ['injector:scripts']
    },
    js: {
      files: [
        '<%= yeogurt.client %>/scripts/**/*.js'
      ],
      tasks: [
        'newer:jshint',
        'newer:copy:server'
      ]
    },
    images: {
      files: ['<%= yeogurt.client %>/images/**/*.{png,jpg,gif}'],
      tasks: ['newer:copy:server']
    },
    root: {
      files: [
        '<%= yeogurt.client %>/*.{ico,png,txt,html}',
        '<%= yeogurt.client %>/images/**/*.webp',
        '<%= yeogurt.client %>/styles/fonts/**/*.*'
      ],
      tasks: ['newer:copy:server']
    },
    livereload: {
      options: {
        livereload: '<%= connect.options.livereload %>'
      },
      files: [
        '<%= yeogurt.staticServer %>/*.{ico,png,txt,html}',
        '<%= yeogurt.staticServer %>/**/*.html',
        '<%= yeogurt.staticServer %>/styles/**/*.{css,ttf,otf,woff,svg,eot}',
        '<%= yeogurt.staticServer %>/scripts/**/*.js',
        '<%= yeogurt.staticServer %>/images/**/*.{png,jpg,jpeg,gif,webp,svg}'
      ]
    }
  }

  grunt.config.set('watch', config)
}

module.exports = taskConfig
