# npm-run-all
批量执行 npm 命令。

## Node API
A Node module to run given npm-scripts in parallel or sequential.

```js
const runAll = require("npm-run-all");

runAll(["clean", "lint", "build:*"], {parallel: false})
    .then(() => {
        console.log("done!");
    })
    .catch(err => {
        console.log("failed!");
    });

runAll(["build:* -- --watch"], {parallel: true})
    .then(() => {
        console.log("done!");
    })
    .catch(err => {
        console.log("failed!");
    });
```

### `runAll`
```js
let promise = runAll(patterns, options);
```

`runAll` returns a promise that will becomes fulfilled when all scripts are completed. The promise will become rejected when any of the scripts exit with a non-zero code.  

The promise gives results to the fulfilled handler. results is an array of objects which have 2 properties: `name` and `code`. The `name` property is the name of a npm-script. The `code` property is the exit code of the npm-script. If the npm-script was not executed, the code property is `undefined`.

```js
runAll(["clean", "lint", "build"])
    .then(results => {
        console.log(`${results[0].name}: ${results[0].code}`); // clean: 0
        console.log(`${results[1].name}: ${results[1].code}`); // lint: 0
        console.log(`${results[2].name}: ${results[2].code}`); // build: 0
    });
```

## 参考
[npm-run-all](https://www.npmjs.com/package/npm-run-all)
[Node API](https://github.com/mysticatea/npm-run-all/blob/HEAD/docs/node-api.md)