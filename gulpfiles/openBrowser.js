/**
 * @desc 此文件是打开浏览器任务模块
 * @param {String} URL
 */
var gulp = require('gulp'),                                     //引入gulp模块
    opn = require('opn');                                       //引入打开浏览器模块
    pathConfig = require('./pathConfig');                       //引入路径定义文件 
var URL = pathConfig.openBrowser;

/**
 * @desc 此任务打开浏览器
 * @name "openBrowser"
 */
gulp.task('openBrowser', function(){
    opn(URL);
});