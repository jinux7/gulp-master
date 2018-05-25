## gulp-csso
压缩优化css文件
***
### 参数说明
| 属性                         | 描述     | 类型 | 默认值 |
|--------------------------------|-----------------|------|---------|
| restructure | 默认是使用结构最小化的最大压缩。如果您想禁用此功能，请传递false。 | boolean | true |
| sourceMap | 是否可以生成sourcemaps文件 | boolean | true |
| debug | 设为true或正数(更多细节)以获得关于压缩过程的一些调试信息。 | boolean | false |
***
#### example 如下：
```
…
gulp.task('development', function () {
    return gulp.src('./main.css')
        .pipe(csso({
            restructure: false,
            sourceMap: true,
            debug: true
        }))
        .pipe(gulp.dest('./out'));
});         
…
```
```
var gulp = require('gulp');
var csso = require('gulp-csso');
var sourcemaps = require('gulp-sourcemaps');
 
gulp.task('default', function () {
    return gulp.src('main.css')
        .pipe(sourcemaps.init())
        .pipe(csso())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./out'));
});
```