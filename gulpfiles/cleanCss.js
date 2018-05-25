/**
 * @desc 此任务合并，压缩，命名css文件
 * @param {string} INPATH
 * @param {string} OUTPATH
 * @param {string} BASE
 * @param {string} FILENAME
 */
var gulp = require('gulp'),                                         //引入gulp模块
    concat = require('gulp-concat'),                                //引入合并模块
    cleancss = require('gulp-clean-css'),                           //引入压缩css模块  
    base64 = require('gulp-base64'),                                //引入图片转base64模块      
    pathConfig = require('./pathConfig');                           //引入路径定义文件    
var INPATH = pathConfig.cleanCss.inPath,
    OUTPATH = pathConfig.cleanCss.outPath,
    BASE = pathConfig.cleanCss.base,
    FILENAME = pathConfig.cleanCss.fileName;
    buildGroup = pathConfig.buildGroup;         

/**
 * @desc 此任务专门对css文件进行合并，压缩
 * @name cleanCss
 */
gulp.task('cleanCss',function(){
    return gulp.src(INPATH, {base: BASE})                       //没有concat合并的时候起作用
        .pipe(base64({maxImageSize: 8*1024}))                   //把css中引入图片转base64为文件
        .pipe(concat(FILENAME))                                 //把多个JS文件合并成一个文件
        .pipe(cleancss())                                       //对合并后的app.js文件进行压缩
        .pipe(gulp.dest(OUTPATH));                              //输出到目的地
});
/**
 * @desc buildGroup配置的css文件进行打包压缩
 * @name cleanCss
 */
gulp.task('cleanCssLib',function(){
    var g = buildGroup;
    return gulp.src(g.lib.css.inPath, {base: g.lib.css.base})                       //没有concat合并的时候起作用
        .pipe(base64({maxImageSize: 8*1024}))                   //把css中引入图片转base64为文件
        .pipe(concat(g.lib.css.fileName))                                 //把多个JS文件合并成一个文件
        .pipe(cleancss())                                       //对合并后的app.js文件进行压缩
        .pipe(gulp.dest(g.lib.css.outPath));                              //输出到目的地
})
gulp.task('cleanCssStatic',function(){
    var g = buildGroup;
    return gulp.src(g.static.css.inPath, {base: g.static.css.base})                       //没有concat合并的时候起作用
        .pipe(base64({maxImageSize: 8*1024}))                   //把css中引入图片转base64为文件
        .pipe(concat(g.static.css.fileName))                                 //把多个JS文件合并成一个文件
        .pipe(cleancss())                                       //对合并后的app.js文件进行压缩
        .pipe(gulp.dest(g.static.css.outPath));                              //输出到目的地
})