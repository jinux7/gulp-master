/**
 * @desc 此文件是监控文件变化刷新页面任务模块
 * @param {Array} WATCHPATH 
 */
var gulp =require('gulp'),                                      //引入gulp模块
    gulpSequence = require('gulp-sequence');                    //引入任务执行顺序模块
    pathConfig = require('./pathConfig');                       //引入路径定义文件
    require('require-dir')('../gulpfiles');                     //引入gulpfiles中的任务  
var WATCHPATH = pathConfig.autoRefresh;                         //监视的代码路径
/**
 * @desc 此刷新浏览器任务用于生产环境下的server启动，发现所监视的代码变化后，执行build任务
 * @name "autoRefreshPro"
 */
gulp.task('autoRefreshPro',function(){
    gulp.watch(WATCHPATH, ['build']);                           
});

/**
 * @desc 此刷新浏览器任务用于测试环境下的server启动，发现所监视的代码变化后，先执行执行less2css,sass2css任务之后再执行pageReload任务
 * @name "autoRefreshDev"
 */
gulp.task('autoRefreshDev',function(){
    gulp.watch(WATCHPATH, gulpSequence(['less2css','sass2css'],'pageReload'));                                
});