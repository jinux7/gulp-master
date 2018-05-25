## gulp-postcss
通过postcss的插件对css文件进行处理，不管有几个插件，css只解析一次
***
### 参数说明
##### postcss(plugsArr[,options])
plugsArr是一个数组，里面是postcss的插件
##### options {}
| 属性                         | 描述     | 类型 | 默认值 |
|--------------------------------|-----------------|------|---------|
| parser | 可以是一个自定义的处理函数 | function | null |
***
#### example 如下：
```
var gulp = require('gulp');
var postcss = require('gulp-postcss');
var nested = require('postcss-nested');
var sugarss = require('sugarss');
 
gulp.task('default', function () {
    var plugins = [nested];
    return gulp.src('in.sss')
        .pipe(postcss(plugins, { parser: sugarss }))
        .pipe(gulp.dest('out'));
});
```
```
自定义处理函数
var postcss = require('gulp-postcss');
var cssnext = require('postcss-cssnext');
var opacity = function (css, opts) {
    css.eachDecl(function(decl) {
        if (decl.prop === 'opacity') {
            decl.parent.insertAfter(decl, {
                prop: '-ms-filter',
                value: '"progid:DXImageTransform.Microsoft.Alpha(Opacity=' + (parseFloat(decl.value) * 100) + ')"'
            });
        }
    });
};
 
gulp.task('css', function () {
    var plugins = [
        cssnext({browsers: ['last 1 version']}),
        opacity
    ];
    return gulp.src('./src/*.css')
        .pipe(postcss(plugins))
        .pipe(gulp.dest('./dest'));
});
```
```
sourcemaps
return gulp.src('./src/*.css')
    .pipe(sourcemaps.init())
    .pipe(postcss(plugins))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./dest'));
```