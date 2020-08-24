0823：

### 两种盒子；块级元素，内联元素。  

    块级元素，控制能否在水平流上单独显示一个元素。块级盒子。
    内联元素，控制宽高和内容显示。容器盒子。

### width：auto;  

首先width的默认值是auto，他包含以下4种宽度表现。（但是3、4点存在疑惑，IE11无法复现

 - 充分利用可用空间。
 - 收缩与包裹。(浮动、绝对定位)
 - 收缩到最小。
 - 超出容器显示。

以上只有第1点描述的是外部尺寸，其余都是内部尺寸。 

外部尺寸和流体特性，有几点：   
 1. 正常流体宽度。（CSS默认流的方向是水平的）
 2. 格式化宽度。（出现在绝对定位模型中）

格式化宽度，体现出来就是元素具有包裹性，宽度由内部尺寸决定了。但是当top/bottom、left/right这些对立方位的属性同时出现时，其宽度大小就按上级元素的宽度计算了（position属性不为static的上级元素）。

内部尺寸与流体特性

- 包裹性。
- 最小首选宽度。  
（当width为0时）
    - 东亚文字，最小宽度为每个汉字的宽度
    - 西方文字，最小宽度为连续的英文字符单元
- 最大宽度。  
    - 内部没有块级元素或者内部的块级元素没有设定宽度的时候，则最大宽度为其中最大连续内连盒子的宽度


### 提一下无宽度布局和宽度分离原则
    总的来说就是，不要随便就抛弃或者打乱本来的流布局。


### box-sizing 
首先padding、border都有自己的background-origin，margin没有。  
在默认情况下（content-box），我们设置的width是作用在content上的，和 padding、border、margin都没有关系。  
再说box-sizing直译为“盒尺寸”（盒尺寸的作用细节、width的作用细节）。设置其属性就是改变width的作用细节。  
理论值：
```
    .box1{ box-sizing: content-box; } /* 默认值 */
    .box1{ box-sizing: padding-box; }
    .box1{ box-sizing: border-box; } /* 全线支持，最常用 */
    .box1{ box-sizing: margin-box; }
```

[//]: # (0824)  
<!-- 啊，注释一下 -->

### height: auto;
(open)

### height: 100%;  

height和width比较明显的区别就是对百分比单位的支持。对于width属性，就算父元素width为auto，其百分比属性也是支持的。然height就没有办法了，如果height为auto，只要子元素在文档流中，其百分比就不会生效或者说被忽略。
```
    html,body{
        height: 100%;
    }
```
甚至说只设置body也不行，一定要他俩都有height：100%;  
所以，百分比的高度要想起作用，其父类一定要有一个可以生效的高度。或者，主动设置其position的属性。  
    [找到规范中的解释](https://www.w3.org/TR/CSS22/visudet.html#the-height-property)：
    
    Specifies a percentage height. The percentage is calculated with respect to the height of the generated box's containing block. If the height of the containing block is not specified explicitly (i.e., it depends on content height), and this element is not absolutely positioned, the used height is calculated as if 'auto' was specified.
大概意思就是，如果那个盒子没有显式在指定（就是高度是内容撑开的），也不是绝对定位，那么计算值就为auto。  
`'auto' * 100/100 = NaN`
然而宽度width的解释就和这个不一样，具体去文档里看吧。
