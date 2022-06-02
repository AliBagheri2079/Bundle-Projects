module.exports = function (grunt) {
    grunt.initConfig({

        concat: {
            options: {
                separator: '\n/*next file*/\n\n' //this will be put between conc. files
            },
            dist: {
                src: ['assets/js/*.js'],
                dest: 'build/js/scripts.js'
            }
        },
        sass: {
            dev: { // indicates that it will be used only during development
                files: {
                    // destination     // source file
                    'build/css/main.css': 'assets/scss/bootstrap.scss'
                }
            }
        },
        cssmin: {
            build: {
                src: 'build/css/main.css',
                dest: 'build/css/main.min.css'
            }
        },
        watch: {
            sass: {
                files: '**/*.scss', // ** any directory; * any file
                tasks: ['css']
            },
            concat: {
                files: '**/*.js',
                tasks: ['concat']
            },
            uglify: {
                files: 'build/js/*.js',
                tasks: ['uglify']
            }
        }

    });

    // Load the plugin that provides the "concat" task.
    grunt.loadNpmTasks('grunt-contrib-concat');
    // Load the plugin that provides the "sass" task.
    grunt.loadNpmTasks('grunt-contrib-sass');
    // Load the plugin that provides the "cssmin" task.
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    // Load the plugin that provides the "watch" task.
    grunt.loadNpmTasks('grunt-contrib-watch');
    
    grunt.registerTask('default', ['concat', 'sass', 'cssmin']);
};
