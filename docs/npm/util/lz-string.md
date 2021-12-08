# lz-string
用来压缩字符串，减小体积。   

> lz-string was designed to fulfill the need of storing large amounts of data in localStorage, specifically on mobile devices. localStorage being usually limited to 5MB, all you can compress is that much more data you can store.

## Usage
call `compress` and `decompress` on the LZString object.
```js
var string = "This is my compression test.";
alert("Size of sample is: " + string.length);

var compressed = LZString.compress(string);
alert("Size of compressed sample is: " + compressed.length);

string = LZString.decompress(compressed);
alert("Sample is: " + string);
```


## 参考
[lz-string Homepage](https://pieroxy.net/blog/pages/lz-string/index.html)