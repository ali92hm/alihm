/**
 * Configuration for injector task(s)
 */
'use strict';

var _str = require('underscore.string');

var taskConfig = function(grunt) {

    grunt.config.set('injector', {
        options: {

        },
        // Inject application script files into index.html (doesn't include bower)
        scripts: {
            options: {
                transform: function(filePath) {
                    filePath = filePath.replace('/client/', '');
                    return '<script src="' + filePath + '"></script>';
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
        }
    });

};

module.exports = taskConfig;
