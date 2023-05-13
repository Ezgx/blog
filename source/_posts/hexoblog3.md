---
title: hexo博客搭建-3-主题&页面配置
tags:
  - hexo
abbrlink: 45799
date: 2022-12-14 15:50:90
category: 
  - 博客教程
---
::: danger
## 这期开始页面配置
:::
<!-- more -->


# 全局配置
在博客根目录==config.yml==中
```yaml
找到这些，然后修改
# Site
title: 标题
subtitle: 副标题
description: '介绍'
keywords: 关键词
author: 作者名字
language: zh-CN
timezone: ''
```
# 主题配置
接下来修改==config.butterfly.yml==
## 导航栏
```yaml
menu:
  首页: / || # fas fa-home
  文章||:
    归档: /archives/ || # fas fa-archive
    标签: /tags/ || # fas fa-tags
    分类: /categories/ || # fas fa-folder-open
  # List||fas fa-list:
    # Music: /music/ || fas fa-music
    # Movie: /movies/ || fas fa-video
  开往||:
    友链: /link/ # || fas fa-link
    关于: /about/ # || fas fa-heart
  更多||:
    敬请期待: /
```

## 代码高亮
```yaml
highlight_theme: pale night #  darker / pale night / light / ocean / mac / mac light / false
highlight_copy: true # copy button
highlight_lang: true # show the code language
highlight_shrink: false # true: shrink the code blocks / false: expand the code blocks | none: expand code blocks and hide the button
highlight_height_limit: false # unit: px
code_word_wrap: false
```

## 网站图标和作者头像
```yaml
# Favicon（網站圖標）
favicon: /img/avatar.png

# Avatar (頭像)
avatar:
  img: /img/avatar.png
  effect: true # 头像旋转效果
```

## 是否开启头图
```yaml
# Disable all banner image
disable_top_img: true # true为不显示，false为显示，默认false
```

## 无封面文章随机封面
```yaml
cover:
  # display the cover or not (是否顯示文章封面)
  index_enable: true
  aside_enable: true
  archives_enable: true
  # the position of cover in home page (封面顯示的位置)
  # left/right/both
  position: right
  # When cover is not set, the default cover is displayed (當沒有設置cover時，默認的封面顯示)
  default_cover:
    - /img/1.jpg
    - /img/2.jpg
    - /img/3.jpg
    - /img/4.jpg
    - /img/5.jpg
    - /img/6.jpg
    - /img/7.jpg
    - /img/8.jpg
    - /img/9.jpg
    - /img/10.jpg
    - /img/11.jpg
```

## 自定义js/css
```yaml
# bottom插入js，head插入css
inject:
  head:
    - <link rel="stylesheet" type="text/css" href="/css/name.css">
  bottom:
    - <script src="/js/bar.js"></script>
    - <script src="/js/sticky.js"></script>
```