(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["commonModules-bankInfo-bankInfo"],{"32e7":function(t,e,n){"use strict";var a=n("824b"),o=n.n(a);o.a},3660:function(t,e,n){"use strict";var a=n("4ea4");n("99af"),n("ac1f"),n("5319"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=a(n("5530")),i=n("2f62"),r=n("7658"),s={data:function(){return{pageContent:{},orderType:"",isToBack:""}},methods:{copyIt:function(){var t="".concat(this.pageContent.payee,",").concat(this.pageContent.bankAccount,",").concat(this.pageContent.recipientBank,",").concat(this.pageContent.accountOfOpening),e=t.replace(/\s/g,"");uni.setClipboardData({data:e,success:function(t){uni.showToast({title:"复制成功",icon:"success",duration:1e3,mask:!0})}})},toOrderList:function(){var t=this;uni.showToast({title:"线下付款后请您上传付款凭证,以便快速审核生产",icon:"none",duration:1500,mask:!0}),setTimeout((function(){console.log("🚀 ~ file: bankInfo.vue ~ line 90 ~ setTimeout ~ this.isToBack",t.isToBack),t.isToBack?uni.navigateBack():uni.redirectTo({url:"/orderModules/allOrder/allOrder"})}),1500)}},computed:(0,o.default)({},(0,i.mapState)(["isHaveJaw"])),onLoad:function(t){var e=this,n=t.orderId;this.isToBack=t.isToBack,2==t.orderType?(0,r.getQuoBankInfo)(n).then((function(t){if(t.success){var n=t.result;e.pageContent=n}else uni.showToast({title:t.message,icon:"none",duration:1500,mask:!0})})):(0,r.getBankInfo)(n).then((function(t){if(t.success){var n=t.result;e.pageContent=n}else uni.showToast({title:t.message,icon:"none",duration:1500,mask:!0})}))},onUnload:function(){uni.redirectTo({url:"/orderModules/allOrder/allOrder?order=1"})}};e.default=s},"64cb":function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,".transferInfo[data-v-12b47e09]{width:100vw;height:100vh;min-height:100vh;overflow:hidden}.transferInfo .theImgBox[data-v-12b47e09]{width:%?690?%;margin:%?30?% auto;color:#333;font-size:%?26?%}.transferInfo .theOutBox[data-v-12b47e09]{width:%?710?%;border-radius:%?8?%;box-shadow:0 0 6px 0 rgba(209,47,26,.08);margin:0 auto}.transferInfo .theOutBox .thePriceBox[data-v-12b47e09]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;width:%?650?%;height:%?100?%;margin:0 auto;border-bottom:%?2?% solid #e8e8e8}.transferInfo .theOutBox .thePriceBox .leftText[data-v-12b47e09]{font-size:%?28?%;color:#333}.transferInfo .theOutBox .thePriceBox .rightText[data-v-12b47e09]{font-size:%?26?%;color:#d12f1a}.transferInfo .theOutBox .thePriceBox .rightText .bigText[data-v-12b47e09]{font-size:%?34?%}.transferInfo .theOutBox .theContentBox[data-v-12b47e09]{width:%?650?%;margin:0 auto}.transferInfo .theOutBox .theContentBox .theTitle[data-v-12b47e09]{position:relative;height:%?100?%;line-height:%?100?%;color:#333;font-size:%?28?%}.transferInfo .theOutBox .theContentBox .theTitle .copyBtn[data-v-12b47e09]{position:absolute;right:%?5?%;top:%?30?%;width:%?88?%;height:%?36?%;line-height:%?36?%;border:%?1?% solid #ccc;border-radius:%?20?%;text-align:center;color:#333;font-size:%?20?%}.transferInfo .theOutBox .theContentBox .canCopyBox .everyRow[data-v-12b47e09]{position:relative;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;height:%?66?%}.transferInfo .theOutBox .theContentBox .canCopyBox .everyRow .leftText[data-v-12b47e09]{color:#999;font-size:%?26?%;margin-right:%?36?%;min-width:%?104?%}.transferInfo .theOutBox .theContentBox .canCopyBox .everyRow .rightText[data-v-12b47e09]{color:#333;font-size:%?26?%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.transferInfo .tipsBox[data-v-12b47e09]{width:%?690?%;margin:%?14?% auto 0;overflow:hidden}.transferInfo .tipsBox .theTitle[data-v-12b47e09]{height:%?56?%;line-height:%?56?%;color:#999;font-size:%?28?%}.transferInfo .tipsBox .everyRow[data-v-12b47e09]{font-size:%?24?%;color:#999}.transferInfo .btn[data-v-12b47e09]{position:absolute;bottom:%?20?%;left:%?40?%;width:%?670?%;height:%?76?%;background:#dc231e;line-height:%?76?%;text-align:center;font-size:%?28?%;color:#fff;border-radius:%?44?%}.transferInfo .bt40[data-v-12b47e09]{bottom:%?40?%}",""]),t.exports=e},7658:function(t,e,n){"use strict";var a=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.getCusInfo=e.getQuoBankInfo=e.getBankInfo=e.getExcOrderActualTotal=e.getOrderActualTotal=e.returnPay=e.payError=e.payTypes=e.userPredeposit=e.payto=void 0;var o=a(n("039e")),i=function(t,e){return o.default.post("/p/payment/payto/"+e,t)};e.payto=i;var r=function(t){return o.default.post("/p/payment/userPredeposit/"+t.payType,t,{isShowToast:!1})};e.userPredeposit=r;var s=function(){return o.default.post("/p/payTypes")};e.payTypes=s;var c=function(t){return o.default.get("/p/payment/payError",t)};e.payError=c;var u=function(t){return o.default.get("/p/payment/returnPay",t)};e.returnPay=u;var l=function(t){return o.default.post("/p/getOrderActualTotal",t)};e.getOrderActualTotal=l;var f=function(t){return o.default.post("/store/order/getPayMoneyAndScale",t,{isJson:!0})};e.getExcOrderActualTotal=f;var v=function(t){return o.default.get("/store/order/bankCardPay?orderId=".concat(t))};e.getBankInfo=v;var d=function(t){return o.default.post("/customized/p/bank_card_pay",{orderId:t})};e.getQuoBankInfo=d;var p=function(t){return o.default.get("/customized/p/getOrderPrice/".concat(t))};e.getCusInfo=p},"824b":function(t,e,n){var a=n("64cb");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var o=n("4f06").default;o("7190c638",a,!0,{sourceMap:!1,shadowMode:!1})},ee63:function(t,e,n){"use strict";var a;n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return a}));var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"transferInfo"},[n("v-uni-view",{staticClass:"theImgBox"},[t._v("请在"+t._s(t.pageContent.timeRemainingOfPay)+"内通过网上银行（网银）或银行柜台或手机银行向一撕得如下专属银行账户转账。")]),n("v-uni-view",{staticClass:"theOutBox"},[n("v-uni-view",{staticClass:"thePriceBox"},[n("v-uni-view",{staticClass:"leftText"},[t._v("应付总额")]),n("v-uni-view",{staticClass:"rightText"},[t._v("￥"),n("span",{staticClass:"bigText"},[t._v(t._s(t.pageContent.totalMoney))])])],1),n("v-uni-view",{staticClass:"theContentBox"},[n("v-uni-view",{staticClass:"theTitle"},[t._v("收付款信息"),n("v-uni-view",{staticClass:"copyBtn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.copyIt.apply(void 0,arguments)}}},[t._v("复制")])],1),n("v-uni-view",{staticClass:"canCopyBox"},[n("v-uni-view",{staticClass:"everyRow"},[n("v-uni-view",{staticClass:"leftText"},[t._v("账户信息")]),n("v-uni-view",{staticClass:"rightText"},[t._v(t._s(t.pageContent.payee))])],1),n("v-uni-view",{staticClass:"everyRow"},[n("v-uni-view",{staticClass:"leftText"},[t._v("银行账户")]),n("v-uni-view",{staticClass:"rightText"},[t._v(t._s(t.pageContent.bankAccount))])],1),n("v-uni-view",{staticClass:"everyRow"},[n("v-uni-view",{staticClass:"leftText"},[t._v("收款银行")]),n("v-uni-view",{staticClass:"rightText"},[t._v(t._s(t.pageContent.recipientBank))])],1),n("v-uni-view",{staticClass:"everyRow"},[n("v-uni-view",{staticClass:"leftText"},[t._v("开户支行")]),n("v-uni-view",{staticClass:"rightText"},[t._v(t._s(t.pageContent.accountOfOpening))])],1)],1)],1)],1),n("v-uni-view",{staticClass:"tipsBox"},[n("v-uni-view",{staticClass:"theTitle"},[t._v("特别提醒")]),n("v-uni-view",{staticClass:"everyRow"},[t._v("1.本订单支付只能向该账户转账，请勿向线下提供的任何银行账户转账。")]),n("v-uni-view",{staticClass:"everyRow"},[t._v("2.转账金额与订单金额务必保持一致，不得多转，不得少转，否则无法完成支付。")]),n("v-uni-view",{staticClass:"everyRow"},[t._v("3.一撕得收款账户到账后，订单即支付成功，具体到账时间以银行为准。")])],1),n("v-uni-view",{staticClass:"btn",class:{bt40:t.isHaveJaw},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toOrderList.apply(void 0,arguments)}}},[t._v("线下付款")])],1)},i=[]},f45b:function(t,e,n){"use strict";n.r(e);var a=n("ee63"),o=n("f576");for(var i in o)"default"!==i&&function(t){n.d(e,t,(function(){return o[t]}))}(i);n("32e7");var r,s=n("f0c5"),c=Object(s["a"])(o["default"],a["b"],a["c"],!1,null,"12b47e09",null,!1,a["a"],r);e["default"]=c.exports},f576:function(t,e,n){"use strict";n.r(e);var a=n("3660"),o=n.n(a);for(var i in a)"default"!==i&&function(t){n.d(e,t,(function(){return a[t]}))}(i);e["default"]=o.a}}]);