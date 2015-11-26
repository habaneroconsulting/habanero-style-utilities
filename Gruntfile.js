'use strict';

module.exports = function (grunt) {
	grunt.loadNpmTasks('grunt-scss-lint');

	grunt.initConfig({
		scsslint: {
			options: {
				config: './node_modules/habanero-code-style/scss/scsslint.yml',
				colorizeOutput: true
			},
			all: {
				src: [
					'reference/**/*.scss'
				]
			}
		}
	});
};
