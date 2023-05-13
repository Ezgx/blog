---
title: hexo自定义域名
abbrlink: 55979
date: 2022-12-26 14:34:45
tags:
  - hexo
  - 域名
category: 
  - 杂谈教程
---
:::tips
# 今天教大家给自己的hexo弄免费域名
:::
<!-- more -->
s

:::danger
## 碎碎念
最近我咸的无聊，在到处`交换友链`，到有些人那里，发现跟他们交换友链，就必须有自己的`域名`。

然后我整了又整，整出来一个域名，兴致勃勃的去加友链了，又发现有不安全提示。
:::

所以今天就教大家自定义域名，`完全免费哦！`
## 1. 注册[freenom](https://freenom.com)
![img.png](https://ezgx.site/img/hexoyuming/img.png)
注册了是这样的，这里注意，==国内注册可能需要挂梯子==

### 1.1-注册域名
然后就是查找域名，前面的`.tk.ml.ga.cf.gq`域名是==免费的==，后面的`.com`等等就是付费的了!
步骤如下
![](https://ezgx.site/img/hexoyuming/2.png)
![不用foward和usedns，把右边的3months改成12months就好了，12months是免费的，然后继续](https://ezgx.site/img/hexoyuming/4.png)
最后点完成订单就好了！免费哒！

## 2. 解析到你的github-page
首先注册netlify
![点sign up就好了](https://ezgx.site/img/hexoyuming/3.png)
填写问卷，安照实况填写就好了，不问敏感信息的！
![](https://ezgx.site/img/hexoyuming/5.png)
点这里创建站点，然后选择github。
会弹出github界面，选择all repositorys!
然后点自己博客的仓库
创建好后，点网站设置，改个名字
这时发现域名是xxx.netlify.app
然后点Domain management绑定自定义域名
绑定好后，会发现一个黄色感叹号，点检查dns
继续，然后添加一下自己的域名，可能会报个错不过不影响，继续。
会出现四个地址
![](https://ezgx.site/img/hexoyuming/6.png)
services-my domains，找到自己注册的域名，依次点manage domain-manage tools-nameservers
选择use custom nameservers，把刚刚的四个乱七八糟地址填进去，就好了