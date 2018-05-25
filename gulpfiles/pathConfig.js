/**
 * @desc 此文件为gulp的路径文件
 * @property {Object} main任务路径 
 * @property {Object} server任务路径
 * @property {Array} autoRefresh任务路径 
 * @property {Object} clean任务路径
 * @property {Object} copyImages任务路径
 * @property {Object} htmlMin任务路径  
 * @property {Object} less任务路径 
 * @property {Object} sass任务路径
 * @property {Array} pageReload任务路径
 * @property {String} openBrowser任务路径
 */
const pathObj = {
    main: {                                                             //main任务
        inPath: ['./src/*.html','./src/page/*.html'],                   //输入路径     
        base: 'src',                                                    //根路径
        outPath: 'build/themes/simplicity'                              //输出路径
    },   
    server: {                                                           //server任务
        rootPathDev: './src',                                           //开发环境服务的根路径
        rootPathPro: './build/themes/simplicity',                       //生产环境服务的根路径
        port: 8080                                                      //服务的端口号            
    },
    autoRefresh: ['src/*.html','src/**/**/*'],                          //autoRefresh任务输入路径
    clean: {                                                            //clean任务
        delPath: 'build',                                               //清除所有打包后的文件路径
        delPathScript: ['build/scripts', 'build/maps'],
        delPathCss: 'build/css'
    },
    copyImages: {                                                       //copyImages任务
        inPath: 'src/**/*.{jpg,png,gif}',                               //输入路径 
        base: 'src',                                                    //根路径
        outPath: 'build/themes/simplicity'                              //输出路径
    },
    htmlMin: {                                                          //htmlMin任务
        inPath: 'build/themes/simplicity/**/*.html',                       //输入路径     
        outPath: 'build/themes/simplicity'                              //输出路径
    },
    htmlMinTep: {                                                       ////htmlMinTep任务
        inPath: 'src/index_template.html',                              //输入路径     
        outPath: 'build/themes/simplicity'                              //输出路径
    },
    less: {                                                             //less任务
        inPath: 'src/css/less/*.less',                                  //输入路径     
        outPath: 'src/css'                                              //输出路径
    },
    sass: {                                                             //sass任务
        inPath: 'src/css/sass/*.scss',                                  //输入路径     
        outPath: 'src/css'                                              //输出路径
    },
    pageReload: ['src/*.html'],                                         //pageReload任务输入路径  
    openBrowser: 'http://localhost:8080',                               //openBrowser任务打开浏览器路径
    uglifyJs: {                                                         //uglifyJs任务     
        inPath: 'src/js/**/*.js',                                       //输入路径
        base: 'src',                                                    //base路径
        outPath: 'build/themes/simplicity/js',                          //输出路径
        fileName: 'app.min.js'                                          //输出文件夹名称
    },
    cleanCss: {                                                         //cleanCss任务
        inPath: 'src/css/**/*.css',                                     //输入路径
        base: 'src',                                                    //base路径
        outPath: 'build/themes/simplicity/css',                         //输出路径
        fileName: 'app.min.css'                                         //输出文件夹名称
    },
    postCss: {                                                          //postCss任务        
        inPath: 'src/css/**/*.css',                                     //输入路径
        base: 'src',                                                    //base路径
        outPath: 'build/themes/simplicity',                             //输出路径
        fileName: 'app.min.css'                                         //输出文件夹名称
    },
    svg2iconfont: {                                                     //svg2iconfont任务
        inPath: 'src/svg/*.svg',
        outPath: 'src/fonts',
        fontName: 'myfont',
        targetPath: './_icons.css',
        fontPath: './'

    },
    buildGroup: {
        html: {
            inPath: 'src/index.html',
            outPath: 'build/themes/simplicity',
            fileName: 'index.html'
        },
        lib: {
            css: {
                inPath: 'src/css/lib/*.css',
                base: 'src',                
                outPath: 'build/themes/simplicity/css',
                fileName: 'app.min.css',
                linkPath: 'css'
            },
            js: {
                inPath: 'src/js/lib/*.js',
                base: 'src',
                outPath: 'build/themes/simplicity',
                fileName: 'app.min.js',
                srcPath: 'js'              
            }
        },
        static:  {
            css: {
                inPath: 'src/css/*.css',
                base: 'src',                
                outPath: 'build/themes/simplicity/css',
                fileName: 'css.min.css',
                linkPath: 'css'                                
            },
            js: {
                inPath: 'src/js/*.js',
                base: 'src',                
                outPath: 'build/themes/simplicity',
                fileName: 'js.min.js',
                srcPath: 'js'                                
            }
        }
    },
}
module.exports = pathObj;