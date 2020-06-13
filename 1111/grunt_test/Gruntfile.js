module.exports = function (grunt) {

  // 项目配置
  grunt.initConfig({
    //从package.json中读取配置
    pkg: grunt.file.readJSON('package.json'),
    //压缩任务
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'build/build.js',
        dest: 'build/build.min.js'
      }
    },
    //代码提示
    jshint: {
      files: ['src/TestGrunt.js'],
      reportOutput: ''
    },
    //文件监视
    watch: {
      files: ['src/<%= pkg.name %>.js'],
      tasks: ['jshint']
    },
    //文件合并
    concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: 'src/js/*.js',
        dest: 'build/build.js'
      }
    }
  });

  // 加载插件。
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');

  // 默认被执行的任务列表。
  grunt.registerTask('default', ['concat','uglify', 'watch', 'jshint']);

};
