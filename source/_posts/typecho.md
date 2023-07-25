---
title: typecho搭建教程
cover: 'https://pic.imgdb.cn/item/649e8dd81ddac507cc4e52b6.png'
abbrlink: 13199
date: 2023-03-19 02:50:15
tags:
---
:::tips
必备：

- 电脑
- ftp服务器（带有PHP环境）
- 正常人
- 手
:::

登录ftp服务器，PHP版本选择7.4（兼容性较好）

# 安装

## 下载

![](https://pic.imgdb.cn/item/641e4a12a682492fccebb30c.jpgKv)

下载typecho压缩包上传到ftp服务器的运行目录后解压

![](https://pic.imgdb.cn/item/641e4aa1a682492fccec6a00.jpg)

绑定域名并在域名dns中添加cname记录

![](https://pic.imgdb.cn/item/641e4af9a682492fccecdfa4.jpg)

## 安装

访问`http://你的域名/install.php`完成安装，数据库地址填写自己的，如果你的是localhost，那么请在高级选项中查看默认端口是否正确。

安装完成后访问`http://你的域名/`

如果成功可继续下一步操作。

# 伪静态

在ftp服务器伪静态设置中写入规则：

```htaness
<IfModule mod_rewrite.c>
RewriteEngine On
RewriteBase /
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^(.*)$ index.php [L,E=PATH_INFO:$1]
</IfModule>
```

访问`http://你的域名/admin`进行管理，在设置-永久链接中启用地址重写，并设置永久链接为默认风格。

![](https://pic.imgdb.cn/item/641e4cdea682492fccef4803.jpg)

# 主题

主题放在`/usr/themes`下