1. chrome 进程：主进程，渲染进程，网络进程，gpu 进程，插件进程

2. 渲染进程过程：

1)dom 树
token 流（类似于经标签进行深度遍历），然后对 token 流进行解析（开始标签，文本，结束标签分别进行处理），通过 token 栈进行（遇到开始节点入栈，遇到 text 不入栈，结束节点出栈，三者都会 push 进行父节点）
{
type，
tagName，
children，
attributes
} 2) 样式表 StyleSheet
3）布局树 通过对 dom 树处理生成布局树，删除不显示的元素和别的标签，剩下就是显示的 dom 树（过滤掉不显示的元素）
4）计算布局（计算各个元素的位置

5） 生成分层树
根据布局树生成图层树（z-index,绝对固定定位,滤镜

6）绘制线程： 根据分层树生成绘制步骤，并复合图层，绘图指令进行绘制
7）合成线程：分成图块，一块一块拼成一张大图（类似于家里贴瓷砖），拆分后，多个 gpu 进程并行生成，最后合成

栅格化即像素化，矢量图变成位图，最终位图保存在 gpu 内存，最终图块渲染完成后，会发送一个 draw 指令给主进程，合成显示

优先绘制可视内容（有元素的图块）

CSS 加载不会影响 DOM 解析
CSS 加载不会阻塞 JS 加载，但是会阻塞 JS 执行
JS 会依赖 CSS 加载，JS 会阻塞 DOM 解析

lighthouse webpagetest

fp 第一个像素点时间
fcp 第一个内容、图片等（不包括 canvas，ifriame，白色背景）
lcp 最大内容绘制
dcl dom'加载完成
l 全部加载完成

morgan 打印日志的包

developer.mozilla.org

performance 面板
概览区：fps，cpu，网络等

避免布局抖动 fastdom 库

prpl

避免不可见文本闪动 font-display:swap;

TTI:可交互时间，（浏览器干完需要的活，可以响应用户输入的时间）

TBT：总计阻塞时间

FID:fist input delay 输入延迟

CLS：最大偏移量

srcset 响应式图片

滚动事件 passive 被动，减少主进程
图片无高度 cls 偏移量

intersectionObserver 懒加载

避免 dom 过大
js
避免布局偏移，（absolute，fixed
避免长任务运行，会导致输入延迟
关键帧动画
图片压缩
预加载关键请求 preload
http/2 会啊压缩头部
第三方代码减少使用，门面替换，用时假的换成真的

meta name="viewport" 移动端视口

prefetch 在浏览器在空闲时间加载，不着急的资源
preload 是首屏关键资源，需要尽快加载，浏览器会将优先级提高

安静窗口：并发请求不超 2 个，没有长任务，持续时间 5 秒

按需加载，高浏览器不加载 pollyfill
polyfily.io 该网站有介绍

onload 不可靠，单页面不可靠？？？
load 只关心 js 文件，单 js 加载完
单页面打完包 bundle。js 加载完成后，他可能会外联一些图片，css 等，此时并未完成。 建议使用 pagehid 或者。。来判断

web.dev 需要看该网站

js 合并请求，淘宝可以看

tp90 top percentile 90 90%
tp90 == 3ms

rollup 钩子：
编译钩子：
watchChange -> options ->buildStart-> resolvedId -> tarnsform | -> moudleParsed-> resolvedDynamicImport
->shouldTransformCachedMoudle
->buildend
  
vite 在开发阶段用的 esbuild，生成打包阶段用的 rollup

输出钩子：outputOptions-》 renderStart->banner->footer->intro->outro->renderDynamicimport-》argumentsChunkHash
