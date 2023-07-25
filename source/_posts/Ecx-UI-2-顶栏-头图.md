---
title: Ecx-UI-2-顶栏+头图
tags:
  - hexo
  - 教程
  - Ecx-UI
  - 魔改
  - butterfly
category: ui魔改
cover: 'https://pic.imgdb.cn/item/649f003d1ddac507cc3a01ad.png'
abbrlink: 36352
date: 2023-01-04 11:39:10
---
:::success
Ecx-UI第一期
:::
<!-- more -->

# 顶栏
:::danger
基于`@安知鱼` 的导航栏改造
:::

1. 修改`/themes/butterfly/layout/includes/header/nav.pug`，将全部内容替换为：
```pug
- const { darkmode } = theme
nav#nav
  #toggle-menu
      a.site-page
        i.fas.fa-list

  span#blog_name
    a#site-name(href=url_for('/'))
      .title #[=config.title]
      i.fa-solid.fa-house

  div.mask-name-container
    center(id="name-container")
      a(id="page-name" href="javascript:rmf.scrollToTop()") my-blog

  #menus
    if (theme.algolia_search.enable || theme.local_search.enable)
      div.nav-button#search-button
        a.site-page.social-icon.search
          i.fas.fa-search.fa-fw
          span=' '+_p('search.title')

    div.nav-button#nav-totop
      a.totopbtn
        i.fas.fa-arrow-up
        span#percent(onclick="btf.scrollToDest(0,500)") 0


    !=partial('includes/header/menu_item', {}, {cache: true})
```

2. 修改`/themes/butterfly/layout/includes/header/index.pug`，将全部内容替换为：
```pug
if !theme.disable_top_img && page.top_img !== false
  if is_post()
    - var top_img = page.top_img || page.cover || page.randomcover
  else if is_page()
    - var top_img = page.top_img || theme.default_top_img
  else if is_tag()
    - var top_img = theme.tag_per_img && theme.tag_per_img[page.tag] 
    - top_img = top_img ? top_img : (theme.tag_img !== false ? theme.tag_img || theme.default_top_img : false)
  else if is_category()
    - var top_img = theme.category_per_img && theme.category_per_img[page.category]
    - top_img = top_img ? top_img : (theme.category_img !== false ? theme.category_img || theme.default_top_img : false)
  else if is_home()
    - var top_img = theme.index_img !== false ? theme.index_img || theme.default_top_img : false
  else if is_archive()
    - var top_img = theme.archive_img !== false ? theme.archive_img || theme.default_top_img : false
  else
    - var top_img = page.top_img || theme.default_top_img

  if top_img !== false
    - var imgSource = top_img && top_img.indexOf('/') !== -1 ? `background-image: url('${url_for(top_img)}')` : `background: ${top_img}`
    - var bg_img = top_img ? imgSource : ''
    - var site_title = page.title || page.tag || page.category || config.title
    - var isHomeClass = is_home() ? 'full_page' : 'not-home-page'
    - is_post() ? isHomeClass = 'post-bg' : isHomeClass
  else
    - var isHomeClass = 'not-top-img'
else
  - var top_img = false
  - var isHomeClass = 'not-top-img'

header#page-header(class=isHomeClass style=bg_img)
  !=partial('includes/header/nav', {}, {cache: true})
  if top_img !== false
    if is_post()
      include ./post-info.pug
    else if is_home() 
      #site-info
        h1#site-title=site_title
        if theme.subtitle.enable
          - var loadSubJs = true
          #site-subtitle
            span#subtitle
        if(theme.social)
          #site_social_icons
            !=fragment_cache('social', function(){return partial('includes/header/social')})
      #scroll-down
        i.fas.fa-angle-down.scroll-down-effects
    else
      #page-site-info
        h1#site-title=site_title
```

4. 在`/themes/butterfly/source/css`中添加`nav_menu.css`，写入如下内容，并在`_conflg.butterfly.yml`中引入。

