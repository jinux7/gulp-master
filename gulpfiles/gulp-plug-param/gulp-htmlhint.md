## gulp-htmlhint
对html文件进行语法检查
***
###参数说明
| 属性                         | 描述     | 类型 | 默认值 |
|--------------------------------|-----------------|------|---------|
| htmlhintrc | 如".htmlhintrc",以此文件做配置文件,如果不设置，按照默认标准进行检查 | string | null |
#### 规则属性列表
* tagname-lowercase: true<br>标签名必须小写
* attr-lowercase: true<br>属性名必须小写
* attr-value-double-quotes: true<br>属性值必须放在双引号中
* attr-value-not-empty: true<br>属性值一定不可为空
* attr-no-duplication: true<br>属性值一定不可重复
* doctype-first: true<br>Doctype必须是 HTML 文档的第一行
* tag-pair: true<br>标签必须成对
* tag-self-close: true<br>标签必须自封闭
* spec-char-escape: true<br>避免特殊字符
* id-unique: true<br>D 属性必须唯一
* src-not-empty: true<br>src 属性一定不可为空
* title-require: true<br>title 属性必须出现在标签中
* alt-require: true<br>img 标签必须包含 alt 属性
* doctype-html5: true<br>Doctype 必须是 HTML5
* id-class-value: dash<br>ID 和 Class 的命名规则必须统一
* style-disabled: true<br>不该使用样式标签
* inline-style-disabled: true<br>不该使用行内样式
* inline-script-disabled: true<br>不该使用行内脚本
* space-tab-mixed-disabled: space4<br>空格和制表符一定不可混合在行前
* id-class-ad-disabled: true<br>ID 和 Class 一定不可使用广告关键词
* href-abs-or-rel: false<br>href 必须是绝对路径或者相对路径
* attr-unsafe-chars: true<br>属性值一定不可使用不安全字符
* head-script-disabled: true<br>script 标签不该使用在头部
***
#### example 如下:
```
var htmlhint = require("gulp-htmlhint");
 
gulp.src("./src/*.html")
    .pipe(htmlhint())
    .pipe(htmlhint.reporter())
```
```
onerror
var htmlhint = require("gulp-htmlhint");
 
gulp.src("./src/*.html")
    .pipe(htmlhint())
    .pipe(htmlhint.failOnError())
```
```
var htmlhint = require("gulp-htmlhint");
 
gulp.src("./src/*.html")
    .pipe(htmlhint())
    .pipe(htmlhint.reporter("htmlhint-stylish"))
    .pipe(htmlhint.failOnError({ suppress: true }))
```








I












