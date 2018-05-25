## gulp-jsonlint
对json进行语法检查
***
### 参数说明
| 属性                         | 描述     | 类型 | 默认值 |
|--------------------------------|-----------------|------|---------|
| comments | 是否允许加注释 | boolean | `false` |
### 方法
jsonlint.report(string)
* json 输出的报告是json的字符串形式
* verbose 输出加长的利于人们阅读的报告
***
#### example 如下：
```
基础用法
var jsonlint = require('gulp-json-lint');
 
gulp.task('jsonlint', function(){
      gulp.src('source.json')
        .pipe(jsonlint({
             comments: true
        }))
        .pipe(jsonlint.report('verbose'));
});
```
```
自定义报告输出
var testReporter = function (lint, file) {
    console.log(file.path + ': ' + lint.error);
};
 
gulp.task('invalid', function(){
      gulp.src('invalid.json')
        .pipe(jsonlint())
        .pipe(jsonlint.report(testReporter));
});
```