```css
#nav a:hover {
  background: var(--anzhiyu-main);
  transition: 0.3s;
}

#nav-totop:hover .totopbtn i {
  opacity: 1;
}
#nav-totop #percent {
  font-size: 12px;
  background: var(--anzhiyu-white);
  color: var(--anzhiyu-main);
  width: 25px;
  height: 25px;
  border-radius: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.3s;
}
.nav-fixed #nav-totop #percent,
.page #nav-totop #percent {
  background: var(--font-color);
  color: var(--card-bg);
  font-size: 13px;
}

#nav-totop {
  width: 35px;
}
#page-header:not(.is-top-bar) #percent {
  transition: 0.3s;
}
#page-header:not(.is-top-bar) #nav-totop {
  width: 0;
  opacity: 0;
  transition: width 0.3s, opacity 0.2s;
  margin-left: 0 !important;
}
#nav-totop #percent {
  font-weight: 700;
}
#nav-totop:hover #percent {
  opacity: 0;
  transform: scale(1.5);
  font-weight: 700;
}
#page-header #nav #nav-right div {
  margin-left: 0.5rem;
  padding: 0;
}

#nav-totop {
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s;
}
.nav-button {
  cursor: pointer;
}
div#menus {
  display: flex;
  align-items: center;
}
#page-header #nav .nav-button a {
  height: 35px;
  width: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
}

#nav .site-page {
  padding-bottom: 0px;
}
#nav *::after {
  background-color: transparent !important;
}

/* 顶栏修改 */
#nav .menus_items .menus_item .menus_item_child li a {
  padding: 2px 16px;
}
#nav .menus_items .menus_item .menus_item_child li:hover a {
  color: white !important;
}

#nav .menus_items .menus_item .menus_item_child li {
  margin: 6px;
  border-radius: 5px;
  transition: all 0.3s;
  display: inline-block;
  margin: 0 3px;
}
#nav .menus_items .menus_item .menus_item_child:before {
  top: -19px;
}
#site-name,
.shuoshuo {
  white-space: nowrap;
  overflow: hidden;
}
#site-name {
  padding: 0 8px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s;
}

#blog_name #site-name i {
  opacity: 0;
  position: absolute;
}

#blog_name #site-name:hover .title {
  opacity: 0;
}

#blog_name #site-name:hover i {
  opacity: 1;
  transform: scale(1.01);
  color: white;
}
/* 圆角隐藏 */
ul.menus_item_child {
  border-radius: 5px;
}

/* 一级菜单居中 */
#nav .menus_items {
  position: absolute;
  width: fit-content;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 60px;
}

#nav .menus_items .menus_item:hover .menus_item_child {
  display: block;
  transform: translateX(-50%);
  right: auto;
  left: auto !important;
  padding: 6px 4px;
  box-sizing: content-box;
  line-height: 35px;
}
#nav .menus_items .menus_item:hover {
  padding: 0 5px 27px 5px !important;
  margin-bottom: -14.5px !important;
}

#nav .menus_items .menus_item .menus_item_child {
  top: 44px;
}

@media screen and (min-width: 768px) {
  .page .menus_item:hover > a.site-page {
    color: var(--anzhiyu-white) !important;
    background: var(--anzhiyu-main);
    transition: 0.3s;
    box-shadow: var(--anzhiyu-shadow-main);
  }
}

.nav-fixed #nav {
  transform: translateY(58px) !important;
}
#nav {
  padding: 0 calc((100% - 1420px) / 2);
  backdrop-filter: saturate(180%) blur(20px);
}

#nav a {
  border-radius: 8px;
  color: var(--font-color);
}
.page #nav a:hover {
  color: var(--anzhiyu-white) !important;
  background: var(--anzhiyu-main);
  transition: 0.3s;
  box-shadow: var(--anzhiyu-shadow-main);
}

#menus > div.menus_items > div > a {
  letter-spacing: 0.3rem;
  font-weight: 700;
  padding: 0em 0.3em 0em 0.5em;
  height: 35px;
  line-height: 35px;
}
#nav .menus_items .menus_item {
  padding: 0 5px;
  display: flex;
  flex-direction: column;
  margin: auto;
  align-items: center;
}

#nav div#toggle-menu {
  padding: 2px 0 4px 6px;
}

#nav-totop .totopbtn i {
  position: absolute;
  display: flex;
  opacity: 0;
}
#page-name::before {
  font-size: 18px;
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  color: white !important;
  top: 0;
  left: 0;
  content: "回到顶部";
  background-color: var(--anzhiyu-theme);
  transition: all 0.3s;
  -webkit-transition: all 0.3s;
  -moz-transition: all 0.3s;
  -ms-transition: all 0.3s;
  -o-transition: all 0.3s;
  opacity: 0;
  box-shadow: 0 0 3px var(--anzhiyu-theme);
  line-height: 45px; /*如果垂直位置不居中可以微调此值，也可以删了*/
}
#page-name:hover:before {
  opacity: 1;
}
#name-container {
  transition: all 0.3s;
  -webkit-transition: all 0.3s;
  -moz-transition: all 0.3s;
  -ms-transition: all 0.3s;
  -o-transition: all 0.3s;
}
#name-container:hover {
  transform: translateX(-50%) scale(1.03);
}
#page-name {
  position: relative;
  padding: 10px 30px;
}

center#name-container {
  position: absolute;
  width: 100%;
  left: 50%;
  transform: translateX(-50%);
  font-family: "ZhuZiAYuanJWD";
}
.nav-fixed.nav-visible #name-container {
  transition: 0.3s;
  transform: translate(-50%, 60px);
}
.nav-fixed.nav-visible #menus .menus_items {
  transform: translate(-50%);
  transition: 0.3s;
  line-height: 60px;
}
.nav-fixed #menus .menus_items {
  transform: translate(-50%, -60px);
  transition: 0.3s;
}
.nav-fixed #name-container {
  top: 15%;
  transition: 0.3s;
}
#name-container {
  bottom: 60px;
}

.mask-name-container {
  max-width: 1200px;
  width: 50%;
  height: 100%;
  position: absolute;
  overflow: hidden;
  left: 50%;
  transform: translateX(-50%);
}

@media screen and (max-width: 992px) {
  .mask-name-container {
    width: 65%;
  }
}

@media screen and (max-width: 768px) {
  .mask-name-container {
    display: none;
  }
}
#sidebar #sidebar-menus .menus_items .site-page:hover {
  color: var(--anzhiyu-white);
  border-radius: var(--anzhiyu-border-radius);
}
#nav .menus_items .menus_item > a > i:last-child {
  display: none;
}
#nav #search-button {
  font-size: 1.3em;
}

@media screen and (min-width: 900px) {
  #nav .back-home-button:hover {
    box-shadow: var(--anzhiyu-shadow-main);
  }
}

.back-home-button:hover {
  background: var(--anzhiyu-main);
  color: var(--anzhiyu-white) !important;
}
.back-home-button {
  display: flex;
  width: 35px;
  height: 35px;
  padding: 0 !important;
  align-items: center;
  justify-content: center;
  margin-right: 4px;
  transition: 0.3s;
  border-radius: 8px;
}

.back-home-button:hover .back-menu-list-groups {
  display: flex;
  opacity: 1;
  transition: 0.3s;
  top: 55px;
  pointer-events: auto;
  left: 0;
}
.back-home-button .back-menu-list-groups {
  position: absolute;
  top: 65px;
  left: 0;
  background: var(--anzhiyu-card-bg);
  border-radius: 12px;
  border: var(--style-border);
  flex-direction: column;
  font-size: 12px;
  color: var(--anzhiyu-secondtext);
  box-shadow: var(--anzhiyu-shadow-border);
  transition: 0s;
  opacity: 0;
  pointer-events: none;
}

.back-home-button .back-menu-list-group {
  display: flex;
  flex-direction: column;
}
.back-home-button .back-menu-list-group .back-menu-list-title {
  margin: 8px 0 0 16px;
  transition: 0.3s;
}
.back-home-button .back-menu-list {
  display: flex;
  flex-direction: column;
}
.back-home-button .back-menu-list::before {
  position: absolute;
  top: -22px;
  left: 0px;
  width: 100%;
  height: 25px;
  content: "";
}

.back-home-button .back-menu-list-group:hover .back-menu-list-title {
  color: var(--anzhiyu-main);
}
.back-home-button .back-menu-list-groups:hover {
  border: var(--style-border-hover);
}
.back-home-button .back-menu-list .back-menu-item {
  display: flex;
  align-items: center;
  margin: 4px 8px;
  padding: 4px 8px !important;
  transition: 0.3s;
  border-radius: 8px;
}
.back-home-button .back-menu-list .back-menu-item .back-menu-item-text {
  font-size: var(--global-font-size);
  margin-left: 0.5rem;
  color: var(--anzhiyu-fontcolor);
  white-space: nowrap;
}
#nav #blog_name {
  flex-wrap: nowrap;
  height: 60px;
  display: flex;
  align-items: center;
  /* z-index: 102; */
  transition: 0.3s;
}
.back-home-button .back-menu-list .back-menu-item .back-menu-item-icon {
  width: 24px;
  height: 24px;
  border-radius: 24px;
  background: var(--anzhiyu-secondbg);
}
#page-header #nav .back-home-button {
  cursor: pointer;
  position: relative;
}

@media screen and (min-width: 1300px) {
  #nav a:hover {
    transform: scale(1.03);
  }
}
.back-home-button .back-menu-list .back-menu-item:hover .back-menu-item-text {
  color: var(--anzhiyu-white);
}
.back-menu-item-icon.loading img {
  width: 25px;
}

#page-header #nav #menus .nav-button.long a.totopbtn,
#page-header #nav #menus .nav-button.long,
#page-header #nav #menus .nav-button.long a.totopbtn span {
  width: 70px;
}
#page-header #nav #menus .nav-button.long a.totopbtn span {
  border-radius: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.3s;
  white-space: nowrap;
}

#page-header #nav #menus .nav-button.long a.totopbtn:hover {
  border-radius: 35px;
  height: 30px;
}

#nav #search-button {
  padding-left: 0;
}
#page-header #nav .nav-button {
  margin-left: 0.5rem;
  padding: 0;
}
#page-header:not(.is-top-bar) #nav-totop a {
  display: none;
}
#search-button a.site-page.social-icon.search span {
  display: none;
}
```
5. 添加并引入bar.css
```css
#nav {
    top: 20px !important;
    width: 96% !important;
    margin-left: 2% !important;
    border-radius: 1145px;
    box-shadow: 0px 0px 10px 5px rgb(255, 166, 0) !important;
    background: rgba(255,255,255,0)
}
#page-header.nav-fixed #nav {
  background-image: linear-gradient(25deg, #e2288593, #e2839093, #ebc3a593, #f2ffb893) !important;
}
#page-header.nav-fixed #nav {
    top: -45px !important;
}
#nav #site-name {
    text-shadow: 2px 2px 4px rgb(0 0 0 / 15%);
    font-weight: bold;
    border-radius: 30px;
    cursor: pointer;
    background: #0060ff;
    margin-left: 10px;
    color:rgb(255, 255, 255);
}
#page-header #nav .nav-button a {
  margin: 4px;
  background: #0060ff;
  border-radius: 2000px;
  padding: 5px;
  color:rgb(255, 255, 255);
}
#page-header.nav-fixed #nav a, #page-header.nav-fixed #nav #site-name, #page-header.nav-fixed #nav #toggle-menu {
  color: #ffffff !important;
  border-radius: 20px;
  text-shadow: none;
}
```

