# find-up
获取文件或目录的路径通过向上遍历目录。

> Find a file or directory by walking up parent directories.

## Usage
```js
/
└── Users
    └── sindresorhus
        ├── unicorn.png
        └── foo
            └── bar
                ├── baz
                └── example.js
```

`example.js`  
```js
import path from 'node:path';
import {findUp, pathExists} from 'find-up';

console.log(await findUp('unicorn.png'));
//=> '/Users/sindresorhus/unicorn.png'

console.log(await findUp(['rainbow.png', 'unicorn.png']));
//=> '/Users/sindresorhus/unicorn.png'

console.log(await findUp(async directory => {
	const hasUnicorns = await pathExists(path.join(directory, 'unicorn.png'));
	return hasUnicorns && directory;
}, {type: 'directory'}));
//=> '/Users/sindresorhus'
```

## API
#### findUp(name, options?)
#### findUp(matcher, options?)
Returns a Promise for either the path or undefined if it couldn't be found.

#### findUp([...name], options?)
Returns a Promise for either the first path found (by respecting the order of the array) or undefined if none could be found.

#### findUpMultiple(name, options?)
findUpMultiple(matcher, options?)
Returns a Promise for either an array of paths or an empty array if none could be found.

#### findUpMultiple([...name], options?)
Returns a Promise for either an array of the first paths found (by respecting the order of the array) or an empty array if none could be found.

#### findUpSync(name, options?)
findUpSync(matcher, options?)
Returns a path or undefined if it couldn't be found.

#### findUpSync([...name], options?)
Returns the first path found (by respecting the order of the array) or undefined if none could be found.

#### findUpMultipleSync(name, options?)
findUpMultipleSync(matcher, options?)
Returns an array of paths or an empty array if none could be found.

#### findUpMultipleSync([...name], options?)
Returns an array of the first paths found (by respecting the order of the array) or an empty array if none could be found.

## 参考
[find-up](https://www.npmjs.com/package/find-up)