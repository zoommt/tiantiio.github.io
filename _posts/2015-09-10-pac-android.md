---
layout: post
title: PAC免费代理设置--Android
tags: 
---

最近翻墙姿势中 PAC 方式可算是“热”了，其设置非常简单，不需要安装客户端；可以设置系统代理或者配合浏览器代理插件使用，而且支持各种平台，这是受欢迎原因之一吧。下面是教程整理。

PAC地址：```http://tianti.io/n.pac``` 


###Android 设置
####安装 ProxyDroid 应用实现 PAC 代理，注意：5.0以下系统不支持此设置。

应用简介：

ProxyDroid 可以帮助您设置您的 Android 设备上的代理（HTTP / SOCKS4/ SOCKS5）,需要 root 权限,TIPS：按 MENU 按钮，找到【恢复】选项，这将有助于您恢复/重置代理服务器的设置，当你设置出现错误。

特点：

1. 支持HTTP / SOCKS4/ SOCKS5代理。
2. 支持基本/ NTLM/ NTLMv2身份验证方法 。
3. 可以选择哪一个应用程序通过代理访问 。
4. 支持多个配置文件 。
5. 绑定配置到无线网络SSID/移动网络（2G/ 3G） 。
6. 小部件快速开/关代理切换 。
7. 低电池和内存消耗（完全用C语言编写，并作为本机二进制编译） 。
8. 绕过内部网IP地址。
9. DNS代理,允许在防火墙内解析外部地址。

![pac1](http://tianti.io/images/pac-android-1.png)

 
####使用Drony来配置PAC代理,该应用支持Android 3.x以上系统。
**1. 打开 Drony，进入 Setting 在 WiFi 下，选择你正在使用的 WiFi 网络：**

![pac2](http://tianti.io/images/pac-android-2.png)

在 3G/4G 网络环境中，则选择 Setting for not listed networks

![pac3](http://tianti.io/images/pac-android-3.png)

**2. 修改 Script Proxy 设置，1.输入 PAC 地址，2.并下载，3.测试，4.保存。**
PAC脚本地址：http://tianti.io/n.pac

![pac4](http://tianti.io/images/pac-android-4.png)

**3. 修改 Proxy Type 为 Script:**

![pac5](http://tianti.io/images/pac-android-5.png)

**4. 启动 Drony:**

![pac6](http://tianti.io/images/pac-android-6.png)

**5. 修改系统代理设置,WiFi 网络环境：**

![pac7](http://tianti.io/images/pac-android-7.png)

3G 网络环境：进入 APN 设置，修改代理和端口:

![pac8](http://tianti.io/images/pac-android-8.png)
 