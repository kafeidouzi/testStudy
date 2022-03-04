正则表达式：

```
var str = 'hello hello hello'
var reg = /(hello)/g
```

1. **test(),返回布尔值**

   var blo = reg.test(str)

2. **exec()，返回匹配到的字符串，数组**
   var arr = reg.exec(str)
3. **\*match(),返回匹配到的 jieguo**
   str.match(reg)
4. **\*search(),返回匹配到的起始位置**
   str.search(str)

### eg:

```
//除了某个字符串中某个字符之外的其他字符
let reg = /[^字符串]/
//至少xxxxx
"^(?=.*[A-Za-z])(?=.*d)[A-Za-zd]{8,}$"
```
