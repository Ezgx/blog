---
title: hexo博客搭建-2-页面完善
tags:
  - hexo
cover: >-
  https://pic.imgdb.cn/item/649efe141ddac507cc348243.png
category:
  - 博客教程
abbrlink: 63474
date: 2022-12-14 15:21:10
---
::: danger
## 还算简单...
:::
<!-- more -->

# 继上期，主题已经配置完毕
## 文章页
### Front-matter
++Front-matter++ 是markdown文件最上方以 --- 分隔的区域
```markdown
title：页面标题
date：日期
tags：标签
categories：分类
top_img：封面（可选
```

==创建关于页==
```bash
hexo new page about
```
找到source/about/index.md
```markdown
---
+ layout: about
title: 关于
date: 2022-09-12 16:17:05
tags:
---
```

==创建分类页==
```bash
hexo new page categories
```
找到source/categories/index.md
```
---
+ layout: categories
title: 分类
date: 2022-09-12 16:17:05
tags:
---
```

==创建标签页==
```
hexo new page tags
```
找到source/categories/index.md
操作同上

::: success
well done!
You did it!
:::

[安装高级markdown渲染器](/2022/12/12/markdown-it食用教程/)