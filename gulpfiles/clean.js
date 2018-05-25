/**
 * @desc 此文件是清除build文件夹任务模块
 * @param {String} DELPATH
 * @param {String} DELPATHSCRIPT
 * @param {String} DELPATHCSS
 */
var gulp =require('gulp'),                                  //引入gulp模块
    clean = require('gulp-clean'),                          //引入清除模块   
    pathConfig = require('./pathConfig');                   //引入路径定义文件
var DELPATH = pathConfig.clean.delPath,                     //clean任务清除路径
    DELPATHSCRIPT = pathConfig.clean.delPathScript,         //cleanScript任务清除路径
    DELPATHCSS = pathConfig.clean.delPathCss;               //cleanCss任务清除路径
/**
 * @desc 清除文件任务
 * @name "clean"
 */
gulp.task('clean', function () {
    return gulp.src(DELPATH)
        .pipe(clean());                 
});

/**
 * @desc 清除文件任务
 * @name "cleanScript"
 */
gulp.task('cleanScript', function () {
    return gulp.src(DELPATHSCRIPT)
        .pipe(clean());                 
});

/**
 * @desc 清除文件任务
 * @name "cleanCss"
 */
gulp.task('cleanCss', function () {
    return gulp.src(DELPATHCSS)
        .pipe(clean());              
});