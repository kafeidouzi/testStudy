### react 原理

[!https://zhuanlan.zhihu.com/p/101507773]

### redux 原理：

1. 在 index 钟会先进行判断非生产环境 redux 是否被压缩了，如果压缩了会给一个 warning

2. 其后会暴露 createStore，combineReducers，bindActionCreators,applyMiddleWare,compose 这几个常用 api 以共使用。

3. createStore 函数接受三个参数：
   reducer：是个函数，接受两个参数，state 和 action，根据 action 去执行不同的操作
   preloadedState:初始状态可以随意指定,不传该参数时默认为 undefind，如果用 conbineReducers 来
   生成 reducer，必须保持对象中的 key 和 conbineReducers 中的 key 一致。
   ```
   const store = createStore(reducer1,{open:55555},composeEnhancers(
     applyMiddleware(thunk)
     ));
     reducer1 = （state={count:0},action）=>{
     }
   ```
   enhancer：是 store 的增强函数，需要用 applymiddleware 来生成
4. subscribe 函数，会给 store 中的 state 添加一个订阅监听，一旦调用 dispatch 来分发 action，所有监听函数就会执行。而 nextListeners 就是储存当前监听函数列表的，当调用 subscribe 时，传入一个函数作为参数时，就会把这个函数 push 进 nextListeners 列表。同时也会返回一个 unsubscribe 函数，用来解绑当前传入的函数，同时在 subscribe 函数中定义 isSubscribed 用来标识当前的订阅是否已经被解绑，解绑的意思是从 nextLineners 中移除

5. compose.js
   可以接受一组函数，从右往左组合多个函数，然后返回一个函数。

#### 这样做可以避免代码向右偏移

```
compose(funcA,funcB,funcC)
相当于
compose(funcA(funcB(funcC())))
```

6. applyMiddleWare
   applyMiddleWare 利用 createStore 和 reducer 创建了一个 store，store 的 getState 和 dispatch 方法又被分别的赋值给 middleWareAPI 变量
7. combineReducers
   将多个 reducer 合并成一个总的 reducer，用合成的 reducer 去调用 createStore 方法
   每个 reducer 都会作为 value 并且有一一对应的 key，
   合成的总的 reducer 会将所有 reducer 的 state 合成一个，每个 reducer 返回的 state 也都会与每个 key 一一对应
8. bindActionCreators
   传入 action creators 和 dispatch, 返回绑定了 dispatch 的 action creators。

实现也很简单，遍历 actionCreators, 把每个元素用 dispatch 处理后生成新的函数，返回新函数的集合。

```
function bindActionCreators(actionCreators, dispatch) {
  const boundActionCreators = {};
  Object.keys(actionCreators).forEach(key => {
    const actionCreator = actionCreators[key];
    if (typeof actionCreator === 'function') {
      boundActionCreators[key] = (...args) => dispatch(actionCreator(...args));
    }
  })
  return boundActionCreators;
}

const boundActionCreators = bindActionCreators({
  addTodo,
  plusTodo,
  setDataTodo,
}, dispatch);

// 写入数据
boundActionCreators.addTodo('Use Redux')
boundActionCreators.plusTodo()
```

### 手撸 redux

```
// createStore 函数
    + getState()  获取store方法
    + dispatch  修改store方法
    + subscribe  订阅store方法
    + replaceReducer  重置reducer
function createStore(reducer, preloadedState) {
  let currentState = preloadedState   //如果没有就是undefind
  let currentListeners  = []
  function getState(){
    return currentState
  }
  function dispatch(action) {
    currentState = reducer( currentState, action )
    return action
  }
  function subscribe(listener) {
    currentListeners.push(listener)
  }
  function replaceReducer()
  return { getState, dispatch, subscribe, replaceReducer }
}

```

### HOOKS

#### 使用 hook 的动力

1.  组件的复用要使用 props 和高阶组件，较为麻烦
2.  providers，consumers，高阶组件，render props 抽象的组件会形成“地狱嵌套”
3.  为的共享状态逻辑提供更好的原生途径

#### hook 是什么

1. hook 是一个特殊的函数，他可以让你“钩入”react 特性

#### hook 的使用规则

1. 只能在最外层调用 hook。。不要再循环，条件判断或者子函数中调用
2. 只能在函数组件中调用 hook （或者自定义的 hook 中）

#### useState

1.  基本语法 ：

```
const [count ,setCount] = useState(0)    //这里的state可以是数组或对象
```

2.  与 class 中不同，在函数组件中不需要使用 this，直接可以拿到 count，setCount。
3.  与 this.setState 不同，this.setState 更新 state 变量总完全替换它，而 setCount 是合并它
4.  当有多个 useState 时，react 怎么知道是对应哪个组件？？？

- - 每个组件内部都会有一个记忆单元格列表，他们其实就是用来存储数据的 js 对象，当你用 useSatate 调用一个 hook 时，他会读取当前单元格（或首次渲染时将其初始化），然后吧指针移动到下一个

#### useEffect

1. effect 分为两种，一种是不需要清除的 effect，另一种是需要清除的 effect（返回一个函数，会在组件卸载时执行，这是 hook 的内部机制）
2. 相比于 class 组件，class 组件实现更新需要将相同的逻辑在 componentDidMount 和 componentDidUpdate 中同时写相同的逻辑，
   而 effect 只需要一个，它会在首次渲染和每次更新都会执行，且每次都是一个新的 effect，避免了 componentDidUpdate 使用不当产生的 bug，
3. class 与 effect 还有一点，即是 effect 可以将有关联的逻辑卸载一个 effect 中，可以写多个 effect，将不同逻辑进行分离
4. 有些时候 effect 每次更新可能会影响性能，可以设置 effect 的第二个参数，它是一个数组。不管数组内的参数是一个或者多个，只要有一个变化它都会执行。当数组为空时，effect 只执行一次（意为它不依赖任何 props 或 state 的变化）
5. 与 componentDidMount 和 componentDidUpdate 不同，useEffect 的函数会在浏览器完成布局与绘制之后，延迟调用。
6. 并非所有的 effect 都会被延迟调用，当在用户可见的界面更新 dom 时，就要同步，这样才不会给用户视觉上的不一致。react 提供了一个额外的 hook，
   useLayoutEffect，它与 useEffect 结构一样，只是调用时机不一样

#### useLayoutEffect 和 useEffect 区别

1. useEffect 相对于 class 的 componentDidMount 和 componentDidUpdate（他俩会在 render 结束后立即执行，是同步的）不同，它算是异步的一个行为；大部分场景下都比 class 的方式性能好
2. useLayoutEffect：当 useEffect 里面的操作需要处理 dom 时，并且会改变页面样式。此时 useEffect 就可能出现闪屏。而 useLayoutEffect 里面的 callback 函数会在 dom 更新后立即执行，但是会在浏览器进行任何绘制之前完成，阻塞浏览器绘制

### react hooks （他只是一个数组，数组之间有对应的应得映射关系，响应的 state 数组对应其响应的 set 数组）

#### react hooks 使用原则：

1. 不要在循环，条件判断，函数嵌套中使用 hooks （可能造成对应关系紊乱）
2. 只能在函数组件中使用

#### react hooks 的简单实现

```
let state = [];
let setters = [];
let firstRun = true;
let cursor = 0;

function createSetter(cursor) {
  return function setterWithCursor(newVal) {
    state[cursor] = newVal;
  };
}

// This is the pseudocode for the useState helper
export function useState(initVal) {
  if (firstRun) {
    state.push(initVal);
    setters.push(createSetter(cursor));
    firstRun = false;
  }

  const setter = setters[cursor];
  const value = state[cursor];

  cursor++;
  return [value, setter];
}
```

#### react hooks 的优点

1. 复用性强
2. 代码量更少

### setState 啥时候是同步的

1. 事件绑定时，会执行 batchUpdate 函数，将 isBatchingUpdates 标识改为 true，一并执行
2. setTimeout/setInterval 不会执行 batchUpdate 函数，会直接执行

### react-redux,redux,redux-saga,redux-thunk

### react 的 fiber 的 domdiff

jsx 编译打包 createElement(type,config,children),children 可以有多个

fiber 表示一个工作单元

开始构建，构建完成 （父 子 父）

return（向父级返回） child（指向子元素） subling（指向同级下一个元素）

遍历顺序： [!https://static.zhufengpeixun.com/gou_jian_he_wan_cheng_fiber_shu_an_li_1_1636710450130.jpg]
**开始遍历一个 fiber 节点后**

1. 如果有儿子，处理儿子
2. 如果没有儿子，处理弟弟
3. 如果没有弟弟，父亲结束了，处理叔叔
4. 如果没有叔叔，找他爷爷

#### updateQueue 更新队列 fiber 更新环状链表

1. pedding 永远指向最新的更新，pedding 的 next 永远指向第一个更新

#### fiberRootNode （真是 dom 节点） hostRootFiber（根节点的 fiber）

#### 双缓冲

来回换，根据老 fiber 创建新的 fiber

更新

1. render 根据新的 老 fiber 和新的 vdom 创建新的 fiber，
2. commit 根据 diff 结果更新

createElement 创建 vdom，render 创建 fiber
fiber 的主要目的可以暂停，然后再恢复

在 render 根据 vdom 创建 fiber 节点，一个 vdom 创建一个 fiber

老 fiber 和新的 vdom 创建新的 fiber,是哪个老 fiber，如果是 current 的 fiber，怎么复用的最初的 fiber，就套了最初的壳？

tabnine

初次挂载有两个根 fiber（根 fiber 开始创建一个，在事件循环开始时又创建了一个，两个一样）

初次渲染 [!https://static.zhufengpeixun.com/cong_render_dao_zhi_xing_gong_zuo_xun_huan_de_fiber_jia_gou_3_1636810005933.jpg]

初次渲染，创建新的 fiber，创建其对应的真是 dom（），收集当前的 fiber 的副作用到父 fiber 上，渲染真是 dom（根据相关 flags，去进行 dom 的插入，删除等）

render 阶段可以中断，commit 不能中断

[!https://static.zhufengpeixun.com/cong_render_dao_zhi_xing_gong_zuo_xun_huan_de_fiber_jia_gou_4_1636817909854.jpg]

单个元素系列
[!https://static.zhufengpeixun.com/dan_jie_dian_diff_1636818669377.jpg]

#### 当新的 vdom 节点只有一个

根 fiber 的 upateQueue 放的是一个环状链表
原生组件的 updateQueue 放的是一个数组[propskey1，值 1，propskey2，值 2.....]

每次生成的副本 woringInProgess,**不会**把原来的 child 也复制过来

单节点有多哥儿子时元素首次渲染时，父节点渲染完成时，会把当前的 fiber 的大儿子里的 child 直接 append 进自己

1. key 相同，类型相同，属性不同
2. key 相同，类型不同
3. 节点类型相同，key 不同 （删老的，建新的）
4. 原来多个节点，现在只有一个

多个节点

1. 多个节点数量和 key 相同，type 不同
2. 多个节点类型和 key 相同，有新增元素
3. 多个节点类型和 key 相同，有删除老元素
4. 对个节点数量不同，key 不同 （核心）

核心图解
[!https://static.zhufengpeixun.com/duo_ge_jie_dian_shu_liang_bu_tong_key_bu_tong_1_1637057627706.jpg]

lane, exprieTime, 任务队列，优先级，打断

## react 16， 17， 18

### 16.3

0. react 内部氛围三个部分： virtual DOM，recocilication （stack，， fiber），rerender

1. 以后新增**suspense 和 time slicing** ，并且为三个 API 添加了不安全的标签(**componentWillMount，componentWillReceiveProps，componentWillUpdate**)，由于 reconciliation 的阶段会被打断，可能会导致 commit 前的这些生命周期函数多次执行。react 官方目前已经把 componentWillMount、componentWillReceiveProps 和 componetWillUpdate 标记为 unsafe，并使用新的生命周期函数 getDerivedStateFromProps 和 getSnapshotBeforeUpdate 进行替换。

- componentWillRecevieProps（可以用来控制 props 更新 state 的过程，返回一个新对象表示更新的 state，如不需要更新组件，返回 null） ，，，后由 getDevedStateFromProps 和 componentDidUpdate 替换
- componentWillMount react 的异步渲染机制，可能导致单个组件实例多次调用该方法，有可能导致一下问题：

  1. 进行重复的事件监听，无法正常取消重复的 Listener，更有可能导致内存泄漏
  2. 发出重复的异步网络请求，导致 IO 资源被浪费
  3. 在服务端渲染时，componentWillMount 会被调用，客户端也会调用，但是会因为会略异步获取的数据而浪费 IO 资源
  4. setSate 在 render 之前不会生效

- componentWillUpdate (保存一些更新前的信息，fiber 后信息可能不准确，中间暂停后再次开始中间可能会个很长时间，数据有可能不准确) 后由 getSnapShotsBeforeUpdate 和 componentDidUpdate 替换，getSnapShotsBeforeUpdate 他会在 react 对试图做出实际改动发生前调用，返回值将作为第三个参数传递给 compontDIdUpdate，避免了之前的 componentWilUpdate 和 componentDidUpdate 配合使用时将组件临时的状态数据存在组件实例上浪费内存，而 getSnapsShotBeforeUpdate 返回的数据在 componentDidUpdate 中使用完成后会被立即销毁，效率更高

2. fiber（利用双缓冲，通过 fork 尽量复用可用的老 fiber 树，**异步渲染机制**[60Hz，16.6s，人眼该视觉效果，使用 window.requestIdleCallback()在空闲时间见足够时，根据**优先级**调用执行相应就是代码]）
3. Fiber 其实指的就是这种数据结构，它可以用一个纯 JS 对象来表示：这个对象的属性中比较重要的有 stateNode、tag、return(父类)、child(子类)、sibling(兄弟节点) 和 alternate(fiber 树映射关系)。

### 17

1.  去除了三个生命周期(componentWillReceviewPros,componentWillMount,componnetWillUpdate)

### 18

1. 新增了 transtions(不着急队列)，利用 32 位的二进制，生成 16 到 transition 轨道，重复循环使用，根据二进制大小决定优先级，位数越小优先级越高

### V8 编译原理，了解 js 在 v8 中解析过程

[!https://mp.weixin.qq.com/s/RZ4BJpaLRYe8BlcXrZl-zA]

#### 解释器和编译器

1. **解释器：** 解释器的作用是将某种语言编写的源程序作为输入，将该源程序执行的结果作为输出。。。解释性语言边解释边执行，

2. **编译器**

#### v8 编译原理：基于计算机编译原理的知识，了解 v8 对于 js 的解析流程

1. v8 采用混合编译技术（解释器+ jit 技术(动态编译技术)）

源代码 --> 中间代码 --> 解释器----> 输出结果
| |
| |
| 编译 |
jit----> 机器码--->机器码
当执行过程中，编译优化是指 动态编译时遇到类似于类型已经转换，需要改变时，
将此段代码返回给解释器，让解释器进行解释执行

启动速度快：在 JavaScript 启动的时候采用解释执行的方式运行，利用了解释器启动速度快的特性

运行性能高：在 JavaScript 运行的过程中可以对代码进行监控，从而使用 JIT 技术对代码进行编译优化
**反馈向量** (feedback Vector) ，它包含了根据内联缓存（Inline Cache， IC）来存储的多种类型的插槽（）信息，例如 二进制操作结果的数据类型，函数的调用次数，optimized Code 信息

js 源代码 ---> 解析器 ---> 抽象语法书（AST） ---> 字节码发生器（bytecode generator）---> (注册优化器)register optimizer--->窥探优化器(peephole optimitor) ---> 。。。

**TurboFan 优化编译器**
会根据解释器存储的反馈向量，进行必要的**优化**和**去优化**
**去优化**是指机器码已经不能满足运行诉求，（例如：一个变量从 string 类型转变成 number 类型，机器码编译的是 string 类型，此时已经不能满足运行需求，因此 v8 会执行去优化操作，将代码回退到 Ignition 进行解释执行）

#### v8 的运行时表现：结合 v8 额编译原理，实践 v8 的解析六层中的具体运行表现
