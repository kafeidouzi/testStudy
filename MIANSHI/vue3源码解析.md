### vue3.0的优化
1. v3源码优化主要体现在monorepo和typescript管理和开发源码，提高代码可维护性

#### 优点一： 2.x版本对于代码的管理是基于src下的各个目录进行大的模块划分，而v3使用monorepo进行代码管理，将各个模块拆分到不同的package中，每个package中有各自的API、类型定义和测试。 （这样使得模块拆分更加细化，职责划分更加明确，模块之间的依赖也更加明确，开发人员更易阅读，理解及更改所有模块源码，提高代码可维护性）

#### 优点二：v3中的reactivity（响应式库）是可以独立于vue。js的，如果只用到响应式库，就不用引用vue.js整个包。v2这点做不到

#### 优三： 使用typescript
1. Flow v2使用的是flow，flow是facebook出品的javascript静态类型检查工具，它以非常小的成本对已有js代码迁入，非常灵活，这也是v2使用它的原因之一。。。
但flow对于复杂场景类型的检查，支持的并不好（v2源码的注释中有对其的吐槽）在组件更新props的地方并没有推出props的类型，开发人员必须强制设置$options
.props的类型为any，这并不合理

#### 优四：性能优化（1.体积，，，2.数据劫持优化，，，3.编译优化，4语法优化）
1. 移除一些冷门的feature    ，引入tree-shaking技术 
 ##### tree-shaking技术，依赖于ES2015模块语法的静态结构（即import和export），通过编译阶段的静态分析，找到没有引入的模块打上标记。从而在webpack打包时只将用到的方法或模块打包。减小包的体积，网络传输速度就快。

2. 数据响应式，实现DOM的功能，就需要劫持数据的访问和更新。简单说就是当数据改变后，劫持数据去自动执行一些代码，更新DOM。
    + vue怎么知道更新的是那些dom？  在渲染dom时访问了数据，我们可以对他进行劫持，这样内部就建立了依赖关系。也就知道了数据对应的DOM是啥了。
    + v1，v2都使用了object.defineProperty去劫持数据，但此API有一定的缺陷，不能知道对象的属性key是什么，这样它并不能检测对象属性的添加，删除就不能更好的检测，尽管使用$set,$delete方法来弥补，但是对于开发有一定负担。
    + 当数据结构过于复杂（如一个好几层的对象），Object.defineproperty就不知道具体要劫持检测那层数据，就会把所有层级的数据都递归劫持下来。这样就巨耗性能。
    + v3使用proxy，它劫持的是整个对象，所以他能检测到对象属性添加和删除的变化，但是并不能监听到内部深层次的对象变化。因此***v3的处理方式是在getter中去递归响应式。这样一来，只有在真正访问到内部深层次对象时才会变成响应式，而不是一味的无脑递归全部变为响应式，无疑大大提高了性能**

3. 编译优化，
    + 编译流程： new Vue --> init --> $mount --> complie --> render -->vnode --> patch --> Dom
    其中init就是响应式阶段，而template copmplie funtion可以再webpack打包时，利用loder在编译时完成。而非一定在运行时完成，，， 耗时的无非是patch阶段

    + 对patch进行优化：通过在编译杰顿优化编译，从而优化patch
    v2中触发重新渲染的粒度是组件级的，虽然组件可以非常小，但是组件内部还是要编译该组件的整个vnode树，如下代码
    ```
    <div>
    <div></div>
    <div></div>
    <div>jjjjjjjj</div>
    <div></div>
    </div>
    ```
    代码中只有第三个div中有内容，此时其他的div的diff和遍历就是无用的，浪费的。这就导致vnode节点数量和diff性能正相关，跟动态节点的数量无关，当一些组件只有小部分的动态节点时，就造成了性能的大部分浪费。***理想状态是，只需要diff第三个div标签即可，，，而v3做到了，他在编一阶段对静态模板的分析，编译生成了Block tree** ， 
    Block tree 是 一个将模板 ***基于动态节点**指令切割的嵌套区块，每个区块内部的节点结构是固定的，每个区块只需要以一个Array来追踪自身包含的动态节点。借助Block tree， 
    ***vue。js将vnode更新性能从 与整体大小相关提升为与动态内容相关**
