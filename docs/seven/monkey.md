# 油猴脚本

api文档：https://www.tampermonkey.net/documentation.php

Q: 默认情况下运行多次？
A: 在设置界面“仅在顶层页面（框架）运行”改为“是”，则脚本仅运行异常。

***

@match 支持正则匹配运行该脚本的域名吗，复数。  

@require https://cdn.jsdelivr.net/npm/jquery@3.2.1/dist/jquery.min.js  
可以引入外部库进行辅助编写代码。  

@grant GM_setValue  
@grant GM_getValue  
存储与获取脚本使用的常量。


360的前端团队开发了一个node框架