---
title: markdown-it食用教程
tags:
  - 教程
abbrlink: 65320
date: 2022-12-12 17:35:36
category: 
  - 杂谈教程
---
# 给hexo食用更高级的渲染器：markdown-it
++先卸载++==默认的渲染器==
<!-- more -->

```
npm un hexo-renderer-marked --save
```
然后安装markdown-it
<!-- more -->
```bash
npm i hexo-renderer-markdown-it --save
```

在==博客_config.yml==中写入

```Yaml
markdown:
  preset: "default"
  render:
    html: true
    xhtmlOut: false
    langPrefix: "language-"
    breaks: true
    linkify: true
    typographer: true
    quotes: "“”‘’"
  enable_rules:
  disable_rules:
  plugins:
    - markdown-it-abbr
    - markdown-it-cjk-breaks
    - markdown-it-deflist
    - markdown-it-emoji
    - markdown-it-footnote
    - markdown-it-ins
    - markdown-it-mark
    - markdown-it-sub
    - markdown-it-sup
    - markdown-it-checkbox
    - markdown-it-imsize
    - markdown-it-expandable
    - name: markdown-it-container
      options: success
    - name: markdown-it-container
      options: tips
    - name: markdown-it-container
      options: warning
    - name: markdown-it-container
      options: danger
  anchors:
    level: 2
    collisionSuffix: ""
    permalink: false
    permalinkClass: "header-anchor"
    permalinkSide: "left"
    permalinkSymbol: "¶"
    case: 0
    separator: "-"
```

运行==hexo s==
::: danger
**报错**
ERROR Plugin load failed: hexo-renderer-markdown-it
Error: Cannot find module 'markdown-it-imsize'
Require stack:
- D:\blog\node_modules\_hexo-renderer-markdown-it@6.1.0@hexo-renderer-markdown-it\lib\renderer.js
- D:\blog\node_modules\_hexo-renderer-markdown-it@6.1.0@hexo-renderer-markdown-it\index.js
    at Module._resolveFilename (node:internal/modules/cjs/loader:995:15)
    at Module._load (node:internal/modules/cjs/loader:841:27)
    at Module.require (node:internal/modules/cjs/loader:1061:19)
    at require (node:internal/modules/cjs/helpers:103:18)
    at D:\blog\node_modules\_hexo-renderer-markdown-it@6.1.0@hexo-renderer-markdown-it\lib\renderer.js:41:27
    at Array.reduce (<anonymous>)
    at new Renderer (D:\blog\node_modules\_hexo-renderer-markdown-it@6.1.0@hexo-renderer-markdown-it\lib\renderer.js:37:29)
    at D:\blog\node_modules\_hexo-renderer-markdown-it@6.1.0@hexo-renderer-markdown-it\index.js:32:18
    at D:\blog\node_modules\_hexo@6.3.0@hexo\lib\hexo\index.js:305:14
    at tryCatcher (D:\blog\node_modules\_bluebird@3.7.2@bluebird\js\release\util.js:16:23)
    at Promise._settlePromiseFromHandler (D:\blog\node_modules\_bluebird@3.7.2@bluebird\js\release\promise.js:547:31)
    at Promise._settlePromise (D:\blog\node_modules\_bluebird@3.7.2@bluebird\js\release\promise.js:604:18)
    at Promise._settlePromise0 (D:\blog\node_modules\_bluebird@3.7.2@bluebird\js\release\promise.js:649:10)
    at Promise._settlePromises (D:\blog\node_modules\_bluebird@3.7.2@bluebird\js\release\promise.js:729:18)
    at _drainQueueStep (D:\blog\node_modules\_bluebird@3.7.2@bluebird\js\release\async.js:93:12)
    at _drainQueue (D:\blog\node_modules\_bluebird@3.7.2@bluebird\js\release\async.js:86:9)
    at Async._drainQueues (D:\blog\node_modules\_bluebird@3.7.2@bluebird\js\release\async.js:102:5)
    at Async.drainQueues [as _onImmediate] (D:\blog\node_modules\_bluebird@3.7.2@bluebird\js\release\async.js:15:14)
    at process.processImmediate (node:internal/timers:471:21)
:::

运行
```bash
cnpm i markdown-it-imsize --save
```
++解决++

::: warning
**测试渲染器**
发现警告注意成功等模块不显示颜色
:::

在/themes/主题/source/css下，==新建_custom文件夹==，在文件夹下新建==markdown.css==，写入
```
.tips {
    padding-left: 10px;
    background-color: rgba(52,152,219,.3);
    border-left: 4px solid rgb(52,152,219);
    color: darken(rgb(52,152,219),20%);
}
.success {
    padding-left: 10px;
    background-color: rgba(46,204,113,.3);
    border-left: 4px solid rgb(46,204,113);
    color: darken(rgb(46,204,113),20%);
}
.warning {
    padding-left: 10px;
    background-color: rgba(241,196,15,.3);
    border-left: 4px solid rgb(241,196,15);
    color: darken(rgb(241,196,15),20%);
}
.danger {
    padding-left: 10px;
    background-color: rgba(231,76,60,.3);
    border-left: 4px solid rgb(231,76,60);
    color: darken(rgb(231,76,60),20%);
}
```
在主题配置文件中引入此css
后可显示效果