#### v3还对slot的编译优化，事件侦听函数的缓存优化，并且在运行时重写了diff算法
4. V2,V1使用options API （分类盛放，较为分散），V3则是 composition API（分堆盛放，逻辑较为聚合）
    + options API是按照methods， computed， data ，props这些不同的选项分类。。 ***优缺**当组件小时，这种方式一目了然，但在大型组件中，一个组件可能有多个逻辑关注点，当使用options API 的时候，每个关注点都有自己的options，，，如果修改一个逻辑关注点，就需要 
    ***在单个文件中不断上下来回切换和寻找**
    + composition API 则是将某个逻辑关注点的相关代码全都放在一个函数里，这样当需要改一个功能时，就不需要跳来跳去。
    + 优化逻辑复用 ，即 功能代码复用， V2使用mixin（当一个文件有多个mixin时，而每个mixin可以自定义props，data，他们之间是无感的。可能存在命名冲突及数据来源不清悉的问题） V3采用类似于hook函数，除了在逻辑复用方面有优势，也有更好的类型支持。他们都是函数，在调用函数时，自然所有的类型都被推导出来了，不像options API 所有的东西使用this，另外composition API 对tree shaking友好，代码更容易压缩。他只是vue3.0的增强，v3还是支持options API的。
5. v2.6 引入RFC(request for comments)，旨在为新功能进入框架提供一个一致且受控的路径 ，v3大规模使用RFC，可以让开发者了解每个feature采用或背废弃掉的前因后果。
6. vue的各个过渡期：通常专业版本的升级会伴随着许多突变，这意味着从v2到v3项目升级会修改代码以及升级所依赖的周边生态（慎重）。v3使用es2015开发，有些API如proxy是没有polyfill的，这意味着官方需要单独出一个ie11 compat（兼容）版本来支持ie11

### vue.js核心组件的实现
#### 组件的实现 = 模板 + 对象描述 + 数据
+ ***组件**系统是对vue.js的一个重要概念，它是一种对DOM结构的抽象，使用小型，独立和可复用的组件构建大型应用。
+ ***组件化**是vue核心思想之一，它允许我们用模板加对象描述的方式去创建一个组件，再加上我们给组件注入不同的数据，就可以完整的渲染出组件。

#### vnode 到这是dom是如何转变的，内部是如何工作的？？？
+ 一个组件要选染成真实dom主要经历：创建vnode --> 渲染vnode --> 生成DOM
+ 应用程序初始化，v2使用new Vue    ，v3则是从vue中解构出createApp（对外暴露的入口函数），其内部结构如下代码
```
const createApp = ((...args)=>{
    //创建app对象
    const app = ensureRenderer().createAPP(...args)
    const { mount } = app
    //重写mount方法
    app.mount = (containerOrSelector)=>{//....}
    return app
})
```
而**ensureRenderer方法**是用来延时创建渲染器，当用户只依赖响应式包时，可以通过tree shaking 移除核心渲染逻辑相关代码，方法内部是通过createRenderer方法，返回一个createApp（它是createAppAPI（render）执行的结果），这个过程利用闭包和函数颗粒化直接将参数保留。createAppAPI内部函数接受两个参数rootComponent，rootProps
***如，在执行app.mount的时候，不需要传入渲染器render，因为在执行createAPPAPI时渲染器render参数已经被保留下来了。**
+ 为啥重写app.mount方法??????
    1. 因为vue.js不仅仅是为web平台服务，他的目标是**支持跨平台渲染。**
    而createApp函数内部的app。mount方法是一个标准的可跨平台的组件渲染流程：
```原来
mount(rootContainer) {
    //创建根组件的vnode
    const vnode = createVNode（rootCopmponent，rootProps）
    //利用渲染器渲染vnode
    render（vnode，rootContainer）
    app._container = rootContainer
    return vnode.component.proxy
}
```
**但是别的平台并不一定是dom**
```
app.mount = (containerOrSelector)=>{
    //创建容器
    const container = normallizeContainer（containerOrSelector）｛｝
    // 去判断 组件对象没有定义render函数和template模板，则取容器innerHTML作为组件模板内容。在挂在前清空内容，然后真正挂载
}
```
**重写目的** 既能让用户使用API时可以更加灵活，也兼容了vue2的写法
eg: app.mount的第一个参数就支持字符串和DOM对象两种类型

