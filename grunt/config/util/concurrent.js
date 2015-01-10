/**
 * Configuration for concurrent task(s)
 */
'use strict';

var taskConfig = function(grunt) {

    grunt.config.set('concurrent', {
        compile: [
            'imagemin:dist',
            'svgmin:dist',
            'sass:dist',
        ]
    });

};

module.exports = taskConfig;
