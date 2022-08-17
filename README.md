## 关于模块导出文件

[ES6入门 - 模块章节](https://es6.ruanyifeng.com/#docs/module-loader#ES6-%E6%A8%A1%E5%9D%97%E4%B8%8E-CommonJS-%E6%A8%A1%E5%9D%97%E7%9A%84%E5%B7%AE%E5%BC%82)

```json
{
    // 兼容旧版的 CommonJs
    "main": "utils.js",
    // exports 优先级高于 main, 只有支持 ES6 的 Nodejs 才认识该字段
    "exports": {
        "import": "./index.mjs",
        "default": ".index.js"
    }
}/;
```

[Dual CommonJS/ES module packages](https://nodejs.org/api/packages.html#dual-commonjses-module-packages)

根据 Nodejs 官方文档的解释

package.json 中 module 字段并不被 Nodejs 所识别，只能被一些构建工具所识别