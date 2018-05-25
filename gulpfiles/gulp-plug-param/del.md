## del
删除文件模块
***
### 参数说明
### del(patterns, [options])
patterns

Type: string Array
```
const del = require('del');
 
del(['tmp/*.js', '!tmp/unicorn.js']).then(paths => {
    console.log('Deleted files and folders:\n', paths.join('\n'));
});
```

| 属性                         | 描述     | 类型 | 默认值 |
|--------------------------------|-----------------|------|---------|
| force | 允许删除当前工作路径以外的文件 | boolean | false |
| dryRun | 文件和文件夹都删除 | boolean | false |
| concurrency | 并发数 | number | Infinity |
***
#### example 如下：
```
const del = require('del');
 
del(['tmp/*.js'], {
    force: true,
    dryRun: true,
    concurrency: 5
    }).then(paths => {
    console.log('Files and folders that would be deleted:\n', paths.join('\n'));
});
```


