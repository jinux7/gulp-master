/**
 * @desc 此文件是将less转为css文件任务模块
 * @param {String} INPATH
 * @param {String} OUTPATH 
 */
var gulp =require('gulp'),                                      //引入gulp模块
    less = require('gulp-less'),                                //引入less模块
    pathConfig = require('./pathConfig');                       //引入路径定义文件        
var INPATH = pathConfig.less.inPath,                            //输入的less文件路径
    OUTPATH = pathConfig.less.outPath;                          //输出的css文件路径

/**
 * @desc 此任务是将less文件转为css文件
 * @name less2css
 */
gulp.task('less2css',function(){
    return gulp.src(INPATH)                                     //输入的less文件路径
            .pipe(less())                                       //less转css处理    
            .pipe(gulp.dest(OUTPATH));                          //输出的css文件路径
});
