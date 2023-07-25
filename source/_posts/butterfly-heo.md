---
title: 【转载】一篇文章butterfly主题heo化！
category:
  - 杂谈教程
tags:
  - butterfly
  - 魔改
  - hexo
cover: 'https://pic.imgdb.cn/item/649f003d1ddac507cc3a01ad.png'
abbrlink: 5781
date: 2023-02-11 20:15:46
---
:::danger
最近想要洪化，一直在网上找教程，非常难找到，洪哥收录的教程也不足以洪化。一篇篇教程很零散，我的收藏夹都一大堆了。

今天汇总一下教程`（本篇为转载，已标明来源）`
:::

:::warning
本篇文章信息量超大！
:::

# 教你搞定heo化！

## 作者卡片

将`themes\butterfly\layout\includes\widget\card_author.pug`下的内容替换为：

```pug
.card-widget.card-info
      .card-content
        .card-info-avatar.is-center
          .author-info__sayhi#author-info__sayhi 晚上好！我是
          .author-info__name 张洪Heo
          .author-info__description
            | 这有关于
            b 产品、设计、开发
            | 相关的问题和看法，还有
            b 文章翻译
            | 和
            b 分享
            | 。
          .author-info__description2
            | 相信你可以在这里找到对你有用的
            b 知识
            | 和
            b 教程
            | 。
      .banner-button-group
        a.banner-button(onclick='pjax.loadUrl("/about/")', data-pjax-state)
          i.fas.fa-circle-chevron-right
          span.banner-button-text 了解更多
      a.button--animated#card-info-btn(target='_blank', rel='noopener external nofollow', href='https://github.com/zhheo')
        i.fab.fa-github
        span Github
      .card-info-social-icons.is-center
        a.social-icon(href='https://dribbble.com/zhheo', rel='external nofollow', target='_blank', title='Dribbble')
          i.ri-dribbble-line
        a.social-icon(href='https://github.com/zhheo', rel='external nofollow', target='_blank', title='Github')
          i.ri-github-line
```

添加并引入：
js：

```js
var custom = {
    getTimeState: function() {
        var e = (new Date).getHours()
          , t = "";
        return 0 <= e && e <= 5 ? t = "晚安😴" : 5 < e && e <= 10 ? t = "早上好👋" : 10 < e && e <= 14 ? t = "中午好👋" : 14 < e && e <= 18 ? t = "下午好👋" : 18 < e && e <= 24 && (t = "晚上好👋"),
        t
    },
    sayhi: function() {
        var e = document.getElementById("author-info__sayhi");
        e && (e.innerHTML = custom.getTimeState() + "！我是")
    },
}
custom.sayhi();
```

Css：

```css
/* 作者打招呼 */
div#author-info__sayhi {
  text-align: left;
  color: var(--heo-white);
  background: var(--heo-white-op);
  font-size: 12px;
  margin-right: auto;
  padding: 2px 8px;
  border-radius: 12px;
  width: fit-content;
}

#aside-content .card-info .author-info__name {
  text-align: left;
  font-weight: bold;
  color: var(--heo-white);
  font-size: 28px;
  line-height: 1.1;
  margin-top: 0.8rem;
  margin-bottom: 1rem;
}

/* 作者卡片背景 */
#aside-content>.card-widget:first-child {
  transition: 0.3s;
  border: none;
  box-shadow: none;
  background: var(--heo-main);
  margin-top: 0px;
}


#aside-content>.card-widget.card-info {
  background: var(--heo-card-bg);
  box-shadow: var(--heo-shadow-black);
  position: relative;
}

#aside-content>.card-widget.card-info::before {
  background: linear-gradient(-25deg, var(--heo-main), var(--heo-main-op-deep), var(--heo-main), var(--heo-main-op-deep));
  background-size: 400%;
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  content: '';
  animation: gradient 15s ease infinite;
}

@keyframes gradient {
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


@media screen and (max-width: 1300px) {
  #aside-content>.card-widget:first-child {
    min-height: 329px;
  }
}

/* 作者卡片描述 */
#aside-content>div.card-widget.card-info>div>div.card-info-avatar.is-center>div.author-info__description {
  line-height: 1.38;
  margin: .3rem 0;
  text-align: justify;
  color: rgba(255, 255, 255, 0.8);
}

#aside-content>div.card-widget.card-info>div>div.card-info-avatar.is-center>div.author-info__description b {
  color: var(--heo-white);
}

/* 作者卡片描述2 */
.author-info__description2 {
  line-height: 1.38;
  margin: .3rem 0;
  text-align: justify;
  width: 100%;
  z-index: 2;
  color: rgba(255, 255, 255, 0.8);
}

.author-info__description2 b {
  color: var(--heo-white);
}

.card-widget.card-info .banner-button-group {
  position: absolute;
  right: 1rem;
  bottom: 1rem;
  display: flex;
}

.card-widget.card-info .banner-button-group .banner-button {
  padding: 8px 12px;
  background: var(--heo-white-op);
  border-radius: 12px;
  color: var(--heo-white);
  display: flex;
  align-items: center;
  z-index: 1;
  transition: 0.3s;
  cursor: pointer;
}

.card-widget.card-info .banner-button-group .banner-button:hover {
  background: var(--heo-white);
  color: var(--heo-black);
}

.card-widget.card-info .banner-button-group .banner-button i {
  margin-right: 8px;
  font-size: 1rem;
}


/* 头像背景 */
/* 隐藏文章数等信息 */
#aside-content .card-info .card-info-data {
  display: none;
}

/* 作者头像 */
#aside-content .card-info a img {
  border-radius: 0px;
  height: 200px;
  display: inherit;
  filter: drop-shadow(-5px 14px 8px #00000008);
  position: absolute;
  right: -24px;
  bottom: -82px;
  width: auto;
  z-index: 0;
  transition: cubic-bezier(0.48, -0.21, 0, 1.5) 0.3s;
}

#aside-content .card-info a img:hover {
  bottom: -42px;
}

[data-theme=light] #aside-content .card-info a img {
  filter: drop-shadow(-5px 14px 8px #ffffff08);
}

.card-widget.card-info {
  padding: 0 !important;
}

#aside-content>div.card-widget.card-info>div.card-content {
  padding: 1rem 1.2rem;
  min-height: 330px;
  position: relative;
}

#aside-content>div.card-widget.card-info>div.card-info-avatarimg {
  overflow: hidden;
  background: var(--heo-yellow);
  transition: 1.5s;
  min-height: 160px;
  position: relative;
  box-shadow: var(--heo-shadow-yellow);
}

#aside-content>div.card-widget.card-info>div.card-info-avatarimg:hover img {
  transform: scale(1.03);
}

/* 作者文章列表链接 */
#aside-content>div.card-widget.card-info>div>div.card-info-data>div:nth-child()>a>div.headline {
  font-weight: bold;
}

/* 作者名称和头像间距 */
/* #aside-content .card-info .author-info__name{
  padding-top: 30px;
} */

/* pad端隐藏部分侧边栏 */
@media screen and (max-width: 900px) {
  #aside-content .card-announcement {
    display: none;
  }

  #aside-content #card-funds {
    display: none;
  }
}

/* 社交按钮 */
#aside-content .card-info #card-info-btn {
  display: none;
}

#aside-content .card-info .card-info-social-icons {
  margin: 0;
  padding-top: 10px;
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  flex-wrap: wrap;
  cursor: pointer;
  position: absolute;
  bottom: 1rem;
  left: 1rem;
}

#aside-content .card-info .card-info-social-icons .social-icon {
  margin: 0;
  margin-right: 8px;
}

#aside-content .card-info .card-info-social-icons i {
  background: var(--heo-white-op);
  color: var(--heo-white);
  font-size: 1.2rem;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
}

#aside-content .card-info .card-info-social-icons i:hover {
  background: var(--heo-secondbg);
  transform: scale(0.97);
  color: var(--heo-main);
  box-shadow: none;
}

#aside-content .card-info .banner-button {
  height: 40px;
  width: 124px;
  border-radius: 20px;
  justify-content: center;
}

@media screen and (min-width: 1300px) {
  #aside-content .card-info .card-info-social-icons i {
    color: var(--heo-white);
  }

  [data-theme=dark] #aside-content .card-info .card-info-social-icons i {
    color: var(--heo-white);
  }
}

#aside-content .card-info .card-info-data>.card-info-data-item:hover {
  background: var(--heo-post-blockquote-bg);
  transform: scale(0.97);
}

#aside-content>div.card-widget.card-info>div.card-content>div.card-info-data>.card-info-data-item:hover>a>div.headline,
#aside-content>div.card-widget.card-info>div.card-content>div.card-info-data>.card-info-data-item:hover>a>div.length-num {
  color: var(--heo-blue);
}

/* 公告 */
.announcement_content p {
  margin: 0.5rem 0 0 0;
  line-height: 1.38;
}

/* 卡片标题 */
#aside-content .item-headline {
  padding-bottom: 0;
  margin-left: 8px;
  font-size: 1em;
  font-weight: bold;
}

#aside-content .item-headline i {
  min-width: 19.5px;
}

#aside-content .item-headline+div,
#aside-content .item-headline+ul {
  padding: 0;
}

@media screen and (min-width: 1300px) {
  #aside-content .card-widget {
    margin-top: 1rem;
  }
}

@media screen and (max-width: 768px) {
  #aside-content .card-widget {
    border-radius: 12px;
  }
}

/* 卡片根据时间查看文章底部查看更多按钮 */
#aside-content>div.sticky_layout>div.card-widget.card-archives>div>ul>li.card-archive-list-item.more.is-center {
  margin-top: 8px;
  background: var(--heo-card-btn-bg);
  border-radius: 8px;
  transition: 0.3s !important;
}

#aside-content>div.sticky_layout>div.card-widget.card-archives>div>ul>li.card-archive-list-item.more.is-center :hover {
  color: var(--heo-white);
  background: var(--heo-blue);
  border-radius: 8px;
  transition: 0.3s !important;
}

#aside-content .card-archives ul.card-archive-list>.card-archive-list-item.more span,
#aside-content .card-categories ul.card-category-list>.card-category-list-item.more span {
  transition: 0.3s !important;
}

#aside-content .card-archives ul.card-archive-list>.card-archive-list-item:hover.more span,
#aside-content .card-categories ul.card-category-list>.card-category-list-item.more span {
  transition: 0.3s !important;
}

#aside-content>div.sticky_layout>div.card-widget.card-archives>div>ul>li.card-archive-list-item.more.is-center :hover span {
  background: none;
}

#web_bg {
  background-repeat: repeat;
  background-size: auto;
  width: 200%;
  height: 200%;
  top: -50%;
  left: -50%;
  transform: rotate(-15deg);
  opacity: 1;
  background-color: var(--heo-background);
}

#web_bg:before {
  background-color: var(--heo-background) !important;
  opacity: 1;
}

[data-theme='dark'] #web_bg:before,
[data-theme='dark'] #footer:before,
[data-theme='dark'] #page-header:before {
  background-color: var(--heo-none) !important;
}

[data-theme=dark]#web_bg {
  opacity: 1;
}
```

## 洪式顶部一大坨

来自[bywind](https://blog.bywind.xyz/posts/ab6e072d.html)

在`themes/butterfly/layout/includes`下创建`hometop.pug`

```pug
if is_home()
    #home_top
        .recent-top-post-group#recent-top-post-group
            .recent-post-top#recent-post-top
                #bannerGroup
                    #banners
                        .banners-title
                            .banners-title-big 无限活力
                            .banners-title-big 与热爱生活
                            .banners-title-small BYWIND.XYZ
                        .tags-group-all
                            .tags-group-wrapper
                                each i in site.data.creativity
                                    - const evenNum = i.creativity_list.filter((x, index) => index % 2 === 0);
                                    - const oddNum = i.creativity_list.filter((x, index) => index % 2 === 1);
                                    each item, index in i.creativity_list
                                        if ((index + 1 <= evenNum.length) && (index + 1 <= oddNum.length))
                                            .tags-group-icon-pair
                                                .tags-group-icon(style=`background: ${evenNum[index].color}`)
                                                    img(src=evenNum[index].icon, onerror='this.onerror=null,this.src="/img/friend_404.gif"', title=evenNum[index].name, alt=evenNum[index].name)
                                                .tags-group-icon(style=`background: ${oddNum[index].color}`)
                                                    img(src=oddNum[index].icon, onerror='this.onerror=null,this.src="/img/friend_404.gif"', title=oddNum[index].name, alt=oddNum[index].name)
                                each i in site.data.creativity
                                    - const evenNum = i.creativity_list.filter((x, index) => index % 2 === 0);
                                    - const oddNum = i.creativity_list.filter((x, index) => index % 2 === 1);
                                    each item, index in i.creativity_list
                                        if ((index + 1 <= evenNum.length) && (index + 1 <= oddNum.length))
                                            .tags-group-icon-pair
                                                .tags-group-icon(style=`background: ${evenNum[index].color}`)
                                                    img(src=evenNum[index].icon, onerror='this.onerror=null,this.src="/img/friend_404.gif"', title=evenNum[index].name, alt=evenNum[index].name)
                                                .tags-group-icon(style=`background: ${oddNum[index].color}`)
                                                    img(src=oddNum[index].icon, onerror='this.onerror=null,this.src="/img/friend_404.gif"', title=oddNum[index].name, alt=oddNum[index].name)
                        a#banner-hover(onclick='toRandomPost()')
                            span.bannerText 随便逛逛
                            i.fas.fa-arrow-right.banner-righticon
                    .categoryGroup
                        .categoryItem(style='box-shadow:var(--bywind-shadow-blue)')
                            a.categoryButton.CB1.bikan(href='/categories/学习笔记/')
                                span.categoryButtonText 必看精选
                                i.fas.fa-dove
                        .categoryItem(style='box-shadow:var(--bywind-shadow-red)')
                            a.categoryButton.remen(href='/categories/Hexo魔改/')
                                span.categoryButtonText 热门文章
                                i.fas.fa-burn
                        .categoryItem(style='box-shadow:var(--bywind-shadow-green)')
                            a.categoryButton.shiyong(href='/categories/后端/')
                                span.categoryButtonText 实用教程
                                i.fas.fa-book
                .topGroup
                    if site.data.slider
                        each i in site.data.slider
                            .recent-post-item
                                .post_cover.left_radius
                                    a(href=url_for(i.link), title=i.title)
                                        span.recent-post-top-text(onclick=`pjax.loadUrl("`+i.link+`")`) 荐
                                        img.post_bg.entered.loaded(src=url_for(i.cover) onerror="this.onerror=null,this.src='/img/404.png'")
                                .recent-post-info(onclick=`pjax.loadUrl("`+i.link+`")`)
                                    a.article-title(href=url_for(i.link), title=i.title)= i.title
```

在`layout/includes/layout.pug`大概第20行处添加：

```diff
    if page.type !== '404'
      #body-wrap(class=pageType)
        include ./header/index.pug
+        if theme.hometop.enable
+          include ./hometop.pug
```

:::warning
**注：**<br>
在我的博客复制使用diff代码框时，只需删掉加号，不需增加空格！
:::

在`source/_data`下创建`creativity.yml`文件

```yaml
- class_name: 开启创造力
  creativity_list:
    - name: Vue
      color: "#b8f0ae"
      icon: https://cdn.bywind.xyz/img/banners/vue.webp
    - name: Java
      color: "#fff"
      icon: https://cdn.bywind.xyz/img/banners/Java.webp
    - name: Docker
      color: "#57b6e6"
      icon: https://cdn.bywind.xyz/img/banners/docker.webp
    - name: Webpack
      color: "#2e3a41"
      icon: https://cdn.bywind.xyz/img/banners/webpack.webp
    - name: Photoshop
      color: "#4082c3"
      icon: https://cdn.bywind.xyz/img/banners/PS.webp
    - name: Swift
      color: "#eb6840"
      icon: https://cdn.bywind.xyz/img/banners/swift.webp
    - name: Python
      color: "#fff"
      icon: https://cdn.bywind.xyz/img/banners/python.webp
    - name: Node
      color: "#333"
      icon: https://cdn.bywind.xyz/img/banners/node-logo.svg
    - name: Git
      color: "#df5b40"
      icon: https://cdn.bywind.xyz/img/banners/git.webp
    - name: Css
      color: "#2c51db"
      icon: https://cdn.bywind.xyz/img/banners/css.webp
    - name: Js
      color: "#f7cb4f"
      icon: https://cdn.bywind.xyz/img/banners/js.webp
```

在`source/_data`下创建`slider.yml`文件

```yaml
- cover: https://cloud-image-host.oss-cn-beijing.aliyuncs.com/background/45663c9f2ce54eb2ae8628efb0c43390.jpg
  link: /posts/e255a10a.html
  title: 大学课程 - 计算机网络

- cover: https://cloud-image-host.oss-cn-beijing.aliyuncs.com/background/fe86174cbe99485e85f43b37c16622da.jpg
  link: /posts/8d4b7ae1.html
  title: 大学课程 - 计算机组成原理

- cover: https://cloud-image-host.oss-cn-beijing.aliyuncs.com/background/v2-8e40cc0dbad304617ad773d0f256d339_r.jpg
  link: posts/d04bd5bc.html
  title: 大学课程 - 操作系统

- cover: https://cloud-image-host.oss-cn-beijing.aliyuncs.com/background/63233ec9893f4.webp
  link: /posts/f73eaef5.html
  title: Fiddler抓包 - 功能非常强大的web调试利器

- cover: https://cloud-image-host.oss-cn-beijing.aliyuncs.com/page/cover/2022112902.png
  link: /posts/5f262806.html
  title: 博客美化日记 - 囊括本博客Butterfly主题的基本美化升级

- cover: https://cdn.bywind.xyz/img/cover/image-20221208194011653.png
  link: /posts/e9cd2bbc.html
  title: 基于Butterfly的外挂标签引入 - 独特的风格让你的博客别具一格
```

添加`butterfly/scripts/helpers/random.js
```js
hexo.extend.generator.register('random', function (locals) {
    const config = hexo.config.random || {}
    const posts = []
    for (const post of locals.posts.data) {
        if (post.random !== false) posts.push(post.path)
    }
    return {
        path: config.path || 'zhheo/random.js',
        data: `var posts=${JSON.stringify(posts)};function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};`
    }
})
```

引入：
```yaml
inject:
  bottom:
    - <script src="/zhheo/random.js"></script>
```

:::success
随机文章这边特别鸣谢：[怕冷爱上雪](https://blog.4t.pw)
![image](https://img01.anzhiy.cn/useruploads/90/2023/02/11/63e7b70748295.png)
:::

添加css：

```css
#home_top {
    max-width: 1400px;
    margin: auto;
    margin-top: .5rem;
    padding: 0 1.5rem;
    width: 100%
}

