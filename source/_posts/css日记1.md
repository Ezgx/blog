---
title: css日记1
tags:
  - 碎碎念
  - 前端
abbrlink: 55282
date: 2023-01-24 16:49:50
cover: https://th.bing.com/th/id/OIP.rEFlZf2xiI2BUY6BCII6QgHaEL?pid=ImgDet&rs=1
category: css
---
css学习日记1：开始

:::danger
首先声明，这个系列大部分是写给我自己看的，如果你是专业前端工程师或者是大神，那么你看完或许会想骂人（因为都是基础的）
:::

第一次接触前端这个东西，嗯，怎么说呢，还是很有兴趣的！

css到也不难，但是牵一发而动全身啊，还得学配色，布局，设计哈哈。

---

```html
<c id="1" class="2">test</c>
```
```css
#1 {
  background: cyan;
}

.2 {
  background: green;
}

c {
  background: blue;
}
```

css的话，嗯肯定先来弄选择器了！
.是class选择器，#是id选择器，没有.也没有#就是直接选择容器。
当然，用id还是class取决于你自己。

---

语法：

```css
选择器 {
  属性: 值;
}
```

---

也了解了几个属性（其实是我要开始改博客才学的css）
```css
.id {
  background（背景
  border-radius（圆角
  border（边框线
  clip-path（控制可见区域
  padding（不好解释，算是内边界大小吧
  margin(*&left&right&top&bottom)（外边界
  left&top&right&bottom（偏移
  box-shadow（阴影，可以inset
  color（字体颜色
  z-index（高低层级，决定一个盒子在其他盒子的上方还是下方
}
```

---

单位目前用到过：

```plaintext
vh,px,rem,%
```

:::warning
目前接触到的就这些了，如有大佬，欢迎指点！
:::