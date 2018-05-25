## gulp-clean
删除文件插件
***
###参数说明
| 属性                         | 描述     | 类型 | 默认值 |
|--------------------------------|-----------------|------|---------|
| force | 设为true时，可以删除当前gulp工作目录以外的文件 | boolean | `false` |
***
#### example 如下：
```
    gulp.task('default', function () {
        return gulp.src('app/tmp/index.js')
            .pipe(clean({
                force: true
                }))      
            .pipe(gulp.dest('dist'));
    });
```
