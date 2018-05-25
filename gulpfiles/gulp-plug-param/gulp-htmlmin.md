## gulp-htmlmin
html文件压缩优化
***
###参数说明
| 属性                         | 描述     | 类型 | 默认值 |
|--------------------------------|-----------------|------|---------|
| removeComments | 清除html注释 | boolean | `false` |
| collapseWhitespace | 压缩html | boolean |`false` |
| minifyCSS | 压缩页面CSS | boolean | `false` |
| minifyJS | 压缩页面JS | boolean |`false` |
| collapseBooleanAttributes | 属性是Boolean，可以省略属性值 | boolean |`false` |
| conservativeCollapse | 留下一个空格符，与collapseWhitespace=true一起使用 | boolean |`false` |
| decodeEntities | 尽可能使用直接的Unicode字符 | boolean |`false` |
| removeEmptyAttributes | 删除所有空格作属性值的属性 | boolean |`false` |
| removeScriptTypeAttributes | 删除\<script\>的type=\"text/javascript\" | boolean |`false` |
| removeStyleLinkTypeAttributes | 删除\<style\>和\<link\>的type=\"text/css\" | boolean |`false` |
| removeEmptyElements | 删除所有空内容的节点 | boolean | `false` |
更多属性请参考 [html-minifer docs](https://github.com/kangax/html-minifier)
***
#### example 如下:
```
…
.pipe(htmlmin({
    removeComments: true,
    collapseWhitespace: true,                     
    minifyCSS: true,                                        
    minifyJS: true                                         
}))  
…
```