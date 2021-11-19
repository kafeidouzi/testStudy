### react原理
[!https://zhuanlan.zhihu.com/p/101507773]

### redux 原理：
1. 在index钟会先进行判断非生产环境redux是否被压缩了，如果压缩了会给一个warning

2. 其后会暴露   createStore，combineReducers，bindActionCreators,applyMiddleWare,compose  这几个常用api以共使用。


3. createStore 函数接受三个参数：
      reducer：是个函数，接受两个参数，state和action，根据action去执行不同的操作
      preloadedState:初始状态可以随意指定,不传该参数时默认为undefind，如果用conbineReducers来 
            生成reducer，必须保持对象中的key和conbineReducers中的key一致。
      ```
      const store = createStore(reducer1,{open:55555},composeEnhancers(
        applyMiddleware(thunk)
        ));
        reducer1 = （state={count:0},action）=>{
        }
      ```
      enhancer：是store的增强函数，需要用applymiddleware来生成
4. subscribe函数，会给store中的state添加一个订阅监听，一旦调用dispatch来分发action，所有监听函数就会执行。而nextListeners就是储存当前监听函数列表的，当调用subscribe时，传入一个函数作为参数时，就会把这个函数push进nextListeners列表。同时也会返回一个unsubscribe函数，用来解绑当前传入的函数，同时在subscribe函数中定义isSubscribed用来标识当前的订阅是否已经被解绑，解绑的意思是从nextLineners中移除

5. compose.js
可以接受一组函数，从右往左组合多个函数，然后返回一个函数。
#### 这样做可以避免代码向右偏移
```
compose(funcA,funcB,funcC)
相当于
compose(funcA(funcB(funcC())))
```
6. applyMiddleWare
  applyMiddleWare利用createStore和reducer创建了一个store，store的getState和dispatch方法又被分别的赋值给middleWareAPI变量
7. combineReducers
  将多个reducer合并成一个总的reducer，用合成的reducer去调用createStore方法
  每个reducer都会作为value并且有一一对应的key，
  合成的总的reducer会将所有reducer的state合成一个，每个reducer返回的state也都会与每个key一一对应
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

### 手撸redux
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
 #### 使用hook的动力
 1. 组件的复用要使用props和高阶组件，较为麻烦
 2. providers，consumers，高阶组件，render props抽象的组件会形成“地狱嵌套”
 3. 为的共享状态逻辑提供更好的原生途径
 #### hook是什么
  1. hook是一个特殊的函数，他可以让你“钩入”react特性
 #### hook的使用规则
  1. 只能在最外层调用hook。。不要再循环，条件判断或者子函数中调用
  2. 只能在函数组件中调用hook （或者自定义的hook中）
 #### useState
 1. 基本语法 ：
 ```
 const [count ,setCount] = useState(0)    //这里的state可以是数组或对象
 ```
 2. 与class中不同，在函数组件中不需要使用this，直接可以拿到count，setCount。
 3. 与this.setState不同，this.setState更新state变量总完全替换它，而setCount是合并它
 4. 当有多个useState时，react怎么知道是对应哪个组件？？？
  + +   每个组件内部都会有一个记忆单元格列表，他们其实就是用来存储数据的js对象，当你用useSatate调用一个hook时，他会读取当前单元格（或首次渲染时将其初始化），然后吧指针移动到下一个
 #### useEffect
  1. effect 分为两种，一种是不需要清除的effect，另一种是需要清除的effect（返回一个函数，会在组件卸载时执行，这是hook的内部机制）
  2. 相比于class组件，class组件实现更新需要将相同的逻辑在componentDidMount和componentDidUpdate中同时写相同的逻辑，
    而effect只需要一个，它会在首次渲染和每次更新都会执行，且每次都是一个新的effect，避免了componentDidUpdate使用不当产生的bug，
  3. class与effect还有一点，即是effect可以将有关联的逻辑卸载一个effect中，可以写多个effect，将不同逻辑进行分离
  4. 有些时候effect每次更新可能会影响性能，可以设置effect的第二个参数，它是一个数组。不管数组内的参数是一个或者多个，只要有一个变化它都会执行。当数组为空时，effect只执行一次（意为它不依赖任何props或state的变化）
  5. 与componentDidMount和componentDidUpdate不同，useEffect的函数会在浏览器完成布局与绘制之后，延迟调用。
  6. 并非所有的effect都会被延迟调用，当在用户可见的界面更新dom时，就要同步，这样才不会给用户视觉上的不一致。react提供了一个额外的hook，
  useLayoutEffect，它与useEffect结构一样，只是调用时机不一样
#### useLayoutEffect 和 useEffect 区别
  1. useEffect相对于class的componentDidMount和componentDidUpdate（他俩会在render结束后立即执行，是同步的）不同，它算是异步的一个行为；大部分场景下都比class的方式性能好
  2. useLayoutEffect：当useEffect里面的操作需要处理dom时，并且会改变页面样式。此时useEffect就可能出现闪屏。而useLayoutEffect里面的callback函数会在dom更新后立即执行，但是会在浏览器进行任何绘制之前完成，阻塞浏览器绘制
### react hooks   （他只是一个数组，数组之间有对应的应得映射关系，响应的state数组对应其响应的set数组）
#### react hooks 使用原则：
  1. 不要在循环，条件判断，函数嵌套中使用hooks （可能造成对应关系紊乱）
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
#### react hooks的优点
  1. 复用性强
  2. 代码量更少


### setState啥时候是同步的
  1. 事件绑定时，会执行batchUpdate函数，将isBatchingUpdates标识改为true，一并执行
  2. setTimeout/setInterval不会执行batchUpdate函数，会直接执行

### react-redux,redux,redux-saga,redux-thunk

### react 的fiber的domdiff

jsx编译打包 createElement(type,config,children),children可以有多个

fiber表示一个工作单元 

开始构建，构建完成  （父 子 父）

return（向父级返回）  child（指向子元素）  subling（指向同级下一个元素）

遍历顺序： [!https://static.zhufengpeixun.com/gou_jian_he_wan_cheng_fiber_shu_an_li_1_1636710450130.jpg] 
  **开始遍历一个fiber节点后**
1. 如果有儿子，处理儿子
2. 如果没有儿子，处理弟弟
4. 如果没有弟弟，父亲结束了，处理叔叔
5. 如果没有叔叔，找他爷爷

####  updateQueue更新队列  fiber更新环状链表  
  1. pedding永远指向最新的更新，pedding的next永远指向第一个更新

#### fiberRootNode （真是dom节点）   hostRootFiber（根节点的fiber） 

#### 双缓冲
来回换，根据老fiber创建新的fiber

更新  
1. render  根据新的 老fiber和新的vdom创建新的fiber，
2. commit   根据diff结果更新

createElement创建vdom，render创建fiber
fiber的主要目的可以暂停，然后再恢复

在render根据vdom创建fiber节点，一个vdom创建一个fiber


老fiber和新的vdom创建新的fiber,是哪个老fiber，如果是current的fiber，怎么复用的最初的fiber，就套了最初的壳？

tabnine   


初次挂载有两个根fiber（根fiber开始创建一个，在事件循环开始时又创建了一个，两个一样）

初次渲染 [!https://static.zhufengpeixun.com/cong_render_dao_zhi_xing_gong_zuo_xun_huan_de_fiber_jia_gou_3_1636810005933.jpg]


初次渲染，创建新的fiber，创建其对应的真是dom（），收集当前的fiber的副作用到父fiber上，渲染真是dom（根据相关flags，去进行dom的插入，删除等）

render阶段可以中断，commit不能中断





[!https://static.zhufengpeixun.com/cong_render_dao_zhi_xing_gong_zuo_xun_huan_de_fiber_jia_gou_4_1636817909854.jpg]

单个元素系列
[!https://static.zhufengpeixun.com/dan_jie_dian_diff_1636818669377.jpg]

####  当新的vdom节点只有一个


根fiber的upateQueue  放的是一个环状链表
原生组件的updateQueue  放的是一个数组[propskey1，值1，propskey2，值2.....]


每次生成的副本woringInProgess,**不会**把原来的child也复制过来

单节点有多哥儿子时元素首次渲染时，父节点渲染完成时，会把当前的fiber的大儿子里的child直接append进自己


1. key相同，类型相同，属性不同
2. key相同，类型不同
3. 节点类型相同，key不同  （删老的，建新的）
4. 原来多个节点，现在只有一个



多个节点 
1. 多个节点数量和key相同，type不同
2. 多个节点类型和key相同，有新增元素
3. 多个节点类型和key相同，有删除老元素
4. 对个节点数量不同，key不同 （核心）

核心图解
[!https://static.zhufengpeixun.com/duo_ge_jie_dian_shu_liang_bu_tong_key_bu_tong_1_1637057627706.jpg]



lane, exprieTime, 任务队列，优先级，打断