顶栏悬浮&圆角&拟态风格
通过css的top等属性实现
```css
/* 顶栏悬浮 */
#nav {
    top: 20px !important;
    width: 96% !important;
    margin-left: 2% !important;
    border-radius: 20px;
    box-shadow: inset 10px 10px 12px #bebebe, inset -10px -10px 12px #fff, 0px 0px 1px 1px rgb(138, 138, 138);
     /*background: rgba(255,255,255,0) */
}
/* 顶栏渐变 */
#page-header.nav-fixed #nav {
  background: #c9ceef !important;
  border-radius: 30px!important;
  box-shadow: inset 10px 10px 12px #bebebe, inset -10px -10px 12px #fff, 0px 0px 1px 1px rgb(138, 138, 138);
}
#nav.show {
  background: #c9ceef !important;
  border-radius: 30px!important;
  box-shadow: inset 10px 10px 12px #bebebe, inset -10px -10px 12px #fff, 0px 0px 1px 1px rgb(138, 138, 138);
}
#nav {
  padding: 0px;
  padding-right: 7vh;
  padding-left: 7vh;
}
/* 顶栏上方距离 */
#page-header.nav-fixed #nav {
    top: -47px !important;
}
#nav {
  padding-left: 22px !important;
  padding-right: 22px !important;
}
```


