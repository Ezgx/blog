---
title: dynasty/dimension主题外挂标签
tags:
  - hexo
  - butterfly
  - dynasty
  - dimension
category:
  - dimension
cover: 'https://pic.imgdb.cn/item/649efcf51ddac507cc325127.png'
abbrlink: 58490
date: 2023-03-07 23:59:03
---

{% span center logo large, hexo-theme-dimension %} {% span center small, 一个基于`butterfly`的二次元hexo主题。 %}

# dynasty/dimension主题外挂标签

## 按钮

### 头像样式

{% btns circle grid5 %}
{% cell xaoxuu, https://xaoxuu.com, https://gcore.jsdelivr.net/gh/xaoxuu/cdn-assets/avatar/avatar.png %}
{% endbtns %}

```
{% btns circle grid5 %}
{% cell xaoxuu, https://xaoxuu.com, https://gcore.jsdelivr.net/gh/xaoxuu/cdn-assets/avatar/avatar.png %}
{% endbtns %}
```

### fontawesome图标

{% btns rounded grid5 %}
{% cell 下载源码, /, fas fa-download %}
{% cell 查看文档, /, fas fa-book-open %}
{% endbtns %}

```
{% btns rounded grid5 %}
{% cell 下载源码, /, fas fa-download %}
{% cell 查看文档, /, fas fa-book-open %}
{% endbtns %}
```

## github个人卡片

不同主题：
default：
{% ghp ezgx, default %}
dack：
{% ghp ezgx, dark %}
highcontrast：
{% ghp ezgx, highcontrast %}
transparent：
{% ghp ezgx, transparent %}
radical：
{% ghp ezgx, radical %}
merko：
{% ghp ezgx, merko %}
gruvbox：
{% ghp ezgx, gruvbox %}
gruvbox-duo：
{% ghp ezgx, gruvbox-duo %}
tokyonight：
{% ghp ezgx, tokyonight %}
tokyonight-duo：
{% ghp ezgx, tokyonight-duo %}
onedark：
{% ghp ezgx, onedark %}
onedark-duo：
{% ghp ezgx, onedark-duo %}
prussian：
{% ghp ezgx, prussian %}
vue：
{% ghp ezgx, vue %}
vue-dark：
{% ghp ezgx, vue-dark %}

```
{% ghp ezgx, default %}
{% ghp ezgx, dark %}
{% ghp github用户名, 主题（如：vue-dark，default等） %}
```

## github奖杯

{% ghpt ezgx, 1, 7, flat %}
{% ghpt ezgx, 1, 7, onedark %}
{% ghpt ezgx, 1, 7, gruvbox %}
{% ghpt ezgx, 1, 7, dracula %}
{% ghpt ezgx, 1, 7, monokai %}
{% ghpt ezgx, 1, 7, chalk %}
{% ghpt ezgx, 1, 7, nord %}
{% ghpt ezgx, 1, 7, alduin %}
{% ghpt ezgx, 1, 7, darkhub %}
可选主题：`flat` `onedark` `gruvbox` `dracula` `monokai` `chalk` `nord` `alduin` `darkhub` `buddhism` `oldie` `onestar` `algolia`

```
{% ghpt ezgx, 1, 7, gruvbox %}
{% ghpt github用户名, 行数（不写默认2行）, 个数（不写默认全显示）, 主题（不写默认flat）如gruvbox等 %}
```

## 提示块标签

{% note simple %}
默認 提示塊標籤
{% endnote %}

{% note default simple %}
default 提示塊標籤
{% endnote %}

{% note primary simple %}
primary 提示塊標籤
{% endnote %}

{% note success simple %}
success 提示塊標籤
{% endnote %}

{% note info simple %}
info 提示塊標籤
{% endnote %}

{% note warning simple %}
warning 提示塊標籤
{% endnote %}

{% note danger simple %}
danger 提示塊標籤
{% endnote %}

## 进度条

{% progress 10 red 进度条样式预览 %}
{% progress 30 yellow 进度条样式预览 %}
{% progress 50 green 进度条样式预览 %}
{% progress 70 cyan 进度条样式预览 %}
{% progress 90 blue 进度条样式预览 %}
{% progress 100 gray 进度条样式预览 %}

```
{% progress 10 red 进度条样式预览 %}
{% progress 30 yellow 进度条样式预览 %}
{% progress 50 green 进度条样式预览 %}
{% progress 70 cyan 进度条样式预览 %}
{% progress 90 blue 进度条样式预览 %}
{% progress 100 gray 进度条样式预览 %}
```

## 作品推荐卡片：

{% card 紫罗兰永恒花园,https://www.bilibili.com/bangumi/play/ep173286?from=search&seid=10927182858100936967&from_spmid=666.25.episode.0,https://npm.elemecdn.com/anzhiyu-blog@1.1.6/img/post/common/violet.jpg,4.5,某大陆南北分割战争刚结束，曾是军人的主角薇尔莉特作为“自动手记人偶”在代写书信的过程中不断成长。,fa-solid fa-book-open,番剧 %}

```
{% card 紫罗兰永恒花园,https://www.bilibili.com/bangumi/play/ep173286?from=search&seid=10927182858100936967&from_spmid=666.25.episode.0,https://npm.elemecdn.com/anzhiyu-blog@1.1.6/img/post/common/violet.jpg,4.5,某大陆南北分割战争刚结束，曾是军人的主角薇尔莉特作为“自动手记人偶”在代写书信的过程中不断成长。,fa-solid fa-book-open,番剧 %}

{% card 标题,链接,背景,评分,评价,图标,标签 %}
```

## 诗词歌赋

{% poem 水调歌头,苏轼 %}
丙辰中秋，欢饮达旦，大醉，作此篇，兼怀子由。

明月几时有？把酒问青天。
不知天上宫阙，今夕是何年？
我欲乘风归去，又恐琼楼玉宇，高处不胜寒。
起舞弄清影，何似在人间？

转朱阁，低绮户，照无眠。
不应有恨，何事长向别时圆？
人有悲欢离合，月有阴晴圆缺，此事古难全。
但愿人长久，千里共婵娟。
{% endpoem %}

```
{% poem 水调歌头,苏轼 %}
丙辰中秋，欢饮达旦，大醉，作此篇，兼怀子由。

明月几时有？把酒问青天。
不知天上宫阙，今夕是何年？
我欲乘风归去，又恐琼楼玉宇，高处不胜寒。
起舞弄清影，何似在人间？

转朱阁，低绮户，照无眠。
不应有恨，何事长向别时圆？
人有悲欢离合，月有阴晴圆缺，此事古难全。
但愿人长久，千里共婵娟。
{% endpoem %}
```

## 对话框

{% msgbox "text-msgbox" %}
{% msgguest "bot" %}
这是一个一个一个markdown测试文章。
{% endmsgguest %}
{% msgadmin %}
无处不在的homo（恼
{% endmsgadmin %}
{% msgguest "xl","https://gcore.jsdelivr.net/gh/zykjofficial/zykjofficial.github.io@master/img/avatar.png" %}
我有头像！
{% endmsgguest %}
{% endmsgbox %}

```
{% msgbox "text-msgbox" %}
{% msgguest "bot" %}
这是一个一个一个markdown测试文章。
{% endmsgguest %}
{% msgadmin %}
无处不在的homo（恼
{% endmsgadmin %}
{% msgguest "xl","https://gcore.jsdelivr.net/gh/zykjofficial/zykjofficial.github.io@master/img/avatar.png" %}
我有头像！
{% endmsgguest %}
{% endmsgbox %}
```

## 外链

{% link https://blog.leonus.cn/,Leonus,https://blog.leonus.cn/favicon.ico,进一寸有进一寸的欢喜。 %}

```
{% link https://blog.leonus.cn/,Leonus,https://blog.leonus.cn/favicon.ico,进一寸有进一寸的欢喜。 %}
```

## 颜色文字

各种颜色的标签，包括：{% span red, 红色 %}、{% span yellow, 黄色 %}、{% span green, 绿色 %}、{% span cyan, 青色 %}、{% span blue, 蓝色 %}、{% span gray, 灰色 %}。

```
各种颜色的标签，包括：{% span red, 红色 %}、{% span yellow, 黄色 %}、{% span green, 绿色 %}、{% span cyan, 青色 %}、{% span blue, 蓝色 %}、{% span gray, 灰色 %}。
```

## 超大号文字

{% span center logo large, Volantis %} {% span center small, A Wonderful Theme for Hexo %}

```
{% span center logo large, Volantis %} {% span center small, A Wonderful Theme for Hexo %}
```

## github信息卡片

{% ghcard xaoxuu %}
{% ghcard xaoxuu, theme=vue %}
{% ghcard xaoxuu, theme=buefy %}
{% ghcard xaoxuu, theme=solarized-light %}
{% ghcard xaoxuu, theme=onedark %}
{% ghcard xaoxuu, theme=solarized-dark %}
{% ghcard xaoxuu, theme=algolia %}
{% ghcard xaoxuu, theme=calm %}

```
{% ghcard xaoxuu %}
{% ghcard xaoxuu, theme=vue %}
{% ghcard xaoxuu, theme=buefy %}
{% ghcard xaoxuu, theme=solarized-light %}
{% ghcard xaoxuu, theme=onedark %}
{% ghcard xaoxuu, theme=solarized-dark %}
{% ghcard xaoxuu, theme=algolia %}
{% ghcard xaoxuu, theme=calm %}
```

## 颜色折叠tab

{% folding 查看图片测试 %}
![](https://pic.imgdb.cn/item/64061c93f144a01007f083cb.jpg)
{% endfolding %}

```
{% folding 查看图片测试 %}
![](https://pic.imgdb.cn/item/64061c93f144a01007f083cb.jpg)
{% endfolding %}
```

{% folding cyan open, 查看默认打开的折叠框 %}
这是一个默认打开的折叠框。
{% endfolding %}

```
{% folding cyan open, 查看默认打开的折叠框 %}
这是一个默认打开的折叠框。
{% endfolding %}
```

{% folding red, 查看嵌套测试 %}
{% folding blue, 查看嵌套测试2 %}
{% folding 查看嵌套测试3 %}
hahaha <span><img src='https://gcore.jsdelivr.net/gh/volantis-x/cdn-emoji/tieba/%E6%BB%91%E7%A8%BD.png' style='height:24px'></span>
{% endfolding %}
{% endfolding %}
{% endfolding %}

```
{% folding red, 查看嵌套测试 %}
{% folding blue, 查看嵌套测试2 %}
{% folding 查看嵌套测试3 %}
hahaha <span><img src='https://gcore.jsdelivr.net/gh/volantis-x/cdn-emoji/tieba/%E6%BB%91%E7%A8%BD.png' style='height:24px'></span>
{% endfolding %}
{% endfolding %}
{% endfolding %}
```

## 隐藏标签（butterfly）

哪个英文字母最酷？ {% hideInline 因为西装裤(C装酷),查看答案,#FF7242,#fff %}

门里站着一个人? {% hideInline 闪 %}

```
哪个英文字母最酷？ {% hideInline 因为西装裤(C装酷),查看答案,#FF7242,#fff %}

门里站着一个人? {% hideInline 闪 %}
```

## tabs（butterfly）

{% tabs test2, 3 %}
<!-- tab -->
**This is Tab 1.**
<!-- endtab -->

<!-- tab -->
**This is Tab 2.**
<!-- endtab -->

<!-- tab -->
**This is Tab 3.**
<!-- endtab -->
{% endtabs %}

```
{% tabs test2, 3 %}
<!-- tab -->
**This is Tab 1.**
<!-- endtab -->

<!-- tab -->
**This is Tab 2.**
<!-- endtab -->

<!-- tab -->
**This is Tab 3.**
<!-- endtab -->
{% endtabs %}
```

{% tabs test4 %}
<!-- tab 第一个Tab -->
**tab名字为第一个Tab**
<!-- endtab -->

<!-- tab @fab fa-apple-pay -->
**只有图标 没有Tab名字**
<!-- endtab -->

<!-- tab 炸弹@fas fa-bomb -->
**名字+icon**
<!-- endtab -->
{% endtabs %}

```
{% tabs test4 %}
<!-- tab 第一个Tab -->
**tab名字为第一个Tab**
<!-- endtab -->

<!-- tab @fab fa-apple-pay -->
**只有图标 没有Tab名字**
<!-- endtab -->

<!-- tab 炸弹@fas fa-bomb -->
**名字+icon**
<!-- endtab -->
{% endtabs %}
```