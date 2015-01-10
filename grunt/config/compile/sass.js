/**
 * Configuration for Sass task(s)
 */
'use strict';

var taskConfig = function(grunt) {

    grunt.config.set('sass', {
        server: {
            options: {
                precision: 10,
                outputStyle: 'nested',
            },
            files: [{
                expand: true,
                cwd: '<%= yeogurt.client %>/styles',
                src: ['**/*.sass', '**/*.scss'],
                dest: '<%= yeogurt.staticServer %>/styles',
                ext: '.css'
            }]
        },
        dist: {
            options: {
                precision: 10,
                outputStyle: 'compressed',
            },
            files: [{
                expand: true,
                cwd: '<%= yeogurt.client %>/styles',
                src: ['**/*.sass', '**/*.scss'],
                dest: '<%= yeogurt.dist %>/styles',
                ext: '.css'
            }]
        }
    });

};

module.exports = taskConfig;
