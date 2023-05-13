---
title: Linux安装中文输入法
tags:
  - linux
published: true
hideInList: false
feature: /post-images/linux-an-zhuang-zhong-wen-shu-ru-fa.jpg
isTop: true
abbrlink: 10141
date: 2022-08-24 16:35:20
---
[安装包下载](https://shurufa.sogou.com)
<!-- more -->


1、添加中文语言支持

打开 系统设置——区域和语言——管理已安装的语言——在“语言”tab下——点击“添加或删除语言”

弹出“已安装语言”窗口，勾选中文（简体），点击应用

回到“语言支持”窗口，在键盘输入法系统中，选择“fcitx”

注：

如果在键盘输入法系统中，没有“fcitx”选项时，建议先打开终端手动安装fcitx：
```Bash
sudo apt-get install fcitx
```
等安装成功之后再执行上述步骤

点击“应用到整个系统”，关闭窗口，重启电脑

2、通过命令行安装搜狗输入法
```bash
sudo dpkg -i sogoupinyin_版本号_amd64.deb
```
注：

如果安装过程中提示缺少相关依赖，则执行如下命令解决：
```Bash
sudo apt -f install
```
3、注销计算机即可正常使用搜狗输入法

Ubuntu20.04安装搜狗输入法步骤

1、更新源

在终端执行
```bash
sudo apt update
```
2、安装fcitx输入法框架

1. 在终端输入 
```Bash
sudo apt install fcitx
```
1. 设置fcitx为系统输入法