@media screen and (max-width: 768px) {
    #home_top {
        padding:0;
        margin-top: 0
    }
}

.recent-top-post-group {
    border-radius: 12px;
    overflow: hidden;
    overflow-x: auto;
    width: 100%;
    margin-bottom: 0
}

.recent-post-top {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    width: 100%;
    overflow-x: scroll
}

.recent-post-top::-webkit-scrollbar {
    display: none
}

.recent-post-top .recent-post-item {
    display: flex;
    width: 200px;
    flex-direction: column;
    align-items: flex-start;
    margin-left: .5rem;
    background: var(--bywind-card-bg);
    border-radius: 12px;
    overflow: hidden;
    min-width: 200px;
    height: 164px;
    max-height: 164px;
    border: var(--style-border-always);
    transition: .3s;
    position: relative;
    box-shadow: var(--bywind-shadow-border)
}

@media screen and (max-width: 768px) {
    .recent-post-top .recent-post-item {
        border-radius:8px;
        box-shadow: none;
        clip-path: inset(0 0 0 0 round 8px)
    }

    .recent-post-top .recent-post-item:last-child {
        margin-right: 1rem
    }
}

@media screen and (min-width: 1300px) {
    .recent-post-top .recent-post-item {
        margin-right:0;
        margin-bottom: .5rem
    }

    .recent-post-top .recent-post-item:active {
        transform: scale(.97)
    }

    .recent-post-top {
        overflow-x: visible
    }

    .recent-top-post-group {
        overflow: visible;
        overflow-x: visible
    }
}

span.recent-post-top-text {
    position: absolute;
    top: 0;
    left: -40px;
    display: flex;
    z-index: 1;
    background: var(--bywind-theme);
    color: var(--bywind-white);
    padding: 2px 8px;
    font-size: .6rem;
    border-radius: 12px 0 12px 0;
    transition: .3s;
    cursor: pointer
}

.recent-post-item:hover .recent-post-top-text {
    left: 0
}

@media screen and (min-width: 1300px) {
    .recent-post-top .recent-post-item:hover {
        border:var(--style-border-hover);
        box-shadow: var(--bywind-shadow-main);
        transform: scale(1.03)
    }

    .recent-post-top .recent-post-item:active {
        transform: scale(.97)
    }
}

@media screen and (max-width: 768px) {
    .recent-top-post-group {
        border-radius:0;
        background: var(--bywind-background)
    }

    .recent-post-top-text {
        display: none!important
    }

    .recent-post-top .recent-post-item .post_cover img {
        border-radius: 8px 8px 0 0!important
    }
}

.recent-post-top .recent-post-item .post_cover a {
    height: 100px;
    overflow: hidden;
    display: flex
}

.recent-post-top .recent-post-item .post_cover img {
    object-fit: cover;
    width: 100%;
    background: var(--bywind-secondbg);
    border-radius: 12px 12px 0 0
}

.recent-post-top .recent-post-item:hover .post_cover img {
    transform: scale(1)
}

.recent-post-top .recent-post-item .recent-post-info {
    padding: .3rem .5rem .3rem .5rem!important;
    transition: .3s
}

.recent-post-top .recent-post-item:hover .recent-post-info a {
    color: var(--bywind-fontcolor)
}

@media screen and (max-width: 1300px) {
    .recent-post-top .recent-post-item:hover .recent-post-info a {
        color:var(--bywind-theme);
        transition: .3s
    }
}

.recent-post-top .recent-post-item .recent-post-info .article-title {
    -webkit-line-clamp: 2;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    line-height: 1.5;
    justify-content: center;
    align-items: flex-end;
    align-content: center;
    padding-top: .5rem;
    font-weight: 700;
    font-size: .8rem!important;
    padding: 0!important
}

.categoryItem {
  overflow: hidden;
  transform: scale(1);
  transition: all 0.8s cubic-bezier(0.65, 0.15, 0.37, 1.19);
  height: 48%;
  border-radius: 12px;
}

a.categoryButton {
  height: 100%;
  width: 100%;
  background: var(--bywind-card-bg);
  border-radius: 12px;
  display: inline-block;
  text-align: left;
  line-height: 4em;
  font-weight: bold;
  font-size: 0.9rem;
  color: var(--bywind-white);
  transition: all 0.8s cubic-bezier(0.39, 0.575, 0.565, 1);
  transform: scale(1);
  overflow: hidden;
  font-family: PingFang SC, Hiragino Sans GB, Microsoft YaHei;
}

a.categoryButton i {
  transform: scale(1.0) rotate(15deg);
}

@media screen and (min-width: 1300px) {
  a.categoryButton:active {
    transform: scale(0.97);
  }
}

@media screen and (max-width: 768px) {
  a.categoryButton {
    border-radius: 8px;
  }

  .categoryItem {
    border-radius: 0px;
    height: 47%;
    box-shadow: none !important;
  }
}

a.categoryButton:after {
  top: 50px;
  width: 1rem;
  left: 21px;
  height: 2px;
  background: var(--bywind-white);
  content: "";
  border-radius: 1px;
  position: absolute;
}

.categoryButtonText {
  padding-left: 21px;
}

a.categoryButton i {
  font-size: 5rem;
  opacity: 0.2;
  position: absolute;
  right: 0%;
  top: 20%;
  transition: 0.3s;
  width: 100px;
  text-align: center;
  filter: blur(2px);
}

@media screen and (max-width: 768px) {
  a.categoryButton i {
    display: none;
  }

  .recent-post-top .categoryGroup {
    min-width: 130px !important;
    margin-bottom: 0.5rem;
    margin-left: 1rem;
    max-height: 164px;
    overflow: hidden;
    position: relative;
  }
}

.topGroup {
  display: flex;
}

#bannerGroup {
  display: flex;
}

div#banners {
  display: none;
}

@media screen and (min-width: 1300px) {
  .topGroup {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-end;
    height: calc(328px + 0.5rem);
    align-content: space-between;
    width: calc(600px + 1.5rem);
    position: relative;
  }

  div#bannerGroup {
    width: calc(100% - 600px - 2rem);
    margin-right: 0.5rem;
    height: calc(328px + 0.5rem);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  div#banners {
    display: flex;
    width: 100%;
    height: 76%;
    background: var(--bywind-card-bg);
    margin-bottom: 0.5rem;
    border: var(--style-border);
    border-radius: 12px;
    overflow: hidden;
    position: relative;
    box-shadow: var(--bywind-shadow-border);
    flex-direction: column;
    overflow: hidden;
    transition: 0.3s;
    clip-path: inset(0 0 0 0 round 12px);
  }

  div#banners:hover {
    box-shadow: var(--bywind-shadow-main);
  }

  #banners.flink {
    margin-bottom: 0.5rem;
  }

  #banners .banner-button-group {
    position: absolute;
    right: 2rem;
    top: 2rem;
    display: flex;
  }

  #banners .banner-button {
    padding: 8px 12px;
    background: var(--bywind-fontcolor);
    border-radius: 12px;
    color: var(--bywind-card-bg);
    display: flex;
    align-items: center;
    z-index: 1;
    transition: 0.3s;
    cursor: pointer;
    box-shadow: var(--bywind-shadow-black);
  }

  #banners .banner-button.secondary {
    background: var(--bywind-secondbg);
    border: var(--style-border-always);
    color: var(--bywind-lighttext);
    margin-right: 1rem;
    box-shadow: var(--bywind-shadow-border);
  }

  #banners .banner-button:hover {
    background: var(--bywind-theme);
    color: var(--bywind-white);
  }

  #banners .banner-button i {
    margin-right: 8px;
    font-size: 1rem;
  }

  .banners-title {
    top: 2rem;
    left: 1.5rem;
    position: absolute;
    display: flex;
    flex-direction: column;
  }
  

  .banners-title-big {
    font-size: 36px;
    line-height: 1;
    font-weight: bold;
    margin-bottom: 8px;
  }

  .banners-title-small {
    font-size: 12px;
    line-height: 1;
    color: var(--bywind-secondtext);
    margin-top: 8px;
    margin-bottom: 0.5rem;
  }

  #banner-hover {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: var(--bywind-theme);
    color: var(--bywind-white);
    padding-left: 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    opacity: 0;
    transition: cubic-bezier(0.71, 0.15, 0.16, 1.15) 0.6s;
  }

  .bannerText {
    font-size: 4rem;
    line-height: 4rem;
    font-weight: bold;
  }

  .banner-righticon {
    font-size: 4rem;
    opacity: 0.6;
  }

  #banners:hover #banner-hover {
    opacity: 1;
    padding-left: 2rem;
    background: #4259efc9;
    backdrop-filter: blur(15px);
    -webkit-backdrop-filter: blur(15px);
    -webkit-backface-visibility: hidden;
    -webkit-transform-style: preserve-3d;
    transition: 0.3s;
    background-size: 200%;
    cursor: pointer;
  }
}
.tags-group-icon {
    width: 120px;
    height: 120px;
    border-radius: 30px
}

.tags-group-all {
    display: flex;
    transform: rotate(-30deg)
}

.tags-group-all.nowrapMove {
    transform: rotate(0);
    padding-bottom: 2rem
}

.tags-group-wrapper {
    margin-top: 5rem;
    display: flex;
    flex-wrap: nowrap;
    animation: rowup 60s linear infinite
}

.nowrapMove .tags-group-wrapper {
    margin-top: 7rem;
    animation: rowup 120s linear infinite
}

.tags-group-icon-pair .tags-group-icon:nth-child(even) {
    margin-top: 1rem;
    transform: translate(-60px)
}

.tags-group-icon-pair {
    margin-left: 1rem
}

.tags-group-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 66px;
    font-weight: 700;
    box-shadow: var(--bywind-shadow-blackdeep)
}

.nowrapMove .tags-group-icon {
    border-radius: 50%
}

.tags-group-icon img {
    width: 60%
}
.nowrapMove .tags-group-icon img {
    min-width: 100%;
    min-height: 100%;
    border-radius: 50%;
    object-fit: cover
}

.categoryItem:hover i {
    opacity: .8;
    transition: .8s;
    transition-delay: .15s;
    transform: scale(1.03) rotate(0);
    font-size: 2.5rem;
    filter: blur(0)
}

@media screen and (min-width: 1300px) {
    .categoryItem:hover i {
        transform:scale(1.03) rotate(0)
    }
}

.cate-button-text {
    box-shadow: var(--bywind-shadow-black)
}

.recent-post-top .categoryGroup {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-width: 200px
}

.categoryGroup .categoryItem:nth-child(3) {
    display: none
}

@media screen and (min-width: 1300px) {
    .recent-post-top .categoryGroup {
        flex-direction:row;
        height: 24%
    }

    .categoryItem {
        width: calc(100% / 3 - .33rem);
        height: 100%;
        margin-right: .5rem
    }

    .categoryItem:last-child {
        margin-right: 0
    }

    .categoryItem:hover {
        width: 50%
    }

    .categoryGroup .categoryItem:nth-child(3) {
        display: flex
    }
}

