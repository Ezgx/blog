---
title: hexo一个菜鸟滴踩坑记录和解决办法分享
abbrlink: 21521
date: 2022-12-19 15:39:03
tags:
  - hexo
  - 碎碎念
  - FAQ
swiper_index: 6
---
# 今天继续水一篇（
就说点hexo踩的坑和小技巧吧
<!-- more -->

:::danger
# 首先，踩坑
:::
玩hexo，我踩的坑还真不少
## Q:pug组件加载失败
A:
```bash
cnpm i pug-lexer --save
```
就好啦！

## Q:falal：spawn failed
A:多上传几次
实在不行就，挂梯
免费梯：[ikuuu.dev](https://ikuuu.dev/)

## Q:TypeError [ERR_INVALID_URL]: Invalid URL
```fatal err
FATAL
TypeError [ERR_INVALID_URL]: Invalid URL
    at new NodeError (node:internal/errors:393:5)
    at URL.onParseError (node:internal/url:565:9)
    at new URL (node:internal/url:645:5)
    at module.exports (D:\blog\node_modules\_hexo@6.3.0@hexo\lib\hexo\load_config.js:31:24)
```
A:很简单，url没写对

## Q:打开localhost后是一串文字（butterfly
A:安装你主题对应的渲染器就好
我是butterfly，所以
```bash
cnpm i hexo-renderer-pug --save
```

## Q:预览跑板，是一堆图片和文字
A:
:::warning
一般有几种原因
### 这里的方法通用适用于其他一些报错
:::
### 如果你在魔改
1.检查你是否按照魔改教程操作，一步步检查。
2.检查教程中的主题和你的主题==版本是否过老==，或者你使用的主题==是否为preview版==。
3.如果觉得太难，建议放弃本次魔改
4.建议每次魔改之前备份主题（作者之前就不听话一直不备份，最后崩了出现不可逆错误真的痛啊！
### 如果你没在魔改
请检查最近是否动过==_config.yml==和==主题config==，动了改回来，一般会好哒！
==再说一遍，备份主题和配置，真的很重要==

## Q:ERROR Deployer not found: git
A:没安装deployer-git
```bash
cnpm i hexo-deployer-git --save
```
解决

## Q:最后一个问题我自己都解决不了，在线求大神:)
```bash
cnpm un hexo-electric-clock --save
npm ERR! Cannot read properties of null (reading 'isDescendantOf')

npm ERR! A complete log of this run can be found in:
npm ERR!     C:\Users\cbx\AppData\Local\npm-cache\_logs\2022-12-19T08_41_26_668Z-debug-0.log
```
在线求大神:(


## 最后就是一点优化
### 首先，githubpage太慢可以用Netlify。

### 占用问题
我发现了博客目录下的source里面的文件夹会生成到public里面，而目录就是看public里的目录填写的，最终上传的也是public，主题目录下/source/img会在public力生成img文件夹，然而放在博客/source/img力也会在同样的路径生成img文件夹，我用过很多主题，每个里面都放一个img文件夹存图片，尊滴很费空间!:(
所~以！
我把主题的img文件夹挪到博客的/source/img，这样就不用每个主题都放一份了，省了几倍空间，好耶！:)
:::danger
当然，这么弄的前提是，你每个主题用的图片都一样，或者直接全包含。
:::