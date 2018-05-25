## gulp-rev-replace
替换文件名称
***
### 参数说明
| 属性                         | 描述     | 类型 | 默认值 |
|--------------------------------|-----------------|------|---------|
| canonicalUris | 在替换filepath时使用规范uri，即在使用非正斜杠(/)路径分隔符使用filepath时，我们用斜杠替换它们。 | boolean | `true` |
| replaceInExtensions | 只能在这些类型的文件中替换新的文件名。 | Array | ['.js', '.css', '.html', '.hbs'] |
| prefix | 替换前加上字符串 | string | `''` |
***
#### example 如下：
```
与gulp-useref配合使用：

var gulp = require('gulp');
var rev = require('gulp-rev');
var revReplace = require('gulp-rev-replace');
var useref = require('gulp-useref');
var filter = require('gulp-filter');
var uglify = require('gulp-uglify');
var csso = require('gulp-csso');
 
gulp.task("index", function() {
  var jsFilter = filter("**/*.js", { restore: true });
  var cssFilter = filter("**/*.css", { restore: true });
  var indexHtmlFilter = filter(['**/*', '!**/index.html'], { restore: true });
 
  return gulp.src("src/index.html")
    .pipe(useref())      // Concatenate with gulp-useref
    .pipe(jsFilter)
    .pipe(uglify())             // Minify any javascript sources
    .pipe(jsFilter.restore)
    .pipe(cssFilter)
    .pipe(csso())               // Minify any CSS sources
    .pipe(cssFilter.restore)
    .pipe(indexHtmlFilter)
    .pipe(rev())                // Rename the concatenated files (but not index.html)
    .pipe(indexHtmlFilter.restore)
    .pipe(revReplace())         // Substitute in new filenames
    .pipe(gulp.dest('public'));
});
```
```
单独使用:

var rev = require("gulp-rev");
var revReplace = require("gulp-rev-replace");
gulp.task("revision", ["dist:css", "dist:js"], function(){
  return gulp.src(["dist/**/*.css", "dist/**/*.js"])
    .pipe(rev())
    .pipe(gulp.dest(opt.distFolder))
    .pipe(rev.manifest())
    .pipe(gulp.dest(opt.distFolder))
})
 
gulp.task("revreplace", ["revision"], function(){
  var manifest = gulp.src("./" + opt.distFolder + "/rev-manifest.json");
 
  return gulp.src(opt.srcFolder + "/index.html")
    .pipe(revReplace({manifest: manifest}))
    .pipe(gulp.dest(opt.distFolder));
});
```