a.categoryButton.bikan {
    background: linear-gradient(to right,#358bff,#15c6ff);
    background-size: 200%
}

a.categoryButton.remen {
    background: linear-gradient(to right,#f65,#ffbf37);
    background-size: 200%
}

a.categoryButton.shiyong {
    background: linear-gradient(to right,#18e7ae,#1eebeb);
    background-size: 200%
}

[data-theme=dark] a.categoryButton.bikan {
    background: linear-gradient(to right,#0653b8,#2fcbff);
    background-size: 200%
}

[data-theme=dark] a.categoryButton.remen {
    background: linear-gradient(to right,#e22a16,#da980c);
    background-size: 200%
}

[data-theme=dark] a.categoryButton.shiyong {
    background: linear-gradient(to right,#099e74,#0ea4a4);
    background-size: 200%
}

a.categoryButton:hover {
    background-position: 100% 0
}
@keyframes rowup {
    from {
        transform: translateX(0)
    }

    to {
        transform: translateX(-50%)
    }
}
```

## 只因刻短文

在`source/_data`目录下创建`essay.yml`

```yaml
- class_name: 即刻短文
  essay_list:
    - content: 文章推荐卡片教程推出
      image: https://cdn.bywind.xyz/img/cover/image-20221221154442479.png
      link: https://blog.bywind.xyz/posts/ab6e072d.html
      date: 2022-12-21
    - content: 关于本站
      link: https://blog.bywind.xyz/about/
      date: 2022-12-20
    - content: 即刻短文头图换成视频，更显动态感
      date: 2022-12-19 23:07:23
    - content: 李荣浩的歌还是那么好听，两人配合太棒了！
      music:
        server: tencent
        id: 001wG84E4bOj3V
      date: 2022-12-19 08:07:23
```

输入`hexo new page essay`，生成文件在`source/essay/index.md`

```markdown
---
title: 即刻短文
date: 2022-12-20 22:06:17
comments: true
aside: false
top_img: false
type: essay
---
```

在`themes/butterfly/layout/includes/page`目录下创建`essay.pug`

```pug
.author-content.author-content-item.essayPage.single.essayVideo
    .card-content
        .author-content-item-tips 即刻短文
        span.author-content-item-title 分享生活的小确幸
        .content-bottom
            .tips 使用 即刻短文静态部署版 构建
        .banner-button-group
            a.banner-button(onclick='pjax.loadUrl("/about/")', data-pjax-state)
                i.fas.fa-circle-chevron-right
                span.banner-button-text 部署项目
#bber
    section.timeline.page-1
        ul#waterfall.list.show
            each i in site.data.essay
                each item, index in i.essay_list
                    if index < 30
                        li.item
                            .bber-content
                                p.datacont= item.content
                                    if item.image
                                        .bber-content-img
                                            a.fancybox(target='_blank', rel='noopener', href=item.image, data-fancybox='gallery', data-caption)
                                                img.bber-content-image-self.entered.loading(src=item.image,data-ll-status='loading')
                            if item.music
                                .bber-music
                                    meting-js(server=item.music.server, type='song', id=item.music.id, mutex='true', preload='none', theme='var(--bywind-main)', data-lrctype='0')
                            hr
                            .bber-bottom
                                .bber-info
                                    .bber-info-time
                                        i.fa-solid.fa-calendar-days
                                        - var datedata = new Date(item.date).toISOString()

                                        time.datatime(datetime= item.date)= datedata
                                    if item.link
                                        a.bber-content-link(href=item.link, target="_blank", rel="external nofollow", title="跳转到短文指引的链接")
                                            i.fas.fa-link
                                            | 链接
                                a.bber-reply(onclick=`rm.rightMenuCommentText('${item.content}')`)
                                    i.fa-solid.fa-message

#bber-tips(style='color: var(--bywind-secondtext);')
    | - 只展示最近30条短文 -
```

修改`themes/butterfly/layout/page.pug`

```diff
    case page.type
      when 'tags'
        include includes/page/tags.pug
      when 'link'
        include includes/page/flink.pug
+      when 'essay'
+        include includes/page/essay.pug
```

新建`themes/butterfly/layout/includes/bbTimeList.pug`

```pug
#bbTimeList.bbTimeList.container
    i.bber-logo.iconfont.icon-bblogo(onclick=`pjax.loadUrl("/essay/")`,title="即刻短文",style="font-size: 2rem;")
    #bbtalk.swiper-container.swiper-no-swiping(tabindex="-1")
        #bber-talk.swiper-wrapper(onclick=`pjax.loadUrl("/essay/")`)
            each i in site.data.essay
                each item, index in i.essay_list
                    if index < 10
                        - var contentText = item.content
                        if item.image
                            - contentText= item.content + ' [图片]'
                        else if item.music
                            - contentText= item.content + ' [音乐]'
                        .li-style.swiper-slide= contentText

    i.bber-gotobb.fas.fa-arrow-circle-right(onclick=`pjax.loadUrl("/essay/")`,title="查看全文")
script(src='https://cdn.jsdelivr.net/npm/swiper/swiper-bundle.min.js',data-pjax='')
```

引入到主页:

```diff
block content
  include ./includes/mixins/post-ui.pug
  #recent-posts.recent-posts
    include includes/categoryList.pug
+    include includes/bbTimeList.pug
    +postUI
    include includes/pagination.pug
```

引入样式：

```diff
inject:
  head:
+		- <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper/swiper-bundle.min.css">
+		- <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/js-heo@1.0.11/bb/showbb_in_index.css">
+		- <script src="https://cdn.staticaly.com/gh/haonan15/CDN@main/source/waterfall.min.js"></script> # 瀑布流
```

自定义js：

```js
if (document.querySelector('#bber-talk')) {
      var swiper = new Swiper('.swiper-container', {
        direction: 'vertical', 
        loop: true,
        autoplay: {
        delay: 3000,
        pauseOnMouseEnter: true
      },
      });
    }
```

## 导航栏

来自：安知鱼

添加自定义css `nav_menu.css`

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

颜色css：

```css
/* 颜色 */
:root {
  --anzhiyu-theme-op: #4259ef23;
  --anzhiyu-white: #fff;
  --anzhiyu-black: #000;
  --anzhiyu-none: rgba(0, 0, 0, 0);
  --anzhiyu-gray: #999999;
  --anzhiyu-yellow: #ffc93e;
  --anzhiyu-border-radius: 8px;
  --anzhiyu-main: var(--anzhiyu-theme);
  --anzhiyu-main-op: var(--anzhiyu-theme-op);
  --anzhiyu-shadow-theme: 0 8px 12px -3px var(--anzhiyu-theme-op);
  --anzhiyu-shadow-main: 0 8px 12px -3px var(--anzhiyu-main-op);
  --anzhiyu-shadow-blue: 0 8px 12px -3px rgba(40, 109, 234, 0.2);
  --anzhiyu-shadow-white: 0 8px 12px -3px rgba(255, 255, 255, 0.2);
  --anzhiyu-shadow-black: 0 0 12px 4px rgba(0, 0, 0, 0.05);
  --anzhiyu-shadow-yellow: 0px 38px 77px -26px rgba(255, 201, 62, 0.12);
  --anzhiyu-shadow-red: 0 8px 12px -3px #ee7d7936;
  --anzhiyu-shadow-green: 0 8px 12px -3px #87ee7936;
  --anzhiyu-shadow-border: 0 8px 16px -4px #2c2d300c;
  --anzhiyu-logo-color: linear-gradient(215deg, #4584ff 30%, #ff7676 70%);
  --style-border: 1px solid var(--anzhiyu-card-border);
  --anzhiyu-blue-main: #ff7a7a;
  --style-border-hover: 1px solid var(--anzhiyu-main);
  --style-border-dashed: 1px dashed var(--anzhiyu-theme-op);
  --style-border-avatar: 4px solid var(--anzhiyu-background);
  --style-border-always: 1px solid var(--anzhiyu-card-border);
  --anzhiyu-white-acrylic1: #fefeff !important;
  --anzhiyu-white-acrylic2: #fcfdff !important;
  --anzhiyu-black-acrylic2: #08080a !important;
  --anzhiyu-black-acrylic1: #0b0b0e !important;
}

[data-theme="light"] {
  --anzhiyu-theme: #ff7a7a;
  --anzhiyu-theme-op: #4259ef23;
  --anzhiyu-blue: #ff7a7a;
  --anzhiyu-red: #d8213c;
  --anzhiyu-pink: #ff7a7a;
  --anzhiyu-green: #57bd6a;
  --anzhiyu-fontcolor: #363636;
  --anzhiyu-background: #f7f9fe;
  --anzhiyu-reverse: #000;
  --anzhiyu-maskbg: rgba(255, 255, 255, 0.6);
  --anzhiyu-maskbgdeep: rgba(255, 255, 255, 0.85);
  --anzhiyu-hovertext: var(--anzhiyu-theme);
  --anzhiyu-ahoverbg: #f7f7fa;
  --anzhiyu-lighttext: var(--anzhiyu-main);
  --anzhiyu-secondtext: rgba(60, 60, 67, 0.6);
  --anzhiyu-scrollbar: rgba(60, 60, 67, 0.4);
  --anzhiyu-card-btn-bg: #edf0f7;
  --anzhiyu-post-blockquote-bg: #fafcff;
  --anzhiyu-post-tabs-bg: #f2f5f8;
  --anzhiyu-secondbg: #edf0f7;
  --anzhiyu-shadow-nav: 0 5px 12px -5px rgba(102, 68, 68, 0.05);
  --anzhiyu-card-bg: #fff;
  --anzhiyu-shadow-lightblack: 0 5px 12px -5px rgba(102, 68, 68, 0);
  --anzhiyu-shadow-light2black: 0 5px 12px -5px rgba(102, 68, 68, 0);
  --anzhiyu-card-border: #c0c6d8;
}

[data-theme="dark"] {
  --anzhiyu-theme: #0084ff;
  --anzhiyu-theme-op: #0084ff23;
  --anzhiyu-blue: #0084ff;
  --anzhiyu-red: #ff3842;
  --anzhiyu-pink: #ff7a7a;
  --anzhiyu-green: #57bd6a;
  --anzhiyu-fontcolor: #f7f7fa;
  --anzhiyu-background: #18171d;
  --anzhiyu-reverse: #fff;
  --anzhiyu-maskbg: rgba(0, 0, 0, 0.6);
  --anzhiyu-maskbgdeep: rgba(0, 0, 0, 0.85);
  --anzhiyu-hovertext: #0a84ff;
  --anzhiyu-ahoverbg: #fff;
  --anzhiyu-lighttext: #f2b94b;
  --anzhiyu-secondtext: #a1a2b8;
  --anzhiyu-scrollbar: rgba(200, 200, 223, 0.4);
  --anzhiyu-card-btn-bg: #30343f;
  --anzhiyu-post-blockquote-bg: #000;
  --anzhiyu-post-tabs-bg: #121212;
  --anzhiyu-secondbg: #30343f;
  --anzhiyu-shadow-nav: 0 5px 20px 0px rgba(28, 28, 28, 0.4);
  --anzhiyu-card-bg: #1d1b26;
  --anzhiyu-shadow-lightblack: 0 5px 12px -5px rgba(102, 68, 68, 0);
  --anzhiyu-shadow-light2black: 0 5px 12px -5px rgba(102, 68, 68, 0);
  --anzhiyu-card-border: #42444a;
}
```

js：
```js
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

  result <= 99 || (result = 99), (btn.innerHTML = result);
}

document.getElementById("page-name").innerText = document.title.split(" | name")[0];
```

修改本地themes/butterfly/source/js/main.js

```diff
  window.scrollCollect = () => {
        return btf.throttle(function (e) {
          const currentTop = window.scrollY || document.documentElement.scrollTop
          const isDown = scrollDirection(currentTop)
          if (currentTop > 56) {
+           $header.classList.add('is-top-bar')
            if (isDown) {
              if ($header.classList.contains('nav-visible')) $header.classList.remove('nav-visible')
              if (isChatBtnShow && isChatShow === true) {
                chatBtnHide()
                isChatShow = false
              }
            } else {
              if (!$header.classList.contains('nav-visible')) $header.classList.add('nav-visible')
              if (isChatBtnHide && isChatShow === false) {
                chatBtnShow()
                isChatShow = true
              }
            }
            $header.classList.add('nav-fixed')
            if (window.getComputedStyle($rightside).getPropertyValue('opacity') === '0') {
              $rightside.style.cssText = 'opacity: 0.8; transform: translateX(-58px)'
            }
          } else {
            if (currentTop === 0) {
-             $header.classList.remove('nav-fixed', 'nav-visible')
+             $header.classList.remove('is-top-bar')
            }
            $rightside.style.cssText = "opacity: ''; transform: ''"
          }

          if (document.body.scrollHeight <= innerHeight) {
            $rightside.style.cssText = 'opacity: 0.8; transform: translateX(-58px)'
          }
        }, 200)()
      }
```

修改themes/butterfly/layout/includes/header/index.pug

```diff
  if top_img !== false
    - var imgSource = top_img && top_img.indexOf('/') !== -1 ? `background-image: url('${url_for(top_img)}')` : `background: ${top_img}`
    - var bg_img = top_img ? imgSource : ''
    - var site_title = page.title || page.tag || page.category || config.title
-   - var isHomeClass = is_home() ? 'full_page' : 'not-home-page'
+   - var isHomeClass = is_home() ? 'full_page nav-fixed nav-visible' : 'not-home-page'
    - is_post() ? isHomeClass = 'post-bg' : isHomeClass
  else
    - var isHomeClass = 'not-top-img'
```

替换themes/butterfly/layout/includes/header/nav.pug

```pug
- const { darkmode } = theme
nav#nav
  span#blog_name
    .back-home-button(tabindex='-1')
      i.back-home-button-icon.fas.fa-grip-vertical
      .back-menu-list-groups
        .back-menu-list-group
          .back-menu-list-title 网页
          .back-menu-list
            a.back-menu-item(href='/', title='前往博客主页', target='_blank', one-link-mark='yes')
              img.back-menu-item-icon(src='https://img02.anzhiy.cn/adminuploads/1/2022/09/05/6315ec9737ac4.png')
              span.back-menu-item-text 博客
            a.back-menu-item(href='https://www.cloud.anzhiy.cn/', rel='external nofollow', title='前往云盘主页', target='_blank', one-link-mark='yes')
              img.back-menu-item-icon(src='https://img02.anzhiy.cn/adminuploads/1/2022/09/15/63232b7d91d22.jpg')
              span.back-menu-item-text 云盘主页
            a.back-menu-item(href='https://cloud.anzhiy.cn/', rel='external nofollow', title='前往安知鱼云盘', target='_blank', one-link-mark='yes')
              img.back-menu-item-icon(src='https://img02.anzhiy.cn/adminuploads/1/2022/04/27/6268e7d9de532.png')
              span.back-menu-item-text 安知鱼云盘
        .back-menu-list-group
          .back-menu-list-title 项目
          .back-menu-list
            a.back-menu-item(href='http://blgou.net/#/main/home', title='查看德信官网', target='_blank', rel='noopener nofollow', one-link-mark='yes')
              img.back-menu-item-icon(src='https://img02.anzhiy.cn/adminuploads/1/2022/09/15/6322cd942dbd9.png')
              span.back-menu-item-text 德信官网

    a#site-name(href=url_for('/'))
      .title #[=config.title]
      i.fa-solid.fa-house

  div.mask-name-container
    center(id="name-container")
      a(id="page-name" href="javascript:rmf.scrollToTop()") PAGE_NAME

  #menus
    if (theme.algolia_search.enable || theme.local_search.enable)
      div.nav-button#search-button
        a.site-page.social-icon.search
          i.fas.fa-search.fa-fw
          span=' '+_p('search.title')

    if darkmode.enable && darkmode.button
      div.nav-button#darkmode_navswitch
        a.darkmode_switchbutton(type="button" title=_p('rightside.night_mode_title') onclick="rmf.switchDarkMode()")
          i.fas.fa-adjust

    div.nav-button#nav-totop
      a.totopbtn
        i.fas.fa-arrow-up
        span#percent(onclick="btf.scrollToDest(0,500)") 0


    !=partial('includes/header/menu_item', {}, {cache: true})

    #toggle-menu
      a.site-page
        i.fas.fa-bars.fa-fw

```

## 页脚

修改`themes/butterfly/layout/includes/footer.pug`文件

```pug
#footer_deal
  a.deal_link(href="" title="mail")
    i.iconfont.icon-mail
  a.deal_link(href="" title="qq" target="_blank")
    i.iconfont.icon-qq1
  a.deal_link(href="" title="微博" target="_blank")
    i.iconfont.icon-weibo1
  a.deal_link(href="https://github.com/JayHrn" title="github"  target="_blank")
    i.iconfont.icon-github1
  img.footer_mini_logo.entered.loading(style="border-radius:50%" src='图片路径' onclick="btf.scrollToDest(0,500)" title="返回顶部")
  a.deal_link(href="" title="dribbble")
    i.iconfont.icon-dribbble_F
  a.deal_link(href="" title="facebook" target="_blank")
    i.iconfont.icon-facebook1
  a.deal_link(href="" title="Twitter" target="_blank")
    i.iconfont.icon-twitter
  a.deal_link(href="" title="Telegram" target="_blank")
    i.iconfont.icon-telegram
#Jay-footer
  .footer-group
    h3.footer-title 直达
    .footer-links
      a.footer-item(href="https://www.jayhrn.com" target="_blank") 我的主页
      a.footer-item(href="/music") 音乐欣赏
      a.footer-item(href="/harbour") 心灵港湾
      a.footer-item(href="/random.html") 随机文章
  .footer-group
    h3.footer-title 分类
    .footer-links
      a.footer-item(href="/categories/📚学习笔记/") 学习笔记
      a.footer-item(href="/categories/🦋魔改教程/") 魔改教程
      a.footer-item(href="/categories/🌈算法笔记/") 算法笔记
      a.footer-item(href="/categories/📙语法教程/") 语法教程
  .footer-group
    h3.footer-title 关于
    .footer-links
      a.footer-item(href="/about/") 关于我
      a.footer-item(href="/charts/") 博客统计
      a.footer-item(href="/archives") 文章归档
      a.footer-item(href="/update") 更新记录
  .footer-group
    h3.footer-title 友链
    .footer-links#friend-links-in-footer
  .footer-group
    h3.footer-title 协议
    .footer-links
      a.footer-item(href="/privacy/") 隐私协议
      a.footer-item(href="/cookies/") Cookie
      a.footer-item(href="/cc/") 版权协议
#footer-banner
  .footer-banner-links
    .footer-banner-left
      .footer-banner-left
        #footer-banner-tips
        script(src='https://cdn.jsdelivr.net/npm/typed.js/lib/typed.min.js')
        script.
          var typed = new Typed("#footer-banner-tips", {
            strings: ["念念不忘，必有回响。", "Never forget, there will be echoes."],
            startDelay: 200,
            backDelay: 2000,
            typeSpeed: 100,
            loop: true,
            backSpeed: 20
          })

    .footer-banner-right
      a.footer-banner-link(href="https://hexo.io/zh-cn/" title="Hexo") 框架
      a.footer-banner-link |
      a.footer-banner-link(href="https://github.com/jerryc127/hexo-theme-butterfly" title="theme") 主题
      a.footer-banner-link |
      a.footer-banner-link(href="/atom.xml" title="RSS") 订阅
      a.footer-banner-link |
      a.footer-banner-link(href="/about/" title="about") 关于
      a.footer-banner-link |
      a.footer-banner-link.cc(href="/cc/" title="cc协议")
        i.iconfont.icon-cc
        span 协议
```

引入：
```diff
inject:
  head:
+    - <script src="https://at.alicdn.com/t/c/font_3570527_dthoqrrv2tv.css"></script>
```

css：
```css
#footer-wrap {
    color: var(--Jay-fontcolor)
}

#footer-wrap a {
    color: var(--Jay-fontcolor);
    height: 44px;
    line-height: 36px
}

#footer-wrap a:hover {
    color: var(--Jay-hovertext);
    background-color: var(--Jay-none)
}

div#footer_deal {
    justify-content: center;
    display: flex;
    padding-top: 2rem;
    align-items: center
}

@media screen and (max-width: 768px) {
    img.footer_mini_logo {
        display: none
    }

    div#footer_deal {
        flex-wrap: wrap;
        flex-direction: row
    }
}


a.deal_link {
    display: flex;
    margin: 1rem 27px;
    color: var(--Jay-card-bg);
    border-radius: 3rem;
    width: 32px;
    height: 32px;
    background: var(--font-color);
    justify-content: center;
    align-items: center;
    transition: .3s
}

a.deal_link:hover {
    color: var(--Jay-white);
    background: var(--Jay-main)
}

img.footer_mini_logo {
    width: 50px;
    height: 50px;
    margin: 0 1rem;
    cursor: pointer;
    /*filter: drop-shadow(0 12px 12px #ee7d7936);*/
    transition: cubic-bezier(0, 0, 0, 1.29) .5s
}

img.footer_mini_logo:hover {
    -webkit-backface-visibility: hidden;
    -webkit-transform-style: preserve-3d
}

@media screen and (min-width: 1300px) {
    img.footer_mini_logo:hover {
        transform: scale(1.03)
    }

    img.footer_mini_logo:active {
        transform: scale(.97)
    }
}

#weblogo {
    align-self: center
}

