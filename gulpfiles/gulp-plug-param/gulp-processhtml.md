## gulp-processhtml
这个插件使用了Denis Ciccale's的node-htmlprocessor对html文件进行处理
***
### 参数说明
| 属性                         | 描述     | 类型 | 默认值 |
|--------------------------------|-----------------|------|---------|
| none | none | none | none |
***
#### example 如下：
```
var gulp = require('gulp'),
    processhtml = require('gulp-processhtml')
 
gulp.task('default', function () {
    return gulp.src('./*.html')
               .pipe(processhtml())
               .pipe(gulp.dest('dist'));
});
```
```
处理前的html页面<!DOCTYPE html>
<html>
<head>
  <!-- build:css style.min.css -->
  <link rel="stylesheet" href="css/style.css">
  <!-- /build -->
</head>
<body>
 
  <!-- build:js app.min.js -->
  <script src="app.js"></script> 
  <!-- /build -->
 
  <!-- build:remove -->
  <script src="http://192.168.0.1:35729/livereload.js?snipver=1"></script> 
  <!-- /build -->
 
  <!-- build:replace 'Goodbye Livereload...' -->
  <script src="http://192.168.0.1:35729/livereload.js?snipver=1"></script> 
  <!-- /build -->
 
</body>
</html>
```
```
处理后的html页面
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="style.min.css">
</head>
<body>
  <script src="app.min.js"></script> 
  Goodbye Livereload...
</body>
</html>
```