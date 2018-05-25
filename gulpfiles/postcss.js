/**
 * @desc 此任务是用postCss来处理css的文件
 * @param {string} INPATH
 * @param {string} OUTPATH
 * @param {string} BASE
 * @param {string} FILENAME
 */
var gulp = require('gulp'),                                         //引入gulp模块
    concat = require('gulp-concat'),                                //引入合并模块
    base64 = require('gulp-base64'),                                //引入图片转base64模块 
    postcss = require('gulp-postcss'),                              //引入postcss模块
    autoprefixer = require('autoprefixer'),                         //引入autoprefixer
    cssnano = require('cssnano'),
    pathConfig = require('./pathConfig');                           //引入路径定义文件    
var INPATH = pathConfig.postCss.inPath,
    OUTPATH = pathConfig.postCss.outPath,
    BASE = pathConfig.postCss.base,
    FILENAME = pathConfig.postCss.fileName;     

/**
 * @desc 此任务专门对css文件进行处理
 * @name postCss
 */
gulp.task('postCss',function(){
    var plugins = [
            autoprefixer({browsers: [`cover 99.5%`]}),
            //cssnano()
        ];
    return gulp.src(INPATH, {base: BASE})                       //没有concat合并的时候起作用
        .pipe(concat(FILENAME))                                 //把多个JS文件合并成一个文件
        .pipe(postcss(plugins))                                 //对合并后的app.js文件进行压缩
        .pipe(gulp.dest(OUTPATH));                              //输出到目的地
});