####filter 用法
**\*传入两个参数 <van-col>{{第一个参数|formatVisitTime(第二个参数)}}</van-col> 使用**
**两个 filters<van-tag plain :color="item.CreateTime（参数）|formatVisitDate（filters方法）|formatVisitDateColor（filters方法）">{{item.CreateTime|**formatVisitDate}}</van-tag>

版权声明：本文为 CSDN 博主「勋勋勋勋小勋勋」的原创文章，遵循 CC 4.0 BY-SA 版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/qq_34607371/article/details/86318149

**_vue 使用 CDN 使用，使用 vant 组件库_**
全局的，直接写组件就 ok
**_canvas 的一个库 fabric_**
https://blog.csdn.net/happydecai/article/details/81216419 简单上手
https://www.cnblogs.com/aaron911/p/11949928.html 详细 api 介绍用法

\_this.myCanvas.setBackgroundImage('./img/tou2.png', \_this.myCanvas.renderAll.bind(\_this.myCanvas)); fabric.js 给 canvas 添加背景图片
oImg.set('selectable',false) fabric.js 禁止选中

**_vue 鼠标事件控制台警告 （可能导致页面崩溃）_**
https://www.cnblogs.com/yck123/p/11212979.html

**_微信小程序_**
校验文件，，，，，，，webview 用业务域名

**_axios 的请求方式 post 和 get_**
https://www.cnblogs.com/mmzuo-798/p/9284545.html

上传图片时，使用 form-data
使用 append 以键值对的形式添加
**_idea 编辑器激活码（有效期半年）_**
http://idea.medeming.com/code

### echarts 的教程

https://www.echartsjs.com/zh/tutorial.html#5%20%E5%88%86%E9%92%9F%E4%B8%8A%E6%89%8B%20ECharts

### box-shadow 设置元素阴影

box-shadow ： x 方向偏移量 y 轴方向偏移量 模糊程度 阴影部分长度 颜色

### 关于小程序正确的样式在苹果部分系统出现样式错乱的问题

可能是 1rpx 的问题,无法识别.5px（将父元素高度或宽度设置为奇数货奇数.5）， 有可能是兼蓉性问题

### 去掉 input 选中时或 button 选中时的外边框

outline:medium 或者 outline:none 的时候，蓝色边框去掉了
方法：#search4:focus{ border:1px solid red; } 获取焦点时边框是什么颜色

### 百度富文本编辑器的引入

https://blog.csdn.net/qq_43258252/article/details/87859547

xxxxx.all.js 需要安装 grunt 之后 ，执行 grunt default 在打包的 dist 文件中会自动生成

https://blog.csdn.net/qq_34354426/article/details/76699206 引入后报错处理

### lottie 动画 uni-app 的插件 lottie-miniprogram

可以对接 js 和 json 文件，对接 json 时要注意图片的路径（绝对路径和相对路径），可以再 xxx.json 中找到图片修改路径

### 关于运行项目时报错 node-pre-gyp 之类的

1.  npm install --global --production windows-build-tools
2.  npm install -g node-gyp

### 下载 elexc 表格

1.  需要注意 jquery 的 ajax 是没有 bolb 格式的返回数据格式
2.  使用原生 ajax 导出表格

```
toExport(params) {
                var _this = this;
                var xhr = new XMLHttpRequest()
                var fileName = params.fileName + '.xlsx'; // 文件名称
                xhr.open('POST', `/ysd/warehousing/exportInventoryWaresList/${this.showInputNum}`, true);
                xhr.responseType = 'blob';
                // xhr.setRequestHeader("Authorization","Basic a2VybWl0Omtlcm1pdA=="); // 请求头中的验证信息等（如果有）
                xhr.setRequestHeader('Content-Type', 'application/json;charset=utf-8');
                xhr.onload = function(res) {
                    if (this.status === 200) {
                        console.log(res)
                        var type = xhr.getResponseHeader('Content-Type');
                        var blob = new Blob([res.target.response], {type: res.target.response.type});
                        if (typeof window.navigator.msSaveBlob !== 'undefined') {
                            /*
							 * For IE
							 * >=IE10
							 */
                            window.navigator.msSaveBlob(blob, fileName);
                        } else {
                            /*
							 * For Non-IE (chrome, firefox)
							 */
                            var URL = window.URL || window.webkitURL;
                            var objectUrl = URL.createObjectURL(blob);
                            if (fileName) {
                                var a = document.createElement('a');
                                if (typeof a.download === 'undefined') {
                                    window.location = objectUrl;
                                } else {
                                    a.href = objectUrl;
                                    a.download = fileName;
                                    document.body.appendChild(a);
                                    a.click();
                                    a.remove();
                                }
                            } else {
                                window.location = objectUrl;
                            }
                        }
                    }
                }
                xhr.send(JSON.stringify(params))
            },
```

