---
title: Ecx-UI-4-页脚
abbrlink: 6854
date: 2023-01-05 8:33:34
tags:
  - hexo
  - 教程
  - Ecx-UI
  - 魔改
  - butterfly
swiper_index: 3
category: ui魔改
---
:::success
Ecx-UI第四期
:::
<!-- more -->

1. 页脚悬浮

```css
/* 页脚悬浮 */
footer {
   top: -20px !important;
    width: 96% !important;
    margin-left: 2% !important;
    border-radius: 40px 40px 0px 0px !important;
    padding-top: 20px;
    background-image: linear-gradient(25deg, #4f73cd, #919fde, #c9ceef, #d7eafc) !important;
}
#footer-wrap {
  padding-bottom: 80px;
  color: black;
  text-align: center;
#footer {
  background: #ffffff00;
}
}
```

1. 页脚波浪特效（移植自`@安知鱼`的文章页波浪）
创建并引入`footer.css`
```css
/* 波浪css */
.main-hero-waves-area {
  width: 100%;
  position: absolute;
  left: 0;
  bottom: -11px;
  z-index: 5;
  border-radius: 20px;
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

找到/layout/includes/footer.pug，`将全部内容替换为`
```pug
#footer-wrap
  if theme.footer.owner.enable
    - var now = new Date()
    - var nowYear = now.getFullYear()
    if theme.footer.owner.since && theme.footer.owner.since != nowYear
      .copyright!= `&copy;${theme.footer.owner.since} - ${nowYear} By ${config.author}`
    else
      .copyright!= `&copy;${nowYear} By ${config.author}`
  if theme.footer.copyright
    .framework-info
      span= _p('footer.framework') + ' '
      a(href='https://hexo.io')= 'Hexo'
      span.footer-separator |
      span= _p('footer.theme') + ' '
      a(href='https://github.com/jerryc127/hexo-theme-butterfly')= 'Butterfly'
  if theme.footer.custom_text
    .footer_custom_text!=`©Aegcbx`
  section.main-hero-waves-area.waves-area
    svg.waves-svg(xmlns='http://www.w3.org/2000/svg', xlink='http://www.w3.org/1999/xlink', viewBox='0 24 150 28', preserveAspectRatio='none', shape-rendering='auto')
      defs
        path#gentle-wave(d='M -160 44 c 30 0 58 -18 88 -18 s 58 18 88 18 s 58 -18 88 -18 s 58 18 88 18 v 44 h -352 Z')
      g.parallax
        use(href='#gentle-wave', x='48', y='0')
        use(href='#gentle-wave', x='48', y='3')
        use(href='#gentle-wave', x='48', y='5')
        use(href='#gentle-wave', x='48', y='7')
```