## gulp-cached
可以将第一次传递给它的文件内容保留在内存中，如果之后再次执行 task，它会将传递给它的文件和内存中的文件进行比对，如果内容相同，就不再将该文件继续向后传递，从而做到了只对修改过的文件进行增量编译。
***
### 参数说明
| 属性                         | 描述     | 类型 | 默认值 |
|--------------------------------|-----------------|------|---------|
| name | 缓存的名字 | string | none |
##### 删除缓存
* 删除所有<br>
cache.caches = {};
* 删除指定的<br>
delete cache.caches['cache name yo'];
***
#### example 如下：
```
var cache = require('gulp-cached');
 
gulp.task('lint', function(){
  return gulp.src('files/*.js')
    .pipe(cache('linting'))
    .pipe(jshint())
    .pipe(jshint.reporter())
});
 
gulp.task('watch', function(){
  gulp.watch('files/*.js', ['lint']);
});
 
gulp.task('default', ['watch','lint']);
```