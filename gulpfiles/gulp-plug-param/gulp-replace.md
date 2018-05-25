## gulp-replace
替换文件中的内容
***
### 参数说明
* replace(str, replacement[, options])
str可以使字符串，也可以是正则<br>
replacement是要替换的字符串，也可以是一个毁掉函数
#### options
| 属性                         | 描述     | 类型 | 默认值 |
|--------------------------------|-----------------|------|---------|
| skipBinary | 跳过二进制文件。默认情况下，这个选项是正确的。如果要替换二进制文件中的内容，必须显式地将其设置为false | boolean | true |

***
#### example 如下：
```
字符串替换

var replace = require('gulp-replace');
 
gulp.task('templates', function(){
  gulp.src(['file.txt'])
    .pipe(replace('bar', 'foo'))
    .pipe(gulp.dest('build/'));
});
```
```
正则替换

var replace = require('gulp-replace');
 
gulp.task('templates', function(){
  gulp.src(['file.txt'])
    .pipe(replace(/foo(.{3})/g, '$1foo'))
    .pipe(gulp.dest('build/'));
});
```
```
字符串替换加回调

var replace = require('gulp-replace');
 
gulp.task('templates', function(){
  gulp.src(['file.txt'])
    .pipe(replace('foo', function(match) {
      // Replaces instances of "foo" with "oof"
      return match.reverse();
    }))
    .pipe(gulp.dest('build/'));
});
```
```
正则替换加回调

var replace = require('gulp-replace');
 
gulp.task('templates', function(){
  gulp.src(['file.txt'])
    .pipe(replace(/foo(.{3})/g, function(match, p1, offset, string) {
      // Replace foobaz with barbaz and log a ton of information
      // See http://mdn.io/string.replace#Specifying_a_function_as_a_parameter
      console.log('Found ' + match + ' with param ' + p1 + ' at ' + offset + ' inside of ' + string);
      return 'bar' + p1;
    }))
    .pipe(gulp.dest('build/'));
});
```