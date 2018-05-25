## gulp-less
less转css格式插件
***
### 参数说明
| 属性                         | 描述     | 类型 | 默认值 |
|--------------------------------|-----------------|------|---------|
| paths | 用于@import指令的路径数组。 | array | [] |
| plugins | less的插件，插件详情请参考[这里](http://lesscss.org/usage/#plugins) | array | [] |
***
#### example 如下：
```
…
.pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ],
      plugins: [autoprefix]
    }))
…
```