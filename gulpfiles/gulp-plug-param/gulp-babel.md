## gulp-babel
es6转es5语法插件
***
### 参数说明
| 属性                         | 描述     | 类型 | 默认值 |
|--------------------------------|-----------------|------|---------|
| presets | es标准的版本，如env，es2015，es2016等 | array | [] |
| plugins | 转换插件，进一步处理代码,如es6到es3转换插件 | array | [] |
#### pluguns list
* es3-member-expression-literals
* es3-property-literals
##### 更多的参数请参考[这里](https://babeljs.io/docs/usage/api/)
***
#### example 如下：
```
const gulp = require('gulp');
const babel = require('gulp-babel');
 
gulp.task('default', () =>
    gulp.src('src/app.js')
        .pipe(babel({
            presets: ['env']  // env是对es2015,es2016,es2017的合集
                    plugins: ["transform-es3-member-expression-literals","transform-es3-property-literals"]
            
        }))
        .pipe(gulp.dest('dist'))
);
```