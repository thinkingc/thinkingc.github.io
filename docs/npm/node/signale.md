# signale
> Hackable and configurable to the core, signale can be used for **logging purposes, status reporting, as well as for handling the output rendering process of other node modules and applications**.

可扩展的日志记录器。

## Feature
- 16个开箱即用的记录器
- 可扩展的核心
- 简洁漂亮的输出
- 集成了计时器
- 自定义可插拔记录器
- 交互模式和常规模式
- 文件名，日期和时间戳支持
- 局部记录器和计时器
- 字符串插值支持
- 多个可配置的输出流
- 简单且简介的语法
- 可通过 package.json 进行全局配置
- 可覆盖每个文件和记录器的配置

## Example
一个简单的例子：
```js
const signale = require('signale');

signale.success('Operation successful');
signale.debug('Hello', 'from', 'L59');
signale.pending('Write release notes for %s', '1.2.0');
signale.fatal(new Error('Unable to acquire lock'));
signale.watch('Recursively watching build directory...');
signale.complete({prefix: '[task]', message: 'Fix issue #59', suffix: '(@klauscfhq)'});

```
![ex](https://github.com/klaussinani/signale/raw/master/media/default-loggers.png)


## 参考
[signale](https://github.com/klaussinani/signale/blob/master/docs/readme.zh_CN.md)