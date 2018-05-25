/**
 * @desc 此文件是server服务任务模块
 * @param {String} ROOTPATH
 * @param {Number} PORT
 * @param {Boolean} LIVERELOAD
 */
var gulp =require('gulp'),                                  //引入gulp模块
    connect = require('gulp-connect'),                      //引入connect服务器模块
    pathConfig = require('./pathConfig');                   //引入路径定义文件    
var ROOTPATH_PRO = pathConfig.server.rootPathPro,           //生产调试服务根路径
    ROOTPATH_DEV = pathConfig.server.rootPathDev,           //开发调试服务根路径
    PORT = pathConfig.server.port,                          //服务的端口号
    LIVERELOAD = true;                 

/**
 * @desc 此任务是在打包后的路径下开启服务
 * @name "serverPro" 
 */
gulp.task('serverPro',function(){
    connect.server({
        root: ROOTPATH_PRO,                                 //生产调试服务根路径
        port: PORT,                                         //服务的端口号
        livereload: LIVERELOAD,                              //启用实时刷新的功能
        debug: true
    });
});

/**
 * @desc 此任务是在源码(src/)的路径下开启服务
 * @name "serverDev" 
 */
gulp.task('serverDev',function(){
    connect.server({
        root: ROOTPATH_DEV,                                 //开发调试服务根路径
        port: PORT,                                         //服务的端口号
        livereload: LIVERELOAD                              //启用实时刷新的功能
    });
});