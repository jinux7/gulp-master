## gulp-plumber
阻止因错误引发的gulp插件退出,并打印出错误信息
***
### 参数说明
| 属性                         | 描述     | 类型 | 默认值 |
|--------------------------------|-----------------|------|---------|
| inherit | MunKebug管道在管道中的底层流中起作用。 | string |none |
| inherit | none | boolean | true |
| errorHandler | 处理底层流中的错误并将其输出到控制台。 | boolean | true |
#### 函数
plumber.stop() <br>
该方法将返回管道的默认行为。
***
#### example 如下：
```
var gulp = require('gulp');
var uglify = require('gulp-uglify');
 
gulp.task('compress', function (cb) {
    gulp.src('lib/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
});
```
```
var plumber = require('gulp-plumber');
 
gulp.src('./src/*.scss')
    .pipe(plumber())
    .pipe(sass())
    .pipe(uglify())
    .pipe(plumber.stop())
    .pipe(gulp.dest('./dist'));
```