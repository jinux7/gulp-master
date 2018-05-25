/**
 * @desc 此任务合并，压缩，命名js文件
 * @param {string} INPATH
 * @param {string} OUTPATH
 * @param {string} BASE
 * @param {string} FILENAME
 */
var gulp = require('gulp'),                                         //引入gulp模块
    concat = require('gulp-concat'),                                //引入合并模块
    babel = require('gulp-babel'),                                  //引入es6解释模块
    uglify = require('gulp-uglify'),                                //引入js压缩模块
    sourcemaps = require('gulp-sourcemaps');                        //引入sourcemaps模块
    pathConfig = require('./pathConfig');                           //引入路径定义文件    
var INPATH = pathConfig.uglifyJs.inPath,
    OUTPATH = pathConfig.uglifyJs.outPath,
    BASE = pathConfig.uglifyJs.base,
    FILENAME = pathConfig.uglifyJs.fileName,     
    buildGroup = pathConfig.buildGroup;

/**
 * @desc 此任务专门对js文件进行合并，压缩，生成sourcemaps文件
 * @name uglifyJs
 */
gulp.task('uglifyJs',function(){
    return gulp.src(INPATH, {base: BASE})                       //没有concat合并的时候起作用
        .pipe(concat(FILENAME))                                 //把多个JS文件合并成一个文件
        .pipe(babel({presets: ['es2015']}))                     //es6转es5
        .pipe(sourcemaps.init())                                //sourcemaps初始化流
        .pipe(uglify())                                         //对合并后的app.js文件进行压缩
        .pipe(sourcemaps.write('.'))                            //sourcemaps文件输出
        .pipe(gulp.dest(OUTPATH));                              //输出到目的地
});

/**
 * @desc buildGroup配置的js文件进行打包压缩
 * @name jsGroupLib, jsGroupStatic
 */
gulp.task('jsGroupLib',function(){
    let g = buildGroup;
        return gulp.src(g.lib.js.inPath, {base: g.lib.js.base})                       //没有concat合并的时候起作用
        .pipe(concat(g.lib.js.fileName))                                 //把多个JS文件合并成一个文件
        .pipe(babel({presets: ['es2015']}))                     //es6转es5
        .pipe(sourcemaps.init())                                //sourcemaps初始化流
        .pipe(uglify())                                         //对合并后的app.js文件进行压缩
        .pipe(sourcemaps.write('.'))                            //sourcemaps文件输出
        .pipe(gulp.dest(OUTPATH));                              //输出到目的地
});
gulp.task('jsGroupStatic',function(){       
    let g = buildGroup;
        return gulp.src(g.static.js.inPath, {base: g.static.js.src})                       //没有concat合并的时候起作用
        .pipe(concat(g.static.js.fileName))                                 //把多个JS文件合并成一个文件
        .pipe(babel({presets: ['es2015']}))                     //es6转es5
        .pipe(sourcemaps.init())                                //sourcemaps初始化流
        .pipe(uglify())                                         //对合并后的app.js文件进行压缩
        .pipe(sourcemaps.write('.'))                            //sourcemaps文件输出
        .pipe(gulp.dest(OUTPATH));                              //输出到目的地
});

