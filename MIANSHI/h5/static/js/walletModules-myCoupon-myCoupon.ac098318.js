(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["walletModules-myCoupon-myCoupon"],{2909:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=c;var i=r(a("6005")),n=r(a("db90")),o=r(a("06c5")),s=r(a("3427"));function r(t){return t&&t.__esModule?t:{default:t}}function c(t){return(0,i.default)(t)||(0,n.default)(t)||(0,o.default)(t)||(0,s.default)()}},"33c0":function(t,e,a){"use strict";var i=a("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.couponDetailApi=e.redpackProdList=e.couponProdList=e.couponCenter=e.myRedPack=e.activateCoupon=e.coupon=e.receive=void 0;var n=i(a("039e")),o=function(t){return n.default.post("/p/app/coupon/newReceive/"+t.couponId)};e.receive=o;var s=function(t){return n.default.post("/p/myCoupon",t,{isShowLoadding:!0})};e.coupon=s;var r=function(t){return n.default.post("/p/app/activateCoupon",t)};e.activateCoupon=r;var c=function(t){return n.default.post("/p/myRedPack",t,{isShowLoadding:!0})};e.myRedPack=c;var d=function(t){return n.default.post("/app/couponCenter",t,{isShowLoadding:!0})};e.couponCenter=d;var l=function(t){return n.default.post("/couponProdList",t,{isShowLoadding:!0})};e.couponProdList=l;var u=function(t){return n.default.post("/redpackProdList",t,{isShowLoadding:!0})};e.redpackProdList=u;var p=function(t){return n.default.post("/couponDetail/"+t.couponId)};e.couponDetailApi=p},3427:function(t,e,a){"use strict";function i(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}Object.defineProperty(e,"__esModule",{value:!0}),e.default=i},"4ef7":function(t,e,a){"use strict";var i=a("4ea4");a("c975"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i(a("5530")),o=i(a("c284")),s=i(a("5462")),r=a("33c0"),c=a("2f62"),d=new s.default(r.coupon),l={components:{"more-list":o.default},data:function(){return{imgUrlHead:this.$imgUrlHead,staticServer:this.$staticServer,params:{useStatus:1},list:[],paging:{status:"loading",error:!1,emptylist:!1}}},computed:(0,n.default)({},(0,c.mapState)(["themes"])),watch:{},onShow:function(){this.params.useStatus=1,d.loadListByPage(this,this.params)},onReachBottom:function(){d.loadListByPageMore()},methods:{changeStatus:function(t){this.params.useStatus=t,d.loadListByPage(this,this.params)},userNow:function(t,e){var a=e.indexOf("定制胶带");a>-1?this.$navigateTo("/pages/webview/webviewCustom?url=https%3A%2F%2Faced-editor.yiside.com%2Ftape.html%3Fsource%3Dcustomized%26channel%3D1%26openId%3Do8GFd5SM1yOXwZAu5oiVUml3Oo74%26where%3Dtape"):this.$navigateTo("/walletModules/myCoupon/couponGoods?couponId=".concat(t))}}};e.default=l},5051:function(t,e,a){"use strict";a.r(e);var i=a("4ef7"),n=a.n(i);for(var o in i)"default"!==o&&function(t){a.d(e,t,(function(){return i[t]}))}(o);e["default"]=n.a},5462:function(t,e,a){"use strict";var i=a("4ea4");a("d3b7"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i(a("2909")),o=i(a("5530")),s=i(a("d4ec")),r=i(a("bee2")),c=i(a("ade3")),d=a("2ef0"),l={SUCCESS:"00",EMPTY_LIST:"01",OTHER:"99"},u=function(){function t(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};(0,s.default)(this,t),(0,c.default)(this,"_api",null),(0,c.default)(this,"_config",{field:{list:"list",paging:"paging",currPage:"curPageNO",pageSize:"pageSize"}}),(0,c.default)(this,"_paging",{vueThat:null,params:null,options:null}),(0,c.default)(this,"handleSuccessCode",l),a=d.merge(this._config,a),this._api=e,this._config=a}return(0,r.default)(t,[{key:"loadListByPage",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};e=(0,o.default)({},e),a=(0,o.default)({},a);var i={before:null,success:null,error:null,complete:null,listHandler:null};a=d.merge(i,a),a.before&&a.before(),console.debug("vueThat: %o, params: %o, options: %o",e,t,a);var n=this,s=n._config.field.list,r=n._config.field.paging,c=n._config.field.currPage,l=n._config.field.pageSize;t[r]||(t[r]={}),t[r].currPage=1,t[r].pageSize=10,t[r].pageCount=0,t[r].total=0,t[r].status="loading",t[s]=[],e[c]?t[r].currPage=e[c]:e[c]=t[r].currPage,e[l]?t[r].pageSize=e[l]:e[l]=t[r].pageSize,n._paging.vueThat=t,n._paging.params=e,n._paging.options=a,p.handlePage(this,t,e,a)}},{key:"loadListByPageMore",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this._config.field.paging;setTimeout((function(){var a=t._config.field.paging,i=t._paging,n=i.vueThat;if(e=d.merge(i.options,e),e.before&&e.before(),n[a].total<=0)t.loadListByPageRefresh();else{n[a].currPage>n[a].pageCount&&(n[a].currPage=n[a].pageCount);var o=n[a].currPage*n[a].pageSize;if(o>=n[a].total)n[a].status="noMore";else{var s=t._config.field.currPage,r=i.params;r[s]=n[a].currPage+1,p.handlePage(t,n,r,e)}}}),500)}},{key:"loadListByPageRefresh",value:function(){var t=this._paging,e=t.vueThat,a=t.params,i=t.options;p.handlePage(this,e,a,i)}}]),t}(),p={handlePage:function(t,e,a,i){var o=t._config.field.paging,s=t._config.field.list;e[o].status="loading",t._api(a).then((function(t){console.debug("接口调用结果：%o",t);var a=l.SUCCESS;if(1==t.status||"0000"==t.code){var r;if(t.result?(e[o].currPage=t.result.currPage,e[o].pageSize=t.result.pageSize,e[o].pageCount=t.result.pageCount,e[o].total=t.result.total):a=l.EMPTY_LIST,t.result&&t.result.resultList)if(i.listHandler&&(t.result.resultList=i.listHandler(t.result.resultList)),1==t.result.currPage)e[s]=t.result.resultList;else(r=e[s]).push.apply(r,(0,n.default)(t.result.resultList));else a=l.EMPTY_LIST;e[s]&&e[s].length?e[o].emptylist=!1:e[o].emptylist=!0}else e[o].error=!0,a=l.OTHER;i.success&&i.success(a,t)})).catch((function(t){console.debug("接口调用异常：%o",t),e[o].error=!0,i.error&&i.error(t)})).finally((function(t){e[o].currPage==e[o].pageCount?e[o].status="noMore":e[o].pageCount>e[o].currPage?e[o].status="more":"loading"==e[o].status&&setTimeout((function(){e[o].status="more"}),5e3),i.complete&&i.complete(t)}))}},f=u;e.default=f},6005:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=o;var i=n(a("6b75"));function n(t){return t&&t.__esModule?t:{default:t}}function o(t){if(Array.isArray(t))return(0,i.default)(t)}},6630:function(t,e,a){"use strict";var i;a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return o})),a.d(e,"a",(function(){return i}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"w750",class:t.paging.emptylist?"#fff":"bgf5",style:{"--themescolor":t.themes.color}},[a("v-uni-view",{staticStyle:{height:"44px"}},[a("v-uni-view",{staticClass:"m-tabs position-fixed top-0 bg-white"},[a("v-uni-view",{staticClass:"item",class:{"line-on":1==t.params.useStatus},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.changeStatus(1)}}},[a("v-uni-text",{staticClass:"txt"},[t._v("未使用")])],1),a("v-uni-view",{staticClass:"item",class:{"line-on":2==t.params.useStatus},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.changeStatus(2)}}},[a("v-uni-text",{staticClass:"txt"},[t._v("已使用")])],1),a("v-uni-view",{staticClass:"item",class:{"line-on":""==t.params.useStatus},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.changeStatus("")}}},[a("v-uni-text",{staticClass:"txt"},[t._v("已过期")])],1)],1)],1),a("v-uni-view",{staticClass:"safearea-bb pb-12"},[a("more-list",{attrs:{status:t.paging.status}},[t.paging.emptylist?t._e():a("v-uni-view",{staticClass:"get-coupons"},t._l(t.list,(function(e,i){return a("v-uni-view",{key:i,staticClass:"list-item",class:[1==t.params.useStatus?"coupon-got":"used"]},[a("v-uni-view",{staticClass:"left h-100 border-box"},[a("v-uni-view",{staticClass:"num"},[t._v("￥"),a("v-uni-text",{staticClass:"price",style:{"font-size":String(e.offPrice).length>6?"40rpx":"48rpx"}},[t._v(t._s(e.offPrice))])],1),a("v-uni-text",{staticClass:"condition"},[t._v("满"+t._s(e.fullPrice)+"元可用")])],1),a("v-uni-view",{staticClass:"right"},[a("v-uni-view",{staticClass:"des"},["platform"==e.couponProvider||"shop"==e.couponProvider?void 0:t._e(),a("v-uni-view",{staticClass:"discount"},[t._v(t._s(e.couponName))]),a("v-uni-view",{staticClass:"application"},[t._v(t._s(e.description))])],2),a("v-uni-view",{staticClass:"han"},[a("v-uni-text",{staticClass:"use-time"},[t._v("使用期限"+t._s(t._f("dateformat")(e.startDate,"MM.DD"))+"-"+t._s(t._f("dateformat")(e.endDate,"MM.DD")))]),1==t.params.useStatus?a("v-uni-button",{staticClass:"get-btn can-use",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.userNow(e.couponId,e.couponName)}}},[t._v("立即使用")]):2==t.params.useStatus?a("v-uni-button",{staticClass:"get-btn used"},[t._v("已使用")]):""==t.params.useStatus?a("v-uni-button",{staticClass:"get-btn used"},[t._v("已过期")]):t._e()],1)],1),a("v-uni-view",{staticClass:"status-tips-img"},[1==t.params.useStatus?a("v-uni-image",{staticClass:"img",attrs:{src:t.staticServer+"static/images/received.png",mode:""}}):t._e(),2==t.params.useStatus?a("v-uni-image",{staticClass:"img",attrs:{src:t.staticServer+"static/images/used.png",mode:""}}):t._e(),""==t.params.useStatus?a("v-uni-image",{staticClass:"img",attrs:{src:t.staticServer+"static/images/expired.png",mode:""}}):t._e()],1)],1)})),1)],1)],1),t.paging.emptylist?a("v-uni-view",{staticClass:"empty"},[a("v-uni-view",{staticClass:"item-img"},[t.staticServer?a("v-uni-image",{staticClass:"img",attrs:{src:t.staticServer+"static/images/youhuiquan.png",alt:""}}):t._e()],1),a("v-uni-view",{staticClass:"item-txt"},[t._v("您没有可用优惠券")])],1):t._e(),a("v-uni-view",{staticClass:"coupon-btn safearea-bb-white"},[a("v-uni-view",{staticClass:"btn-a",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.$navigateTo("/walletModules/recCenter/recCenter")}}},[t._v("领券中心")]),a("v-uni-view",{staticClass:"btn-a",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.$navigateTo("/walletModules/myCoupon/recPacket?getType=shop")}}},[t._v("卡密领券")])],1)],1)},o=[]},"9afd":function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,".m-tabs[data-v-7bfd5a1c]{position:fixed;width:100%;max-width:750px;top:0;z-index:89}\r\n\r\n/* 领优惠券 */.coupons-img[data-v-7bfd5a1c]{width:100%;height:150px;font-size:0}.coupons-img .img[data-v-7bfd5a1c]{width:100%;height:100%}.get-coupons[data-v-7bfd5a1c]{padding:0 %?28?%}.get-coupons .list-item[data-v-7bfd5a1c]{margin:15px 0;position:relative;height:100px;background:#fff}.get-coupons .list-item .status-tips-img[data-v-7bfd5a1c]{position:absolute;right:0;top:0;width:42px;height:42px}.get-coupons .list-item .status-tips-img .img[data-v-7bfd5a1c]{width:42px;height:42px}.get-coupons .list-item .left[data-v-7bfd5a1c]{float:left;color:#fff;text-align:center;border-left:1px dashed #fff;padding:19px 0;background:-webkit-gradient(linear,left top,right top,from(#6c96da),to(#6b83d7));background:-o-linear-gradient(left,#6c96da,#6b83d7);background:-webkit-linear-gradient(left,#6c96da,#6b83d7);background:linear-gradient(left,#6c96da,#6b83d7);background:-webkit-linear-gradient(left,#ffa032,#ffa032);width:109px;margin-right:10px}.get-coupons .list-item .left .num[data-v-7bfd5a1c]{font-weight:500;font-size:16px;height:43px;line-height:55px;font-family:arial}.get-coupons .list-item .left .num .price[data-v-7bfd5a1c]{font-size:%?56?%;line-height:43px}.get-coupons .list-item .left .condition[data-v-7bfd5a1c]{font-size:%?24?%;line-height:20px;display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;padding:0 5px;font-family:arial}.get-coupons .list-item .right[data-v-7bfd5a1c]{\r\n    /* margin-left: 135px; */padding-top:8px;margin-right:10px}.get-coupons .list-item .right .des[data-v-7bfd5a1c]{height:50px;font-size:12px;line-height:18px;overflow:hidden;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;text-overflow:ellipsis;word-break:break-all;font-weight:600}.get-coupons .list-item .right .des .coupon-style[data-v-7bfd5a1c]{display:inline-block;padding:0 8px;height:15px;line-height:15px;font-size:10px;background:#6191cf;color:#fff;border-radius:15px;margin-right:5px;vertical-align:top;font-weight:400;font-family:arial;margin-top:3px;font-weight:600}.get-coupons .list-item .right .han[data-v-7bfd5a1c]{height:22px;line-height:22px;display:-webkit-flex;display:-webkit-box;display:-moz-box;display:-ms-flexbox;display:flex;margin-top:10px}.get-coupons .list-item .right .han .use-time[data-v-7bfd5a1c]{display:block;-webkit-flex:1;-ms-flex:1;-webkit-box-flex:1;-moz-box-flex:1;flex:1;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;font-family:arial;font-size:12px;color:#999}\r\n\r\n/*  */.get-coupons .list-item .right .han .get-btn[data-v-7bfd5a1c]{width:66px;height:24px;border-radius:12px;font-size:12px;line-height:22px;padding:0}\r\n\r\n/* 已使用 已过期 */.get-coupons .list-item .right .han .used[data-v-7bfd5a1c]{border:1px solid #999;background:#fff}\r\n\r\n/* 可领取 */.get-coupons .list-item .right .han .receive[data-v-7bfd5a1c]{background:#ffa032;color:#fff}\r\n\r\n/* 可使用 */.get-coupons .list-item .right .han .can-use[data-v-7bfd5a1c]{border:1px solid #ffa032;color:#ffa032;background:#fff}.get-coupons .list-item .right .det[data-v-7bfd5a1c]{display:block;font-size:10px;margin-top:8px;border-top:1px dashed #ddd;line-height:21px;font-family:arial;position:relative}.get-coupons .list-item .right .det[data-v-7bfd5a1c]:before{content:\"\";display:block;height:14px;width:14px;\r\n    /*background: url('~@/static/images/shopicon.png') no-repeat;*/background-size:14px;background-position:50%;position:absolute;left:0;top:3px}\r\n\r\n/* 红包样式 */.get-coupons .list-item.red-packet .left[data-v-7bfd5a1c]{background:-webkit-gradient(linear,left top,right top,from(#f66f7c),to(#ed5564));background:-o-linear-gradient(left,#f66f7c,#ed5564);background:linear-gradient(left,#f66f7c,#ed5564);background:-webkit-linear-gradient(left,#f66f7c,#ed5564)}.get-coupons .list-item.red-packet .right .coupon-style[data-v-7bfd5a1c]{background:#ed5564}.get-coupons .list-item.red-packet .right .det[data-v-7bfd5a1c]:before{\r\n    /*background: url('~@/static/images/stageicon.png') no-repeat;*/background-size:14px}\r\n\r\n/* 红包已领 */\r\n\r\n/* .get-coupons .list-item.red-got .right .han .get-btn {\r\n  background: #fff;\r\n  color: #ed5564;\r\n} */\r\n\r\n/* end 红包已领 */\r\n\r\n/* end 红包样式 */\r\n\r\n/* 已过期,已抢光,已使用 */.get-coupons .list-item.used .left[data-v-7bfd5a1c]{background:#c2c2c2}.get-coupons .list-item.used .right[data-v-7bfd5a1c]{color:#999}.get-coupons .list-item.used .right .coupon-style[data-v-7bfd5a1c]{background:#c2c2c2}.get-coupons .list-item.used .right .han .get-btn[data-v-7bfd5a1c]{background:#fff;color:#aaa;border-color:#c2c2c2}.get-coupons .list-item.used .right .det[data-v-7bfd5a1c]:before{opacity:.6}\r\n\r\n/* 已过期,已抢光,已使用 */@media screen and (max-width:374px){.get-coupons .list-item .left .condition[data-v-7bfd5a1c],\r\n    .get-coupons .list-item .right .des[data-v-7bfd5a1c],\r\n    .get-coupons .list-item .right .des .coupon-style[data-v-7bfd5a1c],\r\n    .get-coupons .list-item .right .han .use-time[data-v-7bfd5a1c],\r\n    .get-coupons .list-item .right .han .get-btn[data-v-7bfd5a1c]{font-size:10px}}.coupon-btn[data-v-7bfd5a1c]{padding:10px;position:fixed;bottom:0;background:#fff;width:100%;max-width:750px;box-shadow:0 -1px 3px rgba(0,0,0,.05)}.coupon-btn .btn-a[data-v-7bfd5a1c]{display:block;float:left;width:50%;text-align:center;position:relative;line-height:28px;font-size:16px}.coupon-btn .btn-a[data-v-7bfd5a1c]:first-child:after{height:20px;width:1px;content:\" \";display:block;font-size:0;background:#ccc;position:absolute;right:0;top:6px}.coupon-btn .btn-a.cur[data-v-7bfd5a1c]{color:var(--themescolor)}\r\n\r\n/* end 领优惠券 */\r\n\r\n/* 卡密领券 */.rec-bg[data-v-7bfd5a1c]{width:100%;height:125px;font-size:0}.rec-bg .img[data-v-7bfd5a1c]{width:100%;height:100%}.rec-packet[data-v-7bfd5a1c]{background:#fff;padding:0 14px;margin-top:5px;border-top:%?2?% solid #e8e8e8;padding-right:0}.rec-packet .item[data-v-7bfd5a1c]{padding:20px 0;display:-webkit-flex;display:-webkit-box;display:-moz-box;display:-ms-flexbox;display:flex;border-bottom:1px solid #f1f1f1;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.rec-packet .item .secretnumber[data-v-7bfd5a1c]{font-size:%?32?%;color:#666;margin-right:%?56?%}.rec-packet .item .item-input[data-v-7bfd5a1c]{height:30px;font-size:16px;-webkit-flex:1;-ms-flex:1;-webkit-box-flex:1;-moz-box-flex:1;flex:1;color:#b8b8b8}.rec-packet .item .img-code[data-v-7bfd5a1c]{display:block;height:30px;font-size:0;margin-left:5px;padding-right:%?28?%}.rec-packet .item .img-code .img[data-v-7bfd5a1c]{width:66px;height:100%}\r\n\r\n/* end 卡密领券 */.empty[data-v-7bfd5a1c]{margin-top:-20px}.det .img[data-v-7bfd5a1c]{width:18px;height:18px;vertical-align:middle;margin-right:3px}.bg-red[data-v-7bfd5a1c]{background-color:#dc231e}\r\n\r\n/* 为空 */.empty[data-v-7bfd5a1c]{padding:1rem 0;text-align:center;background:#fff}.empty .item-img[data-v-7bfd5a1c]{width:356px;height:215px;margin:auto;font-size:0;line-height:100px\r\n  /* border: 1px dashed #DEDEDE; */}.empty .item-img .img[data-v-7bfd5a1c]{width:310px;height:185px;\r\n  /* margin: 30px auto; */margin-top:30px}.empty .item-txt[data-v-7bfd5a1c]{font-size:14px;margin-top:30px;color:#000}.empty .item-btn[data-v-7bfd5a1c]{padding:8px 36px;display:inline-block;margin:20px auto 0;color:#fff;border-radius:30px;font-size:14px;cursor:pointer;background:#dc231e}\r\n\r\n/* end 为空 */\r\n\r\n/* .empty .item-btn {\r\n  background: #DC231E;\r\n} */.discount[data-v-7bfd5a1c]{font-size:%?32?%;color:#333;margin-top:%?16?%;margin-bottom:%?10?%;font-weight:400}.application[data-v-7bfd5a1c]{font-size:%?28?%;color:#666;font-weight:400}.bgf5[data-v-7bfd5a1c]{background:#f5f5f5}",""]),t.exports=e},cf4e:function(t,e,a){"use strict";var i=a("e6a3"),n=a.n(i);n.a},db90:function(t,e,a){"use strict";function i(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}a("a4d3"),a("e01a"),a("d28b"),a("a630"),a("d3b7"),a("3ca3"),a("ddb0"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=i},e6a3:function(t,e,a){var i=a("9afd");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("7917dfc8",i,!0,{sourceMap:!1,shadowMode:!1})},f953:function(t,e,a){"use strict";a.r(e);var i=a("6630"),n=a("5051");for(var o in n)"default"!==o&&function(t){a.d(e,t,(function(){return n[t]}))}(o);a("cf4e");var s,r=a("f0c5"),c=Object(r["a"])(n["default"],i["b"],i["c"],!1,null,"7bfd5a1c",null,!1,i["a"],s);e["default"]=c.exports}}]);