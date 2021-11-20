# pkg-up
找到最内层的`package.json`路径。

> Find the closest package.json file

## Usage
```
/
└── Users
    └── sindresorhus
        └── foo
            ├── package.json
            └── bar
                ├── baz
                └── example.js
```

```js
// example.js
import {pkgUp} from 'pkg-up';

console.log(await pkgUp());
//=> '/Users/sindresorhus/foo/package.json'
```

## API
#### pkgUp(options?)
Returns a Promise<string> for the file path, or Promise<undefined> if it could not be found.

#### pkgUpSync(options?)
Returns the file path, or undefined if it could not be found.

##### options
Type: object

##### cwd
Type: string
Default: process.cwd()

The directory to start from.


## 参考
[pkg-up](https://www.npmjs.com/package/pkg-up)