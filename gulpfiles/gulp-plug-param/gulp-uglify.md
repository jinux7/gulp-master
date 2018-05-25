## gulp-uglify
js压缩插件
***
### 参数说明
| 属性                         | 描述     | 类型 | 默认值 |
|--------------------------------|-----------------|------|---------|
| mangle | 是否修改变量名 | boolean |true |
| compress | 是否完全压缩 | boolean |true |
| preserveComments | 保留所有注释,'all' | string |none |
| ie8 | 是否支持ie8浏览器 | boolean |false |
| toplevel | 如果您希望启用顶层变量和函数名，并删除未使用的变量和函数，则设置为true | boolean | false |
| warnings  | 当true时，result.warnings里会有压缩警告信息，当"verbose"时，会有更详细的信息。 | string |none |
| keep_fnames  | 当true时，不会对函数名称进行处理 | boolean | false |
更多参数请参考[这里](https://github.com/mishoo/UglifyJS2#minify-options)
***
#### example 如下：
```
var gulp = require('gulp');
var uglify = require('gulp-uglify');
 
gulp.task('compress', function (cb) {
    gulp.src('lib/*.js')
        .pipe(uglify({
            mangle: false,
            compress: false,
            preserveComments: 'all',
            ie8: true,
            keep_fnames: true
        }))
        .pipe(gulp.dest('dist'));
});
```