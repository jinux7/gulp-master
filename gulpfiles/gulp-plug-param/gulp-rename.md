## gulp-rename
更改文件名称
***
### 参数说明
| 属性                         | 描述     | 类型 | 默认值 |
|--------------------------------|-----------------|------|---------|
| dirname | 相对于gulp.src的路径 | string | none |
| basename | 文件的基础名字 | string | 原文件名 |
| prefix | 基础名字的前缀 | string | none |
| suffix | 几出名字的后缀 | string | none |
| extname | 文件的后缀 | string | 原文件后缀 |
***
#### example 如下：
```
gulp.src("./src/main/text/hello.txt", { base: process.cwd() })
  .pipe(rename({
    dirname: "main/text/ciao",
    basename: "aloha",
    prefix: "bonjour-",
    suffix: "-hola",
    extname: ".md"
  }))
  .pipe(gulp.dest("./dist")); // ./dist/main/text/ciao/bonjour-aloha-hola.md
```