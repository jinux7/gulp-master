/**
 * @desc 将svg矢量图文件转换成iconfont字体文件
 */

var gulp = require('gulp');                                 //引入gulp模块
    iconfont = require('gulp-iconfont'),                    //引入gulp-iconfont模块
    iconfontCss = require('gulp-iconfont-css'),             //引入gulp-iconfont-css模块
    pathConfig = require('./pathConfig');                   //引入路径定义文件    
    runTimestamp = Math.round(Date.now()/1000);             //生成随机数        
var INPATH = pathConfig.svg2iconfont.inPath,
    OUTPATH = pathConfig.svg2iconfont.outPath,
    FONTNAME = pathConfig.svg2iconfont.fontName,
    TARGETPATH = pathConfig.svg2iconfont.targetPath,
    FONTPATH = pathConfig.svg2iconfont.fontPath;
gulp.task('svg2iconfont', function(){
  return gulp.src([INPATH])
    .pipe(iconfontCss({
        fontName: FONTNAME,
        //path: 'src/svg/template.css',                     
        TARGETPATH: './_icons.css',                         //生成的css文件路径，相对于字体文件的路径
        fontPath: './'                                      //这个路径是css文件里url('./myfont.eot')的路径
    }))
    .pipe(iconfont({
      fontName: FONTNAME,                                  //字体名字
      prependUnicode: true,                                //字符编码设置
      normalize:true ,                                     //图标标准化             
      fontHeight: 1001,
      formats: ['ttf', 'eot', 'woff', 'woff2', 'svg'], // default, 'woff2' and 'svg' are available
      timestamp: runTimestamp, // recommended to get consistent builds when watching files
    }))
    .on('glyphs', function(glyphs, options) {
    //console.log(glyphs, options);
    })
    .pipe(gulp.dest(OUTPATH));
});