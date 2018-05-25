## gulp-iconfont
svg格式图片转iconfont字体
***
###参数说明
| 属性                         | 描述     | 类型 | 默认值 |
|--------------------------------|-----------------|------|---------|
| fontName | 字体的名称 | string | `必须输入，否则报错` |
| fontWeight | 字体的粗细 | string | `''` |
| normalize | 将图标按比例缩放到最高图标的高度 | boolean | `false` |
| fontHeight | 输出的字体高度(默认为最高输入图标的高度) | number |`字体里最高的` |
| round | 设置SVG路径舍入 | number | `10e12` |
| descent | 自己修改字体基线 | number | `0` |
| ignoreExt | 可以读取没有.svg后缀的图片 | boolean | `false` |
| prependUnicode | 允许将unicode编码点预先设置为图标文件名，以便每次运行时始终保持相同的代码点 | boolean | `false` |
| fileName | 允许指定一个文件名，如果需要它与fontName不同 | string | `fontName` |
| formats | svg转字体图标的格式 | array | `['ttf', 'eot', 'woff']` |
| timestamp | 重写TTF字体创建/修改时间 | number | `Math.round(Date.now()/1000)` |
***
#### example 如下：
```
var iconfont = require('gulp-iconfont');
var runTimestamp = Math.round(Date.now()/1000);
 
gulp.task('Iconfont', function(){
  return gulp.src(['assets/icons/*.svg'])
    .pipe(iconfont({
      fontName: 'myfont', // required
      prependUnicode: true, // recommended option
      formats: ['ttf', 'eot', 'woff'], // default, 'woff2' and 'svg' are available
      timestamp: runTimestamp, // recommended to get consistent builds when watching files
    }))
      .on('glyphs', function(glyphs, options) {
        // CSS templating, e.g.
        console.log(glyphs, options);
      })
    .pipe(gulp.dest('www/fonts/'));
});
```