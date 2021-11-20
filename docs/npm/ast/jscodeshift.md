# jscodeshift
`jscodeshift`是一个用来重构多个`js`或`ts`文件的工具。  

> jscodeshift is a toolkit for running codemods over multiple JavaScript or TypeScript files. It provides:  
> * A runner, which executes the provided transform for each file passed to it. It also outputs a summary of how many files have (not) been transformed.
> * A wrapper around recast, providing a different API. Recast is an AST-to-AST transform tool and also tries to preserve the style of original code as much as possible.


## 用法
```js
/**
 * This replaces every occurrence of variable "foo".
 */
module.exports = function(fileInfo, api, options) {
  // transform `fileInfo.source` here
  // ...
  // return changed source
  return api.jscodeshift(fileInfo.source)
    .findVariableDeclarators('foo')
    .renameTo('bar')
    .toSource();
}
```

## 参考
[jscodeshift](https://github.com/facebook/jscodeshift)  
[字节前端如何基于 AST 做国际化重构？](https://mp.weixin.qq.com/s/NC700iM9vfEBWNg35LZPJw)  
[代码自动化重构利器——jscodeshift 初探](https://zhuanlan.zhihu.com/p/353940140)