**创建vnode和渲染vnode**
vnode本质是js对象，在vue中描述不同类型的节点。eg：普通元素（type，props，children），组件节点等。将vnode类型进行分类编码，方便后续对不同vnode进行处理，执行相应逻辑。
**vnode优势**
1. **抽象**  引入vnode，可以把渲染过程抽象化，从而使得组件的抽象能力也得到提升。
2. **跨平台** 因为patch vnode 的过程不同平台会有不同的实现，基于vnode再做服务端渲染，weex平台，小程序平台的渲染
**注意性能并不是vnode的优势，vnode最终还是免不了要进行操作，在组件过大时，还是会感到卡顿**
**createVNode函数方法都做了那些**  对props做标准化处理，对vnode类型进行分类编码，创建vnode对象，标准化子节点，把不同类型的子节点转换成数组或者文本类型

**render函数的实现**
``` 
render (vnode,rootContainer) {
    const render = (vnode,container)=>{
        //如果vnode为空
        if(vnode == null)  {
            //销毁组件
            if(container._vnode) {
                unmount(container._vnode,null,null,true)
            }
        } else {
            //创建或更新组件
            patch（container._vnode || null,vnode,container）
        }
        container._vnode = vnode
    }
}
```
**patch函数实现** patch本意为打补丁的意思，他有两个功能，1是第一次挂载dom，2是新老vnode更新dom

**dom创建过程**  processElement（好几个参数）
  1. 参数n1   表示旧的vnode，当n1位null时，表示第一次挂载的过程
  2. 参数n2   表示新的vnode，后续会根据这个vnode类型执行不同的处理逻辑
  3. 参数container 表示dom容器， 在vnode渲染生成dom后，会挂载到container下面


**dom创建的过程分为两种** 1. 对组件的处理   2. 对元素的处理

####  **对组件的处理, processComponent的实现**
```
processComponent = （n1,n2,container,//....）=> {
    if(n1 == null) {
        //如果n1位null，挂载组件逻辑
        mountComponent（n2，container，//....）
    } else {
        //更新组件逻辑
        updateComponent（n1,n2,container,//....）
        //其内部实现大概为： shouldUpdateComponent函数（主要通过判断props，children等），判断是否需要更新，如果为true，会先执行invalidateJob（）函数来阻止子组件因自身数据变化更新。
    }
}
``` 

**mountComponent函数实现**
```
const mountComponent = (initialVNode,container,anchor,parentComponent,parentSuspense,isSVG,optimized) => {
    // 创建组件实例(内部通过对象创建当前渲染的组件实例)
    const instance =(initialVNode.component= createComponentInstance (initialVNode,parentComponent,parentSuspense))
    //设置组件实例（instance包含了很多组件的相关数据，维护上下文包括对props、插槽，以及其他实例的属性的初始化处理）
    setupComponent(instance)
    //设置并运行带副作用的渲染函数
    setupRenderEffect(instance,initialVNode,container,anchor,parentSuspense,isSVG,optimized)
}
```
**setupRenderEffect函数的实现**
```
setupRenderEffect(instance,initialVNode,container,anchor,parentSuspense,isSVG,optimized) =>{
    //创建响应式的副作用渲染函数
    //简单说数据更新一次，以下函数执行一次，从而达到组件更新的目的
    instance.update = effect(function componentEffect(){
        if(!instance.isMounted) {
            //渲染组件生成子树vnode
            const subTree = （instance.subTree = renderComponentRoot(instance)）
            // 把子树vnode挂载到container中
            //......
            渲染函数内部也会判断是组件渲染还是更新
        }
    })
}
```
**初始渲染主要做两件事**  1.渲染组建生成subTree，把subTree挂载到container中

**subTree和initVNode分辨**
1. 在v3已经分开命名如上了，在v2中他们分别命名为_vnode,$vnode
2. 如下代码，
**hello组件在app组件中渲染的是hello组件的initVNode（组件vnode），而hello组件内部的所有组件就是hello组件的subTree（子树vnode）**
subTree是hello内部整个DOM节点对应的vnode执行renderComponentRoot渲染对应的subTree
```
//app组件
<template>
    <p>ddd</p>
    <hello></hello>
</template>
//hello组件
<template>
    <p>华盛顿是否</p>
</template>
```

