[TOC]

## grunt

### 前端集成解决方案

一套包含框架和工具，便于开发者快速构建美丽适用，稳健强壮的web应用程序的工作流。

### 安装和配置

配置：创建要管理的文件夹，根目录下创建package.json和Gruntfile.js文件

全局安装： npm install -g grunt-cli

开发环境安装：==npm install  --save-dev==

### Gruntfile.js配置

插件的安装（加载）和注册：grunt.loadNpmTasks('grunt-contrib-插件名');

 grunt.registerTask('default', ['uglify', 'watch', 'jshint', 'concat']);

插件的调用：==grunt 插件名 ==       ==执行任务是同步的（顺序有关）==

插件默认使用：==grunt==

```js
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
```



## gulp

### 特点：

gulp会有自己的内存空间，先从本地读取数据到gulp空间，完成一系列编译后在进行输出。==异步执行（return）。==

==为避免异步执行出现文件先后问题==(中间第二个参数)

```js
gulp.task('js',['less'],function(){
	return gulp.src()
        .pipe()
    	pipe(gulp.dest())
})
```



### 安装和配置

配置：创建要管理的文件夹，根目录下创建package.json和gulpfile.js文件

全局安装： npm install -g gulp

开发环境安装：==npm install  --save-dev==

### gulpfile.js配置

```js
var gulp = require('gulp');
var $=require('gulp-load-plugins')();//插件引入函数调用
//var concat = require("gulp-concat");
//var uglify = require("gulp-uglify");
//var rename = require("gulp-rename");
var open=require('open');

gulp.task("js", function () {
  return gulp.src("src/js/*.js")//输入路径
    .pipe($.concat("build.js"))//合并js
    .pipe($.uglify())//压缩js
    .pipe($.rename("build.min.js"))//重命名
    .pipe(gulp.dest("dist/js/"))//输出路径
})

//注册默认任务
 gulp.task('default',['js']);

//打包插件
//gulp-load-plugins

```



## webpack

### 了解

模块打包器：（builder）万物皆模块，除了html。==入口（entry）,输出（output），loader，插件（plugins）==

文件类型为：==js和json格式。==

### 安装和打包

```js
 npm install webpack -g         
 npm install webpack-cli -g
//webpack -version 查看版本

//创建项目目录

//初始化项目
npm init //生成package.json文件

//安装依赖包,生成module
 npm i  webpack -D  
 npm i webpack-cli -D

//新建源码目录src src目录里面建一个index.js的文件

//打包  命令webpack
webpack --mode=development
webpack --mode=production
```

