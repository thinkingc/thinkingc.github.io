# minimatch
使用[glob表达式](https://blog.mhuig.top/posts/55b264de.html)的方式来判断文件是否匹配的工具，类似于正则表达式。

## 匹配规则

- `*` 匹配0到多个字符
- `?` 匹配一个字符
- `**` 匹配0到多个子目录，递归匹配子目录
- `!` 在模式的开头用于否定一个匹配模式(即排除与模式匹配的信息)
- `{}` 允许使用一个逗号分割的列表或者表达式  
- `[...]` 匹配一个字符列表，类似正则表达式的字符列表
- `!(pattern|pattern|pattern)` 反向匹配括号内的模式
- `?(pattern|pattern|pattern)` 匹配0或1个括号内的模式
- `+(pattern|pattern|pattern)` 匹配至少1个括号内的模式
- `*(pattern|pattern|pattern)` 匹配0到多个括号内的模式
- `@(pattern|pat*|pat?erN)` 精确匹配括号内的模式

## 用法
### `minimatch(path, pattern, options)`  
```js
var isJS = minimatch(file, "*.js", { matchBase: true })
```

```js
var minimatch = require("minimatch")

minimatch("bar.foo", "*.foo") // true!
minimatch("bar.foo", "*.bar") // false!
minimatch("bar.foo", "*.+(bar|foo)", { debug: true }) // true, and noisy!
```

### `minimatch.filter(pattern, options)`
**Returns a function** that tests its supplied argument, suitable for use with Array.filter. Example:  
```js
var javascripts = fileList.filter(minimatch.filter("*.js", {matchBase: true}))
```

### `minimatch.match(list, pattern, options)`
Match against the list of files, in the style of fnmatch or glob. If nothing is matched, and options.nonull is set, then return a list containing the pattern itself.  
```js
var javascripts = minimatch.match(fileList, "*.js", {matchBase: true}))
```

### `minimatch.makeRe(pattern, options)`
根据pattern生成正则表达式。

## Options
All options are `false` by default.

> 注：配置很多，没有都列出来


### `matchBase`
If set, then patterns without slashes will be matched against the basename of the path if it contains slashes. For example, `a?b` would match the path `/xyz/123/acb`, but not `/xyz/acb/123`.

## 参考
[minimatch](https://github.com/isaacs/minimatch)  
[minimatch模块学习](https://www.kancloud.cn/diaoyundexia/text/149654)