#footer-wrap a#Jayblog_footerlogo:hover {
    background: var(--Jay-none)
}

.Jayblog_footerlogo_img {
    filter: drop-shadow(0 12px 12px #ee7d7936)
}

.Jayblog_footerlogo_img:hover {
    transform: scale(1.03)
}

#footer {
    background: linear-gradient(180deg, var(--Jay-background) 0, var(--Jay-card-bg) 25%);
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    z-index: 1002
}

@media screen and (max-width: 768px) {
    #footer {
        background: linear-gradient(180deg, var(--Jay-background) 0, var(--Jay-card-bg) 25%);
        margin-top: 0;
        z-index: 999
    }
}

[data-theme=dark] #footer:before, [data-theme=dark] #page-header:before, [data-theme=dark] #web_bg:before {
    background-color: var(--Jay-none) !important
}

@media screen and (max-width: 768px) {
    #letlink {
        flex-direction: column !important;
        text-align: center !important
    }

    #letlogo {
        display: none !important
    }

    #footer-wrap {
        margin-top: 1rem !important
    }
}

.footer-banner-right {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap
}

#footer-wrap {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 20px 50px 0 50px;
    text-align: left !important;
    max-width: 1200px;
    margin: 0 auto
}

#footer-wrap h1 {
    font-size: 1.5rem;
    margin: 0
}

#footer-wrap h3 {
    padding: 0 12px
}

#footer-wrap p {
    margin: 0 0 0 .2rem;
    font-size: .8rem;
    opacity: .8
}

#footer-wrap i {
    margin-right: .5rem;
    width: 22px;
    font-size: 18px;
    display: inline-block
}

#footer-wrap #letlogo {
    display: flex;
    flex-direction: column;
    /*margin-right: 60px;*/
    align-self: center;
    margin: auto 0;
    max-width: 200px
}

#footer-wrap #letlink .link_group {
    display: flex;
    flex-direction: column;
    margin-right: 20px;
    min-width: 180px
}

#footer-wrap #letlink {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin: 0 0 1rem 0
}

#weblogo i {
    font-size: 2rem;
    line-height: 2rem;
    letter-spacing: -10px
}

#footer:before {
    position: absolute !important;
    width: 100% !important;
    height: 100% !important;
    content: '' !important;
    z-index: -1
}

#Jay-footer .footer-links {
    display: flex;
    flex-direction: column
}

#Jay-footer {
    display: flex;
    flex-direction: row;
    width: 100%;
    max-width: 1200px;
    margin: 1rem auto;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-bottom: 3rem;
    padding: 0 1rem
}

#Jay-footer .footer-item {
    font-size: 1rem;
    line-height: .8rem;
    margin: .38rem 0;
    color: var(--Jay-fontcolor);
    /*margin-right: auto*/
}

#Jay-footer .footer-item:hover {
    color: var(--Jay-theme)
}

#Jay-footer .footer-group {
    min-width: 120px
}

#Jay-footer .footer-title {
    color: var(--Jay-secondtext);
    font-size: 1rem
}

#footer-banner {
    padding: 1rem;
    color: var(--Jay-fontcolor);
    margin-top: 1rem;
    background: var(--Jay-secondbg);
    display: flex;
    overflow: hidden;
    z-index: 1002;
    transition: .3s;
    /*border-top: var(--style-border)*/
}

[data-theme=dark] #footer-banner {
    background: var(--Jay-secondbg)
}

#footer-banner .footer-banner-links {
    display: flex;
    justify-content: space-between;
    max-width: 1400px;
    width: 100%;
    margin: 0 auto;
    flex-wrap: wrap;
    align-items: center;
}

#footer-banner .footer-banner-left {
    display: flex;
    flex-wrap: wrap;
    min-height: 32px
}

#footer-banner .footer-banner-link {
    margin-right: 1rem;
    color: var(--Jay-fontcolor);
    font-size: 1rem;
    font-weight: 700;
    white-space: nowrap
}

#footer-banner .footer-banner-link.cc {
    margin-right: 0
}

#footer-banner .footer-banner-link.cc i {
    margin-right: .5rem
}

#footer-banner .footer-banner-link:hover {
    color: var(--Jay-theme)
}

#footer-banner > div > div.footer-banner-left > span {
    margin-right: 1rem
}

#footer-banner .footer-banner-right a:hover {
    color: var(--Jay-lighttext)
}

