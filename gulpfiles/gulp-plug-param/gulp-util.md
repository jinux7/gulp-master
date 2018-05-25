## gulp-util
gulp的一些工具方法插件
***
### 方法
#### log() 
打印错误信息。
```
var gutil = require(gulp-util);
gulp.task('scripts', function() {
  gulp.src('src/**/*.js')
    .pipe(concat('script.js'))
    .on('error',function(err){
        gutil.log(err);
    })
    .pipe(gulp.dest('dist/'));
});
```
#### colors(string)
设置标准输出颜色
```
var gutil = require(gulp-util);
gutil.log('stuff happened', 'Really it did', gutil.colors.magenta('123'));
```
#### replaceExtension(path, newExtension) 
替换文件后缀
```
gutil.replaceExtension('file.coffee', '.js'); // file.js
```
#### isStream(obj) 
判断obj是否是流对象
#### isBuffer(obj)
判断obj是否是buffer对象
#### template(string[, data])
字符串模板工具
```
var opt = {
  name: 'todd',
  file: someGulpFile
};
gutil.template('test <%= name %> <%= file.path %>', opt) // test todd /js/hi.js
```
#### new File(obj)
创建一个vinyl文件
```
var file = new gutil.File({
  base: path.join(__dirname, './fixtures/'),
  cwd: __dirname,
  path: path.join(__dirname, './fixtures/test.coffee')
});
```
#### noop()
对管道中的流不做处理流向下一个管道
```
// gulp should be called like this :
// $ gulp --type production
gulp.task('scripts', function() {
  gulp.src('src/**/*.js')
    .pipe(concat('script.js'))
    .pipe(gutil.env.type === 'production' ? uglify() : gutil.noop())
    .pipe(gulp.dest('dist/'));
});
```
#### buffer(cb)
当管道中的流读取完成后，会触发end事件，回调中有两个参数，一个err，一个是buffer的数组。
```
gulp.src('stuff/*.js')
  .pipe(gutil.buffer(function(err, files) {
  
  }));
```
#### new PluginError(pluginName, message[, options])
创建一个error对象
```
var err = new gutil.PluginError('test', {
  message: 'something broke'
});
 
var err = new gutil.PluginError({
  plugin: 'test',
  message: 'something broke'
});
 
var err = new gutil.PluginError('test', 'something broke');
 
var err = new gutil.PluginError('test', 'something broke', {showStack: true});
 
var existingError = new Error('OMG');
var err = new gutil.PluginError('test', existingError, {showStack: true});
```