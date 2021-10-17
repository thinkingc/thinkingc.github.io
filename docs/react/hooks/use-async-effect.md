# use-async-effect

## introduction
`useEffect`钩子🪝可以帮我们处理程序中的副作用，比如调用api、定时器等。  

用法也很简单，`useEffect(cb, [deps])`接收两个参数，第一个是必填的回调函数，第二个是选填的依赖项。如果用依赖项，依赖项改变会让回调函数重新执行。  

但有一点需要我们特别注意的是回调函数只能返回`function`，而使用`async`声明的函数会返回`Promise`对象，导致程序报错。  

作为一个那么重要的钩子🪝居然不能用`async`，这就有点不爽了。下面来看一个实现可以用`async`作为回调的`useEffect`：

## use-async-effect
`use-async-effect`npm包帮我们加强了`useEffect`，我们可以在`use-async-effect`函数中使用`async`函数。用法如下：  

```js
useAsyncEffect(async () => {
  await doSomethingAsync();
});
```

## API
The API is the same as React's `useEffect()`, except for some notable differences:

- The destroy function is passed as an optional second argument:
```js
useAsyncEffect(callback, dependencies?);
useAsyncEffect(callback, onDestroy, dependencies?);
```

- The async callback will receive a single function to check whether the component is still mounted:
```js
useAsyncEffect(async isMounted => {
  const data1 = await fn1();
  if (!isMounted()) return;

  const data2 = await fn2();
  if (!isMounted()) return;

  doSomething(data1, data2);
});
```

## Examples
Basic mount/unmount
```js
useAsyncEffect(async () => console.log('mount'), () => console.log('unmount'), []);
```

Omitting destroy
```js
useAsyncEffect(async () => console.log('mount'), []);
```

Handle effect result in destroy
```js
useAsyncEffect(() => {
  const timer = setInterval(() => console.log('timer run'), 3000);
  return () => clearInterval(timer);
}, (result) => {
  console.log(result);
  result();  // 清除定时器
})
```

Making sure it's still mounted before updating component state
```js
useAsyncEffect(async isMounted => {
  const data = await fetch(`/users/${id}`).then(res => res.json());
  if (!isMounted()) return;
  setUser(data);
}, [id]);
```

## 源码分析
```js
var React = require('react');
/**
 * 
 * @param effect {function} 回调函数，处理副作用
 * @param destroy {function | array} 类似cleanup function（回调函数返回的函数）或依赖项
 * @param inputs {array} 依赖性
 * 
 **/
function useAsyncEffect(effect, destroy, inputs) {
  // 判断第二个参数是否为函数
  var hasDestroy = typeof destroy === 'function';

  React.useEffect(function () {
    var result; // 记录 effect 函数的返回值
    var mounted = true;  // 标记📌调用组件的当前状态
    var maybePromise = effect(function () {
      return mounted;
    });

    // 将 effect 返回值包裹成 Promise 对象，然后通过 then 函数取出原始值，复制给 result 变量
    Promise.resolve(maybePromise).then(function (value) {
      result = value;
    });

    return function () {
      // clean function 执行后将 mounted 标记为 false
      mounted = false;

      // 如果有传 destroy 就执行
      if (hasDestroy) {
        destroy(result);
      }
    };
  }, hasDestroy ? inputs : destroy);
}
```

## 参考
[use-async-effect](https://www.npmjs.com/package/use-async-effect)  
[Homebrew React Hooks: useAsyncEffect Or How to Handle Async Operations with useEffect](https://dev.to/n1ru4l/homebrew-react-hooks-useasynceffect-or-how-to-handle-async-operations-with-useeffect-1fa8)