### sass 和 css 区别：

    嵌套，变量，扩展/继承，计算,mixin

### 前端通过拿到 json 数据后生成导出 excel 表格（.xls/.cvs）

    https://blog.csdn.net/hhzzcc_/article/details/80419396

### 使用组件不用其 action 自动上传的方法

    https://www.cnblogs.com/liuruolin/p/7517470.html

```
<!-- 放弃action，在找了好多资料后发现可以不使用action，而是用before-upload属性，这是一个function类型的属性，默认参数是当前文件，只要能传递这个文件也能实现效果要传递这个方法就需要new一个formdata对象，然后对这个对象追加key和value -->

```

### can i use 一款可以测试浏览器兼容问题

## 前端导出宽度自适应 excel

1.  导出多个表格
    > https://blog.csdn.net/csl125/article/details/90318432?depth_1-utm_source=distribute.pc_relevant.none-task-blog-BlogCommendFromBaidu-7&utm_source=distribute.pc_relevant.none-task-blog-BlogCommendFromBaidu-7
2.  导出一个表格
    > https://blog.csdn.net/hgh_1997/article/details/89240925

## git add -A 和 git add . git add -u

1. git add -A 提交所有变化
2. git add . 提交新文件和被修改的文件，不包括删除的文件
3. git add -u 提交被修改和被删除的文件，不包括新文件

## 前段导出 pdf 的方法 自己 github 的 vue 项目 testStudy

1. html2canvas + jspdf 会图片 pdf，会失真
2. window.print()

## Nprogress 是页面跳转时出现在浏览器顶部的进度条

    在router.js中

```
//导入
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
})

router.afterEach(() => {
  NProgress.done()
})
```

## sass 的基本操作

- 变量
- 嵌套
- minix 混合 可以将诸多地方常用的样式写在一起，引用调用即可
- function 函数 可以自定义一些函数
- 插值 例如可以使用 #{} 插值语句在选择器或属性名中使用变量 @if，@each，@while

### 注意

1. @mixin 来定义一个函数，@include 来引用 （传参时可以设置默认值）
2. sass 本身自带的一些内置函数，如 rgba，percetage 等

### vue 不常用指令

1. v-cloak 可以解决闪屏问题，大型项目用 webpack 和 vue-router
   https://www.jianshu.com/p/f56cde007210?utm_source=oschina-app
2. v-pre 一些静态的资源不需要编译，这个指令可以跳过
   eg: <span v-pre>{{ this will not be compiled }}</span> 显示的是{{ this will not be compiled }}
3. v-once 只渲染一次。一般别使用会带来很多困惑
4. v-text 可以解决插值表达式闪烁问题 `<p v-text="msg"></p>`
5. v-html 可以解析代码
6. v-text 和 v-html 的区别，v-text 只是渲染标签，v-html 可以解析 HTML 代码

### v-for 和 ref 配合使用时，this.\$refs.\*\*\* 获得的是数组，

1. 在表格从 0 开始，不间断时，可以这样获取对应的节点 this.$refs.***[scope.$index]
2. 有间断时，自定义 ref 时，需要取数组第一项 this.\$refs.\*\*\*[0]

### 表格与 from 表单配合使用时