#footer_deal i {
    font-size: 1.6rem;
    transition: .3s;
    line-height: 1.3rem;
    height: 1.3rem
}
```

## 关于页

新建 themes/butterfly/layout/includes/page/about.pug

```pug
#about-page
  .author-box
    .author-img
      img.no-lightbox(src='https://img02.anzhiy.cn/adminuploads/1/2022/09/15/63232b7d91d22.jpg')
    .image-dot
  p.p.center.logo.large 关于我
  p.p.center.small 生活明朗，万物可爱✨
  .author-content
    .author-content-item.myInfoAndSayHello
      .title1 你好，很高兴认识你👋
      .title2
        | 我叫
        span.inline-word 陈志伟
      .title1
        | 是一名 前端工程师、学生、独立开发者、
        span.inline-word 博主
    .aboutsiteTips.author-content-item
      .author-content-item-tips 追求
      h2
        | 源于
        br
        | 热爱而去
        span.inline-word 感受
        .mask
          span.first-tips 学习
          |
          span 生活
          |
          span(data-up) 程序
          |
          span(data-show) 体验

  .hello-about
    .cursor(style='translate:none;rotate:none;scale:none;transform:translate(721px,180px)')
    .shapes
      .shape.shape-1(style='translate:none;rotate:none;scale:none;transform:translate(721px,180px)')
      .shape.shape-2(style='translate:none;rotate:none;scale:none;transform:translate(721px,180px)')
      .shape.shape-3(style='translate:none;rotate:none;scale:none;transform:translate(721px,180px)')
    .content
      h1 Hello there!

  .author-content
    .author-content-item.skills
      .card-content
        .author-content-item-tips 技能
        span.author-content-item-title 开启创造力
        .skills-style-group
          .tags-group-all
            .tags-group-wrapper
              each i in site.data.creativity
                - const evenNum = i.creativity_list.filter((x, index) => index % 2 === 0);
                - const oddNum = i.creativity_list.filter((x, index) => index % 2 === 1);
                each item, index in i.creativity_list
                  if ((index+1 <= evenNum.length) && (index+1 <= oddNum.length))
                    .tags-group-icon-pair
                      .tags-group-icon(style=`background: ${evenNum[index].color}`)
                        img.no-lightbox(title=evenNum[index].name, src=evenNum[index].icon)
                      .tags-group-icon(style=`background: ${oddNum[index].color}`)
                        img.no-lightbox(title=oddNum[index].name, src=oddNum[index].icon)
          .skills-list
            each i in site.data.creativity
              each item, index in i.creativity_list
                .skill-info
                  .skill-icon(style=`background: ${item.color}`)
                    img.no-lightbox(title=item.name, src=item.icon)
                  .skill-name
                    span=item.name
            .etc ...
    .author-content-item.careers
      .card-content
        .author-content-item-tips 生涯
        span.author-content-item-title 无限进步
        .careers-group
          .careers-item
            .circle(style='background:#357ef5')
            .name EDU,软件工程专业
        img.author-content-img.no-lightbox(alt='生涯', src='https://img02.anzhiy.cn/adminuploads/1/2022/09/26/6330e9bcc39cc.png')

  .author-content
    .about-statistic.author-content-item
      .card-content
        .author-content-item-tips 数据
        span.author-content-item-title 访问统计
        #statistic
        .post-tips
          | 统计信息来自
          a(href='https://invite.51.la/1NzKqTeb?target=V6', target='_blank', rel='noopener nofollow') 51la网站统计
        .banner-button-group
          a.banner-button(onclick='pjax.loadUrl("/archives/")', data-pjax-state)
            i.fas.fa-circle-arrow-up-right
            |
            span.banner-button-text 文章隧道
    .author-content-item-group.column.mapAndInfo
      .author-content-item.map.single
        span.map-title
          | 我现在住在
          b 中国，长沙市
      .author-content-item.selfInfo.single
        div
          span.selfInfo-title 生于
          |
          span.selfInfo-content#selfInfo-content-year(style='color:#43a6c6') 2002
        div
          span.selfInfo-title 湖南信息学院
          |
          span.selfInfo-content(style='color:#c69043') 软件工程
        div
          span.selfInfo-title 现在职业
          |
          span.selfInfo-content(style='color:#b04fe6') 大三学生👨‍🎓

  .author-content
    .author-content-item.personalities
      .author-content-item-tips 性格
      span.author-content-item-title 执政官
      .title2(style='color:#ac899c') ESFJ-A
      .post-tips
        | 在
        a(href='https://www.16personalities.com/', target='_blank', rel='noopener nofollow') 16personalities
        |  了解更多关于
        a(target='_blank', rel='noopener external nofollow', href='https://www.16personalities.com/ch/esfj-%E4%BA%BA%E6%A0%BC') 执政官
      .image
        img.no-lightbox(src='https://npm.elemecdn.com/anzhiyu-blog@2.0.8/img/svg/ESFJ-A.svg')
    .author-content-item.myphoto
      img.author-content-img.no-lightbox(alt='自拍', src='https://img02.anzhiy.cn/adminuploads/1/2022/09/24/632e9643611ec.jpg')

  .author-content
    .author-content-item.maxim
      .author-content-item-tips 座右铭
      span.maxim-title
        span(style='opacity:.6;margin-bottom:8px') 生活明朗，
        |
        span 万物可爱。
    .author-content-item.buff
      .card-content
        .author-content-item-tips 特长
        span.buff-title
          span(style='opacity:.6;margin-bottom:8px')
            | 脑回路新奇的
            span.inline-word 酸菜鱼
          |
          span
            | 二次元指数
            span.inline-word MAX
      .card-background-icon
        i.fas.fa-dice-d20

  .author-content
    .author-content-item.game-yuanshen
      .card-content
        .author-content-item-tips 爱好游戏
        span.author-content-item-title 原神
        .content-bottom
          .icon-group
            .loading-bar(role='presentation', aria-hidden='true')
              img.no-lightbox(src='https://yuanshen.site/imgs/loading-bar.png', alt='Loading...', longdesc='https://ys.mihoyo.com/main/')
          .tips.game-yuanshen-uid UID: 125766904
    .author-content-item.comic-content
      .card-content
        .author-content-item-tips 爱好番剧
        span.author-content-item-title 紫罗兰的永恒花园
        .content-bottom
          .banner-button-group
            a.banner-button(onclick='window.open("https://www.bilibili.com/bangumi/play/ep173286?from=search&seid=10927182858100936967&from_spmid=666.25.episode.0")', data-pjax-state)
              i.fas.fa-circle-arrow-up-right
              |
              span.banner-button-text 立即追番

  .author-content
    .author-content-item.like-technology
      .card-content
        .author-content-item-tips 关注偏好
        span.author-content-item-title 数码科技
        .content-bottom
          .tips 手机、电脑软硬件
    .author-content-item.like-music
      .card-content
        .author-content-item-tips 音乐偏好
        span.author-content-item-title 许嵩、民谣、
        |
        span.author-content-item-title 华语流行
        .content-bottom
          .tips 跟 安知鱼 一起欣赏更多音乐
        .banner-button-group
          a.banner-button(onclick='pjax.loadUrl("/music/")', data-pjax-state)
            i.fas.fa-circle-arrow-up-right
            |
            span.banner-button-text 更多推荐

  .author-content
    .create-site-post.author-content-item.single
      .author-content-item-tips 心路历程
      | 欢迎来到我的博客 😝，这里是我记笔记的地方 🙌，目前就读于长沙
      strong 湖南信息学院
      | 的
      strong 软件工程
      | 专业，虽然有时候常常会忘记更新笔记，咕咕 ✋~ 但是记笔记真的是一个很棒的习惯 💪，能把学下来的知识进行积累，沉淀，有一句话说的好，能教给别人的知识，才是真正学会了的知识 ⚡ 每周我都会尽量进行更新 ☁️，如果没更的话，可能是我忘了，也可能是我在钻研某个东西的时候太入迷了
      psw 肯定又熬夜了
      del 同学们不要学我，老是熬夜会长痘
      |  给大家推荐一部番：
      .site-card-group
        a.site-card(target='_blank', href='https://www.bilibili.com/bangumi/play/ss21542/?from=search&seid=10927182858100936967', data-title='紫罗兰的永恒花园')
          .wrapper.cover
            img.cover.fadeIn(src='https://npm.elemecdn.com/anzhiyu-blog@1.1.6/img/post/common/violet.jpg')
          .info
            img.flink-avatar(src='https://static.hdslb.com/images/favicon.ico', style='top: 19px')
            span.site-title 紫罗兰的永恒花园
      | 因为这部番，2018 年的一个夏天我看完以后心情久久不能释怀，为薇尔莉特与爱感到一种说不上来的味道，多年以后在看这部番，才明白原来这就是爱，喜欢这部番不仅仅是因为它制作的用心，不论是人物细节还是场景细节，不管是 op 还是 ed 都非常好听，最后的结局或许才是让我不能忘怀的原因，薇尔莉特，希望收到来自家人，朋友，恋人的那封 "信" ~
      .checkbox.blue.checked
        input(type='checkbox', checked)
        p
          | 致力于成为一个前端小姥🐷
          img.inline-img(src='https://cdn.jsdelivr.net/gh/volantis-x/cdn-emoji/aru-l/0000.gif/' data-fancybox='gallery', style='display: inline;margin: 0 3px;height: 1.1em;vertical-align: text-bottom;')
      .checkbox.blue.checked
        input(type='checkbox', checked)
        p
          | 又菜又爱玩🎮
          kbd ctrl
          |  +
          kbd C
          | 、
          kbd ctrl
          |  +
          kbd V
          | 高级CV工程师🏆
      .checkbox.times.red.checked
        input(type='checkbox', checked)
        p 擅长PS、Pr、Ae、Au、Ai、Dw、An、Id等软件的安装与卸载🎃
      .checkbox.times.red.checked
        input(type='checkbox', checked)
        p 精通Html、CSS、JavaScript、Vue、React、PHP、Java、Python、C、C++、C#、Go、TypeScript等单词的拼写🎲
      .checkbox.times.red.checked
        input(type='checkbox', checked)
        p 熟悉Windows、Linux、Mac、Android、IOS等系统的开关机👻
      span.p.h3 todoList
      .checkbox.checked
        input(type='checkbox', checked)
        p 原生微信小程序
      .checkbox.checked
        input(type='checkbox', checked)
        p vue3、vite、 pinia
      .checkbox.checked
        input(type='checkbox', checked)
        p 重装文档重写
      .checkbox
        input(type='checkbox')
        p Electron
      .checkbox
        input(type='checkbox')
        p 操作系统
      .checkbox.canvas
        input(type='checkbox')
        p svg绘制
      .checkbox
        input(type='checkbox')
        p threeJS
      .checkbox.Nuxt
        input(type='checkbox')
        p Next
      .checkbox
        input(type='checkbox')
        p Flutter
      .checkbox
        input(type='checkbox')
        p 智慧城市大前端
      .checkbox
        input(type='checkbox')
        p react18系统学习
      .checkbox
        input(type='checkbox')
        p 工业企业生产管理
      .checkbox
        input(type='checkbox')
        p 语言的魅力

  .author-content
    .author-content-item.single.reward
      .author-content-item-tips 致谢
      span.author-content-item-title 赞赏名单
      .author-content-item-description 感谢因为有你们，让我更加有创作的动力。
        each i in site.data.reward
          - let rawData = [...i.reward_list]
          .reward-list-all
            - let reward_list_amount = i.reward_list.sort((a,b)=>b.amount -  a.amount)
            each item, index in reward_list_amount
              .reward-list-item
                .reward-list-item-name=item.name
                .reward-list-bottom-group
                  if item.amount >= 50
                    .reward-list-item-money(style='background:var(--anzhiyu-yellow)')=`¥${item.amount}`
                  else
                    .reward-list-item-money=`¥${item.amount + (item.suffix ? item.suffix : "")}`
                  .datatime.reward-list-item-time(datatime=item.datatime)=new Date(item.datatime).toISOString().slice(0, -14)
          .reward-list-updateDate
            | 最新更新时间：
            time.datatime.reward-list-updateDate-time(datatime=rawData[0].datatime)=new Date(rawData[0].datatime).toISOString().slice(0, -14)
      .post-reward
        button.tip-button.reward-button
          span.tip-button__text 不给糖果就捣蛋
          .coin-wrapper
            .coin
              .coin__middle
              .coin__back
              .coin__front
          .reward-main
            ul.reward-all
              li.reward-item
                a(href='https://npm.elemecdn.com/anzhiyu-blog@1.1.6/img/post/common/qrcode-weichat.png', target='_blank')
                  img.post-qr-code-img(alt='wechat', src='https://npm.elemecdn.com/anzhiyu-blog@1.1.6/img/post/common/qrcode-weichat.png')
                .post-qr-code-desc wechat
              li.reward-item
                a(href='https://npm.elemecdn.com/anzhiyu-blog@1.1.6/img/post/common/qrcode-alipay.png', target='_blank')
                  img.post-qr-code-img(alt='alipay', src='https://npm.elemecdn.com/anzhiyu-blog@1.1.6/img/post/common/qrcode-alipay.png')
                .post-qr-code-desc alipay

script(src=url_for(theme.CDN.option.countup_js))
script.
  (() => {
    function isInViewPortOfOne(el) {
      if (!el) return;
      const viewPortHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
      const offsetTop = el.offsetTop;
      const scrollTop = document.documentElement.scrollTop;
      const top = offsetTop - scrollTop;
      return top <= viewPortHeight;
    }
    fetch('https://v6-widget.51.la/v6/{掩码ID}/quote.js').then(res => res.text()).then((data) => {
        let title = ['最近活跃', '今日人数', '今日访问', '昨日人数', '昨日访问', '本月访问', '总访问量']
        let num = data.match(/(<\/span><span>).*?(\/span><\/p>)/g)

        num = num.map((el) => {
          let val = el.replace(/(<\/span><span>)/g, '')
          let str = val.replace(/(<\/span><\/p>)/g, '')
          return str
        })

        let statisticEl = document.getElementById('statistic')

        // 自定义不显示哪个或者显示哪个，如下为不显示 最近活跃访客 和 总访问量
        let statistic = []
        for (let i = 0; i < num.length; i++) {
            if (!statisticEl) return
            if (i == 0 || i == num.length - 1) continue;
            statisticEl.innerHTML += '<div><span>' + title[i] + '</span><span id='+ title[i] + '>' + num[i] + '</span></div>'
            queueMicrotask(()=> {
              statistic.push(new CountUp(title[i], 0, num[i], 0, 2, {
                  useEasing: true,
                  useGrouping: true,
                  separator: ',',
                  decimal: '.',
                  prefix: '',
                  suffix: ''
              }))
            })
        }

        function statisticUP () {
          let statisticElment = document.querySelector('.about-statistic.author-content-item');
          if(isInViewPortOfOne(statisticElment)) {
            for (let i = 0; i < num.length; i++) {
              if (i == 0 || i == num.length - 1) continue;
              statistic[i-1].start();
            }
            document.removeEventListener('scroll', throttleStatisticUP);
          }
        }

        const selfInfoContentYear = new CountUp('selfInfo-content-year', 0, 2002, 0, 2, {
          useEasing: true,
          useGrouping: false,
          separator: ',',
          decimal: '.',
          prefix: '',
          suffix: ''
        })

        function scrollSelfInfoContentYear() {
          let selfInfoContentYearElment = document.querySelector('.author-content-item.selfInfo.single');
          if (selfInfoContentYearElment && isInViewPortOfOne(selfInfoContentYearElment)) {
            selfInfoContentYear.start()
            document.removeEventListener('scroll', throttleScrollSelfInfoContentYear);
          }
        }
        const throttleStatisticUP = btf.throttle(statisticUP, 200)
        document.addEventListener('scroll', throttleStatisticUP, {passive: true})

        const throttleScrollSelfInfoContentYear = btf.throttle(scrollSelfInfoContentYear, 200)
        document.addEventListener('scroll', throttleScrollSelfInfoContentYear, {passive: true})
    });

    var pursuitInterval = null;
      pursuitInterval = setInterval(function () {
        const show = document.querySelector('span[data-show]')
        const next = show.nextElementSibling || document.querySelector('.first-tips')
        const up = document.querySelector('span[data-up]')

        if (up) {
          up.removeAttribute('data-up')
        }

        show.removeAttribute('data-show')
        show.setAttribute('data-up', '')

        next.setAttribute('data-show', '')
      }, 2000)

      document.addEventListener('pjax:send', function(){
        clearInterval(pursuitInterval);
      });

      var helloAboutEl = document.querySelector('.hello-about')
      helloAboutEl.addEventListener("mousemove", evt => {
        const mouseX = evt.offsetX;
        const mouseY = evt.offsetY;
        gsap.set(".cursor", {
          x: mouseX,
          y: mouseY,
        })

        gsap.to(".shape", {
          x: mouseX,
          y: mouseY,
          stagger: -0.1
        })
      })
  })()
```

inject引入：

```diff
bottom:
  # 51la统计&灵雀统计
+  - <script charset="UTF-8" id="LA_COLLECT" src="https://sdk.51.la/js-sdk-pro.min.js"></script>
+  - <script src="https://sdk.51.la/perf/js-sdk-perf.min.js" crossorigin="anonymous"></script>
+  - <script> LA.init({id:"{YOU ID}",ck:"{YOU CK}"})</script>
+  - <script>new LingQue.Monitor().init({id:"YOU ID",sendSuspicious:true});</script>
```

修改_config.butterfly.yml, 注意缩进

```diff
  CDN:
    option:
      # main_css:
      .....
