---
title: 虚拟机安装kali
tags:
  - linux
published: true
category: 杂谈教程
hideInList: false
feature: /post-images/aXsUd5m9Ca.jpg
isTop: false
abbrlink: 51673
date: 2022-08-27 00:08:28
---
### kali linux
Kali 的优势和特性：
<!-- more -->

1. 包括 900 多种渗透测试工具。
2. 免费：完全免费且永远都是。你将永远不必支付 Kali Linux 的费用。
3. 开源：所有进入 Kali Linux 的源代码都可供任何人使用。
4. 广泛的无线设备支持：我们已经构建了 Kali Linux 以支持尽可能多的无线设备，允许它在各种硬 件上正常运行，并使其与众多 USB 和其他无线设备兼容。
5. 在安全的环境中开发：Kali Linux 团队由一小部分人组成，他们是唯一可信任的提交包并与存 储库交互的人，所有这些都是使用多个安全协议完成的。
6. GPG 签名包和存储库：Kali Linux 中的每个包都由构建和提交它的每个开发人员签名，并且 存储库随后也会对包签名。
7. ARMEL 和 ARMHF 支持：Kali Linux 可用于各种 ARM 设备。


# 安装教程
1.到官网下载&安装VMware
https://www.vmware.com/cn/get-started.html
![](https://echox.netlify.app/post-images/1661530423934.jpg)

<!-- more -->
2.安装后去清华开源镜像站下载系统镜像
这里直接把链接挂在下边
https://mirrors.tuna.tsinghua.edu.cn/kali-images/current/kali-linux-2022.3-live-amd64.iso
然后，网上搜鸡活码
防止被佛伯乐破门，这里就不详细介绍。

<!-- more -->
3.创建虚拟机
sha瓜式操作
类型默认就行
选择光盘镜像文件
找到储存镜像的路径，选择下载好的kali系统镜像
后面弹的窗口选择debian，因为kali基于debian
运存和储存酌情，作者这里8G运存全给了，储存磁盘一共512G，给个60G，这个大家根据配置酌情给，但是记住，运存高于2G，储存40G以上。
启动虚拟机
选择start installer（特娘的别进live system
然后就是引导安装啦，不用教都会
## 但是
注意：分区的时候，如果你和我一样，是新手，那就选将所有的文件放在同一个分区
如果你是高手，你应该不会来看这篇文章（doge