---
title: Ecx-UI-5-侧栏
date: 2023-01-15 10:52:49
tags:
  - hexo
  - 教程
  - Ecx-UI
  - 魔改
  - butterfly
abbrlink: 83242
category: ui魔改
---
Ecx-UI第五期

<!-- more -->

1. 侧栏

- 一般情况
```css
/* 侧边栏颜色&悬浮 */
#aside-content .card-widget {
    position: relative;
    overflow: hidden;
    margin-top: 20px;
    padding: 20px 24px;
    box-shadow: 0px 0px 10px 5px rgb(104, 104, 104) inset;
    background: rgba(236, 240, 0, 0.8);
}
```
- 如果你装了历史上的今天插件，`还需要额外添加下面这些`，注意是`额外添加！`，不是替换！
```css
/* 历史上的今天部分白色bug修复 */
.history_slide {
    text-align: left;
    font-size: 14px;
    background: var(--card-bg);
    display: flex;
    flex-direction: column;
    background: rgba(0, 0, 0, 0) !important;
    box-shadow: 0px 0px 10px 5px rgb(104, 104, 104);
    align-items: flex-start;
}
```
- 手机端菜单
```css
#sidebar #sidebar-menus.open {
  background-image: linear-gradient(25deg, #4f73cd, #919fde, #c9ceef, #d7eafc);
}
#sidebar #menu-mask {
  background: #ffffff7e;
}
```

- 作者卡片
```css
/* 侧边栏作者卡片动态渐变色 */
#aside-content > .card-widget.card-info {
    background: linear-gradient(
      -45deg,
      #ec0909,
      #bd06ce,
      #0fdbe2,
      #49ec08,
      #f8e800,
      #ec0909
    );
    box-shadow: 0px 0px 10px 5px rgb(128, 128, 128) inset;
    position: relative;
    background-size: 400% 400%;
    -webkit-animation: Gradient 10s ease infinite;
    -moz-animation: Gradient 10s ease infinite;
    animation: Gradient 10s ease infinite !important;
  }
  @-webkit-keyframes Gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
  @-moz-keyframes Gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
  @keyframes Gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
```
- 头像变方
```css
/* 方形头像 */
.avatar-img {
  border-radius: 20px 20px 20px 20px !important;
}
```
- 框内阴影
```css
/* 名片框内阴影 */
.is-center {
    box-shadow: 0px 0px 10px 5px rgb(0 0 0 / 40%);
    border-radius: 10px;
    text-align: center;
}
```
