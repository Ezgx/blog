---
title: 速度优化-css预加载
tags:
  - hexo
  - 教程
  - 前端
abbrlink: 47635
date: 2023-01-09 01:54:51
top_group_index: 1
category: 
  - 博客优化
---
Ecx-project进行的过程中<br>
发现了一个问题<br>
<!-- more -->

就是我加了nerdfont，仿宋等等多个字体<br>
使用的css引入<br>
再加上我没有cdn，用的也是github，加载非常慢<br>
字体要十几秒。

:::success
这就有了今天的优化方案
:::

:::tips
思路：
首先我想到的方式有：
1. 预加载<br>
- 原理：提早浏览器对资源的加载时机，和页面本身的解析流程更加同时，加速页面整体的渲染流程
- 它慢，让它先加载
- 方法：预加载css和ttf
1. cdn
- 没钱买
:::

今天来预加载
- 首先声明：教程适用于butterfly主题

在主题配置中找到inject字段
```yaml
# Inject
# Insert the code to head (before '</head>' tag) and the bottom (before '</body>' tag)
# 插入代码到头部 </head> 之前 和 底部 </body> 之前
inject:
  head:
    - <link rel="stylesheet" type="text/css" href="/css/自定义css的名称.css">
  bottom:
```
可以看到你引用的css

然后添加预加载
```yaml
# Inject
# Insert the code to head (before '</head>' tag) and the bottom (before '</body>' tag)
# 插入代码到头部 </head> 之前 和 底部 </body> 之前
inject:
  head:
    - <link rel="stylesheet" type="text/css" href="/css/自定义css的名称.css">
    - <link rel="preload" as="style" type="text/css" href="/css/自定义css的名称.css">
  bottom:
```
`注意这里两处自定义css的名称必须相同，这样他们才会指向同一个css`

如果要预加载字体，先确保字体已经正常显示
然后
```yaml
# Inject
# Insert the code to head (before '</head>' tag) and the bottom (before '</body>' tag)
# 插入代码到头部 </head> 之前 和 底部 </body> 之前
inject:
  head:
    - <link rel="preload" as="font" type="font/ttf" href="字体路径" crossorigin="anonymous">
  bottom:
```

特别鸣谢：

![](https://wlopck.gitee.io/img/posts/csspreload-thank.png)