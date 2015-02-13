var scriptsList = {
	'app/build/scripts/combined.min.js': [
		'app/src/assets/scripts/main.js'
	]
};

module.exports = function(grunt) {

	grunt.initConfig({

		jshint: {

			files: 'app/src/assets/scripts/*.js',

			options: {
				globals: {
					jQuery: true,
					console: true,
					module: true,
					angular: true
				}
			}
		},

		uglify: {

			development : {
				options: {
					beautify: true,
					compress: false
				},
				//files: scriptsList
			},

			release : {
				//files: scriptsList
			}
		},

		sass: {

			development: {
				options: {
				},
				files: {
					'app/build/styles/app.css': 'app/src/assets/styles/app.scss',
				}
			},

			release: {
				options: {
					style: 'compressed'
				},
				files: {
					'app/build/styles/app.css': 'app/src/assets/styles/app.scss',
				}
			}
		},

		autoprefixer: {

			build: {
				expand: true,
				flatten: true,
				src: 'app/build/styles/**/*.css',
				dest: 'app/build/styles/'
			}
		},

		copy: {

			markup: {
				files: [{
					expand: true,
					cwd: 'app/src/',
					src: ['**/*.html'],
					dest: 'app/build/'
				}]
			},

			scripts: {
				files: [{
					expand: true,
					cwd: 'app/src/assets/scripts',
					src: ['**/*.{js,json}'],
					dest: 'app/build/scripts/'
				}]
			},

			images: {
				files: [{
					expand: true,
					cwd: 'app/src/assets/images',
					src: ['**/*.{png,jpg,gif,svg}'],
					dest: 'app/build/images/'
				}]
			},

			media: {
				files: [{
					expand: true,
					cwd: 'app/src/assets/media',
					src: ['**/*.{png,jpg,gif,svg}'],
					dest: 'app/build/media/'
				}]
			},

			fonts: {
				files: [
					{
						expand: true,
						cwd: 'app/src/assets/fonts',
						src: ['**/*.{eot,svg,ttf,woff}'],
						dest: 'app/build/fonts/'
					}
				]
			},

			videos: {
				files: [{
					expand: true,
					cwd: 'app/src/assets/video',
					src: ['**/*'],
					dest: 'app/build/video/'
				}]
			},

			pdf: {
				files: [{
					expand: true,
					cwd: 'app/src/assets',
					src: ['**/*.pdf'],
					dest: 'app/build/'
				}]
			}
		},

		clean: {

			build: {
				src: ['app/build/']
			}
		},

		connect: {

			server: {
				options: {
					base: 'app/build/',
					hostname: '*',
					keepalive: false,
					livereload: true,
					open: {
						target: 'http://localhost:8001'
					},
					port: 8001,
					middleware: function(connect, options, middlewares) {

						middlewares.unshift(function (req, res, next) {

							var fs = require('fs');
							var path = require('path');
							var support = ['POST', 'PUT', 'DELETE'];

							if (support.indexOf(req.method.toUpperCase()) != -1) {
								var filepath = path.join(options.base[0], req.url);
								if (fs.existsSync(filepath) && fs.statSync(filepath).isFile()) {
									return res.end(fs.readFileSync(filepath));
								}
							}

							return next();
						});

						return middlewares;
					}
				}
			}
		},

		watch: {

			// Watch for markup changes
			markup: {
				files: 'app/src/views/*.html',
				tasks: ['copy:markup'],
				options: {
					livereload: false,
					interrupt: true
				}
			},

			// Run SASS compliler when precompiled files are changed
			styles: {
				files: 'app/src/assets/styles/**/*.scss',
				tasks: ['sass:development'],
				options: {
					livereload: false,
					spawn: false
				}
			},

			images: {
				files: ['app/src/assets/images/**/*.{png,jpg,gif}'],
				tasks: ['copy:images'],
				options: {
					livereload: false,
					interrupt: true
				}
			},

			media: {
				files: ['app/src/assets/media/**/*.{png,jpg,gif}'],
				tasks: ['copy:media'],
				options: {
					livereload: false,
					interrupt: true
				}
			},

			videos: {
				files: ['app/src/assets/video/**/*.{mp4,ogv,webm}'],
				tasks: ['copy:videos'],
				options: {
					livereload: false,
					interrupt: true
				}
			},

			scripts: {
				files: ['app/src/assets/scripts/**/*.js', 'app/src/assets/scripts/**/*.json'],
				tasks: ['uglify:development', 'copy:scripts'],
				options: {
					livereload: false,
					interrupt: true
				}
			},

		},

	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.loadNpmTasks('grunt-html-validation');

	// Register task(s) to run when 'grunt' command is executed
	grunt.registerTask('default', ['development']);

	// Register task(s) to run when 'grunt development' command is executed
	grunt.registerTask('development', [
		'jshint',
		'clean',
		'sass:development',
		'autoprefixer',
		'copy',
		'uglify:development',
		'connect',
		'watch'
	]);

	// Register task(s) to run when 'grunt release' command is executed
	grunt.registerTask('release', [
		'clean',
		'sass:release',
		'autoprefixer',
		'copy',
		'uglify:release',
	]);

};