####  **对元素的处理, processElement的实现**
```
processElement的实现 = （n1,n2,container,//....）=> {
    if(n1 == null) {
        //如果n1位null，挂载元素逻辑
        mountElement（n2，container，//....）
    } else {
        //更新元素逻辑
        patchElement（n1,n2,container,//....）
    }
}
``` 
**mountElement函数实现**
```
const mountElement = (initialVNode,container,anchor,parentComponent,parentSuspense,isSVG,optimized) => {
   //创建DOM元素节点
    hostCreateElement()  //该方法内部调用createElement（）方法，只是避免开发操作dom，底层还是要操作dom
   //处理props，比如class，style，event等属性
    hostPatchProp（）
   //处理children （是文本还是数组）
    hostSetElementText（） //web下通过设置dom元素的textContent属性设置文本对应函数为 
    function setElementText（el,text） {
        el.textContent = text
    }
    mountChildren（）
   //挂载DOM元素到container下
   hostInsert（）
}
```
+ 如果是其他平台而不是web，如weex，hostCreateElement（）就不是操作dom，而是调用平台相关API了。
+ 创建完dom后，接下来要做的就是判断有props的话，给这个dom节点添加相关class，style，event等属性，使用hostPatchProp进行处理

+ 处理children，如果是文本（查看以上代码），如果是数组调用mountChildren(),
遍历children获取到每个child，递归执行patch方法挂载每个child
**注意这里有对child的预处理情况**
+ 处理完子节点后，使用hostInsert方法，在web情况下
```
function insert (child,parent,anchor) {
    //如果有参照节点就执行插入，否则就放最后
    if(anchor) {
        parent.insertBefore(child)
    } else {
        parent.appendChild(child)
    }
}
```
**因为insert的执行是在子节点后，所以挂在顺序是先子节点，后父节点，最终挂载到container上**
#### 注意：
1. 在递归child时执行的是patch方法，而不是mountElement方法，这是因为可能存在嵌套的组件场景。


## 完整diff流程：：：

### 组件是由模板，组件描述对象和数据构成的，数据变化会影响组建的变化。。。组件的渲染过程中创建了一个带副作用的渲染函数（setupRenderEffect），，当数据变化时就会执行这个渲染函数来触发组件的更新。

### 总结：在（updateComponentPreRender）中，首先要更新组件的vnode信息（包括新旧节点vnode指针，props，slots，），在更新dom时，会通过shouldUpdateComponent函数，判断是否需要更新，如果为true，会先执行invalidateJob（）函数来阻止子组件因自身数据变化更新。  
**注意：一个组建的重新渲染会有两种情况，（1）组件本身数据变化，这种情况next为null，（2）父组件在更新时，发现子组件需要更新，这时next为新的子组件vnode**

setupRenderEffect：主要做三件事，，1。更新组建节点vnode2.更新子树vnode3.patch新旧vnode

副作用更新组建的流程：副作用渲染函数（setupRenderEffect），中通过effect实现，effect中主要通过updateComponentPreRender实现，有更新就只想它，没有就next= 老的vnode。。。。

父组件重新渲染时 -->通过renderComponentRoot渲染字数vnode，


processComponent处理组件vnode，本质上就是去判断**子组件是否需要更新**
如果需要就执行子组件的副作用渲染函数，如果仅仅更新一些属性，则保留子组件实例保留对vnode的引用。用于子组件自身数据变化时引起的组件渲染的时候，能够在渲染函数内部拿到vnode


    processComponent                            processElment

更新  ： props，slot，                          props，children



### diff核心算法（新旧节点都是vnode数组）
1. 新旧子节点拥有相同头尾节点，，
    + 同步头部节点（patchKeyedChildren），在此过程中维护几个变量（头部索引i，旧节点尾部索引e1，新子节点尾部e2），当i小于e1并且小于e2时，如果新旧节点相同执行patch，如果不同或i大于e1并且大于e2时，则同步过程结束
    + 同步尾部节点（patchKeyedChildren），在此过程中维护几个变量（尾部索引i，旧节点尾部索引e1，新子节点尾部e2），当i小于e1并且小于e2时，如果新旧节点相同执行patch，如果不同或i大于e1并且大于e2时，则同步过程结束
    
