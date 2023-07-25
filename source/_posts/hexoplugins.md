---
title: hexo插件推荐
tags:
  - hexo
cover: >-
  https://pic.imgdb.cn/item/649efe141ddac507cc348243.png
abbrlink: 64526
date: 2022-12-23 14:09:11
---
:::success
# 今天来点hexo插件，顺便水文
:::
<!-- more -->

## 1. hexo github calendar
安装命令：
```bash
npm install hexo-githubcalendar --save
```
在`_config.yml`里添加
```yaml
gitcalendar:
  enable: true # 开关
  priority: 5 #过滤器优先权
  enable_page: all # 应用页面
  # butterfly挂载容器
  layout: # 挂载容器类型
    type: id
    name: recent-posts
    index: 0
  user: Ezgx #git用户名
  apiurl: https://gitcalendar.zfe.space # https://gitcalendar.akilar.top
  minheight:
    pc: 280px #桌面端最小高度
    mibile: 0px #移动端最小高度
  color: "['#e4dfd7', '#f9f4dc', '#f7e8aa', '#f7e8aa', '#f8df72', '#fcd217', '#fcc515', '#f28e16', '#fb8b05', '#d85916', '#f43e06']" #橘黄色调
  # color: "['#ebedf0', '#fdcdec', '#fc9bd9', '#fa6ac5', '#f838b2', '#f5089f', '#c4067e', '#92055e', '#540336', '#48022f', '#30021f']" #浅紫色调
  # color: "['#ebedf0', '#f0fff4', '#dcffe4', '#bef5cb', '#85e89d', '#34d058', '#28a745', '#22863a', '#176f2c', '#165c26', '#144620']" #翠绿色调
  # color: "['#ebedf0', '#f1f8ff', '#dbedff', '#c8e1ff', '#79b8ff', '#2188ff', '#0366d6', '#005cc5', '#044289', '#032f62', '#05264c']" #天青色调
  container: .recent-post-item(style='width:100%;height:auto;padding:10px;') #父元素容器，需要使用pug语法
  gitcalendar_css: https://npm.elemecdn.com/hexo-filter-gitcalendar/lib/gitcalendar.css
  gitcalendar_js: https://npm.elemecdn.com/hexo-filter-gitcalendar/lib/gitcalendar.js
```

2.hexo-magnet
安装命令：
```bash
npm i hexo-magnet --save
```
在`_config.yml`中写入
```yaml
magnet:
  enable: false
  priority: 1
  enable_page: all
  type: tags
  devide: 2
  display:
    - name: hexo
      display_name: hexo
      icon: ✔
    - name: linux
      display_name: linux
      icon: ✔
    - name: 教程
      display_name: 教程
      icon: ✔
  color_setting:
    text_color: black
    text_hover_color: white
    background_color: "#f2f2f2"
    background_hover_color: "#b30070"
  layout:
    type: id
    name: recent-posts
    index: 0
  temple_html: '<div class="recent-post-item" style="width:100%;height: auto"><div id="catalog_magnet">${temple_html_item}</div></div>'
  plus_style: ""
```