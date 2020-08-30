# 介绍下BFC，IFC，FFC，GFC

这是css的四种不同的渲染模式，一般可以通过`display: block/inline-block/flex/grid` 设置。
## BFC
块格式化上下文（Block Formatting Context，BFC） 是Web页面的可视CSS渲染的一部分，是块盒子的布局过程发生的区域，也是浮动元素与其他元素交互的区域。

下面方式会创建BFC：
* `float` 的值不是 `none`
* `position` 的值是`absolute`、`fixed`
* `display` 的值是 `inline-block`、`flow-root`、`table-cell`、`table-caption`、`flex`或者 `inline-flex`、`grid`或者`inline-grid`
* `overflow` 的值不是 `visible`

### 作用
#### 清除浮动
子元素浮动，脱离了普通文档流，子元素不会默认撑开父元素，通过设置父元素创建BFC可以解决这个问题。

#### 解决上下margin边距问题
同一层级两个元素上下边距会重叠，通过设置第二个元素创建BFC可以解决。
#### 实现自适应两栏布局
通过浮动设置两栏布局时，浮动的内容会覆盖元素，通过设置第二个元素BFC可以解决。

## IFC
IFC的全称是Inline Formatting Contexts，也就是“内联格式化上下文”。
子元素只会计算横向样式空间，`【padding、border、margin】`，垂直方向样式空间不会被计算，`【padding、border、margin】`。

用于行内需求。作用：
* 水平居中：当一个块要在环境中水平居中时，设置其为inline-block则会在外层产生IFC，通过text-align则可以使其水平居中。
* 垂直居中：创建一个IFC，用其中一个元素撑开父元素的高度，然后设置其vertical-align:middle，其他行内元素则可以在此父元素下垂直居中。

#### FFC
FFC的全称是Flex formatting contexts，弹性盒模型。
通过设置 `display: flex;`或 `display: inline-flex;` 实现，要注意一点。生成FFC后，其子元素的`float`、`clear`和 `vertical-align` 属性将失效。

#### GFC
当为一个元素设置display值为grid的时候，此元素将会获得一个独立的渲染区域，我们可以通过在网格容器（grid container）上定义网格定义行（grid definition rows）和网格定义列（grid definition columns）属性各在网格项目（grid item）上定义网格行（grid row）和网格列（grid columns）为每一个网格项目（grid item）定义位置和空间。那么GFC有什么用呢，和table又有什么区别呢？首先同样是一个二维的表格，但GridLayout会有更加丰富的属性来控制行列，控制对齐以及更为精细的渲染语义和控制。


