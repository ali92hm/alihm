/**
 * Builds out an optimised site through minification of CSS and HTML, as well as  uglification and optimisation of Javascript.
 */
'use strict';

var taskConfig = function(grunt) {
    grunt.registerTask('test', 'Perform tests on JavaScript', function(target) {

        grunt.task.run([
            'jshint:test',
            'build'
        ]);
    });
};

module.exports = taskConfig;