+     # countupJS
+     countup_js: /js/countup.js
```

新建 source/js/countup.js

```js
var CountUp = function (target, startVal, endVal, decimals, duration, options) {
  var self = this;
  self.version = function () {
    return "1.9.2";
  };
  self.options = {
    useEasing: true,
    useGrouping: true,
    separator: ",",
    decimal: ".",
    easingFn: easeOutExpo,
    formattingFn: formatNumber,
    prefix: "",
    suffix: "",
    numerals: [],
  };
  if (options && typeof options === "object") {
    for (var key in self.options) {
      if (options.hasOwnProperty(key) && options[key] !== null) {
        self.options[key] = options[key];
      }
    }
  }
  if (self.options.separator === "") {
    self.options.useGrouping = false;
  } else {
    self.options.separator = "" + self.options.separator;
  }
  var lastTime = 0;
  var vendors = ["webkit", "moz", "ms", "o"];
  for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
    window.requestAnimationFrame = window[vendors[x] + "RequestAnimationFrame"];
    window.cancelAnimationFrame =
      window[vendors[x] + "CancelAnimationFrame"] || window[vendors[x] + "CancelRequestAnimationFrame"];
  }
  if (!window.requestAnimationFrame) {
    window.requestAnimationFrame = function (callback, element) {
      var currTime = new Date().getTime();
      var timeToCall = Math.max(0, 16 - (currTime - lastTime));
      var id = window.setTimeout(function () {
        callback(currTime + timeToCall);
      }, timeToCall);
      lastTime = currTime + timeToCall;
      return id;
    };
  }
  if (!window.cancelAnimationFrame) {
    window.cancelAnimationFrame = function (id) {
      clearTimeout(id);
    };
  }
  function formatNumber(num) {
    num = num.toFixed(self.decimals);
    num += "";
    var x, x1, x2, x3, i, l;
    x = num.split(".");
    x1 = x[0];
    x2 = x.length > 1 ? self.options.decimal + x[1] : "";
    if (self.options.useGrouping) {
      x3 = "";
      for (i = 0, l = x1.length; i < l; ++i) {
        if (i !== 0 && i % 3 === 0) {
          x3 = self.options.separator + x3;
        }
        x3 = x1[l - i - 1] + x3;
      }
      x1 = x3;
    }
    if (self.options.numerals.length) {
      x1 = x1.replace(/[0-9]/g, function (w) {
        return self.options.numerals[+w];
      });
      x2 = x2.replace(/[0-9]/g, function (w) {
        return self.options.numerals[+w];
      });
    }
    return self.options.prefix + x1 + x2 + self.options.suffix;
  }
  function easeOutExpo(t, b, c, d) {
    return (c * (-Math.pow(2, (-10 * t) / d) + 1) * 1024) / 1023 + b;
  }
  function ensureNumber(n) {
    return typeof n === "number" && !isNaN(n);
  }
  self.initialize = function () {
    if (self.initialized) {
      return true;
    }
    self.error = "";
    self.d = typeof target === "string" ? document.getElementById(target) : target;
    if (!self.d) {
      self.error = "[CountUp] target is null or undefined";
      return false;
    }
    self.startVal = Number(startVal);
    self.endVal = Number(endVal);
    if (ensureNumber(self.startVal) && ensureNumber(self.endVal)) {
      self.decimals = Math.max(0, decimals || 0);
      self.dec = Math.pow(10, self.decimals);
      self.duration = Number(duration) * 1000 || 2000;
      self.countDown = self.startVal > self.endVal;
      self.frameVal = self.startVal;
      self.initialized = true;
      return true;
    } else {
      self.error = "[CountUp] startVal (" + startVal + ") or endVal (" + endVal + ") is not a number";
      return false;
    }
  };
  self.printValue = function (value) {
    var result = self.options.formattingFn(value);
    if (self.d.tagName === "INPUT") {
      this.d.value = result;
    } else {
      if (self.d.tagName === "text" || self.d.tagName === "tspan") {
        this.d.textContent = result;
      } else {
        this.d.innerHTML = result;
      }
    }
  };
  self.count = function (timestamp) {
    if (!self.startTime) {
      self.startTime = timestamp;
    }
    self.timestamp = timestamp;
    var progress = timestamp - self.startTime;
    self.remaining = self.duration - progress;
    if (self.options.useEasing) {
      if (self.countDown) {
        self.frameVal = self.startVal - self.options.easingFn(progress, 0, self.startVal - self.endVal, self.duration);
      } else {
        self.frameVal = self.options.easingFn(progress, self.startVal, self.endVal - self.startVal, self.duration);
      }
    } else {
      if (self.countDown) {
        self.frameVal = self.startVal - (self.startVal - self.endVal) * (progress / self.duration);
      } else {
        self.frameVal = self.startVal + (self.endVal - self.startVal) * (progress / self.duration);
      }
    }
    if (self.countDown) {
      self.frameVal = self.frameVal < self.endVal ? self.endVal : self.frameVal;
    } else {
      self.frameVal = self.frameVal > self.endVal ? self.endVal : self.frameVal;
    }
    self.frameVal = Math.round(self.frameVal * self.dec) / self.dec;
    self.printValue(self.frameVal);
    if (progress < self.duration) {
      self.rAF = requestAnimationFrame(self.count);
    } else {
      if (self.callback) {
        self.callback();
      }
    }
  };
  self.start = function (callback) {
    if (!self.initialize()) {
      return;
    }
    self.callback = callback;
    self.rAF = requestAnimationFrame(self.count);
  };
  self.pauseResume = function () {
    if (!self.paused) {
      self.paused = true;
      cancelAnimationFrame(self.rAF);
    } else {
      self.paused = false;
      delete self.startTime;
      self.duration = self.remaining;
      self.startVal = self.frameVal;
      requestAnimationFrame(self.count);
    }
  };
  self.reset = function () {
    self.paused = false;
    delete self.startTime;
    self.initialized = false;
    if (self.initialize()) {
      cancelAnimationFrame(self.rAF);
      self.printValue(self.startVal);
    }
  };
  self.update = function (newEndVal) {
    if (!self.initialize()) {
      return;
    }
    newEndVal = Number(newEndVal);
    if (!ensureNumber(newEndVal)) {
      self.error = "[CountUp] update() - new endVal is not a number: " + newEndVal;
      return;
    }
    self.error = "";
    if (newEndVal === self.frameVal) {
      return;
    }
    cancelAnimationFrame(self.rAF);
    self.paused = false;
    delete self.startTime;
    self.startVal = self.frameVal;
    self.endVal = newEndVal;
    self.countDown = self.startVal > self.endVal;
    self.rAF = requestAnimationFrame(self.count);
  };
  if (self.initialize()) {
    self.printValue(self.startVal);
  }
};
```

修改themes/butterfly/layout/page.pug```

```diff
    case page.type
      when 'tags'
        include includes/page/tags.pug
+     when 'about'
+       include includes/page/about.pug
```

新建`source/_data/reward.yml`

```yaml
- class_name: 赞赏
  reward_list:
    - name: 鹿啵包
      amount: 10
      datatime: 2022-11-08
    - name: 疾速k
      amount: 50
      datatime: 2022-09-20
    - name: 伴舟先生大霖子
      amount: 4.03
      datatime: 2022-10-27
      suffix: 贝壳
    - name: Magica_0x0
      amount: 3.36
      datatime: 2022-10-07
      suffix: 贝壳
    - name: 名字就是要短像这样
      amount: 3.36
      datatime: 2022-08-25
      suffix: 贝壳
    - name: Leviathan520
      amount: 1.34
      datatime: 2022-08-23
      suffix: 贝壳
    - name: 托马斯
      amount: 10
      datatime: 2022-08-19
    - name: 哇是猫猫欸
      amount: 1.34
      datatime: 2022-08-19
      suffix: 贝壳
```

新建`about.css`

