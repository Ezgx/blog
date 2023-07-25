---
title: hexo上传到github或gitee
tags:
  - hexo
  - 教程
cover: >-
  https://pic.imgdb.cn/item/649efe141ddac507cc348243.png
swiper_index: 4
category:
  - 博客优化
abbrlink: 61230
date: 2022-12-29 12:57:58
---
# 哔哔
<!-- more -->

emm
最近更了几篇文<br>
在看我自己博客的时候突然发现<br>
我忘了写hexo上传的教程<br>
sorry！<br>
`所以今天它就来了！`<br>
:::warning
本教程并不适用于腾讯云阿里云等等的服务器<br>
仅适用于github和gitee
:::

首先安装hexo的git上传器
```bash
cnpm i hexo-deployer-git --save
```
然后在`%blogroot%/_config.yml`中，找到deploy字段<br>
改为：
```yaml
deploy: 
  type: git
  repo: https://github.com/用户名/仓库
  branch: 分支
```
如果你想同时上传到gitee和github
请按照如下示例格式填写:
```yaml
deploy: 
  type: git
  repo: 
    - https://gitee.com/用户名/仓库 #这是gitee
    - https://github.com/用户名/仓库 #这是github
  branch: 
    - main
    - master 
# gitee默认主分支是main，github默认是master，这里我就都上传了，省事！
```
然后运行
```cmd
hexo cl && hexo g && hexo d
```
:::danger
如果是powershell就把`&&`换成一个`|`就好了
就像下面这样：
```powershell
hexo cl | hexo g | hexo d
```
