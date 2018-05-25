## gulp-useref
根据html文件中注释来对js，css资源文件进行合并和命名
***
### 参数说明
| 属性                         | 描述     | 类型 | 默认值 |
|--------------------------------|-----------------|------|---------|
| searchPath | 相对于输入流路径输入 | string or array | none |
| base | 输出的文件相对于当前gulp路径 | string or array | none |
| noAssets | 跳过资源文件只处理html文件 | boolean | true |
| noconcat | 不合并资源但是资源流正常输出 | boolean | true
| newLine | 合并后的资源中原文件中间有分割字符串 | string | none |
***
#### example 如下：
```
…
.pipe(useref({ 
        searchPath: 'sub',
        base: 'subbuild',
        noAssets: false,
        noconcat: false,
        newLine: '------'
    }))
…
```