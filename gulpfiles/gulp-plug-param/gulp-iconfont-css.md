## gulp-iconfont-css
引入iconfont字体的css文件
***
###参数说明
| 属性                         | 描述     | 类型 | 默认值 |
|--------------------------------|-----------------|------|---------|
| fontName | 生成的font-family名字 | string | `必须有` |
| targetPath | 生成的css文件路径，相对于src.dest() | string | `./` |
| fontPath | css文件里url引入的字体路径 | string | `./` |
| cssClass | 生成的iconfont的类名 | string | `icon` |
***
#### example 如下：
```
var iconfont = require('gulp-iconfont');
var iconfontCss = require('gulp-iconfont-css');

var fontName = 'Icons';

gulp.task('iconfont', function(){
  gulp.src(['app/assets/icons/*.svg'])
    .pipe(iconfontCss({
      fontName: fontName,
      targetPath: '../../css/_icons.scss',
      fontPath: '../../fonts/icons/'
    }))
    .pipe(iconfont({
      fontName: fontName
     }))
    .pipe(gulp.dest('app/assets/fonts/icons/'));
});
```