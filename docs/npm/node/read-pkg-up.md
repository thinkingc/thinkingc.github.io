# read-pkg-up
获取最近的 package.json 文件。

> Read the closest package.json file

## Usage
```js
import {readPackageUp} from 'read-pkg-up';

console.log(await readPackageUp());
/*
{
	packageJson: {
		name: 'awesome-package',
		version: '1.0.0',
		…
	},
	path: '/Users/sindresorhus/dev/awesome-package/package.json'
}
*/
```

## API
#### readPackageUp(options?)
Returns a Promise<object> or Promise<undefined> if no package.json was found.

#### readPackageUpSync(options?)
Returns the result object or undefined if no package.json was found.

##### options
Type: object

##### cwd
Type: string
Default: process.cwd()

The directory to start looking for a package.json file.

##### normalize
Type: boolean
Default: true

Normalize the package data.

## 参考
[read-pkg-up](https://www.npmjs.com/package/read-pkg-up)