(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["commonModules-address-addressList"],{"0756":function(e,t,a){"use strict";var i=a("a1e1"),r=a.n(i);r.a},"0f50":function(e,t,a){"use strict";var i;a.d(t,"b",(function(){return r})),a.d(t,"c",(function(){return s})),a.d(t,"a",(function(){return i}));var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",{staticClass:"w750",style:{"--themescolor":e.themes.color}},[e.paging.emptylist?e._e():a("v-uni-view",{staticClass:"delivery safearea-bb"},[a("v-uni-view",{staticClass:"news"},[a("more-list",{attrs:{status:e.paging.status}},[e._l(e.list,(function(t,i){return[a("v-uni-view",{key:i+"_0",staticClass:"del-address",class:1==t.commonAddr?"on":"",on:{click:function(a){arguments[0]=a=e.$handleEvent(a),e.setDefault(t.addrId)}}},[a("v-uni-text",{staticClass:"choose",class:{cur:1==t.commonAddr}}),a("v-uni-view",{staticClass:"address-con"},[a("v-uni-view",{staticClass:"item-p"},[1==t.commonAddr?a("v-uni-text",{staticClass:"def moren"},[e._v("默认")]):e._e(),a("v-uni-text",{staticClass:"name"},[e._v(e._s(t.province)+" "+e._s(t.city)+" "+e._s(t.area))])],1),a("v-uni-view",{staticClass:"det"},[e._v(e._s(t.subAdds)+" "+e._s(t.houseNumber||""))]),a("v-uni-view",{staticClass:"item-b"},[a("v-uni-text",{staticClass:"name"},[e._v(e._s(t.receiver))]),a("v-uni-text",{staticClass:"phone"},[e._v(e._s(t.mobile))])],1)],1),a("v-uni-view",{staticClass:"edit",on:{click:function(a){a.stopPropagation(),arguments[0]=a=e.$handleEvent(a),e.goAdd(t.addrId)}}},[e.staticServer?a("v-uni-image",{staticClass:"img",attrs:{src:e.staticServer+"static/images/icon/edit.png",alt:""}}):e._e()],1)],1)]}))],2)],1)],1),e.paging.emptylist?a("Noempty",{attrs:{type:1,title:"暂无相关地址列表"}}):e._e(),a("v-uni-view",{staticClass:"btn-box new-address",class:{"pb-4":e.isHaveJaw}},[a("v-uni-text",{staticClass:"safearea-bb-white changeBackground flex-1 h-76-m-16-14 new-but-main font-28",on:{click:function(t){t.stopPropagation(),arguments[0]=t=e.$handleEvent(t),e.goAdd("")}}},[e._v("新增地址")])],1)],1)},s=[]},1203:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAMAAADW3miqAAAAV1BMVEUAAADMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzJZiN8AAAAHHRSTlMAZvjcCgYU188W8+3JxaWbNzCoWXdEIXhFIqlal8sWUAAAAPdJREFUOMuNlO1yhCAMRRO+UVR0XXXb+/7P2bHd7tAWac5P5swEQm6oZOMx9Er1YeSN6twGFAy3inL3QPfGOVobMy8d4O+/FDMBmk1xwBqYTOm4BLVa+oFdFZIrHA890x9mDf+yTEKIVCEGpO+KE3SkKk5jer4LaqYLZoWvN3rsdMkO/9lDaHstWY2zqwOYGjAGog2daUmmw4MYCzVZwDSe1dr1RgrIbSkjUA/Xlhx6UrBtyUKJJFE50cVFLZA18yH4FskHS0eFPNZraYWXjO/xCoJrBEESKXk4T2KC2msxj8KFUXJ4oFs4O2vdc/Uc/y+xdyoQrMMPussTg5D7grgAAAAASUVORK5CYII="},"22c5":function(e,t,a){"use strict";var i;a.d(t,"b",(function(){return r})),a.d(t,"c",(function(){return s})),a.d(t,"a",(function(){return i}));var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",{staticClass:"no-empty",class:e.heightStyle,style:{backgroundColor:e.bgColor}},[a("v-uni-view",[a("v-uni-view",{staticClass:"item-img",style:{marginTop:e.marginTop+"px"}},[e.pic?a("v-uni-image",{staticClass:"image",attrs:{src:e.pic}}):e._e()],1),a("v-uni-view",{staticClass:"item-txt"},[e._v(e._s(e.title))])],1)],1)},s=[]},2909:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=d;var i=n(a("6005")),r=n(a("db90")),s=n(a("06c5")),o=n(a("3427"));function n(e){return e&&e.__esModule?e:{default:e}}function d(e){return(0,i.default)(e)||(0,r.default)(e)||(0,s.default)(e)||(0,o.default)()}},"29c0":function(e,t,a){"use strict";var i=a("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.getCompleteArea=t.getInfo=t.getGaiaProductOtherPrice=t.setDefaultAddress=t.syscGaiaProductPrice=t.getHint=t.loadAreasCode=t.loadAreas=t.loadCities=t.loadProvinces=t.deladdress=t.saveAddress=t.loadAddress=t.defaultaddress=t.excAddressList=t.addressList=void 0;var r=i(a("039e")),s=function(e){return r.default.post("/p/addressList",e)};t.addressList=s;var o=function(e){return r.default.get("/store/address/getAddressList")};t.excAddressList=o;var n=function(e){return r.default.post("/p/defaultaddress",e)};t.defaultaddress=n;var d=function(e){return r.default.post("/p/loadAddress",e)};t.loadAddress=d;var l=function(e){return r.default.post("/p/saveAddress",e)};t.saveAddress=l;var c=function(e){return r.default.post("/p/deladdress",e)};t.deladdress=c;var u=function(e){return r.default.post("/common/loadProvinces",e)};t.loadProvinces=u;var f=function(e){return r.default.post("/common/loadCities/"+e.provinceid)};t.loadCities=f;var p=function(e){return r.default.post("/common/loadAreas/"+e.loadAreas)};t.loadAreas=p;var g=function(e){return r.default.post("/common/getAreaCodeList/"+e.loadAreas)};t.loadAreasCode=g;var v=function(e){return r.default.get("/customized/p/findInputPrompt?"+e)};t.getHint=v;var b=function(e){return r.default.post("/p/proofing/order/syscGaiaProductPrice",e,{isJson:!0})};t.syscGaiaProductPrice=b;var m=function(e){return r.default.post("/store/address/setDefaultAddress",e,{isJson:!0})};t.setDefaultAddress=m;var h=function(e){return r.default.post("/p/proofing/order/getGaiaProductOtherPrice",e,{isJson:!0})};t.getGaiaProductOtherPrice=h;var x=function(e){return r.default.get("/p/getRecentAddress",e,{isShowToast:!1})};t.getInfo=x;var y=function(e){return r.default.get("/get_complete_area_by_code?areaCode="+e)};t.getCompleteArea=y},"2cd2":function(e,t,a){"use strict";a.r(t);var i=a("ebe3"),r=a.n(i);for(var s in i)"default"!==s&&function(e){a.d(t,e,(function(){return i[e]}))}(s);t["default"]=r.a},3427:function(e,t,a){"use strict";function i(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}Object.defineProperty(t,"__esModule",{value:!0}),t.default=i},"4e1c":function(e,t,a){"use strict";a.r(t);var i=a("0f50"),r=a("53da");for(var s in r)"default"!==s&&function(e){a.d(t,e,(function(){return r[e]}))}(s);a("0756");var o,n=a("f0c5"),d=Object(n["a"])(r["default"],i["b"],i["c"],!1,null,"6504b757",null,!1,i["a"],o);t["default"]=d.exports},"53da":function(e,t,a){"use strict";a.r(t);var i=a("c926"),r=a.n(i);for(var s in i)"default"!==s&&function(e){a.d(t,e,(function(){return i[e]}))}(s);t["default"]=r.a},5462:function(e,t,a){"use strict";var i=a("4ea4");a("d3b7"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(a("2909")),s=i(a("5530")),o=i(a("d4ec")),n=i(a("bee2")),d=i(a("ade3")),l=a("2ef0"),c={SUCCESS:"00",EMPTY_LIST:"01",OTHER:"99"},u=function(){function e(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};(0,o.default)(this,e),(0,d.default)(this,"_api",null),(0,d.default)(this,"_config",{field:{list:"list",paging:"paging",currPage:"curPageNO",pageSize:"pageSize"}}),(0,d.default)(this,"_paging",{vueThat:null,params:null,options:null}),(0,d.default)(this,"handleSuccessCode",c),a=l.merge(this._config,a),this._api=t,this._config=a}return(0,n.default)(e,[{key:"loadListByPage",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};t=(0,s.default)({},t),a=(0,s.default)({},a);var i={before:null,success:null,error:null,complete:null,listHandler:null};a=l.merge(i,a),a.before&&a.before(),console.debug("vueThat: %o, params: %o, options: %o",t,e,a);var r=this,o=r._config.field.list,n=r._config.field.paging,d=r._config.field.currPage,c=r._config.field.pageSize;e[n]||(e[n]={}),e[n].currPage=1,e[n].pageSize=10,e[n].pageCount=0,e[n].total=0,e[n].status="loading",e[o]=[],t[d]?e[n].currPage=t[d]:t[d]=e[n].currPage,t[c]?e[n].pageSize=t[c]:t[c]=e[n].pageSize,r._paging.vueThat=e,r._paging.params=t,r._paging.options=a,f.handlePage(this,e,t,a)}},{key:"loadListByPageMore",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this._config.field.paging;setTimeout((function(){var a=e._config.field.paging,i=e._paging,r=i.vueThat;if(t=l.merge(i.options,t),t.before&&t.before(),r[a].total<=0)e.loadListByPageRefresh();else{r[a].currPage>r[a].pageCount&&(r[a].currPage=r[a].pageCount);var s=r[a].currPage*r[a].pageSize;if(s>=r[a].total)r[a].status="noMore";else{var o=e._config.field.currPage,n=i.params;n[o]=r[a].currPage+1,f.handlePage(e,r,n,t)}}}),500)}},{key:"loadListByPageRefresh",value:function(){var e=this._paging,t=e.vueThat,a=e.params,i=e.options;f.handlePage(this,t,a,i)}}]),e}(),f={handlePage:function(e,t,a,i){var s=e._config.field.paging,o=e._config.field.list;t[s].status="loading",e._api(a).then((function(e){console.debug("接口调用结果：%o",e);var a=c.SUCCESS;if(1==e.status||"0000"==e.code){var n;if(e.result?(t[s].currPage=e.result.currPage,t[s].pageSize=e.result.pageSize,t[s].pageCount=e.result.pageCount,t[s].total=e.result.total):a=c.EMPTY_LIST,e.result&&e.result.resultList)if(i.listHandler&&(e.result.resultList=i.listHandler(e.result.resultList)),1==e.result.currPage)t[o]=e.result.resultList;else(n=t[o]).push.apply(n,(0,r.default)(e.result.resultList));else a=c.EMPTY_LIST;t[o]&&t[o].length?t[s].emptylist=!1:t[s].emptylist=!0}else t[s].error=!0,a=c.OTHER;i.success&&i.success(a,e)})).catch((function(e){console.debug("接口调用异常：%o",e),t[s].error=!0,i.error&&i.error(e)})).finally((function(e){t[s].currPage==t[s].pageCount?t[s].status="noMore":t[s].pageCount>t[s].currPage?t[s].status="more":"loading"==t[s].status&&setTimeout((function(){t[s].status="more"}),5e3),i.complete&&i.complete(e)}))}},p=u;t.default=p},6005:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=s;var i=r(a("6b75"));function r(e){return e&&e.__esModule?e:{default:e}}function s(e){if(Array.isArray(e))return(0,i.default)(e)}},"6e92":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAMAAADW3miqAAAAOVBMVEUAAAD///////////////////////////////////////////////////////////////////////8KOjVvAAAAEnRSTlMAv43tRoglhCDoqynCwLulfFUq+JP3AAAAXElEQVQ4y+2OOQ7AIAwEnYskkHP//1igAIqVgApRMJ2l0axl0BGvLjsTUOPMDZ1NiMNUdIC1vLVEK23x3Bms5DAqtG7a4tYF7P7MtH7tnRzGWfwPt7jDqOeTQQdY9vMEGWQ0zMIAAAAASUVORK5CYII="},"7c49":function(e,t,a){var i=a("24fb");t=i(!1),t.push([e.i,".height100[data-v-8f80aa68]{padding-top:100px}.no-empty[data-v-8f80aa68]{text-align:center}.no-empty .item-img[data-v-8f80aa68]{width:%?650?%;height:%?364?%;margin:%?180?% auto 0;font-size:0;line-height:150px;margin-bottom:20px}.no-empty .item-img .image[data-v-8f80aa68]{width:100%;height:100%}.no-empty .item-img .image[data-v-8f80aa68]:last-child{content:\"'\\E534'\";font-size:40px;font-family:uniicons;color:#8f8f94}.no-empty .item-txt[data-v-8f80aa68]{font-size:18px;color:#000;line-height:40px}",""]),e.exports=t},"873f":function(e,t,a){"use strict";a.r(t);var i=a("22c5"),r=a("2cd2");for(var s in r)"default"!==s&&function(e){a.d(t,e,(function(){return r[e]}))}(s);a("9cd7");var o,n=a("f0c5"),d=Object(n["a"])(r["default"],i["b"],i["c"],!1,null,"8f80aa68",null,!1,i["a"],o);t["default"]=d.exports},"9cd7":function(e,t,a){"use strict";var i=a("bcb9"),r=a.n(i);r.a},a1e1:function(e,t,a){var i=a("ae3a");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var r=a("4f06").default;r("63fc81d1",i,!0,{sourceMap:!1,shadowMode:!1})},ae3a:function(e,t,a){var i=a("24fb"),r=a("1de5"),s=a("1203"),o=a("6e92");t=i(!1);var n=r(s),d=r(o);t.push([e.i,'/* 收货地址 */.delivery[data-v-6504b757]{background:#fff;padding:0 14px;padding-bottom:48px}.delivery .del-address[data-v-6504b757]{background:#fff;padding:10px 0;line-height:24px;position:relative;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.delivery .del-address[data-v-6504b757]::before{content:" ";position:absolute;bottom:%?0?%;right:%?-50?%;width:100%;height:%?2?%;background:#f1f1f1;display:inline-block}.delivery .del-address .choose[data-v-6504b757]{display:block;width:20px;height:20px;cursor:pointer;font-size:0;background:url('+n+") no-repeat;background-size:18px 18px}.delivery .del-address .choose.cur[data-v-6504b757]{background:url("+d+') no-repeat;background-size:20px 20px;border-radius:50%;\r\n    /* background-color: var(--themescolor); */background-color:#d12f1a}.delivery .del-address .address-con[data-v-6504b757]{\r\n    /* margin: 0 28px 0 0; */max-width:%?540?%;margin:0 28px}\r\n/* .delivery .del-address.on .address-con {\r\n    margin: 0 28px;\r\n} */.delivery .del-address .address-con .item-p[data-v-6504b757]{white-space:nowrap;text-overflow:ellipsis;overflow:hidden;margin:%?10?% 0}.delivery .del-address .address-con .item-p .name[data-v-6504b757]{font-family:PingFangSC-Regular;font-size:%?24?%;color:#666;letter-spacing:0}.delivery .del-address .address-con .item-p .phone[data-v-6504b757]{font-size:%?28?%;font-family:arial;margin-left:13px}.delivery .del-address .address-con .item-b[data-v-6504b757]{font-family:PingFangSC-Regular;font-size:%?24?%;color:#666;letter-spacing:0;margin-top:%?12?%}.delivery .del-address .address-con .item-b .name[data-v-6504b757]{margin-right:%?20?%}.delivery .del-address .address-con .item-p .warehouseName[data-v-6504b757]{display:inline-block;line-height:%?36?%;background:rgba(24,161,255,.1);color:#18a1ff;padding:0 %?8?%;border-radius:%?4?%;font-size:%?20?%;margin-right:%?20?%}.delivery .del-address .address-con .item-p .def[data-v-6504b757]{display:inline-block;line-height:%?36?%;background:rgba(220,35,30,.1);color:#dc231e;padding:0 %?8?%;border-radius:%?4?%;font-size:%?20?%;margin-right:%?20?%}.delivery .del-address .address-con .det[data-v-6504b757]{font-family:PingFangSC-Medium;font-size:16px;color:#333;letter-spacing:0}.delivery .del-address .edit[data-v-6504b757]{position:absolute;top:calc(50%+9px);right:0;display:block;font-size:0;width:18px;height:18px}.delivery .del-address .edit .img[data-v-6504b757]{width:100%;height:100%}\r\n/* end 收货地址 */\r\n/* 编辑地址 */.edit-address[data-v-6504b757]{background:#fff;padding:0 14px}.edit-address .item[data-v-6504b757]{line-height:24px;border-bottom:1px solid #f1f1f1;font-size:14px;position:relative;padding:14px 0;display:-webkit-flex;display:-webkit-box;display:-moz-box;display:-ms-flexbox;display:flex}.edit-address .item .item-span[data-v-6504b757]{display:block;width:70px;line-height:24px;color:#666;font-size:14px}.edit-address .item .item-inp[data-v-6504b757],\r\n.edit-address .item .item-btn[data-v-6504b757]{-webkit-flex:1;-ms-flex:1;-webkit-box-flex:1;-moz-box-flex:1;flex:1;line-height:24px;border:0;background:#fff;text-align:left;font-size:14px}.edit-address .item .arr[data-v-6504b757]{display:block;width:14px;height:14px;cursor:pointer;font-size:0;margin-top:6px}.edit-address .item .arr .img[data-v-6504b757]{width:100%;height:100%;vertical-align:top}.edit-address .item .item-txt[data-v-6504b757]{line-height:24px;height:48px;border:0;font-size:14px;vertical-align:top;-webkit-flex:1;-ms-flex:1;-webkit-box-flex:1;-moz-box-flex:1;flex:1;margin-right:5px;-webkit-box-align:start;-webkit-align-items:flex-start;align-items:flex-start}.edit-address .item .item-tip[data-v-6504b757]{color:#999;font-size:12px;margin-left:2px}.edit-address .item .send-code[data-v-6504b757]{color:#666;font-size:14px;display:block;line-height:24px;padding:0 10px;border-left:1px solid #f1f1f1}.edit-address .item .on-off[data-v-6504b757]{position:absolute;right:0}.edit-address .item .on-off[data-v-6504b757]{position:absolute;right:14px;top:10px;display:inline-block;width:42px;height:24px;-webkit-border-radius:50px;-moz-border-radius:50px;border-radius:50px;background-color:#f9f9f9;border:1px solid #ededed}.edit-address .item .on-off[data-v-6504b757]:before{position:absolute;top:1px;left:1px;height:20px;width:20px;content:" ";-webkit-border-radius:50px;-moz-border-radius:50px;border-radius:50px;background-color:#fff;-webkit-box-shadow:1px 2px 2px 1px rgba(0,0,0,.1);-moz-box-shadow:1px 2px 2px 1px rgba(0,0,0,.1);box-shadow:1px 2px 2px 1px rgba(0,0,0,.1);transition:all .3s ease-in-out;-webkit-transition:all .3s ease-in-out;-webkit-animation:on-off1 .2s ease 1;-o-animation:on-off1 .2s ease 1;animation:on-off1 .2s ease 1;cursor:pointer}.edit-address .item .on[data-v-6504b757]{background-color:var(--themescolor);border-color:var(--themescolor)}.edit-address .item .on[data-v-6504b757]:before{right:1px;left:auto;-webkit-box-shadow:-1px 2px 2px 1px rgba(0,0,0,.1);-moz-box-shadow:-1px 2px 2px 1px rgba(0,0,0,.1);box-shadow:-1px 2px 2px 1px rgba(0,0,0,.1);transition:all .3s ease-in-out;-webkit-transition:all .3s ease-in-out;-webkit-animation:on-off .2s ease 1;-o-animation:on-off .2s ease 1;animation:on-off .2s ease 1;cursor:pointer}.new-add[data-v-6504b757]{position:fixed;bottom:%?20?%;height:48px;background:var(--themescolor);width:%?722?%;max-width:%?722?%;text-align:center;color:#fff;line-height:%?88?%;font-size:%?30?%;border-radius:%?44?%;left:%?14?%}\r\n/* end 编辑地址 */\r\n/* 申请推广 */.edit-tit[data-v-6504b757]{padding:10px;line-height:22px;font-size:12px;color:#999;background:#f6f7f8}\r\n/* end 申请推广 */.new-address[data-v-6504b757]{position:fixed;bottom:0;width:%?722?%}.moren[data-v-6504b757]{background:rgba(220,35,30,.1)!important;border-radius:3px!important;color:#dc231e!important;margin-right:10px!important}.btn-box[data-v-6504b757]{width:100%;padding-top:%?20?%;background:#fff}',""]),e.exports=t},bcb9:function(e,t,a){var i=a("7c49");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var r=a("4f06").default;r("83824d0e",i,!0,{sourceMap:!1,shadowMode:!1})},c926:function(e,t,a){"use strict";var i=a("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(a("5530")),s=i(a("c284")),o=i(a("873f")),n=i(a("5462")),d=a("2f62"),l=a("29c0"),c=new n.default(l.addressList),u={components:{Noempty:o.default,"more-list":s.default},data:function(){return{imgUrlHead:this.$imgUrlHead,staticServer:this.$staticServer,list:[],paging:{status:"loading",error:!1,emptylist:!1},changeAddress:""}},computed:(0,r.default)({},(0,d.mapState)(["themes","isHaveJaw"])),watch:{},onReady:function(){},created:function(){},onLoad:function(e){e.changeAddress&&(this.changeAddress=e.changeAddress)},onShow:function(){c.loadListByPage(this),uni.removeStorageSync("text"),uni.removeStorageSync("keys")},onReachBottom:function(){c.loadListByPageMore()},methods:{setDefault:function(e){var t=this;(0,l.defaultaddress)({addrId:e}).then((function(a){1==a.status&&(t.changeAddress&&(t.addrId={addrId:e},uni.setStorageSync("addrId",JSON.stringify(t.addrId)),uni.navigateBack()),c.loadListByPage(t))}))},goAdd:function(e){uni.navigateTo({url:"addAddress?addrId=".concat(e)}),this.addrId={addrId:e},uni.setStorageSync("addrId",JSON.stringify(this.addrId))}}};t.default=u},db90:function(e,t,a){"use strict";function i(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}a("a4d3"),a("e01a"),a("d28b"),a("a630"),a("d3b7"),a("3ca3"),a("ddb0"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=i},ebe3:function(e,t,a){"use strict";a("a9e3"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i={components:{},data:function(){return{pic:""}},props:{title:String,bgColor:{type:String,default:"transparent"},type:{type:Number,default:1},heightStyle:{type:String,default:""},marginTop:{type:Number,default:0}},created:function(){this.setPic()},mounted:function(){},methods:{setPic:function(){switch(this.type){case 1:this.pic=this.$staticServer+"static/images/order-empty.png";break;case 2:this.pic=this.$staticServer+"static/images/comment-empty.png";break;case 3:this.pic=this.$staticServer+"static/images/no-reply.png";break;case 4:this.pic=this.$staticServer+"static/images/record-empty.png";break;case 5:this.pic=this.$staticServer+"static/images/mes-empty.png";break;case 6:this.pic=this.$staticServer+"static/images/collect-empty.png";break;case 7:this.pic=this.$staticServer+"static/images/history-empty.png";break;case 8:this.pic=this.$staticServer+"static/images/search.png";break;case 9:this.pic=this.$staticServer+"static/images/red-empty.png";break;case 10:this.pic=this.$staticServer+"static/images/order.png";break;case 11:this.pic=this.$staticServer+"static/images/no-reply.png";break;case 12:this.pic=this.$staticServer+"static/images/integral.png";break;case 13:this.pic=this.$staticServer+"static/images/youhuiquan.png";break;default:this.pic=this.$staticServer+"static/images/order-empty.png"}}}};t.default=i}}]);