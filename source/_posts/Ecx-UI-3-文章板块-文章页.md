---
title: Ecx-UI-3-新拟态风格文章板块+文章页
abbrlink: 64874
date: 2023-01-04 11:51:34
tags:
  - hexo
  - 教程
  - Ecx-UI
  - 魔改
  - butterfly
category: ui魔改
---
<!-- more -->
:::success
Ecx-UI第三期
:::

<br>

:::success
`本站首页即为效果预览`
:::

:::warning
建议搭配heo大佬的标签栏、分类栏<br>
`最好关闭侧边栏`
:::

1. 新拟态风格文章块

先安装文章双栏布局插件：
```bash
npm i hexo-butterfly-article-double-row --save
# 或
cnpm i hexo-butterfly-article-double-row --save
```

![双栏布局插件效果](/img/posts/shuanglan.png)

```css
/*文章块阴影 */
#recent-posts > .recent-post-item {
  /*background-image: #ffffff;
  box-shadow: 0px 0px 10px 5px #646464 !important;*/
  border-radius: 30px;
  background: #e0e0e0;
  box-shadow: inset 10px 10px 15px #bebebe, inset -10px -10px 15px #ffffff;
}
#recent-posts > .recent-post-item >.recent-post-info > .article-title {
  text-align: center;
}
#recent-posts > .recent-post-item >.recent-post-info > .article-meta-wrap {
  text-align: center;
}
#recent-posts > .recent-post-item >.recent-post-info > .content {
  text-align: center;
}
#aside-content .card-widget, #recent-posts>.recent-post-item, .cardHover, .layout>.recent-posts .pagination>:not(.space), .layout>div:first-child:not(.recent-posts) {
  background-color: #ffffffc9;
}
#aside-content .aside-list>.aside-list-item .thumbnail>img, #recent-posts>.recent-post-item .post_cover img.post_bg, .article-sort-item-img img, .imgHover {
  border-radius: 40px;
  padding: 20px;
}
#category-bar {
  border-radius: 30px !important;
  background: #ebebeb;
  box-shadow: inset 10px 10px 12px #bebebe, inset -10px -10px 12px #ffffff;
}
```

2. 新拟态风格文章页

```css
/* 文章页效果 */
#post {
  border-radius: 50px;
  background: #ebebeb;
  box-shadow: inset 20px 20px 24px #bebebe, inset -20px -20px 24px #ffffff;
}
.cardHover, .layout > div:first-child:not(.recent-posts), #aside-content .card-widget, .layout > .recent-posts .pagination > *:not(.space) {
  border-radius: 50px;
  background: #ebebeb;
  box-shadow: inset 20px 20px 24px #bebebe, inset -20px -20px 24px #ffffff;
}
```