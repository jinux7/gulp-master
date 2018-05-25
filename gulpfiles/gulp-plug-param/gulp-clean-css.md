## gulp-clean-css
对css文件进行压缩处理
***
### 参数说明
| 属性                         | 描述     | 类型 | 默认值 |
|--------------------------------|-----------------|------|---------|
| advanced | 是否开启高级优化（合并选择器等） | boolean | true |
| compatibility | 保留ie兼容写法，'ie7'：IE7兼容模式，'ie8'：IE8兼容模式，'ie9'：IE9兼容模式，'*'：IE10+兼容模式 | string | * |
| keepBreaks | 是否保留换行 | boolean | false |
| keepSpecialComments | 保留所有特殊前缀 当你用autoprefixer生成的浏览器前缀，如果不加这个参数，有可能将会删除你的部分前缀 |  |  |
| format | 'beautify'最优的压缩方式，'keep-breaks'增加换行提高可读性。 | string | 'beautify' |
| level | 优化等级，只能选1或2 | number | 2 |
更多参数请参阅[clean-css](https://github.com/jakubpawlowicz/clean-css#how-to-use-clean-css-api)
***
#### example 如下：
```
let gulp = require('gulp');
let cleanCSS = require('gulp-clean-css');
 
gulp.task('minify-css', () => {
  return gulp.src('styles/*.css')
    .pipe(cleanCSS({
      compatibility: 'ie8',
      advanced: false,
      level: 1
      }))
    .pipe(gulp.dest('dist'));
});
```