(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["commonModules-address-chooseExtension"],{"29c0":function(t,e,a){"use strict";var i=a("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.getCompleteArea=e.getInfo=e.getGaiaProductOtherPrice=e.setDefaultAddress=e.syscGaiaProductPrice=e.getHint=e.loadAreasCode=e.loadAreas=e.loadCities=e.loadProvinces=e.deladdress=e.saveAddress=e.loadAddress=e.defaultaddress=e.excAddressList=e.addressList=void 0;var o=i(a("039e")),r=function(t){return o.default.post("/p/addressList",t)};e.addressList=r;var s=function(t){return o.default.get("/store/address/getAddressList")};e.excAddressList=s;var n=function(t){return o.default.post("/p/defaultaddress",t)};e.defaultaddress=n;var c=function(t){return o.default.post("/p/loadAddress",t)};e.loadAddress=c;var d=function(t){return o.default.post("/p/saveAddress",t)};e.saveAddress=d;var u=function(t){return o.default.post("/p/deladdress",t)};e.deladdress=u;var l=function(t){return o.default.post("/common/loadProvinces",t)};e.loadProvinces=l;var f=function(t){return o.default.post("/common/loadCities/"+t.provinceid)};e.loadCities=f;var h=function(t){return o.default.post("/common/loadAreas/"+t.loadAreas)};e.loadAreas=h;var v=function(t){return o.default.post("/common/getAreaCodeList/"+t.loadAreas)};e.loadAreasCode=v;var p=function(t){return o.default.get("/customized/p/findInputPrompt?"+t)};e.getHint=p;var y=function(t){return o.default.post("/p/proofing/order/syscGaiaProductPrice",t,{isJson:!0})};e.syscGaiaProductPrice=y;var g=function(t){return o.default.post("/store/address/setDefaultAddress",t,{isJson:!0})};e.setDefaultAddress=g;var m=function(t){return o.default.post("/p/proofing/order/getGaiaProductOtherPrice",t,{isJson:!0})};e.getGaiaProductOtherPrice=m;var b=function(t){return o.default.get("/p/getRecentAddress",t,{isShowToast:!1})};e.getInfo=b;var k=function(t){return o.default.get("/get_complete_area_by_code?areaCode="+t)};e.getCompleteArea=k},"2f3a":function(t,e,a){"use strict";var i=a("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=i(a("5530")),r=a("2f62"),s=a("29c0"),n=[],c={data:function(){return{imgUrlHead:this.$imgUrlHead,staticServer:this.$staticServer,provinceData:"",cityData:"",areaData:"",province:!0,city:!1,area:!1,provinced:"",cityd:"",aread:"",provinceObj:"",cityObj:"",areaObj:"",optionQuery:""}},computed:(0,o.default)({},(0,r.mapState)(["themes"])),onLoad:function(t){t.addrId&&(this.optionQuery["addrId"]=t.addrId),t.addNew&&(this.optionQuery["addNew"]=t.addNew),t.text&&(this.optionQuery["text"]=t.text),t.applyEnter&&(this.optionQuery["applyEnter"]=t.applyEnter),t.detail&&(this.optionQuery["detail"]=t.detail)},onShow:function(){var t=this;n=[],uni.removeStorageSync("keys"),(0,s.loadProvinces)({}).then((function(e){t.provinceData=e.result}))},mounted:function(){},methods:{goback:function(){uni.navigateBack()},chooseProvince:function(t){var e,a=this;this.province=!1,this.city=!0,this.province=!1,this.city=!0,this.area=!1,e=this.provinceData[t].key,this.provinced=this.provinceData[t].key,this.cityd="",this.provinceObj={key:this.provinceData[t].key,value:this.provinceData[t].value},(0,s.loadCities)({provinceid:e}).then((function(t){a.cityData=t.result}))},chooseCity:function(t){var e,a=this;this.city=!1,this.area=!0,this.province=!1,this.city=!1,this.area=!0,e=this.cityData[t].key,this.cityd=this.cityData[t].key,this.cityObj={key:this.cityData[t].key,value:this.cityData[t].value},(0,s.loadAreas)({loadAreas:e}).then((function(t){a.areaData=t.result}))},chooseArea:function(t){this.areaData[t].key,this.areaObj={key:this.areaData[t].key,value:this.areaData[t].value},n=[],n.push(this.provinceObj),n.push(this.cityObj),n.push(this.areaObj),this.optionQuery.addNew,this.optionQuery.text,this.optionQuery.applyEnter?(uni.setStorageSync("keys",JSON.stringify(n)),uni.setStorageSync("stopClean","1"),uni.redirectTo({url:"/marketingModules/myExtension/applyExtension?addrId=".concat(this.optionQuery.addrId)})):this.optionQuery.detail?(uni.setStorageSync("keys",JSON.stringify(n)),uni.redirectTo({url:"/marketingModules/myExtension/applyExtension?addrId=".concat(this.optionQuery.addrId)})):(uni.setStorageSync("keys",JSON.stringify(n)),uni.setStorageSync("stopClean","1"),uni.navigateBack())},checkProvince:function(){var t=this;(0,s.loadProvinces)({}).then((function(e){t.provinceData=e.result})),this.province=!0,this.city=!1,this.area=!1},checkCity:function(){var t=this;(0,s.loadCities)({provinceid:this.provinced}).then((function(e){t.cityData=e.result})),this.province=!1,this.city=!0,this.area=!1},checkArea:function(){var t=this;(0,s.loadAreas)({loadAreas:this.cityd}).then((function(e){t.provinceData=e.result})),this.province=!1,this.city=!1,this.area=!0}}};e.default=c},"31b2":function(t,e,a){var i=a("6459");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=a("4f06").default;o("26e2c5c0",i,!0,{sourceMap:!1,shadowMode:!1})},6459:function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,'.header-fix[data-v-6324fd82]{width:100%;position:fixed;left:0;z-index:90}.header-fix .choose-ul[data-v-6324fd82]{position:relative;height:44px;background-color:#fff;font-size:14px}.header-fix .choose-ul[data-v-6324fd82]:after{content:"";width:100%;height:1px;position:absolute;border-bottom:1px solid #ddd;left:0;bottom:0;transform:scaleY(.5);-webkit-transform:scaleY(.5)}.header-fix .choose-ul li[data-v-6324fd82]{width:25%;display:block;float:left;position:relative;line-height:44px;text-align:center;cursor:pointer}.header-fix .choose-ul .on[data-v-6324fd82]{color:var(--themescolor)}.header-fix .choose-ul .on[data-v-6324fd82]:after{width:60%;height:1px;border-bottom:2px solid var(--themescolor);position:absolute;bottom:1px;left:50%;content:"";margin-left:-30%}.choose-area[data-v-6324fd82]{padding-top:44px;height:100%;width:100%}.choose-area .area-ul[data-v-6324fd82]{background:#fff;font-size:14px;-webkit-transform:translate(0) translateZ(0);width:400%;height:100%;-webkit-transition-property:transform;-webkit-transition-duration:.3s;-webkit-transition-timing-function:cubic-bezier(.1,.57,.1,1);overflow:hidden}.choose-area .area-ul ul[data-v-6324fd82]{float:left;width:25%;height:100%;overflow:auto}.choose-area .area-ul li[data-v-6324fd82]{line-height:44px;padding-left:10px;cursor:pointer;position:relative}.choose-area .area-ul .gou[data-v-6324fd82]{display:none}.choose-area .area-ul .cur[data-v-6324fd82]{color:var(--themescolor)}.choose-area .area-ul .cur .gou[data-v-6324fd82]{display:inline-block;width:14px;height:10px;vertical-align:top;margin-top:17px;margin-left:10px}.choose-area .area-ul .cur .gou img[data-v-6324fd82]{width:100%;height:100%;vertical-align:top}.choose-area li[data-v-6324fd82]:after{content:"";width:100%;height:1px;position:absolute;border-bottom:1px solid #ddd;left:0;bottom:0;transform:scaleY(.5);-webkit-transform:scaleY(.5)}.choose-area li[data-v-6324fd82]:last-child::after{border:0}.choose-area .area-ul[data-v-6324fd82]{width:100%}.choose-area .area-ul ul[data-v-6324fd82]{float:none;width:100%}.fade-enter-active[data-v-6324fd82],\r\n.fade-leave-active[data-v-6324fd82]{-webkit-transition:opacity .5s;transition:opacity .5s}.fade-enter[data-v-6324fd82],\r\n.fade-leave-to[data-v-6324fd82]{opacity:0}.header-fix .choose-ul .on[data-v-6324fd82],\r\n.choose-area .area-ul .cur[data-v-6324fd82]{color:var(--themescolor)}.header-fix .choose-ul .on[data-v-6324fd82]:after{border-bottom-color:var(--themescolor)}',""]),t.exports=e},8216:function(t,e,a){"use strict";var i=a("31b2"),o=a.n(i);o.a},b851:function(t,e,a){"use strict";var i;a.d(e,"b",(function(){return o})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){return i}));var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{style:{"--themescolor":t.themes.color}},[a("v-uni-view",{staticClass:"header-fix"},[a("ul",{ref:"chose",staticClass:"choose-ul"},[a("li",{class:{on:t.province},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.checkProvince.apply(void 0,arguments)}}},[t._v("省、市")]),t.provinced?a("li",{class:{on:t.city},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.checkCity.apply(void 0,arguments)}}},[t._v("市辖区、县")]):t._e(),t.cityd?a("li",{class:{on:t.area},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.checkArea.apply(void 0,arguments)}}},[t._v("地区")]):t._e()])]),a("v-uni-view",{staticClass:"choose-area"},[a("v-uni-view",{staticClass:"area-ul"},[a("transition",{attrs:{name:"fade"}},[t.provinceData&&t.province?a("ul",t._l(t.provinceData,(function(e,i){return a("li",{key:i,class:t.provinced==e.key?"cur":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.chooseProvince(i)}}},[t._v(t._s(e.value)),a("v-uni-view",{staticClass:"gou"},[t.staticServer?a("v-uni-image",{staticClass:"img",attrs:{src:t.staticServer+"static/images/choose-area.png",alt:""}}):t._e()],1)],1)})),0):t._e(),t.cityData&&t.city?a("ul",t._l(t.cityData,(function(e,i){return a("li",{key:i,class:t.cityd==e.key?"cur":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.chooseCity(i)}}},[t._v(t._s(e.value)),a("v-uni-view",{staticClass:"gou"},[t.staticServer?a("v-uni-image",{staticClass:"img",attrs:{src:t.staticServer+"static/images/choose-area.png",alt:""}}):t._e()],1)],1)})),0):t._e(),t.areaData&&t.area?a("ul",t._l(t.areaData,(function(e,i){return a("li",{key:i,on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.chooseArea(i)}}},[t._v(t._s(e.value)),a("v-uni-view",{staticClass:"gou"},[t.staticServer?a("v-uni-image",{staticClass:"img",attrs:{src:t.staticServer+"static/images/choose-area.png",alt:""}}):t._e()],1)],1)})),0):t._e()])],1)],1)],1)},r=[]},cf21:function(t,e,a){"use strict";a.r(e);var i=a("2f3a"),o=a.n(i);for(var r in i)"default"!==r&&function(t){a.d(e,t,(function(){return i[t]}))}(r);e["default"]=o.a},df0d:function(t,e,a){"use strict";a.r(e);var i=a("b851"),o=a("cf21");for(var r in o)"default"!==r&&function(t){a.d(e,t,(function(){return o[t]}))}(r);a("8216");var s,n=a("f0c5"),c=Object(n["a"])(o["default"],i["b"],i["c"],!1,null,"6324fd82",null,!1,i["a"],s);e["default"]=c.exports}}]);