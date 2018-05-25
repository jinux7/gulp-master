## gulp-imagemin
图片压缩优化插件
***
### 参数说明
| 属性                         | 描述     | 类型 | 默认值 |
|--------------------------------|-----------------|------|---------|
| gifsicle({interlaced: true}) | 设为true时，优化gif格式图片 | boolean | `false` |
| jpegtran({progressive: true}) | 设为true时，优化jpeg格式图片 | boolean |`false` |
| optipng({optimizationLevel: 5}) | 优化png图片，optimizationLevel的值取0-7，值越大优化越高 | number |`3` |
| imagemin.svgo(svgOpt) | svgOpt详细参数请参考[SVGO](https://github.com/svg/svgo#what-it-can-do)| object | {} |
***
#### example如下
```
…
.pipe(imagemin([
	imagemin.gifsicle({interlaced: true}),
	imagemin.jpegtran({progressive: true}),
	imagemin.optipng({optimizationLevel: 5}),
	imagemin.svgo({
		plugins: [
			{removeViewBox: true}, //删除viewBox属性
			{cleanupIDs: false}	   //不删除未使用的和缩小使用的id
		]
	})
]))
…
```