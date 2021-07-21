var http=require('http'); //用来启服务
var fs=require('fs'); //用来读取文件
var root="C:/Users/一撕得/Desktop/idd.html" //你本地放index.html页面的文件路径

//开启服务
var server=http.createServer(function(req,res){
    var url=req.url;
    var file = root;
    fs.readFile('./h5/index.html',function(err,data){
        if(err){
            res.writeHeader(404,{
                'content-type' : 'text/html;charset="utf-8"'
            });
            res.write('<h1>404错误</h1><p>你要找的页面不存在</p>');
            res.end();
        }else{
            res.writeHeader(200,{
                'content-type' : 'text/html;charset="utf-8"'
            });
            res.write(data);//将index.html显示在客户端
            res.end(String.raw`注册成功\\n`);

        }
    })
}).listen(8888); //端口号
console.log('服务器开启成功');


/*
 * @Descripttion    : 简单模拟XSS攻击
 * @Author          : RyzeYang
 */ 

/**
  * npm install express
  * npm install body-parser
 */

// const express=require('express')
// const bodyParser = require('body-parser')   
// const app=express();
// const port=8888

// // 对post方式 Content-Type: application/x-www-form-urlencoded  进行解析 以拿到 body的信息

// app.use(bodyParser.urlencoded({ extended: false }))   
// app.use(bodyParser.json())     

// /**
//  * @description: 返回 注册的 用户名
//  * @param {type} 
//  * @return: 
//  */
 
// app.post('/idd',function(req,resp){
//     const {username,password,safe} =req.body;
//     console.log(username,password,safe);

//     //设置response编码为utf-8
//     resp.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});

//     console.log(`注册成功,欢迎 ${username}\n`);

//     // safe 有值时过滤 username
//     resp.end(String.raw`注册成功\\n,欢迎 ${safe?SaferHTML(username):username}`) 
// })

// /**
//  * @description: 过滤 HTML 字符串
//  * @param {type} 
//  * @return: 
//  */
// function SaferHTML(templateData) {
//   let s = '';
//   for (let arg of templateData) {
//     s += arg.replace(/&/g, "&amp;")
//             .replace(/</g, "&lt;")
//             .replace(/>/g, "&gt;");
//     }
//   return s;
// }

// app.listen(port, () => console.log(`Server listening on port ${port}!`))