---
title: butterfly侧边按钮重写
tags:
  - butterfly
  - 魔改
categroy: 杂谈教程
cover: 'https://pic.imgdb.cn/item/649f003d1ddac507cc3a01ad.png'
abbrlink: 23370
date: 2023-07-05 00:56:11
---
butterfly自带的侧边按钮外观一般，来重写一个

- 先关掉默认的侧边按钮

```yml
# aside (側邊欄)
# --------------------------------------

aside:
  button: false
```

1.修改`themes/butterfly/layout/includes/layout.pug`: 

 ```diff
......

    include ./rightside.pug
    !=partial('includes/third-party/search/index', {}, {cache: true})
    include ./additional-js.pug
+    .totopbutton(onclick="btf.scrollToDest(0,500)")
+      i.fas.fa-arrow-up
+      span#percent 0
+      include ./waves.pug
+    #console_open_close_btn(onclick='showconsolebtn()')
+      i.fas.fa-gear.fa-spin
+    #console-pannel
+      | 控制台
+      .console-item
+        .console-button(onclick='hideaside()')
+          i.fas.fa-arrows-alt-h
+          .text 侧栏隐显
+      .console-item
+        .console-button(onclick='toggleTheme()')
+          i.fas.fa-adjust
+          .text 暗色模式
+      .console-item
+        .console-button(onclick='hidehometop()')
+          i.fas.fa-grip-vertical
+          .text 顶部隐显
+      .console-item
+        .console-button(onclick='toRandomPost()')
+          i.fas.fa-shuffle
+          .text 随机文章
+    script(src="/js/console.js")
 ```

2.新建`themes/butterfly/source/css/_layout/console.styl`

 ```styl
#console_open_close_btn
    position: fixed
    border-radius: 100vh
    width: 40px
    height 40px
    padding: 4px
    z-index: 10002
    background: var(--heo-theme)
    bottom: 97px
    border: 2px solid #e3e8f7
    right: 7px

[data-theme="dark"] #console_open_close_btn
    border: 2px solid #3d3d3f

#console_open_close_btn i
    line-height: 2
    position: relative
    bottom: 7%
    align-items: center
    display: flex
    justify-content: center
    color: var(--heo-font)

#console-pannel
    position: fixed
    bottom: 145px
    display: block
    z-index: 10002
    background: var(--heo-theme)
    transition: right .5s
    color: var(--heo-font)
    width: 115px
    right: -115px
    height: fit-content
    padding: 10px
    border-radius: 20px
    font-weight: 600
    border: 2px solid #e3e8f7

[data-theme="dark"] #console-pannel
    border: 2px solid #3d3d3f

#console-pannel .console-item .console-button
    display: flex

#console-pannel .console-item .console-button i
    flex: 1
    margin-right: 4px
    line-height: 2

#console-pannel .close-button
    right: 20px
    position: absolute

.totopbutton
    position: fixed
    bottom: 15px
    overflow: hidden
    right: 15px
    background: #94ddee
    border-radius: 100vh
    border: 2.5px solid #00d0ff
    height: 80px
    width: 80px
    z-index: 10000
    user-select: none

[data-theme="dark"] .totopbutton
  background: #3d3d3d
  border: 2.5px solid #F2B94B

.totopbutton span#percent
    font-size: 30px
    justify-content: center
    align-items: center
    display: flex
    font-weight: 700
    color: #fff
    text-shadow: 2px 1px #000
    margin: auto
    z-index inherit
    top: 6px
    position: relative

.totopbutton i
    font-size: 30px
    justify-content: center
    align-items: center
    display: none
    color: #fff
    text-shadow: 2px 1px #000
    font-weight: 700
    margin: auto
    z-index inherit
    top: 20px
    position: relative

.totopbutton:hover i
    display: flex

.totopbutton:hover span#percent
    display: none

.totopbutton .main-hero-waves-area
    width: 100%
    height 50%
    position: absolute
    bottom: 0
    left: 0
    .parallax>use:nth-child(1)
      fill: #1a55ffbd
    .parallax>use:nth-child(2)
      fill: #1a55ff82
    .parallax>use:nth-child(3)
      fill: #1a55ff36
    .parallax>use:nth-child(4)
      fill: #1a55ff

[data-theme="dark"] .totopbutton .main-hero-waves-area
    .parallax>use:nth-child(1)
      fill: #F2B94Bbd
    .parallax>use:nth-child(2)
      fill: #F2B94B82
    .parallax>use:nth-child(3)
      fill: #F2B94B36
    .parallax>use:nth-child(4)
      fill: #F2B94B
 ```

