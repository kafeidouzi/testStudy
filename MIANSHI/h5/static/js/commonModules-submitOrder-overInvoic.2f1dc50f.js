(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["commonModules-submitOrder-overInvoic"],{"1d77":function(t,i,e){"use strict";e.r(i);var n=e("f0eb"),a=e.n(n);for(var o in n)"default"!==o&&function(t){e.d(i,t,(function(){return n[t]}))}(o);i["default"]=a.a},"4d83":function(t,i,e){"use strict";e.r(i);var n=e("6361"),a=e("1d77");for(var o in a)"default"!==o&&function(t){e.d(i,t,(function(){return a[t]}))}(o);e("9b66");var s,r=e("f0c5"),c=Object(r["a"])(a["default"],n["b"],n["c"],!1,null,"e0e03706",null,!1,n["a"],s);i["default"]=c.exports},6361:function(t,i,e){"use strict";var n;e.d(i,"b",(function(){return a})),e.d(i,"c",(function(){return o})),e.d(i,"a",(function(){return n}));var a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"flex-col-center",class:[t.className,{"ls-forword":t.circular}],style:t.circular?t.optionstyleup:""},[e("v-uni-view",{staticClass:"icon transition-all05",style:t.optionstyle})],1)},o=[]},8262:function(t,i,e){"use strict";var n;e.d(i,"b",(function(){return a})),e.d(i,"c",(function(){return o})),e.d(i,"a",(function(){return n}));var a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"over-invoic"},[e("v-uni-view",{staticClass:"background"},[e("v-uni-view",{staticClass:"custom-header-status-bar",style:{height:t.stausBarHeight+"px"}}),e("v-uni-view",{staticClass:"title"},[e("v-uni-view",{on:{click:function(i){i.stopPropagation(),arguments[0]=i=t.$handleEvent(i),t.goback.apply(void 0,arguments)}}},[e("ls-forward",{class:"first-icon flex-center",attrs:{options:{cl:"#ffffff"}}})],1)],1),e("v-uni-view",{staticClass:"title-type"},[t.result.ossFileIds?e("img",{attrs:{src:"/static/images/ok.png",alt:""}}):t._e(),t._v(t._s(t.result.ossFileIds?"已开票":"开票中"))]),e("v-uni-view",{staticClass:"money"},[t._v("发票金额："+t._s(t.getMoney(t.result.invoiceAmount))+"元")])],1),e("v-uni-view",{staticClass:"content gray-body"},[t.result.ossFileIds?e("v-uni-view",{staticClass:"showimg",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.showPic.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"img-box"},[e("img",{attrs:{src:t.staticServer+t.result.ossFileIds[0],alt:""}}),e("v-uni-view",{staticClass:"length"},[t._v("共"+t._s(t.result.ossFileIds.length)+"张")])],1),e("v-uni-view",{staticClass:"clicktext"},[t._v("点击预览发票")])],1):t._e(),e("v-uni-view",{staticClass:"invoice"},[e("v-uni-view",{staticClass:"inv-con"},[t.result.invoiceType?e("v-uni-view",{staticClass:"inv-item"},[e("v-uni-view",{staticClass:"item-tit"},[t._v("发票类型")]),e("v-uni-view",{staticClass:"item-txt2"},[t._v(t._s(1==t.result.invoiceType?"电子发票":"普通纸质发票"))])],1):t._e(),t.result.content?e("v-uni-view",{staticClass:"inv-item"},[e("v-uni-view",{staticClass:"item-tit"},[t._v("发票内容")]),e("v-uni-view",{staticClass:"item-txt2"},[t._v(t._s(2==t.result.content?"商品明细":"不开发票"))])],1):t._e(),t.result.company?e("v-uni-view",{staticClass:"inv-item"},[e("v-uni-view",{staticClass:"item-tit"},[t._v("抬头名称")]),e("v-uni-view",{staticClass:"item-txt2"},[t._v(t._s(t.result.company))])],1):t._e(),t.result.invoiceHumNumber?e("v-uni-view",{staticClass:"inv-item"},[e("v-uni-view",{staticClass:"item-tit"},[t._v("公司税号")]),e("v-uni-view",{staticClass:"item-txt2"},[t._v(t._s(t.result.invoiceHumNumber))])],1):t._e(),t.result.invoiceAmount?e("v-uni-view",{staticClass:"inv-item"},[e("v-uni-view",{staticClass:"item-tit"},[t._v("开票金额")]),e("v-uni-view",{staticClass:"item-txt2 item-txt3"},[t._v(t._s(t.getMoney(t.result.invoiceAmount)))])],1):t._e(),t.result.invoiceDate&&t.result.ossFileIds?e("v-uni-view",{staticClass:"inv-item"},[e("v-uni-view",{staticClass:"item-tit"},[t._v("开票时间")]),e("v-uni-view",{staticClass:"item-txt2"},[t._v(t._s(t._f("dateformat")(t.result.invoiceDate,"YYYY-MM-DD HH:mm:ss")))])],1):t._e(),t.result.createTime?e("v-uni-view",{staticClass:"inv-item"},[e("v-uni-view",{staticClass:"item-tit"},[t._v("申请时间")]),e("v-uni-view",{staticClass:"item-txt2"},[t._v(t._s(t._f("dateformat")(t.result.createTime,"YYYY-MM-DD HH:mm:ss")))])],1):t._e()],1)],1),1!=t.result.invoiceType?e("v-uni-view",{staticClass:"tips"},[t._v("您开具的为纸质发票我方已为您邮寄，请您注意查收快递如有疑问，请联系售后客服")]):t._e()],1),1==t.result.invoiceType?e("v-uni-button",{staticClass:"flex-1 flex-col-center service-btn",attrs:{type:"primary",size:"40"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.sendEmail.apply(void 0,arguments)}}},[e("v-uni-text",{staticClass:"text"},[t._v("发送邮箱")])],1):e("v-uni-button",{staticClass:"flex-1 flex-col-center service-btn",attrs:{type:"primary",size:"40","session-from":t.content,"open-type":"contact"}},[e("v-uni-text",{staticClass:"text"},[t._v("客服")])],1)],1)},o=[]},"88ba":function(t,i,e){"use strict";e.r(i);var n=e("8262"),a=e("d257");for(var o in a)"default"!==o&&function(t){e.d(i,t,(function(){return a[t]}))}(o);e("c45c");var s,r=e("f0c5"),c=Object(r["a"])(a["default"],n["b"],n["c"],!1,null,"8a2b128a",null,!1,n["a"],s);i["default"]=c.exports},"946a":function(t,i,e){var n=e("eeb8");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=e("4f06").default;a("9c9e8d5c",n,!0,{sourceMap:!1,shadowMode:!1})},"9b66":function(t,i,e){"use strict";var n=e("de3d"),a=e.n(n);a.a},"9de5":function(t,i,e){"use strict";var n=e("4ea4");e("99af"),e("d81d"),e("a9e3"),e("b680"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a=n(e("5530")),o=n(e("4d83")),s=e("2f62"),r=e("a86f"),c=e("2d54"),v={name:"over-invoic",components:{lsForward:o.default},props:{},data:function(){return{staticServer:this.$imgUrlHead,result:{},orderId:""}},methods:{showPic:function(){var t=this,i=this.result.ossFileIds.map((function(i){return t.staticServer+i}));uni.previewImage({urls:i})},goback:function(){c.pages.getPageRoute(1)?uni.navigateBack():uni.switchTab({url:"/pages/index/index"})},sendEmail:function(){var t={orderId:this.orderId};(0,r.sendInvoiceMail)(t).then((function(t){t.result?uni.showToast({title:"发送成功",icon:"none",duration:2e3}):uni.showToast({title:"发送失败，请联系客服~",icon:"none",duration:2e3})}))},getMoney:function(t){return Number(t).toFixed(2)}},computed:(0,a.default)((0,a.default)({},(0,s.mapState)(["userInfo","stausBarHeight","wxMenuBut"])),{},{content:function(){if(this.userInfo){var t=this.userInfo,i=t.nickName,e=t.portraitPic,n=this.$imgGaiaUrlHead+e,a=JSON.stringify({from:"发票页面"});return"sobot|".concat(i,"|").concat(n,"|").concat(a)}}}),onLoad:function(t){var i=this,e={invoiceSubId:t.invoiceSubId,orderId:t.orderId};this.orderId=t.orderId,(0,r.getInvoiceSub)(e).then((function(t){i.result=t.result}))},watch:{},created:function(){},mounted:function(){},filters:{}};i.default=v},a86f:function(t,i,e){"use strict";var n=e("4ea4");e("99af"),Object.defineProperty(i,"__esModule",{value:!0}),i.sendInvoiceMail=i.getInvoiceSub=i.saveOrderInvoice=i.getOrderInvoice=i.getCompanyName=i.invoiceDelete=i.setInvoiceCommon=i.loadInvoice=i.invoicePage=i.save=void 0;var a=n(e("039e")),o=function(t){return a.default.post("/p/app/invoice/save",t)};i.save=o;var s=function(t){return a.default.post("/p/app/invoicePage",t,{isShowLoadding:!0})};i.invoicePage=s;var r=function(t){return a.default.post("/p/app/loadInvoice",t)};i.loadInvoice=r;var c=function(t){return a.default.post("/p/app/setInvoiceCommon",t)};i.setInvoiceCommon=c;var v=function(t){return a.default.post("/p/app/invoiceDelete",t)};i.invoiceDelete=v;var l=function(t){return a.default.get("/p/app/invoice/getCompanyName/".concat(t))};i.getCompanyName=l;var d=function(t,i,e){return a.default.get("/p/app/invoice/getInvoiceAndOrder?invoiceId=".concat(t,"&orderId=").concat(i,"&orderType=").concat(e))};i.getOrderInvoice=d;var u=function(t){return a.default.post("/p/app/invoice/applyInvoiceSubOrder",t)};i.saveOrderInvoice=u;var p=function(t){return a.default.get("/customized/p/getInvoiceSub?invoiceSubId=".concat(t.invoiceSubId,"&orderId=").concat(t.orderId))};i.getInvoiceSub=p;var f=function(t){return a.default.post("/p/app/invoice/sendInvoiceMail",t)};i.sendInvoiceMail=f},ac0f:function(t,i,e){var n=e("24fb");i=n(!1),i.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.ls-forword[data-v-e0e03706]{height:30px;width:30px;border-radius:50%}.ls-forword .icon[data-v-e0e03706]{content:""}',""]),t.exports=i},c45c:function(t,i,e){"use strict";var n=e("946a"),a=e.n(n);a.a},d257:function(t,i,e){"use strict";e.r(i);var n=e("9de5"),a=e.n(n);for(var o in n)"default"!==o&&function(t){e.d(i,t,(function(){return n[t]}))}(o);i["default"]=a.a},de3d:function(t,i,e){var n=e("ac0f");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=e("4f06").default;a("4557a85d",n,!0,{sourceMap:!1,shadowMode:!1})},eeb8:function(t,i,e){var n=e("24fb");i=n(!1),i.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.over-invoic[data-v-8a2b128a]{background:#f5f5f5;min-height:100vh}.over-invoic .background[data-v-8a2b128a]{width:100vw;height:%?540?%;background-image:-webkit-linear-gradient(172deg,#ff6a62,#dc231e);background-image:linear-gradient(-82deg,#ff6a62,#dc231e);display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center;z-index:99}.over-invoic .background .title[data-v-8a2b128a]{width:100vw;height:44px;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start}.over-invoic .background .first-icon[data-v-8a2b128a]{width:44px;height:100%}.over-invoic .background .custom-header-status-bar[data-v-8a2b128a]{width:100vw}.over-invoic .background .title-type[data-v-8a2b128a]{color:#fff;font-size:%?40?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin-top:%?40?%;font-weight:600}.over-invoic .background .title-type img[data-v-8a2b128a]{display:inline-block;width:%?40?%;height:%?40?%;margin-right:%?20?%}.over-invoic .background .money[data-v-8a2b128a]{color:#fff;font-size:%?28?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin-top:%?20?%}.over-invoic .background .money img[data-v-8a2b128a]{display:inline-block;width:%?28?%;height:%?28?%;margin-right:%?20?%}.over-invoic .content[data-v-8a2b128a]{width:100vw;margin-top:%?-200?%;z-index:999;border-radius:%?24?% %?24?% 0 0;overflow:hidden;padding-top:%?12?%;padding-bottom:%?120?%}.over-invoic .content .invoice .inv-con[data-v-8a2b128a]{background:#fff;padding:0 %?28?%}.over-invoic .content .invoice .inv-con .inv-item[data-v-8a2b128a]{position:relative;padding:%?22?% 0;line-height:%?48?%;font-size:%?28?%;border-bottom:%?2?% solid #ededed;display:-webkit-box;display:-webkit-flex;display:flex}.over-invoic .content .invoice .inv-con .inv-item[data-v-8a2b128a]:last-child{border-bottom:none}.over-invoic .content .invoice .inv-con .inv-item .item-tit[data-v-8a2b128a]{width:%?140?%;display:inline-block;vertical-align:top;padding-right:10px;color:#666}.over-invoic .content .invoice .inv-con .inv-item .item-txt2[data-v-8a2b128a]{border:0;width:%?440?%;height:24px;vertical-align:top;-webkit-box-flex:1;-webkit-flex:1;flex:1;text-align:right;padding-left:5px;color:#333}.over-invoic .content .invoice .inv-con .inv-item .item-txt3[data-v-8a2b128a]{color:#dc231e}.over-invoic .content .tips[data-v-8a2b128a]{font-size:%?24?%;color:#b8b8b8;padding:%?24?% %?40?%}.over-invoic .content .showimg[data-v-8a2b128a]{background:#fff;padding:%?40?% 0}.over-invoic .content .showimg .img-box[data-v-8a2b128a]{position:relative;width:%?268?%;height:%?150?%;position:relative;margin:0 auto}.over-invoic .content .showimg .img-box img[data-v-8a2b128a]{width:100%;height:100%}.over-invoic .content .showimg .length[data-v-8a2b128a]{position:absolute;left:0;bottom:0;width:100%;background:rgba(0,0,0,.2);color:#fff;text-align:center;font-size:%?24?%}.over-invoic .content .showimg .clicktext[data-v-8a2b128a]{font-size:%?28?%;color:#333;text-align:center;margin-top:%?20?%}.over-invoic .service-btn[data-v-8a2b128a]{position:fixed;bottom:0;left:0;width:100vw;height:%?100?%;margin:0;padding:0;font-size:%?28?%;color:#dc231e;background:#fff;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-justify-content:space-around;justify-content:space-around}.over-invoic .service-btn[data-v-8a2b128a]:after{border:none}',""]),t.exports=i},f0eb:function(t,i,e){"use strict";e("99af"),e("a9e3"),e("d3b7"),e("ac1f"),e("5319"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n={name:"LsForward",components:{},props:{className:String,options:Object,type:{type:Number,default:1},circular:{type:Boolean,default:!1}},data:function(){return{}},computed:{optionstyleup:function(){var t="",i="";this.options&&this.options.bg&&(i=this.options.bg),t="background:".concat(i);var e="",n=1;return this.options&&this.options.sc&&(n=this.options.sc),e="transform:scale(".concat(n,");"),e+t},optionstyle:function(){var t=[],i="",e="#949494",n=1;this.options&&this.options.cl&&(e=this.options.cl),this.options&&this.options.t&&(n=this.options.t),i="border-left: ".concat(n,"px solid ").concat(e,";border-bottom: ").concat(n,"px solid ").concat(e),t.push(i);var a="",o=22;this.options&&this.options.w&&(o=this.options.w),a="width:".concat(o,"rpx"),t.push(a);var s="",r=22;this.options&&this.options.h&&(r=this.options.h),s="height:".concat(r,"rpx"),t.push(s);var c="",v=1;return this.options&&this.options.sc&&(v=this.options.sc),1==this.type&&(c="transform:translate(25%, 0%) rotate(45deg) scale(".concat(v,");")),2==this.type&&(c="transform:translate(-25%, 0%) rotate(-135deg) scale(".concat(v,");")),3==this.type&&(c="transform:translate(0%, 40%) rotate(135deg) scale(".concat(v,");")),4==this.type&&(c="transform:translate(0%, -40%) rotate(-45deg) scale(".concat(v,");")),c+t.toString().replace(/,/g,";")}},methods:{}};i.default=n}}]);