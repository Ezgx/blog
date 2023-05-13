---
title: hexo一体化上传命令
tags:
  - hexo
  - 教程
  - 优化
abbrlink: 33392
date: 2022-12-29 13:17:42
swiper_index: 5
category: 
  - 博客优化
---
<!-- more -->

我又来~~水文~~了<br>
hexo这上传命令有点长哈<br>
中间还得连接<br>
```bash
hexo cl && hexo g &7 hexo d
```
怎么简化它呢<br>
今天就来尝试一下<br>
来，看看有哪些文件
```file
├─blog
╰─╮
  ├─.deploy_git
  ├─.github
  ├─node_modules
  ├─public
  ├─scaffolds
  ├─source
  ├─themes
  ├─.gitignore
  ├─_config.butterfly.yml
  ├─_config.yml
  ├─db.json
  ╰─package.json
```
今天咱们要改的，就是
```
package.json
```
这里面控制了依赖，命令等等
打开这个文件
我们能发现
```json
{
  "name": "hexo-site",
  "version": "0.0.0",
  "private": true,
  "scripts": {
    "build": "hexo generate",
    "clean": "hexo clean",
    "deploy": "hexo deploy",
    "server": "hexo server"
  },
```
里面的`build，clean，deploy`等等的，就是命令
所以就可以根据这个来自定义
```diff
{
  "name": "hexo-site",
  "version": "0.0.0",
  "private": true,
  "scripts": {
    "build": "hexo generate",
    "clean": "hexo clean",
    "deploy": "hexo deploy",
    "server": "hexo server",
+   "clgs": "hexo cl && hexo g && hexo s",
+   "clgd": "hexo cl && hexo g && hexo d &&",
+   "new": "hexo cl && hexo g"
  },
```
:::warning
一定要注意逗号，最后一行没有逗号，但是前面有！
不然会报错的
:::
我这里加的名称为：clgs和clgd还有new
仔细看后面的命令，就可以知道是干什么的了
`npm run 名字，就可以运行了`
```bash
npm run clgd #清缓存，生成静态文件，上传

npm run clgs #清缓存，生成静态文件，开启本地localhost服务

npm run new #清缓存，生成静态文件
```
