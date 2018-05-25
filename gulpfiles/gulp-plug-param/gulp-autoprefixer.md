## gulp-autoprefixer
根据浏览器不同添加浏览器前缀
***
### 参数说明
| 属性                         | 描述     | 类型 | 默认值 |
|--------------------------------|-----------------|------|---------|
| cascade | 如果不压缩CSS，会使用视觉级联。 | boolean | true |
| add | 添加前缀 | boolean | true |
| remove | 删除过时的前缀 | boolean | true |
| flexbox | Autoprefixer将为flexbox参数添加前缀，默认值为true。设定值为"no-2009"时，只会为最新版本和IE版本浏览器添加前缀 | boolean | true |
| grid | ie添加栅格化属性兼容 | boolean | false |
| browsers | 支持的浏览器列表 | array | false |
#### browsers list
* `> 5%`: （通过）全局使用统计选择的版本 
  `>=`, `<` and `<=` 也可以使用
* `> 5% in US`: 应用美国使用统计。接受双字母国家码
* `> 5% in alt-AS`: 应用亚洲区使用（应用）统计。所有地区码的列表可以在  caniuse-lite/数据/地区等找到。
* `> 5% in my stats`: 在我的统计：使用自定义使用（应用）数据。
* `cover 99.5%`: 大部分流行浏览器均提供覆盖。
* `cover 99.5% in US`: 覆盖美国99.5%:  同上，带有双字母国家码。
* `cover 99.5% in my stats`: 覆盖 99.5%在我的stats（建议理解为统计）: 应用自定义使用（应用）数据。
* `extends browserslist-config-mycompany`:  从浏览器列表-配置-我的公司npm包获取查询。
  `browserslist-config-mycompany` 
* `ie 6-8`: 选择一个广泛的版本范围,包含ie 6-8。
* `Firefox > 20`: 火狐浏览器版本大于20的。
  `>=`, `<` and `<=` 也可以使用。
* `iOS 7`: ios版本7的。
* `Firefox ESR`: 火狐的最新版本ESR。
* `unreleased versions` or `unreleased Chrome versions`: 未公布版本或未公布的Chrome版本： alpha和beta版本。
* `last 2 major versions` or `last 2 iOS major versions`: 最后两个主要版本或最后两个iOS主要版本： 所有最后2个主要版本公布的次要（此处有歧义）/补丁。
* `since 2015` or `last 2 years`: 自从2015年或最后两年：所有自2015年公布的版本（包含2015-03和2015-03-10）。
  (also `since 2015-03` and `since 2015-03-10`).
* `dead`: browsers from `last 2 version` query, but with less than 0.5%
  in global usage statistics and without official support or updates
  for 24 months. Right now it is `IE 10`, `IE_Mob 10`, `BlackBerry 10`,
  `BlackBerry 7`, and `OperaMobile 12.1`.
  消亡：在最后两个版本查询中的，但在全局（另译为全球）使用统计中少于0.5%，并且没有官方支持或24个月没有升级（的）。目前为IE 10, IE_Mob 10, 黑莓10, 黑莓 7, 以及Opera移动版 12.1.
* `last 2 versions`: 每个浏览器的最后两个版本。
* `last 2 Chrome versions`: Chrome 浏览器的最后两个版本。
* `defaults`: 浏览器列表的默认浏览器
  (`> 0.5%, last 2 versions, Firefox ESR, not dead`). (> 0.5%, 最后两个版本, Firefox ESR, 未消亡)。
* `not ie <= 8`: 不包括之前查询所选取的浏览器。
***
#### example 如下：
```
const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
 
gulp.task('default', () =>
    gulp.src('src/app.css')
        .pipe(autoprefixer({
            browsers: [
                'last 2 versions',
                '> 5%',
                'ie 6-8'
                ],
            cascade: false
        }))
        .pipe(gulp.dest('dist'))
);
```