---
layout: post
title: 逐步限制匿名访问
author: 天梯
tags:
---

事情原因见[《天梯代理服务承压》](http://tiantiio.github.io/2016/06/08/service-under-pressure.html)。

由于天梯没有加任何限制措施，最近一个月持续收到大量奇怪来源的流量，对代理质量造成很大影响。

为了限制天梯代理被随意用到第三方服务，将限制只有注册用户才能访问pac地址，逐步取消完全公开的pac。同时将站点全部升级为https加密传输。

切换后如有问题可随时反馈。
