### css

CSS顺序：

1.定位/浮动/display

2.盒子模型：margin border padding  宽度高度背景色

3.文字模式

4.主导航：li>a

#### 字体

font-size 字体大小  数字+px(默认30)

font-weight 字体粗细   bold加粗 700px（常用数字）

font-style 字体倾斜 italic 

font-family 字体样式（默认微软雅黑）

1.样式层叠问题：覆盖

符合属性：font:style weight size/line-height family 

例子：font：italic 700 77px/2 微软雅黑

#### 文本

text-indent ：数字+em   文本缩进

text-align:文本水平对齐{span标签 a标签 input标签 img标签}

text-decoration文本修饰:none underline下划线

line-height 行高 数字+px     父级添加

rgba-a为透明度 取值0-1

#### 背景

背景颜色：background-color

背景图片：background-image:url();

背景平铺：background-repaet:no-repeat(不平铺)/repeat-x/y;

背景位置：background-position:水平位置 垂直位置// x y  数字+px

 1.水平位置:left center right   垂直位置:top  center buttom

background-attachment: fixed;背景固定

背景大小：background-size：contain 包含   cover 覆盖



#### 列表

list-style:none /**去掉列表装饰**/

#### 表单

input:focus{获取焦点的输入框}



#### 元素显示模式

块：独占一行  div h p

行内：不可以设置宽高  span a

行内块:可以设置宽高 input img

显示模式：display:block 转换为块

​                    display:inline 转换为行内

​                    display:inline-block转换为行内块

#### 盒子模型（**）

由外到内 ，宽高背景色，内容位置，文字细节

内容：width/height

外边距：padding

边框：boder

外边距：margin

###### 1.边距 border

borer:  数字px （粗细） soild/dashed/dotted(实线/虚线/点线) 颜色；

border-left/right/top/buttom 方位

###### 2.内边距padding

 **1.1padding，borer会把盒子撑大。也可以让内容一直在里面**

 1.2padding属性可以作为复合属性，即单独设置某个方向的内边距

 1.3padding最多根四个值(顺时针，两辆相同) 

  padding:top right bottom left;

3. ##### 外边距

   ###### margin:top right bottom left;

   margin:0 auto;

box-sizing:border-box保持盒子原有大小

##### 4.清楚默认样式：

  \* {

​      margin: 0;

​      padding: 0;

box-sizing:border-box保持盒子原有大小

​    }

##### 5.外边距的问题

   外边距塌陷：在父类添加**overflow：hidden**

行内元素不能通过padding和margin来改变垂直的位置。

#### 结构伪类

##### 1.结构选择器：（列表， 段落）

e:first-child:第一个子元素

e:last-child:最后一个子元素

e:nth-child(n):第几个子元素

e:nth-last-child（n）:倒数第几个元素

##### 2.结构伪类公式和伪元素：

2.1 找前面数：-n+5

2.2 伪元素必须有content

：：before 在父元素内容的最前添加一个伪元素

：：after 在父元素内容的最后添加一个为伪元素

##### 3.选择器

首用：类选择器   .名称{} 调用：<div class="名称 名称"></div>

次用 id选择器：配合jsp,有唯一性    #one{} <div id="one"></div>

通配符选择器 *

后代选择器：标签 标签

子代选择器：标签>标签

并集选择器：标签标签

交集选择器：标签类标签最多用

****继承性：（行内，id，类，标签），都是继承话*，看父级哪个高继承哪个***

层叠性：后面覆盖前面。

##### 4.hover伪类： 任何标签，常用a标签

 选择器：hover{css}

 **a: link 所有未被访问的链接**

a:visited 所有已被访问的链接

**a:hover鼠标位于其上的链接**

a:active 鼠标按下为弹起的链接

#### 浮动 float

1.浮动的标签是顶对齐

2.半脱离，具有行内块特点

3.清除浮动；

 3.1 父块元素没有加高度，子块元素加高度。

3.2 额外标签法：class:"clearfix"     clear:both;（左右两侧）   缺点：会造成原来网页结构的破坏

3.3 单伪元素清楚法 `.clearfix::after{`

`conten:'';display:block; clear:both;height:0;visibility:hidden;}`

3.4 双伪元素清除法

`/**.clearfix::before作用：解决外边距塌陷问题 **`

`外边距塌陷：父子标签，都是块级，子级加了margin会影响父级的位置/`

`/**清除浮动**/`

`.clearfix::before,`

`.clearfix::after{content:'';`

 `display:table; }`

`/**清除浮动**/`

`.clearfix::after{clear:both;}`

3.6清除浮动--给父级加标签overflow：hidden

### 定位 position

场景：解决盒子之间的层叠问题 ，一般用于盒子之间的层叠

position:fixed  固定定位

position:relative 相对定位：相对于原来的位置

position:absolute 绝对定位：有定位父级以定位父级为参照物，否则以浏览器窗口为参照物。特点：**脱标，不占位，改变显示模式特点：具有行内块特点**

偏移值：相对位置以left和top为准

父级相对定位，子级绝对定位

绝对定位就近查找定位的父级。

1.绝对定位的盒子不能使用左右margin auto

2.**位移定位：transform：translate( %,% )**

3.需要设置宽度

4.z-index：整数；取值越大，显示及越靠上。必须配合定位来搭配

/**position:absolute;

 left:50%; top:50%;  

margin-left:-100px; margin-top:-50%;

width:200%;height:100px;**/缺点：数值小数点

#### 装饰

1.vertical-align：方位；

作用：浏览器遇到行内块与文字，行内块之间的都用middle

​            默认是以文字基线对齐

2.光标：属性名cursor  

属性值：pointer 小手效果

​                text  工字形  文本复制

​               move  十字型 可以移动

3.边框圆角

​    border-radius:数值px  

场景：正圆 border-radius：50%

​            胶囊：高度的一半

4.overflow溢出部分显示效果

​        hidden：溢出部分隐藏

​        scroll：显示滚动条   auto：自动显示或隐藏滚动条

5.显示隐藏效果

   常见显示属性：visibility：hidden   不怎么用，占位置

​                                display：none

6.元素整体透明度

​     Opacity:0~1

7.阴影-shadow

   属性值：水平阴影  垂直阴影   模糊效果  颜色效果

8：过渡 

transition:all 时间

利用hover

#### 拓展

1.大盒子标签水平居中：margin:0 auto(div ,p ,h)

2.text-align:文本水平对齐{span标签 a标签 input标签 img标签}

3.子类内容如果要居中，要在父类设置