(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["commonModules-search-searchList"],{"0082":function(t,e,a){"use strict";var i=a("f039"),o=a.n(i);o.a},"087c":function(t,e,a){"use strict";var i;a.d(e,"b",(function(){return o})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){return i}));var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{class:t.className,style:{height:t.stausBarHeight+44+"px"}},[a("v-uni-view",{staticClass:"custom-header-container",style:{"--themecolor":t.themes.color,"--zindex":t.inzIndex}},[a("v-uni-view",{staticClass:"custom-header-status-bar",class:{theme:t.theme},style:{height:t.stausBarHeight+"px",background:t.background}}),a("v-uni-view",{staticClass:"custom-header-sec flex-start w-100",class:{theme:t.theme},style:t.headerStyle},[a("v-uni-view",{on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.goback.apply(void 0,arguments)}}},[t.showBack?a("ls-forward",{class:"first-icon flex-center",attrs:{options:{cl:t.theme||t.isColor?"#ffffff":"#444"}}}):t._e()],1),t.title?a("v-uni-view",{staticClass:"custom-header-title line-clamp1 pr-2",style:t.titleStyle},[t._v(t._s(t.title))]):t._e(),t._t("default")],2)],1)],1)},r=[]},"11a1":function(t,e,a){"use strict";var i=a("4ea4");a("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=i(a("5530")),r=i(a("300f")),n=i(a("4d83")),s=a("2d54"),c=a("2f62"),l={components:{"ls-forward":n.default,"ls-headSelect":r.default},props:{className:String,scrollTop:{type:Number},title:String,headerStyle:String,titleStyle:String,showBack:{type:Boolean,default:!0},showHeadSelect:{type:Boolean,default:!1},theme:{type:Boolean,default:!1},zIndex:{type:[Number,String],default:99},isColor:{type:Boolean,default:!1},background:String},data:function(){return{inzIndex:this.zIndex,on:!1}},computed:(0,o.default)({},(0,c.mapState)(["themes","stausBarHeight","wxMenuBut"])),watch:{},created:function(){},mounted:function(){},methods:{goback:function(){s.pages.getPageRoute(1)?uni.navigateBack():uni.switchTab({url:"/pages/index/index"})},clickHeadSelect:function(t){this.$emit("clickHeadBox",t)},changeHeadSelect:function(t){this.inzIndex=t?9999:this.zIndex}}};e.default=l},1203:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAMAAADW3miqAAAAV1BMVEUAAADMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzJZiN8AAAAHHRSTlMAZvjcCgYU188W8+3JxaWbNzCoWXdEIXhFIqlal8sWUAAAAPdJREFUOMuNlO1yhCAMRRO+UVR0XXXb+/7P2bHd7tAWac5P5swEQm6oZOMx9Er1YeSN6twGFAy3inL3QPfGOVobMy8d4O+/FDMBmk1xwBqYTOm4BLVa+oFdFZIrHA890x9mDf+yTEKIVCEGpO+KE3SkKk5jer4LaqYLZoWvN3rsdMkO/9lDaHstWY2zqwOYGjAGog2daUmmw4MYCzVZwDSe1dr1RgrIbSkjUA/Xlhx6UrBtyUKJJFE50cVFLZA18yH4FskHS0eFPNZraYWXjO/xCoJrBEESKXk4T2KC2msxj8KFUXJ4oFs4O2vdc/Uc/y+xdyoQrMMPussTg5D7grgAAAAASUVORK5CYII="},"1b68":function(t,e,a){"use strict";var i=a("4ea4");a("4de4"),a("c975"),a("498a"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=i(a("5530")),r=i(a("e5d6")),n=a("2f62"),s=i(a("c284")),c=i(a("873f")),l=i(a("5462")),d=i(a("d3ce")),p=i(a("956d")),f=i(a("d7f7")),h=a("e198"),u=i(a("d647")),m=a("df84"),g=(i(a("dd36")),i(a("a1e5"))),v=new l.default(m.prodlist),x={components:{ProList:d.default,SearchCon:p.default,Noempty:c.default,"ls-header":r.default,"ls-fork":f.default,"more-list":s.default},data:function(){return{staticServer:this.$staticServer,goodsType:!0,searchArr:[],total:"",searchText:"",page:1,active:"recDate",salesSort:"asc",priceSort:"asc",params:{keyword:"",orders:"recDate"},list:[],paging:{status:"loading",error:!1,emptylist:!1}}},mixins:[g.default],computed:(0,o.default)({},(0,n.mapState)(["themes","stausBarHeight","sceneType"])),onLoad:function(t){t&&(this.$data["option"]=t),t.searchText&&(this.params.keyword=t.searchText,this.searchText=t.searchText),t.categoryId&&(this.params.categoryId=t.categoryId),t.shopCategoryId&&(this.params.shopCategoryId=t.shopCategoryId),t.brandId&&(this.params.brandId=t.brandId),this.initData()},mounted:function(){},onReachBottom:function(){v.loadListByPageMore()},methods:{changeType:function(){this.goodsType=!this.goodsType},enterSearch:function(t){var e=u.default.trim(this.searchText,2);this.params.keyword=e,this.params.categoryId="",this.params.brandId="",h.searchHistory.addSearchHistory(e),this.initData()},enterGoods:function(t){this.goDetailOrCustomFunc(t)},defaultList:function(){this.active="recDate",this.params.orders=this.active,this.initData()},salesList:function(){this.active="buys",this.salesSort="asc"==this.salesSort?"desc":"asc",this.params.orders=this.active+","+this.salesSort,this.initData()},priceList:function(){this.active="cash",this.priceSort="asc"==this.priceSort?"desc":"asc",this.params.orders=this.active+","+this.priceSort,this.initData()},initData:function(){var t=this;v.loadListByPage(this,this.params,{listHandler:function(e){var a=JSON.parse(JSON.stringify(e)),i=a.filter((function(e){return t.sceneType||!~e.name.indexOf("直播")}));return i}})},clean:function(t){this[t]=""},cancel:function(){uni.navigateBack({delta:1})}}};e.default=x},"22c5":function(t,e,a){"use strict";var i;a.d(e,"b",(function(){return o})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){return i}));var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"no-empty",class:t.heightStyle,style:{backgroundColor:t.bgColor}},[a("v-uni-view",[a("v-uni-view",{staticClass:"item-img",style:{marginTop:t.marginTop+"px"}},[t.pic?a("v-uni-image",{staticClass:"image",attrs:{src:t.pic}}):t._e()],1),a("v-uni-view",{staticClass:"item-txt"},[t._v(t._s(t.title))])],1)],1)},r=[]},2618:function(t,e,a){"use strict";a.r(e);var i=a("1b68"),o=a.n(i);for(var r in i)"default"!==r&&function(t){a.d(e,t,(function(){return i[t]}))}(r);e["default"]=o.a},"2c72":function(t,e,a){"use strict";a.r(e);var i=a("7de4"),o=a("2618");for(var r in o)"default"!==r&&function(t){a.d(e,t,(function(){return o[t]}))}(r);a("ee02");var n,s=a("f0c5"),c=Object(s["a"])(o["default"],i["b"],i["c"],!1,null,"0a412406",null,!1,i["a"],n);e["default"]=c.exports},"2cd2":function(t,e,a){"use strict";a.r(e);var i=a("ebe3"),o=a.n(i);for(var r in i)"default"!==r&&function(t){a.d(e,t,(function(){return i[t]}))}(r);e["default"]=o.a},"37ef":function(t,e,a){"use strict";a.r(e);var i=a("f191"),o=a.n(i);for(var r in i)"default"!==r&&function(t){a.d(e,t,(function(){return i[t]}))}(r);e["default"]=o.a},5735:function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.custom-header-container[data-v-ca1e82fe]{z-index:var(--zindex);width:%?750?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center;position:fixed;left:0;top:0;-webkit-transform:translateZ(0);transform:translateZ(0)}.custom-header-container .theme[data-v-ca1e82fe]{background-color:var(--themecolor)}.custom-header-container .theme .custom-header-title[data-v-ca1e82fe]{color:#fff}.custom-header-container .custom-header-status-bar[data-v-ca1e82fe]{width:100%}.custom-header-container .custom-header-sec[data-v-ca1e82fe]{height:44px}.custom-header-container .custom-header-sec .first-icon[data-v-ca1e82fe]{width:44px;height:100%}.custom-header-container .custom-header-sec .custom-header-title[data-v-ca1e82fe]{-webkit-box-flex:1;-webkit-flex:1;flex:1;height:44px;text-align:center;line-height:44px;font-size:15px;font-weight:700}',""]),t.exports=e},"5da3":function(t,e,a){var i=a("5735");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=a("4f06").default;o("985f7e3c",i,!0,{sourceMap:!1,shadowMode:!1})},"6e92":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAMAAADW3miqAAAAOVBMVEUAAAD///////////////////////////////////////////////////////////////////////8KOjVvAAAAEnRSTlMAv43tRoglhCDoqynCwLulfFUq+JP3AAAAXElEQVQ4y+2OOQ7AIAwEnYskkHP//1igAIqVgApRMJ2l0axl0BGvLjsTUOPMDZ1NiMNUdIC1vLVEK23x3Bms5DAqtG7a4tYF7P7MtH7tnRzGWfwPt7jDqOeTQQdY9vMEGWQ0zMIAAAAASUVORK5CYII="},"76d9":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAe1BMVEUAAAAyMjIyMjIwMDAyMjIyMjIyMjIyMjIvLy8zMzMcHBwyMjIyMjIwMDAxMTEyMjIzMzMzMzMyMjIyMjIxMTExMTExMTEyMjIoKCgyMjIyMjIyMjIyMjIyMjIyMjIyMjIzMzMxMTEvLy8vLy8oKCgzMzMxMTEwMDAzMzMJnO91AAAAKHRSTlMAgMA+dU1lohy8BPjVJw/t58SWj3tdOjMK3M3HrqeKhm5UKxgTtUQlKuvKcwAAANtJREFUKM+lktsWgiAQRVU0Nc2sNM1LXqvz/1+YiDQquXpoP4jDZjEwjCZoT5iRH7Q5Z4TGhxD3hbThUODAXsmAgmAlD2xPwZ7xnL9xsYE7yFjfINb+w7a/HWUqRH5UXS/vWkCVLaqpsKJ2ic7vftXH4IlayAgJH3awhq8JxoMYjZB8diHlwLGwU+QFLyETRIoskcr3OyvS9eQToVCkf9MmjqeFpCla1rGe52DBuFkpFCUgHFyog9KVvMKUvyaslYzQ0DojWLgunLXqA8gMwgdPKUkr3wPhZfXYqW9OuRbhGU9+/gAAAABJRU5ErkJggg=="},"782b":function(t,e,a){"use strict";var i=a("9f27"),o=a.n(i);o.a},"7a6e":function(t,e,a){"use strict";var i=a("4ea4");a("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=i(a("5530")),r=a("2f62"),n={name:"LsFork",data:function(){return{}},props:{noOpacity:{type:Number,default:.6},yesOpacity:{type:Number,default:1},scale:{type:Number,default:1},notSelectedColor:{type:String,default:"#BBBBBB"},centerColor:{type:String,default:"#ffffff"},color:{type:String,default:"var(--themescolor)"},iconYes:{type:Boolean,default:!1}},computed:(0,o.default)({},(0,r.mapState)(["themes"]))};e.default=n},"7c49":function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,".height100[data-v-8f80aa68]{padding-top:100px}.no-empty[data-v-8f80aa68]{text-align:center}.no-empty .item-img[data-v-8f80aa68]{width:%?650?%;height:%?364?%;margin:%?180?% auto 0;font-size:0;line-height:150px;margin-bottom:20px}.no-empty .item-img .image[data-v-8f80aa68]{width:100%;height:100%}.no-empty .item-img .image[data-v-8f80aa68]:last-child{content:\"'\\E534'\";font-size:40px;font-family:uniicons;color:#8f8f94}.no-empty .item-txt[data-v-8f80aa68]{font-size:18px;color:#000;line-height:40px}",""]),t.exports=e},"7c74":function(t,e,a){var i=a("24fb"),o=a("1de5"),r=a("76d9"),n=a("1203"),s=a("6e92");e=i(!1);var c=o(r),l=o(n),d=o(s);e.push([t.i,"/* 头部搜索框 */.header .header-box .header-search[data-v-0a412406]{margin:7px 10px 7px 0}\r\n/* end 头部搜索框 */\r\n/* 搜索框 */\r\n/* 热搜 */.hot-search[data-v-0a412406]{background:#fff;width:100%}.hot-search .hot-tit[data-v-0a412406]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;padding:15px;line-height:24px;font-size:14px;font-family:PingFangSC-Medium}.hot-search .hot-tit img[data-v-0a412406]{display:block;width:14px;height:14px;margin-right:5px}.hot-search .hot-con[data-v-0a412406]{padding-left:%?28?%;padding-right:%?28?%;width:93%;display:-webkit-flex;display:-webkit-box;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-moz-flex-wrap:wrap;flex-wrap:wrap}.hot-search .hot-con .item[data-v-0a412406]{background:#f5f5f5;font-size:12px;padding:6px 15px;border-radius:15px;margin:0 12px 15px 0;color:#666;line-height:16px;font-size:13px;font-family:PingFangSC-Regular\\, arial;text-overflow:ellipsis;overflow:hidden;display:inline-block;max-width:50%;white-space:nowrap}\r\n/* end 热搜 */\r\n/* 历史搜索 */.search-history[data-v-0a412406]{background:#fff}.search-history .his-tit[data-v-0a412406]{padding:10px 10px 0;line-height:24px;font-size:14px}.search-history .his-con[data-v-0a412406]{padding:0 10px}.search-history .his-con .item[data-v-0a412406]{display:block;color:#848689;font-size:12px;line-height:22px;padding:10px 0;border-bottom:1px solid #f1f1f1}\r\n/* end 历史搜索 */\r\n/* 清空历史搜索 */.clear-history[data-v-0a412406]{background:#fff;padding:20px 0;text-align:center}.clear-history .btn[data-v-0a412406]{display:block;border:1px solid #f1f1f1;border-radius:32px;width:60%;height:38px;line-height:36px;font-size:12px;margin:0 auto}.clear-history .btn .clear-icon[data-v-0a412406]{display:inline-block;vertical-align:top;height:14px;width:14px;background:url("+c+') no-repeat 50%;background-size:14px 14px;margin:12px 5px 0 0}\r\n/* end 清空历史搜索 */\r\n/* end 搜索框 */\r\n/* 搜索列表 */\r\n/* 横排列表 */\r\n/* .search-list {\r\n  padding-top: 43px;\r\n} */.search-list .m-tabs[data-v-0a412406]{position:-webkit-sticky;position:sticky;top:44px;width:100%;max-width:750px;z-index:89}.ser-list .search-con[data-v-0a412406]{background:#fff}.ser-list .search-con .pro-mes[data-v-0a412406]{position:relative;height:auto;padding:10px 0;display:flex;display:-webkit-flex;display:-webkit-box;display:-moz-box;display:-ms-flexbox}.ser-list .search-con .pro-mes[data-v-0a412406]:after{content:" ";display:block;width:auto;height:1px;position:absolute;left:100px;right:0;bottom:0;background:#f1f1f1}.ser-list .search-con:last-child .pro-mes[data-v-0a412406]:after{height:0}.ser-list .search-con .pro-mes .pro-img[data-v-0a412406]{position:relative;margin-left:10px;width:90px;height:90px;overflow:hidden;text-align:center;font-size:0}.ser-list .search-con .pro-mes .pro-img .img[data-v-0a412406]{width:100%;height:100%}.ser-list .search-con .pro-mes .pro-name[data-v-0a412406]{margin:0 10px;position:relative;height:90px;margin-right:10px;-webkit-flex:1;-ms-flex:1;-webkit-box-flex:1;-moz-box-flex:1;flex:1}.ser-list .search-con .pro-mes .pro-name .name[data-v-0a412406]{font-size:14px;line-height:18px;max-height:36px;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;word-break:break-word;font-family:-apple-system,Helvetica,sans-serif}.ser-list .search-con .pro-mes .pro-name .pro-price[data-v-0a412406]{display:block;height:16px;margin-top:13px;overflow:hidden;font-size:12px}.ser-list .search-con .pro-mes .pro-name .pro-price .price[data-v-0a412406]{color:var(--themescolor);font-size:12px;line-height:16px}.ser-list .search-con .pro-mes .pro-name .pro-price .price .now[data-v-0a412406]{font-size:16px;color:var(--themescolor)}.ser-list .search-con .pro-mes .pro-name .pro-price .dis[data-v-0a412406]{padding:0 3px 0 2px;color:#fff;background:var(--themescolor);border-right:1px dotted #fff;margin-left:5px;font-size:10px;vertical-align:top;display:inline-block;height:14px;line-height:14px;margin-top:1px}.ser-list .search-con .pro-mes .pro-name .pro-com[data-v-0a412406]{position:absolute;bottom:0;height:16px;line-height:16px;left:0}.ser-list .search-con .pro-mes .pro-name .pro-com .com-item[data-v-0a412406]{color:#999;margin-right:8px;font-size:12px;display:inline-block;vertical-align:top}\r\n/* 活动标签 */.type-tip[data-v-0a412406]{position:absolute;bottom:0;left:0;width:100%;font-size:12px;background:var(--themesrgba08);color:#fff;line-height:20px}.act-tag[data-v-0a412406]{font-size:10px;background:var(--themescolor);color:#fff;display:inline-block;text-align:center;font-family:arial;line-height:14px;position:relative;padding:1px 8px 1px 5px;vertical-align:top;margin-top:2px;margin-right:5px}.act-tag[data-v-0a412406]:after{content:" ";display:block;width:0;height:0;position:absolute;right:0;top:0;border:8px solid transparent;border-right:3px solid #fff}.type-tag[data-v-0a412406]{display:inline-block;font-size:10px;height:16px;border:1px solid var(--themescolor);font-family:arial;line-height:16px;color:var(--themescolor);margin-right:5px;padding:0 5px;border-radius:16px;vertical-align:top}\r\n/* end 活动标签 */\r\n/* 可编辑时 */.search-list .search-con .pro-mes .pro-info[data-v-0a412406]{margin-left:28px;position:relative}.search-list .search-con .on .pro-info[data-v-0a412406]{margin-left:0}.search-list .search-con .on .choose[data-v-0a412406],\r\n.search-list .search-con .on .choosed[data-v-0a412406]{display:none}.search-list .choose[data-v-0a412406]{display:inline-block;width:18px;height:18px;vertical-align:top;background:url('+l+") no-repeat;background-size:18px;cursor:pointer}.search-list .choosed[data-v-0a412406]{display:inline-block;width:18px;height:18px;vertical-align:top;background:url("+d+') no-repeat;background-size:18px;cursor:pointer}.search-list .search-con .pro-mes .pro-info .pro-img[data-v-0a412406]{top:0}.search-list .pro-mes .choose[data-v-0a412406],\r\n.search-list .pro-mes .choosed[data-v-0a412406]{position:absolute;left:0;top:33px}\r\n/* end 可编辑时 */\r\n/* end 横排列表 */\r\n/* end 搜索列表 */\r\n/* 选择优惠 */.gifts-list[data-v-0a412406]{padding-top:0;padding-bottom:48px}.gifts-list .gifts-tip .entry-con .con-box .entry-icon[data-v-0a412406]{margin-right:8px}.gifts-list .gifts-tip .entry-con .con-box .entry-name[data-v-0a412406]:first-child{color:#888}.gifts-list .ser-list[data-v-0a412406]{margin-top:10px;padding:0 10px;background:#fff}.gifts-list .ser-list .search-con[data-v-0a412406]{padding-left:18px;position:relative;border-top:1px solid #f1f1f1}.gifts-list .ser-list .search-con .choose[data-v-0a412406],\r\n.gifts-list .ser-list .search-con .choosed[data-v-0a412406]{position:absolute;left:0;top:40%}.gifts-list .ser-list .entry-con[data-v-0a412406]{padding:0}.gifts-list .ser-list .search-con .pro-mes .pro-img[data-v-0a412406]{width:70px;height:70px}.gifts-list .ser-list .search-con .pro-mes[data-v-0a412406]:after{height:0}.gifts-list .ser-list .search-con .pro-mes .pro-name[data-v-0a412406]{height:70px}.gifts-list .ser-list .search-con .pro-mes .pro-name .pro-price[data-v-0a412406]{margin-top:10px}.gifts-list .ser-list .search-con .pro-mes .pro-name .pro-price .price[data-v-0a412406]{height:16px;line-height:20px}.gifts-list .ser-list .search-con .pro-mes .pro-name .pro-price .price .now[data-v-0a412406]{line-height:16px}.gifts-list .search-con .pro-mes .pro-name .pro-price .number[data-v-0a412406]{display:inline-block;vertical-align:top;font-size:12px;color:#999;margin-left:10px;height:16px;line-height:16px}.gifts-list .gifts-btn[data-v-0a412406]{position:fixed;bottom:0;outline:none;-webkit-appearance:none;display:block;width:100%;max-width:750px;height:48px;color:#fff;font-size:15px;line-height:48px;text-align:center;background-color:var(--themescolor);border:none}\r\n/* end 选择优惠 */\r\n/* 相似商品 */.similar .search-list[data-v-0a412406]{padding-top:0}.similar .similar-tip[data-v-0a412406]{padding:10px;background:#fff;border-top:1px solid #f1f1f1;border-bottom:1px solid #f1f1f1;font-size:12px;color:#999;margin-bottom:10px;line-height:22px}.similar .similar-tip .similar-num[data-v-0a412406]{color:#333;margin:0 3px}.similar .m-tabs .item .item-img[data-v-0a412406]{display:block;margin:11px auto;width:20px;height:20px;font-size:0}.similar .m-tabs .item .item-img img[data-v-0a412406]{width:100%;height:100%}\r\n/* end 相似商品 */\r\n/* 会员专区 */.member-info[data-v-0a412406]{padding:10px;background-color:#fff}.member-info .info-bg[data-v-0a412406]{overflow:hidden;position:relative;border-radius:6px;font-size:12px;color:#fff;background:-webkit-linear-gradient(left,#ff9b00,#ffb94e);background:linear-gradient(90deg,#ff9b00,#ffb94e);box-shadow:0 2px 5px rgba(255,155,98,.5)}.member-info .info-bg .info-box[data-v-0a412406]{position:relative;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:25px 15px}.member-info .info-bg .info-box .mem-img[data-v-0a412406]{position:relative;margin-right:10px;width:60px;height:60px;border:1px solid hsla(0,0%,100%,.4);border-radius:60px;box-shadow:0 2px 10px rgba(0,0,0,.15)}.member-info .info-bg .info-box .mem-img span[data-v-0a412406]{overflow:hidden;border-radius:60px;padding-top:100%;display:block}.member-info .info-bg .info-box .mem-img span img[data-v-0a412406]{position:absolute;top:0;left:0;width:100%;height:100%;border-radius:60px}.member-info .info-bg .info-box .mem-txt[data-v-0a412406]{-webkit-box-flex:1;-webkit-flex:1;flex:1;min-width:0;color:#fff}.member-info .info-bg .info-box .mem-txt dt[data-v-0a412406]{position:relative;font-size:14px;margin-right:20px;white-space:nowrap;color:#fff}.member-info .info-bg .info-box .mem-txt .mem-con[data-v-0a412406]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;margin-top:3px;color:hsla(0,0%,100%,.7)}.member-info .info-bg .info-box .mem-txt .mem-con em[data-v-0a412406]{color:hsla(0,0%,100%,.7)}.member-info .info-bg .info-box .mem-txt .mem-level[data-v-0a412406]{margin-top:6px}.member-info .info-bg .info-box .mem-txt .mem-level .level[data-v-0a412406]{color:#fff;font-size:12px;line-height:12px;background:#ff9b00;padding:0 5px;border-radius:2px;font-weight:600}.member-info .info-bg .info-box .mem-txt .mem-level .level em[data-v-0a412406]{font-family:verdana;color:#fff;font-weight:600}.list-tit[data-v-0a412406]{padding:10px;text-align:center;position:relative;background:#fff;margin-top:10px}.list-tit .tit-em[data-v-0a412406]{display:block;color:#999;letter-spacing:1px;font-family:arial;font-size:12px}.list-tit .tit-span[data-v-0a412406]{display:inline-block;font-size:16px;height:20px;line-height:20px;margin-top:2px;position:relative;background:#fff;padding:0 15px;letter-spacing:3px;font-family:hiragino sans gb}.list-tit .tit-span[data-v-0a412406]:before,\r\n.list-tit .tit-span[data-v-0a412406]:after{position:absolute;display:block;content:" ";background:#eee;font-size:0;height:1px;width:70px;bottom:8px}.list-tit .tit-span[data-v-0a412406]:before{left:-70px}.list-tit .tit-span[data-v-0a412406]:after{right:-70px}.pro-list a .pro-price b[data-v-0a412406]{font-weight:400;margin-right:5px;color:#e2393b}.pro-list a .pro-com .old-price[data-v-0a412406]{text-decoration:line-through;font-family:arial;margin-left:-3px}\r\n/* end 会员专区 */\r\n/* 头部重新修改样式 */.headers[data-v-0a412406]{width:100vw;height:%?86?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding-top:%?10?%;background:#fff}.headers .header_content[data-v-0a412406]{width:%?610?%;height:%?70?%;overflow:hidden;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;background:#eee;border-radius:%?36?%;margin-left:%?28?%}.headers .header_content .header_content_img[data-v-0a412406]{width:%?34?%;height:%?34?%;display:block;margin:%?5?% %?20?% 0 %?24?%}.headers .header_content .header_content_text[data-v-0a412406]{width:%?240?%;display:block;color:#bbb;font-size:%?28?%}.headers .header_content .header_scroll[data-v-0a412406]{width:%?500?%;height:%?70?%;padding:0 %?30?% 0 %?4?%}.headers .header_content .header_scroll .header_input[data-v-0a412406]{width:100%;height:%?70?%;line-height:%?70?%;font-size:%?28?%;margin-top:%?2?%}.header_cancel[data-v-0a412406]{display:block;width:%?80?%;font-size:%?28?%;color:#666;text-align:center;margin-left:%?6?%}\r\n/* 头部重新修改样式 */.mike-btn[data-v-0a412406]{width:%?280?%;height:%?80?%;background:#2c3944;box-shadow:0 4px 10px 0 hsla(0,0%,49.4%,.5);border-radius:%?40?%;position:fixed;left:%?224?%;bottom:%?80?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-size:%?28?%;font-family:PingFangSC-Medium,PingFang SC;font-weight:500;color:#fff;line-height:20px}',""]),t.exports=e},"7de4":function(t,e,a){"use strict";var i;a.d(e,"b",(function(){return o})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){return i}));var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"w750",style:{"--themescolor":t.themes.color}},[a("v-uni-view",{staticClass:"headers"},[a("v-uni-view",{staticClass:"header_content"},[a("img",{staticClass:"header_content_img",attrs:{src:"/static/images/sousuo@2x.png",alt:!0}}),a("v-uni-scroll-view",{staticClass:"header_scroll",attrs:{"scroll-x":!0}},[a("v-uni-input",{staticClass:"header_input",attrs:{type:"text",focus:t.searchFocus,placeholder:"请输入产品名称","confirm-type":"搜索","placeholder-style":"color:#bbb;font-size:28rpx;",maxlength:"50"},on:{confirm:function(e){arguments[0]=e=t.$handleEvent(e),t.enterSearch.apply(void 0,arguments)}},model:{value:t.searchText,callback:function(e){t.searchText=e},expression:"searchText"}})],1)],1),a("v-uni-view",{staticClass:"font-28 text-666 flex-center px-2",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.cancel.apply(void 0,arguments)}}},[a("v-uni-text",[t._v("取消")])],1)],1),t.paging.emptylist?t._e():a("v-uni-view",{staticClass:"search-list"},[a("v-uni-view",{staticClass:"m-tabs",staticStyle:{top:"0"}},[a("v-uni-view",{staticClass:"item",class:{on:"recDate"==t.active},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.defaultList.apply(void 0,arguments)}}},[a("v-uni-text",{staticClass:"txt"},[t._v("默认")])],1),a("v-uni-view",{staticClass:"item arrow",class:{"arrow-up":"buys"==t.active&&"asc"==t.salesSort,"arrow-down":"buys"==t.active&&"desc"==t.salesSort},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.salesList.apply(void 0,arguments)}}},[a("v-uni-text",{staticClass:"txt"},[t._v("销量")])],1),a("v-uni-view",{staticClass:"item arrow",class:{"arrow-up":"cash"==t.active&&"asc"==t.priceSort,"arrow-down":"cash"==t.active&&"desc"==t.priceSort},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.priceList.apply(void 0,arguments)}}},[a("v-uni-text",{staticClass:"txt"},[t._v("价格")])],1)],1),a("more-list",{attrs:{status:t.paging.status}},[t.goodsType?a("v-uni-view",{staticClass:"ser-list"},t._l(t.list,(function(e,i){return a("SearchCon",{key:i,attrs:{parmas:e,pic:e.pic,name:e.name,money:e.cash},on:{myEvent:function(e){arguments[0]=e=t.$handleEvent(e),t.enterGoods.apply(void 0,arguments)}}})})),1):t._e(),t.goodsType?t._e():a("v-uni-view",{staticClass:"grid-column2"},t._l(t.list,(function(e,i){return a("ProList",{key:i,attrs:{parmas:e,pic:e.pic,name:e.name,money:e.cash},on:{myEvent:function(e){arguments[0]=e=t.$handleEvent(e),t.enterGoods.apply(void 0,arguments)}}})})),1)],1)],1),t.paging.emptylist||t.paging.error?a("Noempty",{attrs:{title:"暂无搜索内容",type:8}}):t._e()],1)},r=[]},"873f":function(t,e,a){"use strict";a.r(e);var i=a("22c5"),o=a("2cd2");for(var r in o)"default"!==r&&function(t){a.d(e,t,(function(){return o[t]}))}(r);a("9cd7");var n,s=a("f0c5"),c=Object(s["a"])(o["default"],i["b"],i["c"],!1,null,"8f80aa68",null,!1,i["a"],n);e["default"]=c.exports},"8e7e":function(t,e,a){"use strict";var i;a.d(e,"b",(function(){return o})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){return i}));var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"flex-center",style:{"--themescolor":t.themes.color}},[a("v-uni-view",{staticClass:"icon-no",class:{"icon-yes":t.iconYes},style:{"--scale":t.scale,"--notselectedcolor":t.notSelectedColor,"--color":t.color,"--centercolor":t.centerColor,"--noopacity":t.noOpacity,"--yesopacity":t.yesOpacity}})],1)},r=[]},"956d":function(t,e,a){"use strict";a.r(e);var i=a("d3b1"),o=a("37ef");for(var r in o)"default"!==r&&function(t){a.d(e,t,(function(){return o[t]}))}(r);a("0082");var n,s=a("f0c5"),c=Object(s["a"])(o["default"],i["b"],i["c"],!1,null,"1084e2bd",null,!1,i["a"],n);e["default"]=c.exports},"9cd7":function(t,e,a){"use strict";var i=a("bcb9"),o=a.n(i);o.a},"9f27":function(t,e,a){var i=a("ca45");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=a("4f06").default;o("4df0f320",i,!0,{sourceMap:!1,shadowMode:!1})},a051:function(t,e,a){"use strict";a.r(e);var i=a("7a6e"),o=a.n(i);for(var r in i)"default"!==r&&function(t){a.d(e,t,(function(){return i[t]}))}(r);e["default"]=o.a},b42d:function(t,e,a){"use strict";var i=a("5da3"),o=a.n(i);o.a},bcb9:function(t,e,a){var i=a("7c49");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=a("4f06").default;o("83824d0e",i,!0,{sourceMap:!1,shadowMode:!1})},c095:function(t,e,a){"use strict";a.r(e);var i=a("11a1"),o=a.n(i);for(var r in i)"default"!==r&&function(t){a.d(e,t,(function(){return i[t]}))}(r);e["default"]=o.a},ca45:function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,'.icon-no[data-v-54c58bcd]{-webkit-transform:scale(var(--scale));transform:scale(var(--scale));width:%?40?%;height:%?40?%;background-color:var(--notselectedcolor);opacity:var(--noopacity);border-radius:50%;display:inline-block;position:relative}.icon-no[data-v-54c58bcd]:before{content:"";position:absolute;top:%?20?%;right:%?8?%;width:%?24?%;height:%?2?%;background:#fff;-webkit-transform:rotate(45deg);transform:rotate(45deg);display:inline-block}.icon-no[data-v-54c58bcd]:after{content:"";position:absolute;top:%?20?%;right:%?8?%;width:%?24?%;height:%?2?%;background:#fff;-webkit-transform:rotate(315deg);transform:rotate(315deg);display:inline-block}.icon-no.icon-yes[data-v-54c58bcd]{opacity:var(--yesopacity)!important;background-color:var(--color)}.icon-no.icon-yes[data-v-54c58bcd]:before{background:var(--centercolor)}.icon-no.icon-yes[data-v-54c58bcd]:after{background:var(--centercolor)}',""]),t.exports=e},d3b1:function(t,e,a){"use strict";var i;a.d(e,"b",(function(){return o})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){return i}));var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"flex-around p-2 overflow-h",class:t.className,staticStyle:{"border-bottom":"1px solid #e8e8e8"},style:{"--themesrgba":t.themesRGBA,"--themecolor":t.themes.color},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.myEvent()}}},[a("v-uni-view",{staticClass:"position-relative",staticStyle:{height:"180rpx"}},[a("ls-image",{attrs:{pic:t.pic,options:{w:"180",h:"180"},shopId:t.shopId}}),"G"==t.parmas.prodType?a("v-uni-view",{staticClass:"has-activity flex-center"},[a("v-uni-text",[t._v("团购商品")])],1):t._e(),"S"==t.parmas.prodType?a("v-uni-view",{staticClass:"has-activity flex-center"},[a("v-uni-text",[t._v("二手商品")])],1):t._e(),"D"==t.parmas.prodType?a("v-uni-view",{staticClass:"has-activity flex-center"},[a("v-uni-text",[t._v("打折商品")])],1):t._e()],1),a("v-uni-view",{staticClass:"right position-relative flex-1 flex-col-between w-100 pl-2",staticStyle:{height:"180rpx"}},[a("v-uni-view",{staticClass:"font-28 line-clamp2"},[t._v(t._s(t.name))]),a("v-uni-view",{staticClass:"subtitle"},[t.item.subtitle?a("v-uni-text",[t._v(t._s(t.item.subtitle))]):t._e()],1),a("v-uni-view",{staticClass:"font-24 position-absolute w-100 pr-2 border-box d-flex j-sb j-end",staticStyle:{bottom:"0"}},[a("v-uni-view",{style:{color:t.themes.color,fontFamily:"arial"}},[a("v-uni-text",{staticClass:"font-weight"},[t._v("￥")]),10200==t.shopId?[a("v-uni-text",{staticClass:"font-32"},[t._v(t._s(t.Money(t.money,3)[0]))]),t._v("."+t._s(t.Money(t.money,3)[1])+" 起")]:[a("v-uni-text",{staticClass:"font-32"},[t._v(t._s(t.Money(t.money)[0]))]),t._v("."+t._s(t.Money(t.money)[1])+" 起")]],2),a("v-uni-view",{staticClass:"det-btn"},[t._v("查看详情")])],1),1==t.comments&&2==t.type?[a("v-uni-view",{staticClass:"flex-start font-24 text-999"},[a("v-uni-text",{staticClass:"pr-2"},[t._v(t._s(t.parmas.comments)+"条评论")]),a("v-uni-text",[t._v(t._s(t.parmas.goodCommentsPercent?t.parmas.goodCommentsPercent:"0%")+"好评")])],1)]:t._e()],2)],1)},r=[]},d7f7:function(t,e,a){"use strict";a.r(e);var i=a("8e7e"),o=a("a051");for(var r in o)"default"!==r&&function(t){a.d(e,t,(function(){return o[t]}))}(r);a("782b");var n,s=a("f0c5"),c=Object(s["a"])(o["default"],i["b"],i["c"],!1,null,"54c58bcd",null,!1,i["a"],n);e["default"]=c.exports},d947:function(t,e,a){var i=a("7c74");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=a("4f06").default;o("fa3f70a6",i,!0,{sourceMap:!1,shadowMode:!1})},df84:function(t,e,a){"use strict";var i=a("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.groupProdList=e.prodlist=e.hotSearch=void 0;var o=i(a("039e")),r=function(){return o.default.post("/appSearch/hotSearchList")};e.hotSearch=r;var n=function(t){return o.default.post("/appSearch/prodlist",t,{isShowLoadding:!0})};e.prodlist=n;var s=function(t){return o.default.post("/groupProdList",t,{isShowLoadding:!0})};e.groupProdList=s},e34a:function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.has-activity[data-v-1084e2bd]{position:absolute;bottom:0;right:0;color:#fff;font-size:%?24?%;width:100%;background-color:var(--themesrgba);height:%?40?%}.has-shopType[data-v-1084e2bd]{font-size:%?20?%;color:var(--themecolor);border:1px solid var(--themecolor);padding:0 %?8?% 0 %?8?%;border-radius:%?32?%}.subtitle[data-v-1084e2bd]{position:absolute;top:24px;left:10px;font-size:12px;color:#999}.det-btn[data-v-1084e2bd]{padding:%?6?% %?22?%;border:%?2?% solid #dc231e;color:#dc231e;font-size:%?20?%;border-radius:%?30?%}',""]),t.exports=e},e5d6:function(t,e,a){"use strict";a.r(e);var i=a("087c"),o=a("c095");for(var r in o)"default"!==r&&function(t){a.d(e,t,(function(){return o[t]}))}(r);a("b42d");var n,s=a("f0c5"),c=Object(s["a"])(o["default"],i["b"],i["c"],!1,null,"ca1e82fe",null,!1,i["a"],n);e["default"]=c.exports},ebe3:function(t,e,a){"use strict";a("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={components:{},data:function(){return{pic:""}},props:{title:String,bgColor:{type:String,default:"transparent"},type:{type:Number,default:1},heightStyle:{type:String,default:""},marginTop:{type:Number,default:0}},created:function(){this.setPic()},mounted:function(){},methods:{setPic:function(){switch(this.type){case 1:this.pic=this.$staticServer+"static/images/order-empty.png";break;case 2:this.pic=this.$staticServer+"static/images/comment-empty.png";break;case 3:this.pic=this.$staticServer+"static/images/no-reply.png";break;case 4:this.pic=this.$staticServer+"static/images/record-empty.png";break;case 5:this.pic=this.$staticServer+"static/images/mes-empty.png";break;case 6:this.pic=this.$staticServer+"static/images/collect-empty.png";break;case 7:this.pic=this.$staticServer+"static/images/history-empty.png";break;case 8:this.pic=this.$staticServer+"static/images/search.png";break;case 9:this.pic=this.$staticServer+"static/images/red-empty.png";break;case 10:this.pic=this.$staticServer+"static/images/order.png";break;case 11:this.pic=this.$staticServer+"static/images/no-reply.png";break;case 12:this.pic=this.$staticServer+"static/images/integral.png";break;case 13:this.pic=this.$staticServer+"static/images/youhuiquan.png";break;default:this.pic=this.$staticServer+"static/images/order-empty.png"}}}};e.default=i},ee02:function(t,e,a){"use strict";var i=a("d947"),o=a.n(i);o.a},f039:function(t,e,a){var i=a("e34a");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=a("4f06").default;o("21070d79",i,!0,{sourceMap:!1,shadowMode:!1})},f191:function(t,e,a){"use strict";var i=a("4ea4");a("99af"),a("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=i(a("5530")),r=i(a("a85f")),n=a("2f62"),s=i(a("3bea")),c={components:{"ls-image":r.default},data:function(){return{Money:s.default}},props:{className:String,parmas:Object,pic:String,name:String,money:Number,comments:{type:Boolean,default:!0},type:{type:[Number,String],default:1},shopId:Number},computed:(0,o.default)((0,o.default)({},(0,n.mapState)(["themes"])),{},{themesRGBA:function(){return"rgba(".concat(this.themes.rgb.r,", ").concat(this.themes.rgb.g,",").concat(this.themes.rgb.b,",.6)")}}),created:function(){},methods:{myEvent:function(){this.$emit("myEvent",this.parmas)}}};e.default=c}}]);