## gulp-jshint
javascript代码检查插件
***
### 参数说明
| 属性                         | 描述     | 类型 | 默认值 |
|--------------------------------|-----------------|------|---------|
| lookup | jshint是否读取.jshintrc配置文件 | boolean | true |
| linter | 再引入一个类似jshint的模块，互相不影响的一起工作 | string or function | jshint |
#### 其它属性列表
* "bitwise": false<br>
是否阻止位运算符的使用，有时候为了快速取整或判断，会使用一些位运算符，所以此项设置为 false
* "camelcase": true<br>
是否要求变量都使用驼峰命名
* "curly": true<br>
是否要求 for/while/if 等循环和条件语句中总是使用花括号     
* "eqeqeq": true<br>
是否强制使用严格等号,有时候需要判断 null，所以默认不严格要求
* "es5": true<br>
默认要求所有函数运行在ES5
* "esnext": true<br>
* "forin": true<br>
for-in 语句是否要求过滤原型链上的对象,添加 obj.hasOwnProperty(prop)
* "freeze": true<br>
是否阻止修改或拓展基本对象（Array、Date 等）的原型链,原型链污染比较危险，默认打开
* "funcscope": true<br>
变量只能在函数域上定义，在代码块上定义的变量给出警告
* "futurehostile": true<br>
当使用JS保留字时，显示警告
* "immed": true<br>
是否要求自执行的方法使用括号括起  (function () { } ())
* "indent": 4<br>
指定tab缩进宽度为 2 个空格
* "latedef": true<br>
要求变量在使用前声明
* "maxdepth": 4
代码块嵌套深度
* "maxerr": 10000<br>
最大错误提示数量，默认50
* "maxlen": 200<br>
单行最大长度
* "maxparams": 4<br>
设置函数正式参数的最大数量
* "maxstatements": 1000<br>
 一个函数内声明语句的最大数量
* "newcap": true<br>
要求构造函数大写
* "noarg": true<br>
不允许使用 arguments.callee 和 arguments.caller
* "nocomma": true<br>
不允许使用逗号
* "noempty": false<br>
不允许空的代码快，默认关闭
* "nonbsp": true<br>
不允许使用 "non-breaking whitespace",这些字符在非 UTF8 页面会导致代码失效
* "nonew": true<br>
阻止直接使用 new 调用构造函数的语句（不赋值对象）
* "notypeof": false<br>
阻止直接使用 typeof 操作符
* "quotmark": "single"<br>
字符串引号,默认要求使用单引号,true-- 代码字符串禁止单引号双引号混用,"single"--只允许单引号,"double"--只允许双引号。
    /**
    * 隐藏式声明
    *
    "inner" - check for variables defined in the same scope only
    "outer" - check for variables defined in outer scopes as well
    false - same as inner
    true - allow variable shadowing
    */
* "shadow": "inner"<br>
"inner"-检查同一作用域下内定义的变量,"outer"-检查外部作用域下定义的变量，false-同"inner",true-允许变量跟踪
* "singleGroups": true<br>
禁止在不必要的时候使用分组运算符
* "strict": false<br>
是要求否以 strict 模式检查,该选项要求文件有 "use strict;"不全局要求，需要的模块自行开启。
* "undef": true<br>
提示未定义的变量,
* "unused": true<br>
提示未使用的变量
* "varstmt": false<br>
是否禁止使用var,用const和let替代。
* "asi": false<br>
缺少分号警告.
* "boss": true<br>
比较处使用了赋值 的警告信息。
* "debug": true<br>
不显示代码中使用的 debugger 语句默认给出的警告
* "eqnull": true<br>
关于 == null的警告,当您想要检查变量是否为空或未定义时，这种比较往往很有用。
* "evil": true<br>
关于 eval 的警告
* "expr": true<br>
在应该使用复制或函数调用的地方使用了表达式 的警告
* "lastsemic": false<br>
缺少分号的警告
* "laxbreak": true<br>
安全的折行的警告
* "laxcomma": true<br>
逗号放前面的警告
* "loopfunc": true<br>
在循环语句中定义函数 的警告
* "multistr": true<br>
 多行字符串的警告。
* "plusplus": false<br>
不允许使用 ++ 和 -- 运算符
* "proto": true<br>
关于__proto__属性的警告
* "sub": true<br>
该选项控制形如 person['name'] vs. person.name的警告信息的显示
* "browser": true<br>
 暴露浏览器属性的全局变量，列如 window,document,注意:这个选项不暴露变量 alert或 console。
* "globals": {
      "define": true,
      "module": true,
      "export": true,
      "console": true,
      "THREE": true,
      "TWEEN": true,
      "Stats":true
    }<br>需要的引用到的js类库的全局变量应该加入进来

  }

***
#### example如下
```
const jshint = require('gulp-jshint');
const gulp   = require('gulp');
 
gulp.task('lint', function() {
  return gulp.src('./lib/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('YOUR_REPORTER_HERE'));
});
```
```
gulp.task('lint', function() {
    return gulp.src('./lib/*.js')
      .pipe(jshint({ linter: 'some-jshint-module' }))
      .pipe(/*...*/);
  });
```
```
const pkg = require('./package');
const jshintConfig = pkg.jshintConfig;
 
jshintConfig.lookup = false;
 
gulp.src('yo').pipe(jshint(jshintConfig));
```