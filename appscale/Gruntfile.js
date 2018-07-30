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
            // { name: 'sm', suffix: '_1x', quality: 90, width: 500 },
            // { name: 'md', suffix: '_1x', quality: 90, width: 900 }, 
            // { name: 'lg', suffix: '_1x', quality: 90, width: 1600 }

            { name: 'sm', suffix: '_1x', quality: 90, width: 400 }, 
            { name: 'lg', suffix: '_2x', quality: 90, width: 800 }

          ]
        },
        files: [
          {
            expand: true,
            src: ['**/*.{jpg,png}'],
            // cwd: 'img/src/hero/',
            // dest: 'img/dist/'

            cwd: 'img/src/slider/',
            dest: 'img/dist/'
          }
        ]
      }
    },

    watch: {
      files: 'sass/**/*.scss',
      tasks: 'sass'
    }
    
  });

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.loadNpmTasks('grunt-contrib-watch');   

  grunt.registerTask('default', ['sass', 'imagemin', 'responsive_images', 'watch']);

};
