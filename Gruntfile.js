'use strict';

module.exports = function (grunt) {
	grunt.loadNpmTasks('grunt-sass-lint');

	grunt.initConfig({
		sasslint: {
			options: {
				configFile: './node_modules/habanero-code-style/scss/sasslint.yml'
			},
			all: {
				src: [
					'reference/**/*.scss'
				]
			}
		}
	});
};
