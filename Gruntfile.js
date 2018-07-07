module.exports = function(grunt) {

  grunt.initConfig({
    sass: {
      options: {
        outputStyle: 'expanded',
        sourceMap: true
      },
      dist: {
        files: [{
          expand: true,
          cwd: 'sass/',
          src: '**/*.scss',
          dest: 'css/',
          ext: '.css'
       }]
      }
    },
    cssmin: {
      options: {
        mergeIntoShorthands: false,
        roundingPrecision: -1
      },
      target: {
        files: {
          'css/style.min.css': ['css/style.css']
        }
      }
    },
    uglify: {
      options: {
        mangle: false
      },
      my_target: {
        files: {
          'js/script.min.js': ['js/script.js']
        }
      }
    },
    imagemin: {
      png: {
        options: {
          optimizationLevel: 3
        },
        files: [
          {
            expand: true,
            cwd: 'img/base/',
            src: ['**/*.png'],
            dest: 'img/portfolio/',
            ext: '.png'
          }
        ]
      },
      jpg: {
        options: {
          progressive: true
        },
        files: [
          {
            expand: true,
            cwd: 'img/base/',
            src: ['**/*.jpg'],
            dest: 'img/portfolio/',
            ext: '.jpg'
          }
        ]
      }
    },
    responsive_images: {
      dev: {
        options: {
          engine: 'gm',
          sizes: [
            { name: 'sm', suffix: '_1x', quality: 90, width: 400 },
            { name: 'lg', suffix: '_2x', quality: 90, width: 800 }
          ]
        },
        files: [
          {
            expand: true,
            src: ['**/*.{jpg,png}'],
            cwd: 'img/base/',
            dest: 'img/portfolio/'
          }
        ]
      }
    },

    watch: {
      sass: {
        files: ['sass/**/*.scss'],
        tasks: ['sass']
      },
      js: {
        files: ['js/script.js'],
        tasks: ['uglify']
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-responsive-images')
  grunt.loadNpmTasks('grunt-contrib-watch');   

  grunt.registerTask('default', ['sass', 'cssmin', 'uglify', 'imagemin', 'responsive_images','watch']);

};
