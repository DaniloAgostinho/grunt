module.exports = function (grunt) {
	grunt.initConfig({
      //configuração dos plugins
      clean: {
        temp: ['dist/js/scripts.js'],
        all: 'dist/'
      },

      jshint: {
      	dist: {
      		src: ['_assets/js/.js']
      	}
      },

      concat: {
      	dist: {
      		src: ['_assets/js/*.js'],
      		dest: '_assets/js/scripts.js'
      	}
      },

      uglify: {
      	scripts: {
      		src: ['_assets/js/scripts.js'],
      		dest: 'dist/js/scripts.min.js'
      	}
      },

      cssmin: {
      	all: {
      		src: ['_assets/css/*.css'],
      		dest: 'dist/css/style.min.css'
      	}
      },

      htmlmin: {
	      	options: {               
	        removeComments: true,
	        collapseWhitespace: true
      },

      views: {
      		expand: true,
      		cwd: 'views/',
      		src: ['*.html'],
      		dest: 'dist/views'
      	}
      },

      copy: {
        all: {
          src: 'index-prod.html',
          dest: 'dist/index.html'
        },

        libs: {
          src: 'bower_components/**',
          dest: 'dist/lib/'
        }
      },

      imagemin: {
      dynamic: {                         // Another target
            files: [{
              expand: true,                  // Enable dynamic expansion
              cwd: '_assets/img/',                   // Src matches are relative to this path
              src: ['**/*.{png,jpg,gif}'],   // Actual patterns to match
              dest: 'dist/img'                  // Destination path prefix
            }]
          }
        }

	});
    
    //carregamento do plugin
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-imagemin');

    //registro de tarefas
	grunt.registerTask('prod', ['clean:all', 'jshint', 'uglify', 'cssmin', 'htmlmin', 'copy', 'concat', 'imagemin', 'clean:temp']);

};
