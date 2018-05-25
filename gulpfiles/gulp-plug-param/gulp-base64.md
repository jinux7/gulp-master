## gulp-base64
将样式中的图片，满足一个规则后，把url地址换成base64形式
***
### 参数说明
| 属性                         | 描述     | 类型 | 默认值 |
|--------------------------------|-----------------|------|---------|
| baseDir | 如果样式表中的图片地址是绝对路径，那么将以baseDir为基础路径 | string | '' |
| extensions | 只处理匹配后缀的图片 | array | [] |
| exclude  | 跳过匹配到的路径图片 | array | [] |
| maxImageSize  | 转换图片的最大size | number |  |
| debug  | 允许log输出 | boolean | false |

#### example 如下：
```
gulp.task('build', function () {
    return gulp.src('./css/*.css')
        .pipe(base64({
            baseDir: 'public',
            extensions: ['svg', 'png', /\.jpg#datauri$/i],
            exclude:    [/\.server\.(com|net)\/dynamic\//, '--live.jpg'],
            maxImageSize: 8*1024, // bytes
            debug: true
        }))
        .pipe(concat('main.css'))
        .pipe(gulp.dest('./public/css'));
});
```