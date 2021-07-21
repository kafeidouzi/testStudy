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