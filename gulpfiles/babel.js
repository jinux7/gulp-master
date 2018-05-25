/**
 * @desc es6语法转成es3语法的测试文件
 * @param
 */
var gulp =require('gulp'),
    babel = require('gulp-babel');                                              //引入es6解释模块
    
gulp.task('babel-js', function () {
    return gulp.src(['src/js/babel.js','src/js/lib/polyfill.js'], {base: 'src'})
                .pipe(babel({
                    presets: ['env'],
                    plugins: ["transform-es3-member-expression-literals","transform-es3-property-literals"]
                }))
                .pipe(gulp.dest('build/themes/simplicity'));
        
});
gulp.task('babel-html', ['babel-js'], function(){
    return gulp.src('src/page/babel.html', {base: 'src'})                                             //输入的.html文件路径
        .pipe(gulp.dest('build/themes/simplicity'));                                      //压缩后输出路径
});