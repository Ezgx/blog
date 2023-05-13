---
title: 记录一次诡异的windows崩溃
tags:
  - windows
abbrlink: 27831
date: 2023-01-30 21:55:34
---
:::danger
记录一次windows崩溃
:::

当时我在用ps作图，同时开了hexo

cpu占用100%，内存占用80%。

电脑主板蜂鸣器响了，1长2短。

然后继续用了2分钟，突然所有程序无响应。

然后就是爆显存，CPU降频，显示器花屏。

蜂鸣器10短声过后，电脑蓝屏。

强制关机重启后进入BIOS界面。

退出bios进入了grub。

检查发现windows系统引导损坏。

多项驱动损坏

ghost后恢复正常