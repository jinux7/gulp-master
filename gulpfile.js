/**
 * @desc 此文件为gulp的入口文件，包含三个任务，dev，pro，build
 * 
 */
var gulp =require('gulp'),                                  //引入gulp模块
    gulpSequence = require('gulp-sequence');                //引入任务执行顺序模块
    require('./gulpfiles/uglifyJs');
    require('require-dir')('./gulpfiles');                  //引入gulpfiles中的任务  

/**
 * @desc 此任务依赖serverDev，openBrowser，autoRefreshDev这三个任务，将在src/下开启一个服务，并且有修改自动刷新页面功能
 * @name "dev"
 */
gulp.task('dev',gulpSequence('serverDev','openBrowser','autoRefreshDev'));

/**
 * @desc 此任务依赖serverPro，openBrowser，autoRefreshPro这三个任务，将在build/下开启一个服务，并且有修改自动刷新页面功能
 * @name "pro"
 */            
gulp.task('pro',gulpSequence('serverPro','openBrowser','autoRefreshPro'));
/**
 * @desc 首先执行clean任务，之后同时执行less2css，sass2css，copyImages三个任务，再执行main任务，最后执行htmlMin任务，此build任务对项目进行打包，保存在build/下
 * @name "build"
 */            
gulp.task('build', gulpSequence('clean',['less2css', 'sass2css', 'copyImages'],'main','htmlMin'));                             
/**
 * @desc 根据配置文件按组来合并压缩js，css文件
 * @name 'buildGroup'
 */
gulp.task('buildGroup', gulpSequence('clean',['less2css', 'sass2css', 'copyImages'],['jsGroupLib','jsGroupStatic','cleanCssLib','cleanCssStatic','htmlMinGroup']));                             