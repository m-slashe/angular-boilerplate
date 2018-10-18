/* eslint-disable strict */

module.exports = function (grunt) {
	grunt.loadNpmTasks('grunt-contrib-compress');

	grunt.initConfig({
		zipOutput: 'dist/zip',
		html5: 'dist/html5',
		artifachName: 'top',
		compress: {
			options: {
				mode: 'zip',
				level: 9,
			},
			main: {
				options: {
					archive: '<%= zipOutput %>/<%= artifachName %>.zip',
				},
				files: [
					{ expand: true, cwd: '<%= html5 %>', src: ['**', '!**/*.map'] },
				],
			},
			nolib: {
				options: {
					archive: '<%= zipOutput %>/<%= artifachName %>.nolib.zip',
				},
				files: [
					{
						expand: true,
						cwd: '<%= html5 %>',
						src: ['**', '!**/*.map'],
						filter(dest) {
							return !(/\.lib\./.test(dest)
						|| /fonts\\/.test(dest)
						|| /vendors/.test(dest)
						|| /lib\\/.test(dest));
						},
					},
				],
			},
			sourcemap: {
				options: {
					archive: '<%= zipOutput %>/<%= artifachName %>.sourcemap.zip',
				},
				files: [
					{ expand: true, cwd: '<%= html5 %>', src: ['**/*.map'] },
				],
			},
		},
	});

	grunt.registerTask('default', ['compress']);
};