```
//dom节点
<el-form label-width = "85px" :model = "addData" :rules = "rules" ref = "addData">
    <el-table :data = "addData.paramslist" id = "noData">
              <el-table-column :label = "item" v-for = "(item,index) in paramsName" :key = "index">
                <template slot-scope = "scope">
                  <el-form-item
                    class = "noML"
                    :key = "scope.row.key"
                    :prop = "'paramslist.' + scope.$index + '.'+index"      //重点在此处
                    :rules = "{required: true, message: '值不能为空', trigger: 'blur'}">
                    <el-input size = "mini" v-model = "scope.row[index]"></el-input>
                  </el-form-item>
                </template>
              </el-table-column>
            </el-table>
</el-form>

//数据格式

addData: {
          paramsName: ['第一组', '第二组'],
          paramslist: [['']],
        }
```

### window.onload 和\$(document).ready

[https://upload-images.jianshu.io/upload_images/18473143-793c8e4736e035b2.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240]

## puppeteer

1. puppeteer 是一个 chrome 出品的一个无头浏览器（没有用户界面的浏览器），提供平高级 API，通过 DevTools Protocol 来控制 Chrome 或者 Chromium
2. 用途：
   - 网页截图，或生成的 pdf
   - 爬取 SPA 或者 ssr 网站
   - 自动化提交表单，ui 测试，键盘输入
   - 创建一个最新的自动化测试环境。使用最新的 js'和最新的 Chrome 浏览器运行测试用例
   - 捕获网站的时间线，帮助诊断性能问题
   - 测试 Chrome 插件

- 与其他无头浏览器区别：
  - 只支持 chrome，可以模拟真实事件，支持在 DevTools 调试

## babel 的原理

1. 什么是 babel？ babel 能够转译 ECMAScript 2015+ 的代码，转换成能够在旧的浏览器或环境中运行。
2. AST 抽象语法树
   - AST 的根节点始终都是 Progrem， 以 const add = （a,b）=>a+b 为例
   - 一个变量声明（variableDeclartion）:声明了一个 name 为 add 的箭头函数（ArrowFounctionExpression）
   - params（函数参数） ： a 和 b
   - 函数体： 函数主体是一个 BinaryExpression(二项式),一个标准二项式分为三个部分：
     1. left：a,
     2. operator(运算符): + ，
     3. right： b
3. babel 的工作过程：
   - Parse（解析）：将源代码转换成更加抽象的表示方法（eg:抽象语法树） ；parse 包括（词法分析 和 语法分析）
   - Transform(转换): 对（抽象语法树）做一些特殊处理，让他符合编译器的期望
   - Generate(代码生成): 将第二步经过转换的抽象语法树生成新的代码
   - 词法分析：就是将具体源码的每一项生成对象数组，语法分析就是经过处理将数组生成 AST

## GUI 图形用户界面

### js 构造函数和原型链继承（优化后的）

```
function Parent() {
    this.name = 'person'
    this.play = [1,2,3]
}

Parent.prototype.say = function() {console.log('hahahah')}
function Child () {
    Parent.call(this)   // 构造函数
    this.type = 'child'
}
Child.prototype = Object.create(Parent.prototype)
Child.prototype.construtor = Child
var s1 = new Child()


```

### js 字符串转数字的方法

    parseInt(string,radix)  string 被解析的字符串   radix 表示要解析的数字基数，默认是十进制。如果radix < 2 或者radix > 36,返回NaN

### 箭头函数特性

1. 箭头函数没 this，它的 this 就是理他最近一层非箭头函数的 this
2. 箭头函数自己没有 arguments 对象，但它可以访问外围函数的 arguments 对象
3. 不能通过 new 关键字调用，同样也没有 new.target 值和原型

### DOM 模型事件，DOM0 和 DOM2 级的区别，DOM 的分级

1. jsDOM 事件三个阶段： 事件捕获阶段，处于目标阶段，事件冒泡阶段
2. 对于绑定在元素的两个事件，一个用于捕获，一个用于冒泡，两个事件是按照 **绑定在被点击元素的事件是按照代码添加顺序执行的**
3. - DOM0 级事件是 onclick 这类事件，一个元素只能绑定一个。**存的是一个地址**
   - DOM2 级事件 使用 addEventListener,一个元素可以绑定多个事件。 **存的是一个数组，绑定事件会放在数组里挨个执行**

### history 和 location

1. history.pushState 和 history.replaceState
2. location.href location.search 获取？后的字符串 location.hash 获取 3 后的内容

### 常见四种函数类型

1. 匿名函数 节约空间 （function(){})（）匿名函数自调
2. 回调函数
3. 递归函数 严格模式 arguments.callee（）调用函数本身
4. 构造函数