```css
#gitcalendar {
  margin: 0 auto;
  border-radius: 24px;
  background: var(--anzhiyu-card-bg);
  border: var(--style-border-always);
  box-shadow: var(--anzhiyu-shadow-border);
  position: relative;
  padding: 1rem 2rem;
  overflow: hidden;
}

#page:has(#about-page) {
  border: 0;
  box-shadow: none !important;
  padding: 0 !important;
  background: transparent !important;
}

#page:has(#about-page) .page-title {
  display: none;
}

.page:has(#about-page) #footer-wrap {
  opacity: 1;
  overflow: visible;
  height: auto !important;
  min-height: 16px;
  color: #666;
}

#web_bg ~ .page:has(#about-page) {
  background: var(--anzhiyu-background);
}

#about-page .author-box {
  position: relative;
}
#about-page .author-box .author-img {
  margin: auto;
  border-radius: 50%;
  overflow: hidden;
  width: 180px;
  height: 180px;
}
#about-page .author-box .author-img img {
  border-radius: 50%;
  overflow: hidden;
  width: 180px;
  height: 180px;
}

#about-page .author-box .image-dot {
  width: 45px;
  height: 45px;
  background: #6bdf8f;
  position: absolute;
  border-radius: 50%;
  border: 6px solid var(--anzhiyu-background);
  top: 50%;
  left: 50%;
  transform: translate(35px, 45px);
}

.author-content {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  margin-top: 1rem;
}

#about-page .myInfoAndSayHello {
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: var(--anzhiyu-white);
  background: linear-gradient(120deg, #5b27ff 0, #00d4ff 100%);
  background-size: 200%;
  animation: gradient 15s ease infinite;
  width: 59%;
}

.author-content-item {
  width: 49%;
  border-radius: 24px;
  background: var(--anzhiyu-card-bg);
  border: var(--style-border-always);
  box-shadow: var(--anzhiyu-shadow-border);
  position: relative;
  padding: 1rem 2rem;
  overflow: hidden;
}

#about-page .myInfoAndSayHello .title1 {
  opacity: 0.8;
  line-height: 1.3;
}

#about-page .myInfoAndSayHello .title2 {
  font-size: 36px;
  font-weight: 700;
  line-height: 1.1;
  margin: 0.5rem 0;
}
.inline-word {
  word-break: keep-all;
  white-space: nowrap;
}

#about-page .myInfoAndSayHello .title1 {
  opacity: 0.8;
  line-height: 1.3;
}

.author-content-item.aboutsiteTips {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  width: 39%;
}

.aboutsiteTips h2 {
  margin-right: auto;
  font-size: 36px;
  font-family: Helvetica;
  line-height: 1.06;
  letter-spacing: -0.02em;
  color: var(--font-color);
  margin-top: 0;
}

.aboutsiteTips .mask {
  height: 36px;
  position: relative;
  overflow: hidden;
  margin-top: 4px;
}
.aboutsiteTips .mask span {
  display: block;
  box-sizing: border-box;
  position: absolute;
  top: 36px;
  padding-bottom: var(--offset);
  background-size: 100% 100%;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  background-repeat: no-repeat;
}
.aboutsiteTips .mask span[data-show] {
  transform: translateY(-100%);
  transition: 0.5s transform ease-in-out;
}
.aboutsiteTips .mask span[data-up] {
  transform: translateY(-200%);
  transition: 0.5s transform ease-in-out;
}
.aboutsiteTips .mask span:nth-child(1) {
  background-image: linear-gradient(45deg, #0ecffe 50%, #07a6f1);
}
.aboutsiteTips .mask span:nth-child(2) {
  background-image: linear-gradient(45deg, #18e198 50%, #0ec15d);
}
.aboutsiteTips .mask span:nth-child(3) {
  background-image: linear-gradient(45deg, #8a7cfb 50%, #633e9c);
}
.aboutsiteTips .mask span:nth-child(4) {
  background-image: linear-gradient(45deg, #fa7671 50%, #f45f7f);
}
@media screen and (max-width: 768px) {
  .author-content-item.map {
    margin-bottom: 0;
  }
}
#about-page .about-statistic {
  min-height: 380px;
  width: 39%;
  background: url(https://img02.anzhiy.cn/adminuploads/1/2022/09/23/632d634f8376d.jpg) no-repeat top;
  background-size: cover;
  color: var(--anzhiyu-white);
  overflow: hidden;
}
#about-page .about-statistic::after {
  box-shadow: 0 -159px 173px 71px #0c1c2c inset;
  position: absolute;
  content: "";
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}
.author-content-item .card-content {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 2;
  display: flex;
  flex-direction: column;
  padding: 1rem 2rem;
}

.author-content-item .card-content .author-content-item-title {
  margin-bottom: 0.5rem;
}
.author-content-item .author-content-item-title {
  font-size: 36px;
  font-weight: 700;
  line-height: 1;
}
#statistic {
  font-size: 16px;
  border-radius: 15px;
  width: 100%;
  color: var(--anzhiyu-white);
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 1rem;
  margin-bottom: 2rem;
}
#statistic div span:first-child {
  opacity: 0.8;
  font-size: 0.6rem;
}
#statistic div span:last-child {
  font-weight: 700;
  font-size: 34px;
  line-height: 1;
  white-space: nowrap;
}
#statistic div {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 50%;
  margin-bottom: 0.5rem;
}

.post-tips {
  color: var(--anzhiyu-gray);
  font-size: 14px;
  position: absolute;
  bottom: 1rem;
  left: 2rem;
}
.post-tips a {
  color: var(--anzhiyu-gray) !important;
  border: none !important;
}
.author-content-item .card-content .banner-button-group {
  position: absolute;
  bottom: 1.5rem;
  right: 2rem;
}
.author-content-item .card-content .banner-button-group .banner-button {
  height: 40px;
  width: 124px;
  border-radius: 20px;
  justify-content: center;
  background: var(--anzhiyu-card-bg);
  color: var(--font-color);
  display: flex;
  align-items: center;
  z-index: 1;
  transition: 0.3s;
  cursor: pointer;
  border-bottom: 0 !important;
}
.author-content-item .card-content .banner-button-group .banner-button i {
  margin-right: 8px;
  font-size: 1rem;
}
#about-page .author-content-item .card-content .banner-button-group .banner-button i {
  font-size: 1.5rem;
}

.author-content-item .card-content .banner-button-group .banner-button:hover {
  background: var(--anzhiyu-main);
  color: var(--anzhiyu-white);
  border-radius: 20px !important;
}
.author-content-item.personalities {
  position: relative;
  width: 59%;
}

.author-content-item.personalities .image {
  position: absolute;
  right: 30px;
  top: 10px;
  width: 220px;
  transition: transform 2s cubic-bezier(0.13, 0.45, 0.21, 1.02);
}
.author-content-item.personalities .image img {
  display: block;
  margin: 0 auto 20px;
  max-width: 100%;
  transition: filter 375ms ease-in 0.2s;
}
.author-content-item.personalities:hover .image {
  transform: rotate(-10deg);
}
.author-content-item.myphoto {
  height: 60%;
  min-height: 240px;
  position: relative;
  overflow: hidden;
  width: 39%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.author-content-item.myphoto img {
  position: absolute;
  min-width: 100%;
  object-fit: cover;
  transition: 0.6s;
  animation: coverIn 2s ease-out forwards;
  transition: transform 2s ease-out !important;
}
.author-content-item.myphoto:hover img {
  transform: scale(1.1);
}
.author-content-item:hover .card-background-icon {
  transform: rotate(20deg);
}
.author-content-item.personalities .title2 {
  font-size: 36px;
  font-weight: 700;
  line-height: 1.1;
}

.author-content-item.map {
  background: url(https://img02.anzhiy.cn/adminuploads/1/2022/09/24/632e6f48981d8.jpg) no-repeat center;
  min-height: 160px;
  max-height: 400px;
  position: relative;
  overflow: hidden;
  margin-bottom: 0.5rem;
  height: 60%;
  background-size: 100%;
  transition: 1s ease-in-out;
}
[data-theme="dark"] .author-content-item.map {
  background: url(https://img02.anzhiy.cn/adminuploads/1/2022/09/26/6330ebf1f3e65.jpg) no-repeat center;
  background-size: 100%;
}

.author-content-item.single {
  width: 100%;
}

.author-content-item.map .map-title {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background: var(--anzhiyu-maskbg);
  padding: 0.5rem 2rem;
  backdrop-filter: saturate(180%) blur(20px);
  -webkit-backdrop-filter: blur(20px);
  transition: 1s ease-in-out;
  font-size: 20px;
}
.author-content-item.map .map-title b {
  color: var(--font-color);
}
.author-content-item.selfInfo {
  display: flex;
  min-height: 100px;
  max-height: 400px;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  height: -webkit-fill-available;
  height: 40%;
}
.author-content-item.selfInfo div {
  display: flex;
  flex-direction: column;
  margin: 0.5rem 2rem 0.5rem 0;
}
.author-content-item.selfInfo .selfInfo-title {
  opacity: 0.8;
  font-size: 0.6rem;
  line-height: 1;
  margin-bottom: 8px;
}
.author-content-item.selfInfo .selfInfo-content {
  font-weight: 700;
  font-size: 34px;
  line-height: 1;
}
.author-content-item-group.column.mapAndInfo {
  width: 59%;
}
.author-content-item.map:hover {
  background-size: 120%;
  transition: 4s ease-in-out;
  background-position-x: 0;
  background-position-y: 36%;
}
.author-content-item.map:hover .map-title {
  bottom: -100%;
}
.author-content-item-group.column {
  display: flex;
  flex-direction: column;
  width: 49%;
  justify-content: space-between;
}

.post-tips a:hover {
  color: var(--anzhiyu-main) !important;
  background: none !important;
}

.author-content-item.single.reward .reward-list-updateDate {
  color: var(--anzhiyu-gray);
  font-size: 14px;
}

.author-content-item.single.reward .post-reward {
  position: absolute;
  margin-top: 0px;
  width: auto;
  text-align: none;
  pointer-events: none;
  right: 2rem;
  top: 2rem;
}
.tip-button {
  border: 0;
  border-radius: 2.25rem;
  cursor: pointer;
  font-size: 20px;
  font-weight: 600;
  height: 2.6rem;
  margin-bottom: -4rem;
  outline: 0;
  position: relative;
  top: 0;
  transform-origin: 0 100%;
  transition: transform 50ms ease-in-out;
  width: auto;
  -webkit-tap-highlight-color: transparent;
}
.coin::before,
.coin__back,
.coin__back::after,
.coin__front,
.coin__front::after,
.coin__middle {
  border-radius: 50%;
  box-sizing: border-box;
  height: 100%;
  left: 0;
  position: absolute;
  width: 100%;
  z-index: 3;
}
.coin-wrapper {
  background: 0 0;
  bottom: 0;
  height: 18rem;
  left: 0;
  opacity: 1;
  overflow: hidden;
  pointer-events: none;
  position: absolute;
  transform: none;
  transform-origin: 50% 100%;
  transition: opacity 0.2s linear 0.1s, transform 0.3s ease-out;
  width: 100%;
}
.coin__front::after {
  background: rgba(0, 0, 0, 0.2);
  content: "";
  opacity: var(--front-y-multiplier);
}
.coin__back::after {
  background: rgba(0, 0, 0, 0.2);
  content: "";
  opacity: var(--back-y-multiplier);
}
.coin__middle {
  background: #737c99;
  transform: translateY(calc(var(--middle-y-multiplier) * 0.3181818182rem / 2)) scaleY(var(--middle-scale-multiplier));
}
.coin::before {
  background: radial-gradient(circle at 25% 65%, transparent 50%, rgba(255, 255, 255, 0.9) 90%), linear-gradient(55deg, transparent
        calc(var(--shine-bg-multiplier) + 0), #e9f4ff calc(var(--shine-bg-multiplier) + 0), transparent calc(var(
              --shine-bg-multiplier
            ) + 50%));
  content: "";
  opacity: var(--shine-opacity-multiplier);
  transform: translateY(calc(var(--middle-y-multiplier) * 0.3181818182rem / -2)) scaleY(var(--middle-scale-multiplier))
    rotate(calc(var(--coin-rotation-multiplier) * 1deg));
  z-index: 10;
}

.coin {
  --front-y-multiplier: 0;
  --back-y-multiplier: 0;
  --coin-y-multiplier: 0;
  --coin-x-multiplier: 0;
  --coin-scale-multiplier: 0;
  --coin-rotation-multiplier: 0;
  --shine-opacity-multiplier: 0.4;
  --shine-bg-multiplier: 50%;
  bottom: calc(var(--coin-y-multiplier) * 1rem - 3.5rem);
  height: 3.5rem;
  margin-bottom: 3.05rem;
  position: absolute;
  right: calc(var(--coin-x-multiplier) * 34% + 16%);
  transform: translateX(50%) scale(calc(0.4 + var(--coin-scale-multiplier))) rotate(calc(var(
            --coin-rotation-multiplier
          ) * -1deg));
  transition: opacity 0.1s linear 0.2s;
  width: 3.5rem;
  z-index: 3;
}

.coin__back {
  background: radial-gradient(circle at 50% 50%, transparent 50%, rgba(115, 124, 153, 0.4) 54%, #c2cadf 54%),
    radial-gradient(circle at 50% 40%, #fcfaf9 23%, transparent 23%), radial-gradient(circle at 50% 100%, #fcfaf9 35%, transparent
        35%);
  background-color: #8590b3;
  background-size: 100% 100%;
  transform: translateY(calc(var(--back-y-multiplier) * 0.3181818182rem / 2)) scaleY(var(--back-scale-multiplier));
}
.coin__front {
  background: radial-gradient(circle at 50% 50%, transparent 50%, rgba(115, 124, 153, 0.4) 54%, #c2cadf 54%),
    linear-gradient(210deg, #8590b3 32%, transparent 32%), linear-gradient(150deg, #8590b3 32%, transparent 32%),
    linear-gradient(to right, #8590b3 22%, transparent 22%, transparent 78%, #8590b3 78%), linear-gradient(
      to bottom,
      #fcfaf9 44%,
      transparent 44%,
      transparent 65%,
      #fcfaf9 65%,
      #fcfaf9 71%,
      #8590b3 71%
    ), linear-gradient(to right, transparent 28%, #fcfaf9 28%, #fcfaf9 34%, #8590b3 34%, #8590b3 40%, #fcfaf9 40%, #fcfaf9
        47%, #8590b3 47%, #8590b3 53%, #fcfaf9 53%, #fcfaf9 60%, #8590b3 60%, #8590b3 66%, #fcfaf9 66%, #fcfaf9 72%, transparent
        72%);
  background-color: #8590b3;
  background-size: 100% 100%;
  transform: translateY(calc(var(--front-y-multiplier) * 0.3181818182rem / 2)) scaleY(var(--front-scale-multiplier));
}
.tip-button__text {
  color: #fff;
  margin-right: 1.8rem;
  opacity: 1;
  position: relative;
  transition: opacity 0.1s linear 0.5s;
  z-index: 3;
}
.author-content .post-reward .reward-main {
  bottom: 0;
  top: 50px;
  left: auto;
  right: 0;
}
.author-content .post-reward .reward-main .reward-all:before {
  top: -11px;
  bottom: auto;
}
#about-page .post-reward .reward-item a:hover {
  background: transparent !important;
}
#about-page .post-reward .reward-item a {
  border-bottom: none !important;
}
#about-page .post-reward .reward-item a img {
  margin-bottom: 0 !important;
}
#about-page .post-reward .reward-main .reward-all {
  border-radius: 10px;
  padding: 20px 10px !important;
}
.post-reward .reward-main .reward-all .reward-item {
  padding: 0 8px !important;
}
.post-reward .reward-main .reward-all li.reward-item::before {
  content: none !important;
}
.post-reward .reward-main .reward-all:after {
  content: none !important;
}
.author-content-item.maxim {
  font-size: 36px;
  font-weight: 700;
  line-height: 1.1;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
  width: 39%;
}
.author-content-item .author-content-item-tips {
  opacity: 0.8;
  font-size: 0.6rem;
  margin-bottom: 0.5rem;
}
.author-content-item.maxim .maxim-title {
  display: flex;
  flex-direction: column;
}
.author-content-item.buff {
  height: 200px;
  font-size: 36px;
  font-weight: 700;
  line-height: 1.1;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
  background: linear-gradient(120deg, #ff27e8 0, #ff8000 100%);
  color: var(--anzhiyu-white);
  background-size: 200%;
  animation: gradient 15s ease infinite;
  min-height: 200px;
  height: fit-content;
  width: 59%;
}
.author-content-item.buff .card-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.author-content-item.buff .buff-title {
  display: flex;
  flex-direction: column;
}
.card-background-icon {
  font-size: 12rem;
  opacity: 0.2;
  position: absolute;
  right: 0;
  bottom: -40%;
  transform: rotate(30deg);
  transition: 2s ease-in-out;
}
.author-content-item.game-yuanshen {
  background: url(https://img02.anzhiy.cn/adminuploads/1/2022/12/19/63a079ca63c8a.webp) no-repeat top;
  background-size: cover;
  min-height: 300px;
  overflow: hidden;
  color: var(--anzhiyu-white);
  width: 59%;
}

.author-content-item .content-bottom {
  margin-top: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.author-content-item .content-bottom .icon-group {
  display: flex;
  position: relative;
}
.author-content-item .content-bottom .icon-group i {
  display: inline-block;
  width: 143px;
  height: 18px;
  margin-right: 0.5rem;
}
.icon-pos-mid {
  background: url(https://img02.anzhiy.cn/adminuploads/1/2022/09/25/632fb9cecfc8c.png);
}
.author-content-item.game-yuanshen::after {
  box-shadow: 0 -69px 203px 11px #575d8b inset;
  position: absolute;
  content: "";
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}

.author-content-item.comic-content {
  width: 39%;
  background: url(https://npm.elemecdn.com/anzhiyu-blog@1.1.6/img/post/common/violet.jpg) no-repeat top;
  background-size: cover;
  min-height: 300px;
  overflow: hidden;
  color: violet;
}
.author-content-item.comic-content::after {
  box-shadow: 0 -48px 203px 11px #fbe9b8 inset;
  position: absolute;
  content: "";
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}

.author-content-item.like-technology {
  background: url(https://img02.anzhiy.cn/adminuploads/1/2022/09/24/632f0dd8f33c6.webp) no-repeat;
  background-size: cover;
  min-height: 230px;
  color: var(--anzhiyu-white);
}

.author-content-item.like-music {
  background: url(https://p2.music.126.net/Mrg1i7DwcwjWBvQPIMt_Mg==/79164837213438.jpg) no-repeat top;
  background-size: cover;
  min-height: 400px;
  color: var(--anzhiyu-white);
  overflow: hidden;
}

.author-content-item .card-content .banner-button-group {
  position: absolute;
  bottom: 1.5rem;
  right: 2rem;
}

.author-content-item.like-music::after {
  box-shadow: 0 -69px 203px 11px #453e38 inset;
  position: absolute;
  content: "";
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}

@media screen and (max-width: 768px) {
  #gitcalendar {
    display: none;
  }
  [data-theme="dark"] .author-content-item .card-content .banner-button-group .banner-button {
    color: var(--anzhiyu-black) !important;
  }
  .author-content-item .card-content .banner-button-group .banner-button:hover {
    background: none !important;
  }
  .author-content-item.game-yuanshen .content-bottom {
    padding-bottom: 10px;
  }
  .author-content-item.game-yuanshen .game-yuanshen-uid {
    display: none;
  }
  .author-content {
    margin-top: 0;
  }
  .author-content-item {
    width: 100% !important;
    margin-top: 1rem;
    padding: 1rem;
  }
  .author-content-item.map {
    margin-bottom: 0;
  }
  .author-content-item-group.column {
    width: 100% !important;
  }
  .author-content-item.selfInfo {
    height: 95%;
  }
  .author-content-item.personalities {
    height: 170px;
  }
  .post-tips {
    left: auto;
  }
  .author-content-item.personalities .image {
    width: 90px;
  }
  .site-card-group > a {
    width: 100% !important;
  }
  .post-reward {
    display: none;
  }
  .reward-list-item {
    width: 100% !important;
  }
  .layout > div:first-child:not(.recent-posts) {
    /* border-radius: 0; */
    padding: 0 1rem !important;
    box-shadow: none !important;
    background: var(--anzhiyu-background);
  }
  .author-content-item .card-content .banner-button-group .banner-button-text {
    display: none;
  }
  .author-content-item .card-content .banner-button-group {
    right: 1rem;
    bottom: 1rem;
  }
  .author-content-item .card-content .banner-button-group .banner-button {
    background: 0 0;
    padding: 0;
  }
  .author-content-item .card-content .banner-button-group .banner-button i {
    margin-right: 0;
    font-size: 1.5rem;
    background: white;
    border-radius: 50%;
    padding: 6px;
    margin-left: 80px;
  }
  .author-content-item .card-content .banner-button-group .banner-button:hover i {
    background: var(--anzhiyu-background) !important;
    color: var(--anzhiyu-theme);
  }
  #selfInfo-content-year {
    width: 90px;
  }
}

@media screen and (min-width: 768px) and (max-width: 896px) {
  .author-content-item.like-music .content-bottom .tips {
    display: none;
  }
}

/* 赞赏的css */

.reward-list-all {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  margin-top: 1rem;
  margin-bottom: 0.5rem;
  margin-left: -0.25rem;
  margin-right: -0.25rem;
}

.reward-list-item {
  padding: 1rem;
  border-radius: 12px;
  border: var(--style-border-always);
  width: calc((100% / 3) - 0.5rem);
  margin: 0 0.25rem 0.5rem 0.25rem;
  box-shadow: var(--anzhiyu-shadow-border);
}

.reward-list-item .reward-list-item-name {
  font-size: 1rem;
  font-weight: 700;
  line-height: 1;
  margin-bottom: 0.5rem;
}

.reward-list-item .reward-list-bottom-group {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.reward-list-item .reward-list-item-money {
  padding: 4px;
  background: var(--font-color);
  color: var(--card-bg);
  font-size: 12px;
  line-height: 1;
  border-radius: 4px;
  margin-right: 4px;
  white-space: nowrap;
}

.reward-list-item .reward-list-item-time {
  font-size: 12px;
  color: var(--anzhiyu-secondtext);
  white-space: nowrap;
}

.author-content-item.careers {
  min-height: 400px;
}
.author-content-item.careers .careers-group {
  margin-top: 12px;
}
.author-content-item.careers .careers-item {
  display: flex;
  align-items: center;
}
.author-content-item.careers .careers-item .circle {
  width: 16px;
  height: 16px;
  margin-right: 8px;
  border-radius: 16px;
}
.author-content-item.careers .careers-item .name {
  color: var(--anzhiyu-secondtext);
}
.author-content-item.careers .careers-item {
  display: flex;
  align-items: center;
}
.author-content-item.careers .careers-item .circle {
  width: 16px;
  height: 16px;
  margin-right: 8px;
  border-radius: 16px;
}
.author-content-item.careers .careers-item .name {
  color: var(--anzhiyu-secondtext);
}
.author-content-item.careers img {
  position: absolute;
  left: 0;
  bottom: 20px;
  width: 100%;
  transition: 0.6s;
}

:root {
  --loadingbar-background-color: #2c2b30;
  --loadingbar-prospect-color: #ece5d8;
}

/* html.dark body {
  background-color: #161d22;
} */

.loading-bar {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 500px;
  height: 62.5px;
  transform: translate(-25%, -50%) scale(0.5);
  transition: all 0.5s;
  user-select: none;
  overflow: hidden;
}

.loading-bar img {
  position: absolute;
  top: 500px;
  left: 0;
  filter: drop-shadow(0 -500px 0 var(--loadingbar-background-color));
}

.loading-bar::after {
  content: "";
  position: absolute;
  top: 500px;
  left: 0;
  filter: drop-shadow(0 -500px 0 var(--loadingbar-prospect-color));
  width: 500px;
  height: 62.5px;
  background: url("https://yuanshen.site/imgs/loading-bar.png") no-repeat left 100%;
  background-size: 500px 62.5px;
  background-position-x: 0;
}
.author-content-item.game-yuanshen:hover .loading-bar::after {
  animation: loading-bar 3.5s cubic-bezier(0.28, 0.11, 0.32, 1) infinite forwards;
}

@media screen and (max-width: 719px) {
  .loading-bar .loading-bar {
    display: none;
  }
}

@media screen and (max-width: 719px) and (orientation: landscape) {
  .loading-bar .loading-bar {
    display: block !important;
    transform: translate(-50%, -50%) scale(0.7) !important;
  }
}

@supports not (filter: drop-shadow(0 0 0 #fff)) {
  .loading-bar:before {
    content: "Your browser does not support the animation";
  }
}

@keyframes loading-bar {
  0% {
    width: 0;
    background-size: 500px 62.5px;
  }
  16.6% {
  }
  33.2% {
  }
  49.8% {
  }
  66.4% {
  }
  83% {
    width: 475px;
  }
  83.1% {
    width: 475px;
  }
  83.2% {
    width: 475px;
  }
  83.3% {
    width: 475px;
  }
  83.4% {
    width: 475px;
  }
  83.5% {
    width: 475px;
  }
  83.6% {
    width: 475px;
  }
  83.7% {
    width: 475px;
  }
  83.8% {
    width: 475px;
  }
  83.9% {
    width: 475px;
  }
  84% {
    width: 475px;
  }
  85% {
    width: 475px;
  }
  86% {
    width: 475px;
  }
  87% {
    width: 475px;
  }
  100% {
    width: 500px;
  }
}

.hello-about {
  margin: 20px auto;
  border-radius: 24px;
  background: var(--anzhiyu-card-bg);
  border: var(--style-border-always);
  box-shadow: var(--anzhiyu-shadow-border);
  position: relative;
  overflow: hidden;
  user-select: none;
}

.shapes {
  position: relative;
  height: 315px;
  width: 100%;
  background: #2128bd;
  overflow: hidden;
}

.shape {
  will-change: transform;
  position: absolute;
  border-radius: 50%;
}

.shape.shape-1 {
  background: #005ffe;
  width: 650px;
  height: 650px;
  margin: -325px 0 0 -325px;
}

.shape.shape-2 {
  background: #ffe5e3;
  width: 440px;
  height: 440px;
  margin: -220px 0 0 -220px;
}

.shape.shape-3 {
  background: #ffcc57;
  width: 270px;
  height: 270px;
  margin: -135px 0 0 -135px;
}

.hello-about .content {
  top: 0;
  left: 0;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 315px;
  width: 100%;
  background: #fff;
  mix-blend-mode: screen;
}
[data-theme="dark"] .hello-about .content {
  background: transparent;
}
[data-theme="dark"] .hello-about h1 {
  color: var(--anzhiyu-white);
}

.hello-about h1 {
  font-size: 200px;
  color: #000;
  margin: 0;
  text-align: center;
  font: inherit;
  vertical-align: baseline;
  line-height: 1;
  font-size: calc((0.0989119683 * 100vw + (58.5558852621px)));
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
@media (min-width: 419px) {
  .hello-about h1 {
    font-size: calc((0.0989119683 * 100vw + (58.5558852621px)));
  }
}

.cursor {
  position: absolute;
  background: #2128bd;
  width: 20px;
  height: 20px;
  margin: -10px 0 0 -10px;
  border-radius: 50%;
  will-change: transform;
  user-select: none;
  pointer-events: none;
  z-index: 3;
}

::selection {
  color: #fff;
  background: #2128bd;
}

.author-content-item.skills {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  width: 50%;
  min-height: 450px;
}

.author-content-item.skills .skills-style-group {
  position: relative;
}

.author-content-item.skills .tags-group-all {
  display: flex;
  transform: rotate(0);
  transition: 0.3s;
}
.author-content-item.skills .tags-group-wrapper {
  margin-top: 40px;
  display: flex;
  flex-wrap: nowrap;
  animation: rowup 60s linear infinite;
}
.tags-group-icon-pair {
  margin-left: 1rem;
}
.tags-group-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 66px;
  font-weight: 700;
  box-shadow: var(--anzhiyu-shadow-blackdeep);
  width: 120px;
  height: 120px;
  border-radius: 30px;
}
.tags-group-icon img {
  width: 60%;
  margin: 0 auto !important;
}
.tags-group-icon-pair .tags-group-icon:nth-child(even) {
  margin-top: 1rem;
  transform: translate(-60px);
}
.author-content-item.skills .skills-list {
  display: flex;
  opacity: 0;
  transition: 0.3s;
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  flex-wrap: wrap;
  flex-direction: row;
  margin-top: 10px;
}
.author-content-item.skills .skill-info {
  display: flex;
  align-items: center;
  margin-right: 10px;
  margin-top: 10px;
  background: var(--anzhiyu-background);
  border-radius: 40px;
  padding: 4px 12px 4px 8px;
  border: var(--style-border);
  box-shadow: var(--anzhiyu-shadow-border);
}
.author-content-item.skills .skill-icon {
  width: 32px;
  height: 32px;
  border-radius: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 8px;
}
.author-content-item.skills .skill-icon img {
  width: 18px;
  height: 18px;
  margin: 0 auto !important;
}
.author-content-item.skills .etc {
  margin-right: 10px;
  margin-top: 10px;
}

@keyframes rowup {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}
.author-content-item.skills:hover .skills-style-group .tags-group-all {
  opacity: 0;
}
.author-content-item.skills:hover .skills-style-group .skills-list {
  opacity: 1;
}

.site-card-group .site-card .info {
  margin-top: 0;
}
.site-card-group > a {
  width: calc(100% / 4 - 0.5rem);
  height: 150px;
  position: relative;
  display: block;
  margin: 0.5rem 0.25rem;
  float: left;
  overflow: hidden;
  padding: 0;
  border-radius: 8px;
  -webkit-transition: all 0.3s ease 0s, -webkit-transform 0.6s cubic-bezier(0.6, 0.2, 0.1, 1) 0s;
  -moz-transition: all 0.3s ease 0s, -moz-transform 0.6s cubic-bezier(0.6, 0.2, 0.1, 1) 0s;
  -o-transition: all 0.3s ease 0s, -o-transform 0.6s cubic-bezier(0.6, 0.2, 0.1, 1) 0s;
  -ms-transition: all 0.3s ease 0s, -ms-transform 0.6s cubic-bezier(0.6, 0.2, 0.1, 1) 0s;
  transition: all 0.3s ease 0s, transform 0.6s cubic-bezier(0.6, 0.2, 0.1, 1) 0s;
  -webkit-box-shadow: none;
  box-shadow: none;
  border: var(--style-border) !important;
}

.site-card-group > a .wrapper {
  position: relative;
}

.site-card-group > a .cover {
  width: 100%;
  -webkit-transition: -webkit-transform 0.5s ease-out;
  -moz-transition: -moz-transform 0.5s ease-out;
  -o-transition: -o-transform 0.5s ease-out;
  -ms-transition: -ms-transform 0.5s ease-out;
  transition: transform 0.5s ease-out;
}

.site-card-group > a .info,
.site-card-group > a .wrapper .cover {
  position: absolute;
  top: 0;
  left: 0;
}

.site-card-group > a .info {
  display: -webkit-box;
  display: -moz-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: box;
  display: flex;
  -webkit-box-orient: vertical;
  -moz-box-orient: vertical;
  -o-box-orient: vertical;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: center;
  -moz-box-pack: center;
  -o-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -moz-box-align: center;
  -o-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 3px;
  background-color: rgba(255, 255, 255, 0.7);
  -webkit-transition: -webkit-transform 0.5s cubic-bezier(0.6, 0.2, 0.1, 1) 0s;
  -moz-transition: -moz-transform 0.5s cubic-bezier(0.6, 0.2, 0.1, 1) 0s;
  -o-transition: -o-transform 0.5s cubic-bezier(0.6, 0.2, 0.1, 1) 0s;
  -ms-transition: -ms-transform 0.5s cubic-bezier(0.6, 0.2, 0.1, 1) 0s;
  transition: transform 0.5s cubic-bezier(0.6, 0.2, 0.1, 1) 0s;
}

.site-card-group > a .info img {
  position: relative;
  top: 45px;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  -webkit-box-shadow: 0 0 10px rgb(0 0 0 / 30%);
  box-shadow: 0 0 10px rgb(0 0 0 / 30%);
  z-index: 1;
  text-align: center;
  pointer-events: none;
}

.site-card-group > a .info span {
  padding: 20px 10% 60px 10%;
  font-size: 16px;
  width: 100%;
  text-align: center;
  -webkit-box-shadow: 0 0 10px rgb(0 0 0 / 30%);
  box-shadow: 0 0 10px rgb(0 0 0 / 30%);
  background-color: rgba(255, 255, 255, 0.7);
  color: var(--font-color);
  white-space: nowrap;
  overflow: hidden;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
}

.site-card-group .site-card:hover {
  border-color: var(--anzhiyu-main) !important;
  background-color: var(--anzhiyu-main) !important;
  -webkit-box-shadow: var(--anzhiyu-shadow-theme) !important;
  box-shadow: var(--anzhiyu-shadow-theme) !important;
}
.site-card-group > a:hover .wrapper img {
  -webkit-transform: scale(1.2);
  -moz-transform: scale(1.2);
  -o-transform: scale(1.2);
  -ms-transform: scale(1.2);
  transform: scale(1.2);
}

.site-card-group > a .cover {
  width: 100%;
  -webkit-transition: -webkit-transform 0.5s ease-out;
  -moz-transition: -moz-transform 0.5s ease-out;
  -o-transition: -o-transform 0.5s ease-out;
  -ms-transition: -ms-transform 0.5s ease-out;
  transition: transform 0.5s ease-out;
}
.site-card-group > a .wrapper img {
  height: 150px;
  pointer-events: none;
}
.site-card-group .site-card .wrapper img {
  -webkit-transition: -webkit-transform 0.5s ease-out !important;
  -moz-transition: -moz-transform 0.5s ease-out !important;
  -o-transition: -o-transform 0.5s ease-out !important;
  -ms-transition: -ms-transform 0.5s ease-out !important;
  transition: transform 0.5s ease-out !important;
}
.site-card-group > a .wrapper .fadeIn {
  -webkit-animation: coverIn 0.8s ease-out forwards;
  -moz-animation: coverIn 0.8s ease-out forwards;
  -o-animation: coverIn 0.8s ease-out forwards;
  -ms-animation: coverIn 0.8s ease-out forwards;
  animation: coverIn 0.8s ease-out forwards;
}

.site-card-group > a:hover .info {
  -webkit-transform: translateY(-100%);
  -moz-transform: translateY(-100%);
  -o-transform: translateY(-100%);
  -ms-transform: translateY(-100%);
  transform: translateY(-100%);
}
```

