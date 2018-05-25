/**
 * @desc 此文件是将sass转为css文件任务模块
 * @param {String} INPATH
 * @param {String} OUTPATH  
 */
var gulp =require('gulp'),                                          //引入gulp模块
    sass = require('gulp-sass'),                                    //引入sass模块
    pathConfig = require('./pathConfig');                           //引入路径定义文件            
var INPATH = pathConfig.sass.inPath,                                //输入的sass文件路径
    OUTPATH = pathConfig.sass.outPath;                              //输出的css文件路径
    
/**
 * @desc 此任务是将sass文件转为css文件
 * @name sass2css
 */    
gulp.task('sass2css',function(){
    return gulp.src(INPATH)                                         //输入的sass文件路径
            .pipe(sass())                                           //sass转css处理
            .pipe(gulp.dest(OUTPATH));                              //输出的css文件路径
});
