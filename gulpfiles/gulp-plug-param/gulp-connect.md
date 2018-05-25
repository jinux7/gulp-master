## gulp-connect
开启web服务的插件
***
### 方法
##### serverClose()
关闭服务
##### reload()
刷新浏览器
### 参数说明
| 属性                         | 描述     | 类型 | 默认值 |
|--------------------------------|-----------------|------|---------|
| root | web服务的根路径 | string | / |
| port | 端口号 | number | 8080 |
| host | url的host部分 | string | localhost |
| name | 开启或停止服务的时候会打印出服务的名字 | string | server |
| livereload | 开启浏览器热更新 | boolean | false |
| debug | 打印出服务的请求信息 | boolean | false |
#### example 如下：
```
var gulp = require('gulp'),
  connect = require('gulp-connect');
 
gulp.task('connect', function() {
  connect.server({
    root: 'app',
    livereload: true
  });
});
 
gulp.task('html', function () {
  gulp.src('./app/*.html')
    .pipe(gulp.dest('./app'))
    .pipe(connect.reload());
});
 
gulp.task('watch', function () {
  gulp.watch(['./app/*.html'], ['html']);
});
 
gulp.task('default', ['connect', 'watch']);
```
```
开启关闭服务

gulp.task('jenkins-tests', function() {
  connect.server({
    port: 8888
  });
 //做一些操作
  connect.serverClose();                //connect关闭服务的方法
});
```