## 目录效果

洪哥真细，目录都做了细节优化

亿点点css实现：
```css

@media screen and (max-width: 768px) {
  #aside-content .card-widget:not(#card-toc) {
      display: none;
  }
}
@media screen and (min-width: 901px) {
  #aside-content #card-toc {
      right: 0px !important;
  }
}

@media screen and (max-width: 900px) {
  #aside-content #card-toc {
      position: fixed;
      right: -100%;
      bottom: 30px;
      z-index: 100;
      max-height: calc(100% - 60px);
      width: 300px;
      opacity: 0;
      transform-origin: right bottom;
  }
}

#aside-content #card-toc .toc-content {
  overflow-y: auto;
  max-height: calc(100vh - 120px);
}

@media screen and (max-width: 900px) {
  #aside-content #card-toc .toc-content {
      max-height: calc(100vh - 140px);
  }
}

#aside-content #card-toc .toc-content .toc-child {
  display: none;
}

@media screen and (max-width: 900px) {
  #aside-content #card-toc .toc-content .toc-child {
      display: block !important;
  }
}

#aside-content #card-toc .toc-content .toc-item.active .toc-child {
  display: block;
}

#aside-content #card-toc .toc-content li, #aside-content #card-toc .toc-content ol {
  list-style: none;
}

#aside-content #card-toc .toc-content > ol {
  padding: 0px !important;
}

#aside-content #card-toc .toc-content ol {
  margin: 0px;
  padding-left: 0.4rem;
}

#aside-content #card-toc .toc-content .toc-link {
  display: block;
  padding-left: 0.3rem;
  border-left: 3px solid transparent;
  color: var(--toc-link-color);
  transition: all 0.2s ease-in-out 0s;
}

#aside-content #card-toc .toc-content .toc-link.active {
  border-left-color: rgb(0, 97, 204);
  background: rgb(0, 121, 255);
  color: rgb(255, 255, 255);
}

#aside-content #card-toc .toc-content::before {
  position: absolute;
  top: 0.6rem;
  right: 1.2rem;
  color: rgb(169, 169, 169);
  content: attr(progress-percentage);
  font-style: italic;
  font-size: 1.2rem;
}

#aside-content #card-toc .toc-content .toc-link.active {
  line-height: 1.2;
  border-radius: 12px;
  border-left-color: var(--heo-hovertext);
  background-color: var(--heo-card-bg);
  color: var(--heo-lighttext);
  font-weight: 700;
  font-size: 20px;
}

[data-theme="dark"].toc .toc-item.active .toc-link .toc-text {
  color: var(--heo-white);
}

#aside-content #card-toc .toc-content .toc-item.active .toc-link {
  opacity: 1;
  border-radius: 8px;
}

#aside-content #card-toc .toc-content .toc-link {
  line-height: 1.2;
  padding: 8px;
  border-left: 0px solid transparent;
  border-radius: 12px;
  color: var(--heo-secondtext);
  cursor: default;
}

#aside-content #card-toc .toc-content .toc-link:not(.active) span {
  opacity: 0.6;
  cursor: pointer;
  filter: blur(1px);
  transition: all 0.3s ease 0s;
}

#aside-content #card-toc:hover .toc-content .toc-link:not(.active) span {
  filter: blur(0px);
  opacity: 1;
}

#aside-content #card-toc .toc-content .toc-link:not(.active) span:hover {
  color: var(--heo-lighttext);
}

#card-toc {
  padding: 0.5rem !important;
}

#aside-content #card-toc .toc-content::before {
  display: none;
}
```

## 文章页面封面图模糊

`layout/includes/header/index.pug`，打开这个文件，将原有`page-header`部分修改为：

```pug
header#page-header(class=isHomeClass)
  img#post-cover(src=url_for(top_img) alt='cover')
  !=partial('includes/header/nav', {}, {cache:theme.fragment_cache})
  if top_img !== false
    if is_post()
      include ./post-info.pug
    else if is_home() 
      #site-info
        h1#site-title=site_title
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

引入css：

```css
.post-bg #post-cover{
  width: 100%;
  height: 100%;  
  object-fit: cover;
}
#page-header #post-top-cover {
  filter: blur(10px);
}
#post-info .post-title {
    user-select: none;
    text-align: left;
}
.meta-firstline {
    text-align: left;
}
```

## 文章页波浪效果

修改 `themes/butterfly/layout/includes/header/index.pug` 大概第 33 行左右

```diff
if top_img !== false
  if is_post()
    include ./post-info.pug
+   section.main-hero-waves-area.waves-area
+     svg.waves-svg(xmlns='http://www.w3.org/2000/svg', xlink='http://www.w3.org/1999/xlink', viewBox='0 24 150 28', preserveAspectRatio='none', shape-rendering='auto')
+       defs
+         path#gentle-wave(d='M -160 44 c 30 0 58 -18 88 -18 s 58 18 88 18 s 58 -18 88 -18 s 58 18 88 18 v 44 h -352 Z')
+       g.parallax
+         use(href='#gentle-wave', x='48', y='0')
+         use(href='#gentle-wave', x='48', y='3')
+         use(href='#gentle-wave', x='48', y='5')
+         use(href='#gentle-wave', x='48', y='7')
    #post-top-cover
      img#post-top-bg(class='nolazyload' src=bg_img)
  else if is_home()
    #site-info
      h1#site-title=site_title
      if theme.subtitle.enable
```

添加`waves.css`

```css
/* 波浪css */
.main-hero-waves-area {
  width: 100%;
  position: absolute;
  left: 0;
  bottom: -11px;
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
/*Shrinking for mobile*/
@media (max-width: 768px) {
  .waves-area .waves-svg {
    height: 40px;
    min-height: 40px;
  }
}
```