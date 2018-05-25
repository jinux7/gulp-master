/**
 * @desc 此文件是压缩html格式文件任务模块
 * @param {String} INPATH
 * @param {String} OUTPATH
 * @param {Boolean} COLLAPSEWHITESPACE
 * @param {Boolean} MINIFYCSS
 * @param {Boolean} MINIFYJS
 */
var gulp =require('gulp'),                                              //引入gulp模块
    htmlmin = require('gulp-htmlmin'),                                  //引入压缩html文件模块
    rename = require("gulp-rename"),                                    //引入文件改名模块
    cheerio = require('gulp-cheerio'),                                  //引入cheerio模块
    pathConfig = require('./pathConfig');                               //引入路径定义文件    
    require('require-dir')('../gulpfiles');                             //引入gulpfiles中的任务  
var INPATH = pathConfig.htmlMin.inPath,                                 //输入路径
    OUTPATH = pathConfig.htmlMin.outPath,                               //输出路径
    TepINPATH = pathConfig.htmlMinTep.inPath,                                 //输入路径
    TepOUTPATH = pathConfig.htmlMinTep.outPath,                               //输出路径
    COLLAPSEWHITESPACE = true,                                          //去除空格压缩
    MINIFYCSS = true,                                                   //对html页面里的style样式压缩  
    MINIFYJS = true;                                                    //对html页面里的js压缩
    buildGroup = pathConfig.buildGroup;    

/**
 * @desc 此任务对.html格式的文件进行压缩处理
 * @name htmlMin
 */
gulp.task('htmlMin', function(){
    return gulp.src(INPATH)                                             //输入的.html文件路径
        .pipe(htmlmin({
            collapseWhitespace: COLLAPSEWHITESPACE,                     //去除空格压缩
            minifyCSS: MINIFYCSS,                                       //对html页面里的style样式压缩    
            minifyJS: MINIFYJS                                          //对html页面里的js压缩
        }))                   
        //.pipe(gulpif('*.html',rename({extname: '.php'})))        
        .pipe(gulp.dest(OUTPATH));                                      //压缩后输出路径
});

/**
 * @desc 此任务对buildGroup配置的html进行压缩处理
 * @name htmlMin
 */
gulp.task('htmlMinGroup', function(){
    return gulp.src(buildGroup.html.inPath)                                            //输入的.html文件路径
        .pipe(cheerio(function ($, file) {
            $('link[rel="stylesheet"],script[src]').remove();
            $('head').append('<link rel="stylesheet" href="'+buildGroup.lib.css.linkPath+'/'+buildGroup.lib.css.fileName+'">')
                     .append('<link rel="stylesheet" href="'+buildGroup.static.css.linkPath+'/'+buildGroup.static.css.fileName+'?v='+Date.now()+'">')
                     .next()
                     .append('<script src="'+buildGroup.lib.js.srcPath+'/'+buildGroup.lib.js.fileName+'">')
                     .append('<script src="'+buildGroup.static.js.srcPath+'/'+buildGroup.static.js.fileName+'?v='+Date.now()+'">')
        }))
        .pipe(htmlmin({
            collapseWhitespace: COLLAPSEWHITESPACE,                     //去除空格压缩
            minifyCSS: MINIFYCSS,                                       //对html页面里的style样式压缩    
            minifyJS: MINIFYJS                                          //对html页面里的js压缩
        }))                   
        //.pipe(gulpif('*.html',rename({extname: '.php'})))  
        .pipe(rename(buildGroup.html.fileName))
        .pipe(gulp.dest(buildGroup.html.outPath));                                     //压缩后输出路径
});