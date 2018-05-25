## gulp-rev
文件名加hash后缀插件
***
### 参数说明
#### 方法:
rev.manifest([path], [options])<br>
类型: string<br>
默认值: rev-manifest.json<br>
#### options:
| 属性                         | 描述     | 类型 | 默认值 |
|--------------------------------|-----------------|------|---------|
| base | 更改文件的base路径 | string | gulp根路径 |
| cwd | 更改gulp工作路径 |  string |gulp根路径 |
| merge | 是否对原manifest文件进行合并 | boolean | `false` |
| transformer | 具有parse和stringify方法的对象,这可以用来为清单文件提供自定义的转换器，而不是默认的JSON。| object | JSON |
***
#### example 如下：
```
gulp.src(['assets/css/*.css', 'assets/js/*.js'], {base: 'assets'})
		.pipe(gulp.dest('build/assets'))
		.pipe(rev())
		.pipe(gulp.dest('build/assets'))
		.pipe(rev.manifest({
			base: 'build/assets',
			merge: true // merge with the existing manifest if one exists
		}))
		.pipe(gulp.dest('build/assets'))
```