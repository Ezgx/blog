---
title: chrome发布新的css单位：lvh，svh，dvh！
tags:
  - 前端
cover: 'https://pic.imgdb.cn/item/649ea1491ddac507cc7016a8.png'
category: css
abbrlink: 2637
date: 2023-02-08 21:32:01
---

# 引入vh，vw的定义

1. `1vw` 等于1/100的视口宽度 （Viewport Width）
2. `1vh` 等于1/100的视口高度 （Viewport Height）
3. `vmin` — vmin 的值是当前 vw 和 vh 中较小的值
4. `vmax` — vw 和 vh 中较大的值

## 什么是视口

视口代表当前可见的计算机图形区域。在 Web 浏览器术语中，通常与浏览器窗口相同，但不包括浏览器的 UI，菜单栏等——即指你正在浏览的文档的那一部分。

——摘录自[MDN web docs](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Viewport_concepts)

![](https://pic2.imgdb.cn/item/644a66a70d2dde5777d941a7.jpg)

![](https://pic4.zhimg.com/v2-9d2ad3aec15670e746743eb64bb213cb_r.jpg)

## vh在移动端存在的问题

在移动端中，`100vh` 不总是等于一屏幕的高度。有的时候，100vh 高度会出现`滚动条`，或者屏幕下方的`工具栏`等等乱七八糟栏，总之，移动端的屏幕高度是动态的。

屏幕高度动态，使用vh会导致内容溢出屏幕，如图：

![](https://pic2.imgdb.cn/item/644a67190d2dde5777d9d352.jpg)

:::warning
注意看溢出的蓝色部分。
:::

工具栏收回，地址栏压缩后，显示正常：
![](https://pic2.imgdb.cn/item/644a67580d2dde5777da206f.jpg)

## chrome发布的解决办法：新单位lvh,svh,dvh

### lvh，svh：静态

lvh：大视口，所有的大视口具有`lv`前缀，就像刚刚说的`lvh`，有但不限于：`lvw`，`lvmax`，`lvmin`等等大视口单位

svh：小视口，所有的小视口具有`sv`前缀，有但不限于：`svh`，`svw`，`svmax`，`svmin`

![](https://pic2.imgdb.cn/item/644a67790d2dde5777da4c80.jpg)

如果视口本身大小不变，那么lvh，svh的大小是固定的，只有改变视口大小，lvh，svh的大小才会改变，故这些视口单位是静态的。

### dvh：动态视口

这个视口单位是博主在本次更新中最喜欢的一个了，非常好用。

dvh：动态视口，展开动态工具栏时，动态视口等于小视口的大小。当动态工具栏缩回时，动态视口等于大视口的大小，随情况而变。

动态视口有dv前缀，有但不限于：`dvh`，`dvw`，`dvmax`，`dvmin`

如果高度设为100dvh，宽度设为100vw，那么这个盒子将永远充满屏幕。不会溢出也不会空白。

![](https://pic2.imgdb.cn/item/644a679e0d2dde5777da83ba.jpg)

上述单位于`chrome108版本`发布。