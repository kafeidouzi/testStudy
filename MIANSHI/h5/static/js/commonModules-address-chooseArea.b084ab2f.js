(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["commonModules-address-chooseArea"],{"1d27":function(e,t,a){"use strict";a.r(t);var i=a("6621"),o=a.n(i);for(var r in i)"default"!==r&&function(e){a.d(t,e,(function(){return i[e]}))}(r);t["default"]=o.a},"29c0":function(e,t,a){"use strict";var i=a("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.getCompleteArea=t.getInfo=t.getGaiaProductOtherPrice=t.setDefaultAddress=t.syscGaiaProductPrice=t.getHint=t.loadAreasCode=t.loadAreas=t.loadCities=t.loadProvinces=t.deladdress=t.saveAddress=t.loadAddress=t.defaultaddress=t.excAddressList=t.addressList=void 0;var o=i(a("039e")),r=function(e){return o.default.post("/p/addressList",e)};t.addressList=r;var s=function(e){return o.default.get("/store/address/getAddressList")};t.excAddressList=s;var n=function(e){return o.default.post("/p/defaultaddress",e)};t.defaultaddress=n;var d=function(e){return o.default.post("/p/loadAddress",e)};t.loadAddress=d;var c=function(e){return o.default.post("/p/saveAddress",e)};t.saveAddress=c;var l=function(e){return o.default.post("/p/deladdress",e)};t.deladdress=l;var u=function(e){return o.default.post("/common/loadProvinces",e)};t.loadProvinces=u;var h=function(e){return o.default.post("/common/loadCities/"+e.provinceid)};t.loadCities=h;var v=function(e){return o.default.post("/common/loadAreas/"+e.loadAreas)};t.loadAreas=v;var f=function(e){return o.default.post("/common/getAreaCodeList/"+e.loadAreas)};t.loadAreasCode=f;var p=function(e){return o.default.get("/customized/p/findInputPrompt?"+e)};t.getHint=p;var y=function(e){return o.default.post("/p/proofing/order/syscGaiaProductPrice",e,{isJson:!0})};t.syscGaiaProductPrice=y;var g=function(e){return o.default.post("/store/address/setDefaultAddress",e,{isJson:!0})};t.setDefaultAddress=g;var m=function(e){return o.default.post("/p/proofing/order/getGaiaProductOtherPrice",e,{isJson:!0})};t.getGaiaProductOtherPrice=m;var b=function(e){return o.default.get("/p/getRecentAddress",e,{isShowToast:!1})};t.getInfo=b;var k=function(e){return o.default.get("/get_complete_area_by_code?areaCode="+e)};t.getCompleteArea=k},"2e76":function(e,t,a){var i=a("dbd1");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var o=a("4f06").default;o("44700646",i,!0,{sourceMap:!1,shadowMode:!1})},6621:function(e,t,a){"use strict";var i=a("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=i(a("5530")),r=a("2f62"),s=a("29c0"),n=[],d={data:function(){return{imgUrlHead:this.$imgUrlHead,staticServer:this.$staticServer,provinceData:"",cityData:"",areaData:"",province:!0,city:!1,area:!1,provinced:"",cityd:"",aread:"",provinceObj:"",cityObj:"",areaObj:""}},computed:(0,o.default)({},(0,r.mapState)(["themes"])),onLoad:function(e){e&&(this.$data["option"]=e)},onShow:function(){var e=this;n=[],uni.removeStorageSync("keys"),(0,s.loadProvinces)({}).then((function(t){e.provinceData=t.result}))},mounted:function(){},methods:{goback:function(){uni.navigateBack()},chooseProvince:function(e){var t,a=this;this.province=!1,this.city=!0,this.province=!1,this.city=!0,this.area=!1,t=this.provinceData[e].key,this.provinced=this.provinceData[e].key,this.cityd="",this.provinceObj={key:this.provinceData[e].key,value:this.provinceData[e].value},(0,s.loadCities)({provinceid:t}).then((function(e){a.cityData=e.result}))},chooseCity:function(e){var t,a=this;this.city=!1,this.area=!0,this.province=!1,this.city=!1,this.area=!0,t=this.cityData[e].key,this.cityd=this.cityData[e].key,this.cityObj={key:this.cityData[e].key,value:this.cityData[e].value},(0,s.loadAreas)({loadAreas:t}).then((function(e){a.areaData=e.result}))},chooseArea:function(e){this.areaData[e].key,this.areaObj={key:this.areaData[e].key,value:this.areaData[e].value},n=[],n.push(this.provinceObj),n.push(this.cityObj),n.push(this.areaObj),this.$data.option.addNew,this.$data.option.text,this.$data.option.applyEnter?(uni.setStorageSync("keys",JSON.stringify(n)),uni.setStorageSync("stopClean","1"),uni.redirectTo({url:"/commonModules/address/addAddress?addrId=".concat(this.$data.option.addrId)})):(this.$data.option.detail,uni.setStorageSync("keys",JSON.stringify(n)),uni.redirectTo({url:"/commonModules/address/addAddress?addrId=".concat(this.$data.option.addrId)}))},checkProvince:function(){var e=this;(0,s.loadProvinces)({}).then((function(t){e.provinceData=t.result})),this.province=!0,this.city=!1,this.area=!1},checkCity:function(){var e=this;(0,s.loadCities)({provinceid:this.provinced}).then((function(t){e.cityData=t.result})),this.province=!1,this.city=!0,this.area=!1},checkArea:function(){var e=this;(0,s.loadAreas)({loadAreas:this.cityd}).then((function(t){e.provinceData=t.result})),this.province=!1,this.city=!1,this.area=!0}}};t.default=d},a403:function(e,t,a){"use strict";var i=a("2e76"),o=a.n(i);o.a},c0e1:function(e,t,a){"use strict";var i;a.d(t,"b",(function(){return o})),a.d(t,"c",(function(){return r})),a.d(t,"a",(function(){return i}));var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",{style:{"--themescolor":e.themes.color}},[a("v-uni-view",{staticClass:"header-fix"},[a("ul",{ref:"chose",staticClass:"choose-ul"},[a("li",{class:{on:e.province},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.checkProvince.apply(void 0,arguments)}}},[e._v("省、市")]),e.provinced?a("li",{class:{on:e.city},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.checkCity.apply(void 0,arguments)}}},[e._v("市辖区、县")]):e._e(),e.cityd?a("li",{class:{on:e.area},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.checkArea.apply(void 0,arguments)}}},[e._v("地区")]):e._e()])]),a("v-uni-view",{staticClass:"choose-area safearea-bb-white"},[a("v-uni-view",{staticClass:"area-ul"},[a("transition",{attrs:{name:"fade"}},[e.provinceData&&e.province?a("ul",e._l(e.provinceData,(function(t,i){return a("li",{key:i,class:e.provinced==t.key?"cur":"",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.chooseProvince(i)}}},[e._v(e._s(t.value)),a("v-uni-view",{staticClass:"gou"},[e.staticServer?a("v-uni-image",{staticClass:"img",attrs:{src:e.staticServer+"static/images/choose-area.png",alt:!0}}):e._e()],1)],1)})),0):e._e(),e.cityData&&e.city?a("ul",e._l(e.cityData,(function(t,i){return a("li",{key:i,class:e.cityd==t.key?"cur":"",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.chooseCity(i)}}},[e._v(e._s(t.value)),a("v-uni-view",{staticClass:"gou"},[e.staticServer?a("v-uni-image",{staticClass:"img",attrs:{src:e.staticServer+"static/images/choose-area.png",alt:!0}}):e._e()],1)],1)})),0):e._e(),e.areaData&&e.area?a("ul",e._l(e.areaData,(function(t,i){return a("li",{key:i,on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.chooseArea(i)}}},[e._v(e._s(t.value)),a("v-uni-view",{staticClass:"gou"},[e.staticServer?a("v-uni-image",{staticClass:"img",attrs:{src:e.staticServer+"static/images/choose-area.png",alt:!0}}):e._e()],1)],1)})),0):e._e()])],1)],1)],1)},r=[]},dbd1:function(e,t,a){var i=a("24fb");t=i(!1),t.push([e.i,'.header-fix[data-v-ed241d7e]{width:100%;position:fixed;left:0;z-index:90}.header-fix .choose-ul[data-v-ed241d7e]{position:relative;height:44px;background-color:#fff;font-size:14px}.header-fix .choose-ul[data-v-ed241d7e]:after{content:"";width:100%;height:1px;position:absolute;border-bottom:1px solid #ddd;left:0;bottom:0;transform:scaleY(.5);-webkit-transform:scaleY(.5)}.header-fix .choose-ul li[data-v-ed241d7e]{min-width:%?170?%;margin-right:%?10?%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;display:block;float:left;position:relative;line-height:44px;text-align:center;cursor:pointer}.header-fix .choose-ul .on[data-v-ed241d7e]{color:var(--themescolor)}.header-fix .choose-ul .on[data-v-ed241d7e]:after{width:60%;height:1px;border-bottom:2px solid var(--themescolor);position:absolute;bottom:1px;left:50%;content:"";margin-left:-30%}.choose-area[data-v-ed241d7e]{padding-top:44px;height:100%;width:100%}.choose-area .area-ul[data-v-ed241d7e]{background:#fff;font-size:14px;-webkit-transform:translate(0) translateZ(0);width:400%;height:100%;-webkit-transition-property:transform;-webkit-transition-duration:.3s;-webkit-transition-timing-function:cubic-bezier(.1,.57,.1,1);overflow:hidden}.choose-area .area-ul ul[data-v-ed241d7e]{float:left;width:25%;height:100%;overflow:auto}.choose-area .area-ul li[data-v-ed241d7e]{line-height:44px;padding-left:10px;cursor:pointer;position:relative}.choose-area .area-ul .gou[data-v-ed241d7e]{display:none}.choose-area .area-ul .cur[data-v-ed241d7e]{color:var(--themescolor)}.choose-area .area-ul .cur .gou[data-v-ed241d7e]{display:inline-block;width:14px;height:10px;vertical-align:top;margin-top:17px;margin-left:10px}.choose-area .area-ul .cur .gou .img[data-v-ed241d7e]{width:100%;height:100%;vertical-align:top}.choose-area li[data-v-ed241d7e]:after{content:"";width:100%;height:1px;position:absolute;border-bottom:1px solid #ddd;left:0;bottom:0;transform:scaleY(.5);-webkit-transform:scaleY(.5)}.choose-area li[data-v-ed241d7e]:last-child::after{border:0}.choose-area .area-ul[data-v-ed241d7e]{width:100%}.choose-area .area-ul ul[data-v-ed241d7e]{float:none;width:100%}.fade-enter-active[data-v-ed241d7e],\r\n.fade-leave-active[data-v-ed241d7e]{-webkit-transition:opacity .5s;transition:opacity .5s}.fade-enter[data-v-ed241d7e],\r\n.fade-leave-to[data-v-ed241d7e]{opacity:0}.header-fix .choose-ul .on[data-v-ed241d7e],\r\n.choose-area .area-ul .cur[data-v-ed241d7e]{color:var(--themescolor)}.header-fix .choose-ul .on[data-v-ed241d7e]:after{border-bottom-color:var(--themescolor)}',""]),e.exports=t},ec0e:function(e,t,a){"use strict";a.r(t);var i=a("c0e1"),o=a("1d27");for(var r in o)"default"!==r&&function(e){a.d(t,e,(function(){return o[e]}))}(r);a("a403");var s,n=a("f0c5"),d=Object(n["a"])(o["default"],i["b"],i["c"],!1,null,"ed241d7e",null,!1,i["a"],s);t["default"]=d.exports}}]);