---
title: windows-terminal美化
tags:
  - windows
cover: 'https://pic.imgdb.cn/item/649e98731ddac507cc60075e.png'
abbrlink: 50741
date: 2022-12-16 15:33:30
---
众所周知，++Windows++的==cmd==和==powershell==都 灰 常 的 丑
<!-- more -->

所以，今天教大家美化Windows-terminal

### 这里我按照[akilar大佬的教程](https://akilar.top/posts/cdbee199/)做的，出现了一些报错，这里是我避免报错的过程

先去==Microsoft store==安装==Windows terminal==，
:::warning
### 注意一定要那个preview版本
:::danger
普通的不行！！！
:::

去==Microsoft store==安装==oh-my-posh==（这里我按照akila的教程运行命令安装oh-my-posh，报错了，就去==msstore==安装的

打开一个==管理员权限的==++powershell++
运行
```bash
New-Item -Path $PROFILE -Type File -Force
```
```bash
notepad $PROFILE
```

赞后在打开的配置文件中输入
:::tips
& ([ScriptBlock]::Create((oh-my-posh init pwsh --config C:\Users\你的用户名\AppData\Local\Programs\oh-my-posh\themes\主题名字.omp.json --print) -join "`n"))
:::

主题名字见[https://ohmyposh.dev/docs/themes](https://ohmyposh.dev/docs/themes)

运行
```bash
. $PROFILE
```

发现是乱码
去==nerdfonts==官网下载，然后将下载的压缩包解压
选中所有.ttf和.otf文件，右键安装
:::warning
在windows terminal里设置：设置 > powershell > 字体 > 选择带有Nerd字样的字体
:::tips
保存设置
:::

重启==windows terminal==
就好了
