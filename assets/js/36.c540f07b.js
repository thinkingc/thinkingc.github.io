(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{432:function(t,n,s){"use strict";s.r(n);var a=s(22),e=Object(a.a)({},(function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"find-up"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#find-up"}},[t._v("#")]),t._v(" find-up")]),t._v(" "),s("p",[t._v("获取文件或目录的路径通过向上遍历目录。")]),t._v(" "),s("blockquote",[s("p",[t._v("Find a file or directory by walking up parent directories.")])]),t._v(" "),s("h2",{attrs:{id:"usage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[t._v("#")]),t._v(" Usage")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("\n└── Users\n    └── sindresorhus\n        ├── unicorn"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("png\n        └── foo\n            └── bar\n                ├── baz\n                └── example"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js\n")])])]),s("p",[s("code",[t._v("example.js")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" path "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'node:path'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("findUp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" pathExists"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'find-up'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("findUp")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'unicorn.png'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//=> '/Users/sindresorhus/unicorn.png'")]),t._v("\n\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("findUp")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'rainbow.png'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'unicorn.png'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//=> '/Users/sindresorhus/unicorn.png'")]),t._v("\n\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("findUp")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("directory")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" hasUnicorns "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("pathExists")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("path"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("join")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("directory"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'unicorn.png'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" hasUnicorns "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" directory"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("type"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'directory'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//=> '/Users/sindresorhus'")]),t._v("\n")])])]),s("h2",{attrs:{id:"api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#api"}},[t._v("#")]),t._v(" API")]),t._v(" "),s("h4",{attrs:{id:"findup-name-options"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#findup-name-options"}},[t._v("#")]),t._v(" findUp(name, options?)")]),t._v(" "),s("h4",{attrs:{id:"findup-matcher-options"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#findup-matcher-options"}},[t._v("#")]),t._v(" findUp(matcher, options?)")]),t._v(" "),s("p",[t._v("Returns a Promise for either the path or undefined if it couldn't be found.")]),t._v(" "),s("h4",{attrs:{id:"findup-name-options-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#findup-name-options-2"}},[t._v("#")]),t._v(" findUp([...name], options?)")]),t._v(" "),s("p",[t._v("Returns a Promise for either the first path found (by respecting the order of the array) or undefined if none could be found.")]),t._v(" "),s("h4",{attrs:{id:"findupmultiple-name-options"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#findupmultiple-name-options"}},[t._v("#")]),t._v(" findUpMultiple(name, options?)")]),t._v(" "),s("p",[t._v("findUpMultiple(matcher, options?)\nReturns a Promise for either an array of paths or an empty array if none could be found.")]),t._v(" "),s("h4",{attrs:{id:"findupmultiple-name-options-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#findupmultiple-name-options-2"}},[t._v("#")]),t._v(" findUpMultiple([...name], options?)")]),t._v(" "),s("p",[t._v("Returns a Promise for either an array of the first paths found (by respecting the order of the array) or an empty array if none could be found.")]),t._v(" "),s("h4",{attrs:{id:"findupsync-name-options"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#findupsync-name-options"}},[t._v("#")]),t._v(" findUpSync(name, options?)")]),t._v(" "),s("p",[t._v("findUpSync(matcher, options?)\nReturns a path or undefined if it couldn't be found.")]),t._v(" "),s("h4",{attrs:{id:"findupsync-name-options-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#findupsync-name-options-2"}},[t._v("#")]),t._v(" findUpSync([...name], options?)")]),t._v(" "),s("p",[t._v("Returns the first path found (by respecting the order of the array) or undefined if none could be found.")]),t._v(" "),s("h4",{attrs:{id:"findupmultiplesync-name-options"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#findupmultiplesync-name-options"}},[t._v("#")]),t._v(" findUpMultipleSync(name, options?)")]),t._v(" "),s("p",[t._v("findUpMultipleSync(matcher, options?)\nReturns an array of paths or an empty array if none could be found.")]),t._v(" "),s("h4",{attrs:{id:"findupmultiplesync-name-options-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#findupmultiplesync-name-options-2"}},[t._v("#")]),t._v(" findUpMultipleSync([...name], options?)")]),t._v(" "),s("p",[t._v("Returns an array of the first paths found (by respecting the order of the array) or an empty array if none could be found.")]),t._v(" "),s("h2",{attrs:{id:"参考"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[t._v("#")]),t._v(" 参考")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://www.npmjs.com/package/find-up",target:"_blank",rel:"noopener noreferrer"}},[t._v("find-up"),s("OutboundLink")],1)])])}),[],!1,null,null,null);n.default=e.exports}}]);