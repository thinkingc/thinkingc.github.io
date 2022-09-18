# copy-to-clipboard

Simple module exposing copy function that will try to use execCommand with fallback to IE-specific clipboardData interface and finally, resort to usual prompt with proper text content and message.

## Example

```js
npm i --save copy-to-clipboard
```

```js
import copy from 'copy-to-clipboard';

copy('Text');

// Copy with options
copy('Text', {
  debug: true,
  message: 'Press #{key} to copy',
});
```

## API

`copy(text: string, options: object): boolean` — tries to copy text to clipboard. Returns true if no additional keystrokes were required from user (so, execCommand, IE's clipboardData worked) or false.

## 参考

[copy-to-clipboard](https://github.com/sudodoki/copy-to-clipboard)
