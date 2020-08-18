# 粘性布局   
  ~~请不要不要再用减号来标记标题了，vuepress会将其识别为侧栏的副标题~~  
**文档就不[复制](https://developer.mozilla.org/zh-CN/docs/Web/CSS/position)了**


- 直接切入主题

![商品详情图](https://cdn.cnbj1.fds.api.mi-img.com/product-images/shouhuan5/shouhuan5-12.jpg)
前段时间小米周年的活动成功吸引我去看了一波，然而我看到小米手环的时候，它的商品详情页里有个挺有意思的css效果。有一点点惊艳，我瞬间来了兴趣。发现了他们是使用了position的sticky属性和剪裁来实现的。于是技痒就自己动手实现了一下 



<positionSticky-index />



~~另外组件名也别再使用下划线命名方式了~~

粘性布局相较于他的几个兄弟来说，在我看来确实像是fixed和absolute可以省去很多定位的麻烦，
sticky属性可以说是能够完美实现吸顶菜单之类的效果，十分方便，不需要再使用什么占位盒子了。但是需要注意的是这个属性无法在父元素使用overflow: hidden;的情况下用。

由于是GitHub Pages的静态服务器，我就不贴自己的图片了，用色块将就一下。毕竟用的外部链接图片也不知道的什么时候失效。
```
    position: sticky;
    top: 10px;
```