### 变量提升和函数提升

### 作用域和作用域链

### 执行环境（执行上下文 EC） 全局执行环境 局部执行环境

1. VO 变量对象 该对象储存生命在全局的变量
2. AO 活动对象 该对象储存函数执行时，函数内生命的变量

### 函数重载和多态

1. 程序中可以定义相同名字，不同形式参数，函数在调用时自动识别不同参数对应函数进行执行

### call,apply,bind call,apply 是直接执行 bind 则需要一个中间变量来承接

### this 谁调用指向谁，局部函数 this 是 window

### 面向对象

1. 含义：吧任何的数据和行为抽象成一个形象的对象，类似于人生活中思考的方式 （万物皆对象）

2. 封装，继承，多态

   - 继承：子继承父
   - 封装：将一些公共的行为封装成一个方法
   - 多态：重载，重写（子类重写父类方法）

3. 对象 ，原型和原型链
   - 对象 直接生成的普通对象和 new 出来的
   - 原型和原型链（1，2，3）
     1. 一句话： 万物皆对象，万物皆空（null）
     2. 二个定义：原型：保存所有子对象的共有属性值和方法的父对象 原型链： 由各个子对象的**proto**属性连续引用形成的结构

### filter 实现磨砂玻璃的效果（模糊）

### Leaflet，mapBox, openlayer 地图使用相当 nice，友好于移动端.(展开平面地图)

### 前端代码规范

