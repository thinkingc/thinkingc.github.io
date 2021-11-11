# update-check
检查npm包是否为最新版。

> This is a very minimal approach to update checking for globally installed packages.

## Usage
如果有最新版本的包，将返回相应版本的`package.json`文件。

> If there's a new update available, the package will return the content of latest version's package.json file:

```js
const pkg = require('./package');
const checkForUpdate = require('update-check');
 
let update = null;
 
try {
    update = await checkForUpdate(pkg);  // 最新版本的 package.json
} catch (err) {
    console.error(`Failed to check for updates: ${err}`);
}
 
if (update) {
    console.log(`The latest version is ${update.latest}. Please update!`);
}
```