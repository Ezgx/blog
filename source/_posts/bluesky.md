---
title: butterfly添加蓝天白云
tags:
  - hexo
  - butterfly
  - 魔改
category: 杂谈教程
cover: 'https://pic.imgdb.cn/item/649f003d1ddac507cc3a01ad.png'
abbrlink: 18276
date: 2023-02-23 21:59:13
---

为butterfly主题添加一个蓝天白云特效

- 动态效果
- 低占用
- 优雅美观

1. 在`/themes/butterfly/layout/includes`下，新建`skycloud.pug`。

```pug
.sky
  .clouds_one
  .clouds_two
  .clouds_three
```

2. 在`/themes/butterfly/layout/includes/layout.pug`中引入

```diff
    if page.type !== '404'
      #body-wrap(class=pageType)
        include ./header/index.pug
+        if (is_home())
+          include ./skyclouds.pug
```

3. 引入css

```css
.sky {
  height: 480px;
  background-image: linear-gradient(180deg, #3387de, #6fa1e3, #a4c0e2, rgb(247,249,254));
  position: fixed;
  overflow: hidden;
  width: 100%;
  z-index: -10;
}

.clouds_one {
  background: url("https://uu.sssu.us/css/img/cloud_one.png");
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 300%;
  -webkit-animation: cloud_one 50s linear infinite;
  -moz-animation: cloud_one 50s linear infinite;
  -o-animation: cloud_one 50s linear infinite;
  animation: cloud_one 50s linear infinite; 
}

.clouds_two {
  background: url("https://uu.sssu.us/css/img/cloud_two.png");
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 300%;
  -webkit-animation: cloud_two 75s linear infinite;
  -moz-animation: cloud_two 75s linear infinite;
  -o-animation: cloud_two 75s linear infinite;
  animation: cloud_two 75s linear infinite; 
}

.clouds_three {
  background: url("https://uu.sssu.us/css/img/cloud_three.png");
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 300%;
  -webkit-animation: cloud_three 100s linear infinite;
  -moz-animation: cloud_three 100s linear infinite;
  -o-animation: cloud_three 100s linear infinite;
  animation: cloud_three 100s linear infinite; 
}

@-webkit-keyframes cloud_one {
  0% {
	left: 0
  }
  100% {
	left: -200%
  }
}
@-moz-keyframes cloud_one {
  0% {
	left: 0
  }
  100% {
	left: -200%
  }
}
@keyframes cloud_one {
  0% {
	left: 0
  }
  100% {
	left: -200%
  }
}

@-webkit-keyframes cloud_two {
  0% {
	left: 0
  }
  100% {
	left: -200%
  }
}
@-moz-keyframes cloud_two {
  0% {
	left: 0
  }
  100% {
	left: -200%
  }
}
@keyframes cloud_two {
  0% {
	left: 0
  }
  100% {
	left: -200%
  }
}

@-webkit-keyframes cloud_three {
  0% {
	left: 0
  }
  100% {
	left: -200%
  }
}
@-moz-keyframes cloud_three {
  0% {
	left: 0
  }
  100% {
	left: -200%
  }
}
@keyframes cloud_three {
  0% {
	left: 0
  }
  100% {
	left: -200%
  }
}
```