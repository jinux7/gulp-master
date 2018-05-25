/**
 * @desc 此文件是复制并压缩图片任务模块
 * @param {String} INPATH 
 * @param {String} BASE 
 * @param {String} OUTPATH 
 * @param {Number} PNGLEVEL 
 * @param {Boolean} BGIF 
 * @param {Boolean} BJPG 
 */
var gulp = require('gulp'),                                     //引入gulp模块
    imagemin = require('gulp-imagemin'),                        //引入压缩图片模块
    pathConfig = require('./pathConfig');                       //引入路径定义文件    
require('require-dir')('../gulpfiles');                         //引入gulpfiles中的任务  
var INPATH = pathConfig.copyImages.inPath,                      //图片引入路径
    BASE = pathConfig.copyImages.base,                          //引入地址的跟路径
    OUTPATH = pathConfig.copyImages.outPath,                    //图片输出路径
    PNGLEVEL = 6,                                               //png图片的优化等级，0-7，数字越大，优化的越高
    BGIF = true,                                                //是否对gif格式图片进行优化
    BJPG = true;                                                //是否对jpeg格式图片进行优化

/**
 * @desc 此任务是对图片进行优化压缩，压缩前依赖clean任务，删除文件 
 * @name copyImages
 */
gulp.task('copyImages', function () {
    return gulp.src(INPATH,{base: BASE})                        //图片的输入路径
         .pipe(imagemin([
            imagemin.gifsicle({interlaced: BGIF}),              //是否对gif格式图片进行优化
            imagemin.jpegtran({progressive: BJPG}),             //是否对jpeg格式图片进行优化
            imagemin.optipng({optimizationLevel: PNGLEVEL}),    //png图片的优化等级，0-7，数字越大，优化的越高
         ]))                                                        
         .pipe(gulp.dest(OUTPATH));                             //图片输出路径
});