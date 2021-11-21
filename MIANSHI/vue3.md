### vue3.0: 新特性
+ 性能提升2倍，相较于2.0
+ tree sharking   （都从vue中解耦出来使用，利于代码摇树）


### composition  = @vue/reactivity + 生命周期
+ @vue/reactivity 是相对独立的


### reactive 和 ref的区别
+ reactive是讲一个对象变成响应式
```
const state = reactive({
    a:2,
    d:'hhhh'
})
```

+ ref 试讲简单变量，如数字，字符串等变为响应式
```
const str = ref('ddd')
```

### v3中的SFC(Single File Component) ,单文件组件
```
<div class="text">狗日的</div>

data() {
    color:'red'
}

.text {
    color: v-bind(color);
}
```


### Monorepo管理项目
1. 一个仓库可以管理多个模块，

2. 使用pnpm   workspace 来构建 monorepo

shamefully-hoist -true  会把包打平

pnpm i typescript rollup rollup-plugin-typescript2 @rollup/plugin-json @rollup/plugin-node-resolve @rollup/plugin-commonjs minimist execa@4 -D -w


把shard 安装进入 reactivity
pnpm install @vue/shared@workspace --filter @vue/reactivity

### reactivity 和  vue2 区别，优势
v2 : 通过    需要对属性进行劫持，重写属性添加geter和setter
需要对数组单独处理，不通过     进行劫持 
增加杉树属性将听不到，$set,$delete

optionsAPI  反复横跳    ，通过this访问，this指向问题
所有api都放在vue对象中

mixins

v3： 可以明确知道有没有被用到，对tree-shaking，代码更容易压缩
 更容易提取公共组件


 性能，options

 weakMap  弱引用，key必须是对象，如果可以没有被引用可以被自动销毁


相同对象代理时，通过weakMap进行target，proxy进行映射，如果有缓存，是用上次的缓存


两种情况： 一个对象两次代理 （通过weakMap进行映射处理），一个被代理过的对象再次代理（通过标识，没被代理过，取值为undefind，如果被代理过，会进入修改过的get方法）