3.引入如下css（此部分来自安知鱼的波浪css）： 

 ```css
/* 波浪css */
.main-hero-waves-area {
  width: 100%;
  left: 0;
  position: relative;
  bottom: -11px;
  top: 12px;
  z-index: 5;
}
.waves-area .waves-svg {
  width: 100%;
  height: 5rem;
}
/* Animation */

.parallax > use {
  animation: move-forever 25s cubic-bezier(0.55, 0.5, 0.45, 0.5) infinite;
}
.parallax > use:nth-child(1) {
  animation-delay: -2s;
  animation-duration: 7s;
  fill: #f7f9febd;
}
.parallax > use:nth-child(2) {
  animation-delay: -3s;
  animation-duration: 10s;
  fill: #f7f9fe82;
}
.parallax > use:nth-child(3) {
  animation-delay: -4s;
  animation-duration: 13s;
  fill: #f7f9fe36;
}
.parallax > use:nth-child(4) {
  animation-delay: -5s;
  animation-duration: 20s;
  fill: #f7f9fe;
}
/* 黑色模式背景 */
[data-theme="dark"] .parallax > use:nth-child(1) {
  animation-delay: -2s;
  animation-duration: 7s;
  fill: #18171dc8;
}
[data-theme="dark"] .parallax > use:nth-child(2) {
  animation-delay: -3s;
  animation-duration: 10s;
  fill: #18171d80;
}
[data-theme="dark"] .parallax > use:nth-child(3) {
  animation-delay: -4s;
  animation-duration: 13s;
  fill: #18171d3e;
}
[data-theme="dark"] .parallax > use:nth-child(4) {
  animation-delay: -5s;
  animation-duration: 20s;
  fill: #18171d;
}

@keyframes move-forever {
  0% {
    transform: translate3d(-90px, 0, 0);
  }
  100% {
    transform: translate3d(85px, 0, 0);
  }
}

.post-bg .main-hero-waves-area {
  top: 420px !important;
}
 ```

4.引入`console.js`

 ```javascript
// 返回顶部 显示网页阅读进度
window.onscroll = percent; // 执行函数
// 页面百分比
function percent() {
  let a = document.documentElement.scrollTop || window.pageYOffset, // 卷去高度
    b =
      Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.offsetHeight,
        document.body.clientHeight,
        document.documentElement.clientHeight
      ) - document.documentElement.clientHeight, // 整个网页高度 减去 可视高度
    result = Math.round((a / b) * 100), // 计算百分比
    btn = document.querySelector("#percent"); // 获取图标
  (btn.innerHTML = result);
}

document.getElementById("page-name").innerText = document.title.split(" | blog")[0];

function toggleTheme() {
  var currentTheme = document.documentElement.getAttribute("data-theme");
  var targetTheme = currentTheme === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", targetTheme);
  new Vue({
    data: function () {
        this.$notify({
            title: "切换成功",
            message: "dark/light",
            position: 'top-left',
            offset: 50,
            showClose: true,
            type: "success",
            duration: 4000
        });
    }
  })
}

function showconsolebtn() {
  var consolebtn = document.getElementById('console-pannel');
  if (consolebtn.style.right === '7px') {
    consolebtn.style.right = '-115px';
  } else {
    consolebtn.style.right = '7px'
  }
}

function hideaside() {
  var aside = document.getElementById('aside-content');
  var postmodule = document.getElementsByClassName('maininner')[0];
  if (aside.style.display === 'none') {
    aside.style.display = 'block';
    postmodule.style.width = '74%';
    new Vue({
      data: function () {
          this.$notify({
              title: "设置成功",
              message: "已显示侧边栏",
              position: 'top-left',
              offset: 50,
              showClose: true,
              type: "success",
              duration: 4000
          });
      }
    })
  }
  else {
    aside.style.display = 'none';
    postmodule.style.width = '100%';
    new Vue({
      data: function () {
          this.$notify({
              title: "设置成功",
              message: "已隐藏侧边栏",
              position: 'top-left',
              offset: 50,
              showClose: true,
              type: "success",
              duration: 4000
          });
      }
    })
  }
}

function hidehometop() {
  var hometop = document.getElementsByClassName('hometop')[0];
  if (hometop.style.display === 'none') {
    hometop.style.display = 'block';
    new Vue({
      data: function () {
          this.$notify({
              title: "设置成功",
              message: "已显示顶部",
              position: 'top-left',
              offset: 50,
              showClose: true,
              type: "success",
              duration: 4000
          });
      }
    })
  }
  else {
    hometop.style.display = 'none';
    new Vue({
      data: function () {
          this.$notify({
              title: "设置成功",
              message: "已隐藏顶部",
              position: 'top-left',
              offset: 50,
              showClose: true,
              type: "success",
              duration: 4000
          });
      }
    })
  }
}
```

5.`修改themes/butterfly/layout/post.pug`

```diff
extends includes/layout.pug

block content
-  #post
+  #post.maininner
    if top_img === false
 ```

6.修改`themes/butterfly/layout/index.pug`

 ```diff
block content
  include ./includes/mixins/post-ui.pug
-  #recent-posts.recent-posts
+  #recent-posts.recent-posts.maininner
 ```

7.引入`vue`和`element-ui`（来自fomal） 

 - `themes/butterfly/layout/includes/layout.pug`

 ```diff
doctype html
html(lang=config.language data-theme=theme.display_mode class=htmlClassHideAside)
  head
    include ./head.pug
+    link(rel="stylesheet", href="https://cdn.jsdelivr.net/npm/element-ui@2.15.6/packages/theme-chalk/lib/index.css")
+    script(async='' src='https://cdn1.tianli0.top/npm/vue@2.6.14/dist/vue.min.js')
+    script(async='' src='https://cdn1.tianli0.top/npm/element-ui@2.15.6/lib/index.js')
 ```