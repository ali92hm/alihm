'use strict';

var request = require('request');

module.exports = function (grunt) {
  require('load-grunt-tasks')(grunt);

  var reloadPort = 35729,
    files;

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    develop: {
      server: {
        file: 'index.js'
      }
    },
    watch: {
      options: {
        nospawn: true,
      },
      sass: {
        files: ['assets/styles/**/*.sass', 'assets/styles/**/*.scss'],
        tasks: ['sass'],
        options: {
          livereload: reloadPort
        }
      },
      js: {
        files: [
          'index.js'
        ],
        tasks: ['develop', 'delayed-livereload']
      },
      client: {
        files: [
          'assets/js/**/*.js'
        ],
        tasks: ['copy:js'],
        options: {
          livereload: reloadPort
        }
      },
      html: {
        files: [
          'assets/**/*.html'
        ],
        tasks: ['copy:html'],
        options: {
          livereload: reloadPort
        }
      },
      images: {
        files: [
          'assets/images/**'
        ],
        tasks: ['copy:images'],
        options: {
          livereload: reloadPort
        }
      },
      css: {
        files: [
          'assets/styles/**/*.css'
        ],
        tasks: ['copy:css'],
        options: {
          livereload: reloadPort
        }
      }
    },
    // Hint Config
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      all: [
        'Gruntfile.js',
        'index.js',
        'assets/js/**/*.js'   
      ]
    },
    // uglify javascript
    uglify: {
      my_target: {
        files: [{
          expand: true,
          cwd: 'assets/js',
          src: '**/*.js',
          dest: 'public/js'
        }]
      }
    },
    // Sass Config
    sass: {
      dist: {
        files: [{
          expand: true,
          cwd: 'assets/styles',
          src: ['**/*.sass', '**/*.scss'],
          dest: 'public/styles',
          ext: '.css'
        }],
        options: {
          noCache: true,
        }
      }
    },
    // Imagemin Config
    imagemin: {
      dist: {
        files: [{
          expand: true,
          cwd: 'assets/images',
          src: '**/*.{png,jpg,jpeg}',
          dest: 'public/images'
        }]
      }
    },
    // SVGmin Config
    svgmin: {
      dist: {
        files: [{
          expand: true,
          cwd: 'assets/images',
          src: '{,*/}*.svg',
          dest: 'public/images'
        }]
      }
    },
    // Minifies css
    cssmin: {
      minify: {
        expand: true,
        cwd: 'public/styles/',
        src: ['**/*.css'],
        dest: 'public/styles/',
        ext: '.css'
      }
    },
    // Copy 
    copy: {
      main: {
        expand: true,
        cwd: 'assets/',
        src: ['js/**','images/**', 'styles/**/*.css' ,'**/*.html'],
        dest: 'public/',
      },
      html: {
        expand: true,
        cwd: 'assets',
        src: '**/*.html',
        dest: 'public',
      },
      css: {
        expand: true,
        cwd: 'assets/styles',
        src: '**/*.css',
        dest: 'public/styles',
      },
      js: {
        expand: true,
        cwd: 'assets/js',
        src: '**',
        dest: 'public/js',
      },
      images: {
        expand: true,
        cwd: 'assets/images',
        src: '**',
        dest: 'public/images',
      },
      ico: {
        expand: true,
        cwd: 'assets/images/',
        src: '**/*.ico',
        dest: 'public/images'
      },
      ie: {
        expand: true,
        cwd: 'assets/styles/ie',
        src: '**/*.htc',
        dest: 'public/styles/ie'
      }
    },
    // Open Config
    open: {
      delayed: {
        path: 'http://localhost:3000',
        app: 'Google Chrome',
        options: {
          delay: 100
        }
      }
    },
    htmlmin: {                                    
      dist: {                                      
        options: {                                 
          removeComments: true,
          collapseWhitespace: true
        },
        files: [{
                expand: true,
                cwd: 'assets',
                src: '**/*.html',
                dest: 'public'
            }]
      }
    },
    // Cleans directories
    clean: {
      src: ['public/*']
    }
  });

  grunt.config.requires('watch.js.files');
  files = grunt.config('watch.js.files');
  files = grunt.file.expand(files);

  // Live reload
  grunt.registerTask('delayed-livereload', 'Live reload after the node server has restarted.', function () {
    var done = this.async();
    setTimeout(function () {
      request.get('http://localhost:' + reloadPort + '/changed?files=' + files.join(','), function (err, res) {
        var reloaded = !err && res.statusCode === 200;
        if (reloaded)
          grunt.log.ok('Delayed live reload successful.');
        else
          grunt.log.error('Unable to make a delayed live reload.');
        done(reloaded);
      });
    }, 700);
  });

  grunt.registerTask('serve', ['copy:ico','develop', 'clean' ,'copy:main' ,'sass', 'open:delayed', 'watch']);
  grunt.registerTask('build', ['clean','uglify','sass', 'copy:css','cssmin','svgmin','imagemin', 'htmlmin' ,'copy:ico', 'copy:ie']);
};