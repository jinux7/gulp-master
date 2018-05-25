/**
 * @desc 此文件为页面刷新任务
 * 
 */

var gulp =require('gulp'),                                      //引入gulp模块
    connect = require('gulp-connect'),                          //引入服务器功能模块  
    pathConfig = require('./pathConfig');                       //引入路径定义文件
var INPATH = pathConfig.pageReload;                             //输入路径

/**
 * @desc 此任务用于浏览器刷新
 * @name pageReload  
 */
gulp.task('pageReload',function(){
    return gulp.src(INPATH)
            .pipe(connect.reload());                            //重启浏览器  
                                        
});