1. 凹凸实验室 [https://guide.aotu.io/docs/index.html]

### vuex 持久化插件 vuex-persist

    + 其原理就是自动将state中的信息存储到storage或cookie中

### vscode 常用插件

    postCode
    path Intellisense
    gitLens
    Auto Rename Tag
    Autoprefixer
    Beautify
    Chinese
    3D Viewer for VSCode
    Auto Rename Tag
    Document This
    EditorConfig for VS Code
    ES7 React/Redux/GraphQL/React-Native snippets
    ESLint
    Git History
    GitLens — Git supercharged
    indent-rainbow
    IntelliSense for CSS class names in HTML
    Vetur
    Xmind Viewer
    WXML - Language Service
    vscode-styled-components
    vscode-fileheader-git
    Visual Studio IntelliCode
    View In Browser
    Path Intellisense
    npm Intellisense
    Autoprefixer

### Babel 解析语法树 ast （词法分析 Lexical Analysis 和语法分析 Syntax Analysis ）

1. **\*词法分析** ，也叫扫描器（scanner）,他会读取我们的 source code 中的每一个字节，转换成 token（词法令牌），最后我们的源代码会编译成 list of tokens （词法令牌列表）
2. **\*语法分析** ，也叫 parser（解析器），将词法分析器解析出来的 list of tokens ，转换成一个树形节点。所有树形节点组合起来，就形成了混合语法树，虽不是和代码 100%匹配，但包含了足够信息使解析器能够正确的处理代码

### webpack 混淆 webpack-obfuscator

### vue 的 diff 和 react 的 diff 区别

1.  相同： 都只做同级比较，忽略跨级
2.  vue 对比节点，若 className 不同，认为是不同类型元素，删除重建。 react 则是看作相同节点，只修改属性
3.  vue 的列表对比，采用从两端到中间对比方式，react 则是从左依次到右对比的方式，当一个集合，需要把左后一个元素移到第一个，react 会将前面的元素依次后移，vue 则是只将最后一个元素移到第一个。
4.  vue 的 data 更新只更新自己，react 组件 state 更新会更新自己及所有子组件。

5.  注：vue 和 react 都遵循 （1）拥有相同类型的两个组件产生的 DOM 结构也相似，不同类型的两个组件产生的 DOM 结构也不相同（2）对于同一级的子节点，通过分配唯一 id 进行区分

### document.write() 在 dom 渲染完成后，在执行会将之前的 dom 都清掉

### Restful API 规范

1.  REST 全称是 representational State Transfer ,中文意思是表述性状态转移，（注：通常译为表征），它首次出现在 2000 年 Roy Fielding 博士论文中。
2.  RESTful 是一种定义 web API 接口的设计风格，尤其适用于**前后端分离的应用模式中**
    这种风格的理念认为后端开发的任务就是提供数据的，对外提供的是数据资源的方位接口，所以在定义接口时，客户端访问的 url 路径就表示这种要操作的数据资源。

    - 而对于数据资源分别使用 post，delete，get，update 等**请求动作**来表达对数据的增删改查。
    - **路径** 表示 api 的具体网址，每一个网址代表一种资源
      1. 资源作为网址，**只能有名词，不能有动词**，而且所用名词往往与数据库的表明相对。
      2. API 中的名词应该使用复数，无论子资源或者所有资源

### css 提高渲染效率

1. [!https://mp.weixin.qq.com/s/nM_M-B6oDk9PHJkURBKFkA]
2. 内容可见性（content-visibility:visible/auto/hidden）,设置 auto，提高页面性能。

```
.card {
    content-visibility:auto;
    contain-intrinsic-size: 200px;// 设置具体尺寸避免渲染错误
}
```

3. will-change (auto,scroll-position,content)

4. contain 优化重绘，重排

   - layout
   - size
   - paint
   - content layout/paint
   - strict layout/paint/size

5. @import 减少使用，实际上是通过网络请求来获取文件的

### 运算符 异或

1.交换律：a ^ b ^ c <=> a ^ c ^ b

2.任何数于 0 异或为任何数 0 ^ n => n

3.相同的数异或为 0: n ^ n => 0

### 语言类型

1. **编译型和解释型**
   - 编译型，所有文件都编译成可执行文件，随后通过链接程序将相关文件进行链接。
   - 解释型，边解释边运行，(编译程序一样每次进行小小改动都要耐心等待漫长的 Compiling……Linking……这样的编译链接过程),解释程序的外壳程序将源代码转换成二进制代码以供执行，总言之，就是不断地解释、执行、解释、执行……所以，解释性程序是离不开解释程序的。
2. **动态语言和静态语言**
   - 通常我们所说的动态语言和静态语言是指动态类型语言和静态类型语言
   - 动态类型语言：是指在运行期间才去做的类型检查也就是说在编译时永远也不会给任何变量指定数据类型，该语言在第一次赋值给变量时，在内部会将数据类型记录下来。（python 和 ruby 就是典型的代表）
   - 静态类型语言：是指在编译期间进行数据类型检查，也就是说在写程序时要声明所有变量。(C/C++，C#,Java)
3. **强类型语言和弱类型语言**
   - 强类型语言：强制数据类型定义的语言。
   - 弱类型语言：数据类型可以被忽略。（一个变量可以赋不同类型的值），当改变赋不同类型的值时，自动在这些变量前加了一个 clong()或(int)()这样的转换函数而已，能做到这一点其实是归功于 VB 的编译器的智能化
     强类型定义语言在速度上可能略逊色于弱类型定义语言，但是强类型定义语言带来的严谨性能够有效的避免许多错误。

### Content-Security-Policy （csp）

1. 什么事 csp。。。。 csp 实质就算是白名单制度，开发者明确告诉客户端，那些外部资源可以加在和执行，等同于提供了一个白名单。它的实现和执行全部由浏览器完成，开发者只需提供配置。 **csp 大大增强了网页的安全性。攻击者即使发现了漏洞，也无法注入脚本，除非还控制了一台列入白名单的可新主机**
2. 启动 csp 的方式

- 通过 http 头信息的 Content-Security-Policy 的字段
- 通过 meta 标签

```
<meta http-equiv="Content-Security-Policy" content="script-src 'self'; object-src 'none'; style-src cdn.example.org third-party.org; child-src https:">
```

3. 具体配置文档见[!http://www.ruanyifeng.com/blog/2016/09/csp.html][!https://www.cnblogs.com/baiyangyuanzi/p/6529061.html]