如果想要顶栏按钮填色，可以
```css
/* 按钮填色 */
#nav #site-name {
    text-shadow: 2px 2px 4px rgb(0 0 0 / 15%);
    font-weight: bold;
    cursor: pointer;
    background: cyan;
}
.fa-angle-double-down:before, .fa-angles-down:before {
    content: "\f103";
    background: cyan;
    border-radius: 10px;
    padding: 9px;
}
#nav.hide-menu #toggle-menu {
    display: inline-block !important;
    background: cyan;
    border-radius: 10px;
    padding: -9px;
}
```

去掉头图部分的黑色遮罩，可以
```css
/* 头图透明 */
#page-header{
    background: transparent!important;
  }
  /* 头图遮罩层透明 */
  #page-header::before{
    background: transparent!important;
    }
  /*top-img黑色透明玻璃效果移除，不建议加，除非你执着于完全一图流或者背景图对比色明显 */
  #page-header.post-bg:before {
    background-color: transparent !important;
  }
```

头图不全屏
```css
/* 头图不全屏 */
#page-header.full_page {
    height: 40vh !important;
    background-attachment: fixed !important;
}

#web_bg {
    background-attachment: fixed !important;
}
```

深色标题适配浅色背景
```css
/* 适配浅色背景的深色标题 */
#page-header #site-title {
    color: black;
}
#page-header #site-subtitle {
  color: black;
}
#post-info .post-title {
  color: #000;
}
#post-info #post-meta {
  color: #000bff;
}
```