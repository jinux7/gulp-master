# gulp demo 测试

### 安装，在根目录下，执行以下命令，安装相关依赖包
### CLI命令
```
  cnpm install
``` 
### 运行项目
### CLI命令
```
npm start
开启开发环境调试模式，服务根目录src/
```
```
npm run pro
开启生产环境调试模式，服务根目录build/themes/simplicity
```
```
npm run build
在build文件夹下生成打包后的文件
```
### build文件夹下的文件是压缩优化过的文件
### 代码目录结构
```
|-src/ - 源码目录
|   |-css/  - css文件目录
|      |-init.css - css文件
|   |-js/ - js文件目录
|      |-init.css - css文件
|   |-images/ - 图片文件目录 
|   |-page - .html文件目录
|   |-index.html - 应用入口页面
|-build/ - 打包后目录
|-gulpfile.js - gulp的执行入口文件
|-gulpfiles/ - gulp文件目录
|   |-clean.js - 清除任务
|   |-copyImages.js - 图片压缩任务
|-package.json - npm依赖配置文件
|-node_modules - 项目依赖模块文件夹
```
### 修改html中的js与css文件名方法
```
在html页面中，有如下注释
    <!-- build:js scripts/name.js -->
    <script src="js/lib/jquery1.12.4.js"></script>
    <script src="js/lib/alloyFinger.js"></script>
    <script src="js/init1.js"></script>
    <!-- endbuild -->
最后将生成一个在script文件夹下name-b69cd577dd.js这样的文件，md5码根据文件内容生成，可以修改name部分，直接在注释里边修改即可
以上是js文件的命名规则，css文件命名方式与js文件命名方式一样，下边是css的引入注释
    <!-- build:css css/style.css -->
    <link rel="stylesheet" href="css/init1.css">
    <link rel="stylesheet" href="css/less1.css">
    <link rel="stylesheet" href="css/lib/style.css">
    <!-- endbuild -->
```