(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["marketingModules-myExtension-applySuccess"],{"1bdb":function(t,e,o){var n=o("24fb");e=n(!1),e.push([t.i,'\r\n/* 申请推广成功 */.apply-extension[data-v-84996c92]{padding:0 10px}.extension-suc[data-v-84996c92]{padding:40px 10px 20px;text-align:center}.extension-suc .img[data-v-84996c92]{display:inline-block;vertical-align:top;width:30px;height:30px;font-size:0}.extension-suc .img .img[data-v-84996c92]{width:100%;height:100%}.extension-suc .txt[data-v-84996c92]{display:inline-block;vertical-align:top;font-size:18px;font-weight:600;line-height:28px;margin-left:10px}.extension-step .step-det[data-v-84996c92]{font-size:14px;line-height:24px;position:relative;border-bottom:1px dashed #ddd;padding:10px 0}.extension-step .step-det .step-icon[data-v-84996c92]{content:" ";display:block;font-size:0;width:0;height:0;position:absolute;left:0;top:50%;-webkit-transform:translateY(-50%);-moz-transform:translateY(-50%);transform:translateY(-50%);border:5px solid transparent;border-left:5px solid var(--themescolor)}.extension-step .step-det .step-txt[data-v-84996c92]{margin-left:15px;display:block;font-size:14px;color:#666}.extension-step .step-tit[data-v-84996c92]{display:inline-block;color:#999;font-size:12px;width:70px}.extension-step .step-det .net[data-v-84996c92]{text-decoration:underline;display:inline-block;width:150px;overflow:hidden;text-overflow:ellipsis;white-space:normal;vertical-align:top}.extension-step .step-det .code[data-v-84996c92]{font-size:0;display:inline-block;height:100px;vertical-align:middle;width:150px}.extension-step .step-det .code .img[data-v-84996c92]{width:100px;height:100px}.extension-step .step-det .copy[data-v-84996c92]{display:inline-block;color:var(--themescolor);position:absolute;right:0;top:50%;-webkit-transform:translateY(-50%);-moz-transform:translateY(-50%);transform:translateY(-50%)}\r\n/* end 申请成功 */\r\n/* 颜色配置 */.extension-step .step-det .copy[data-v-84996c92]{color:var(--themescolor)}.extension-step .step-det .step-icon[data-v-84996c92]{border-left-color:var(--themescolor)}.step-tit[data-v-84996c92]{vertical-align:top}#picture[data-v-84996c92]{display:inline-block}',""]),t.exports=e},"32b1":function(t,e,o){"use strict";var n=o("f2c8"),i=o.n(n);i.a},"41d4":function(t,e,o){"use strict";var n;o.d(e,"b",(function(){return i})),o.d(e,"c",(function(){return r})),o.d(e,"a",(function(){return n}));var i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-uni-view",{staticClass:"w750",style:{"--themescolor":t.themes.color}},[o("v-uni-view",{staticClass:"apply-extension"},[o("v-uni-view",{staticClass:"extension-step"},[o("v-uni-view",{staticClass:"step-det"},[o("v-uni-text",{staticClass:"step-icon"}),o("v-uni-text",{staticClass:"step-txt"},[t._v("分享二维码或链接，邀请好友注册")])],1),o("v-uni-view",{staticClass:"step-det"},[o("v-uni-text",{staticClass:"step-icon"}),o("v-uni-text",{staticClass:"step-txt"},[t._v("好友后续产生消费，您就可获取佣金")])],1),o("v-uni-view",{staticClass:"step-det"},[o("v-uni-text",{staticClass:"step-icon"}),o("v-uni-text",{staticClass:"step-txt"},[t._v("好友再邀请其他好友，您也坐享佣金")])],1),o("v-uni-view",{staticClass:"step-det"},[o("v-uni-text",{staticClass:"step-tit"},[t._v("推广链接")]),o("v-uni-text",{staticClass:"net"},[t._v(t._s(t.value))]),o("v-uni-text",{staticClass:"copy",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onCopy.apply(void 0,arguments)}}},[t._v("复制链接")])],1),o("v-uni-view",{staticClass:"step-det"},[o("v-uni-text",{staticClass:"step-tit"},[t._v("推广二维码")]),o("qrcode",{ref:"qrcode",staticClass:"code",attrs:{unit:"upx",showLoading:!1,size:200,onval:!0,val:t.value}}),o("v-uni-text",{staticClass:"copy",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.savePic.apply(void 0,arguments)}}},[t._v("查看大图")])],1)],1),o("v-uni-view",{staticClass:"w-100 h-100r rounded-8 bg-main text-white flex-center font-30 letter-sp4 mt-6",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.$navigateTo("/marketingModules/myExtension/myExtension")}}},[o("v-uni-text",[t._v("我的推广")])],1)],1)],1)},r=[]},"4ea0":function(t,e,o){"use strict";var n=o("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.getPromoteWxACode=e.myPromoterUser=e.withdrawList=e.myCommisDetailList=e.applyCash=e.toApplyCash=e.loadRule=e.myPromoter=e.submitPromoter=e.applyPromoter=void 0;var i=n(o("039e")),r=function(t){return i.default.post("/p/appPromoter/applyPromoter",t)};e.applyPromoter=r;var s=function(t){return i.default.post("/p/appPromoter/submitPromoter",t)};e.submitPromoter=s;var a=function(t){return i.default.post("/p/myPromoter",t)};e.myPromoter=a;var u=function(t){return i.default.get("/loadRule",t)};e.loadRule=u;var l=function(t){return i.default.post("/p/toApplyCash",t)};e.toApplyCash=l;var c=function(t){return i.default.post("/p/applyCash",t)};e.applyCash=c;var d=function(t){return i.default.post("/p/myCommisDetailList",t,{isShowLoadding:!0})};e.myCommisDetailList=d;var h=function(t){return i.default.post("/p/withdrawList",t,{isShowLoadding:!0})};e.withdrawList=h;var f=function(t){return i.default.post("/p/myPromoterUser",t,{isShowLoadding:!0})};e.myPromoterUser=f;var p=function(t){return i.default.post("/p/getPromoteWxACode")};e.getPromoteWxACode=p},"542d":function(t,e,o){"use strict";var n=o("23e7"),i=o("d039"),r=o("408a"),s=1..toPrecision,a=i((function(){return"1"!==s.call(1,void 0)}))||!i((function(){s.call({})}));n({target:"Number",proto:!0,forced:a},{toPrecision:function(t){return void 0===t?s.call(r(this)):s.call(r(this),t)}})},"7d1d":function(t,e,o){"use strict";var n=o("9720"),i=o.n(n);i.a},"7f8a":function(t,e,o){"use strict";var n;o.d(e,"b",(function(){return i})),o.d(e,"c",(function(){return r})),o.d(e,"a",(function(){return n}));var i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-uni-view",{staticClass:"tki-qrcode"},[o("v-uni-canvas",{staticClass:"tki-qrcode-canvas",style:{width:t.cpSize+"px",height:t.cpSize+"px"},attrs:{"canvas-id":t.cid}}),o("v-uni-image",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],style:{width:t.cpSize+"px",height:t.cpSize+"px"},attrs:{src:t.result}})],1)},r=[]},9720:function(t,e,o){var n=o("e4ca");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=o("4f06").default;i("0d66a305",n,!0,{sourceMap:!1,shadowMode:!1})},aff3:function(t,e,o){"use strict";o.r(e);var n=o("b8b9"),i=o.n(n);for(var r in n)"default"!==r&&function(t){o.d(e,t,(function(){return n[t]}))}(r);e["default"]=i.a},b677:function(t,e,o){"use strict";o.r(e);var n=o("7f8a"),i=o("c275");for(var r in i)"default"!==r&&function(t){o.d(e,t,(function(){return i[t]}))}(r);o("7d1d");var s,a=o("f0c5"),u=Object(a["a"])(i["default"],n["b"],n["c"],!1,null,"994ed276",null,!1,n["a"],s);e["default"]=u.exports},b7ce:function(t,e,o){"use strict";var n=o("4ea4");o("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i,r=n(o("d406")),s={name:"TkiQrcode",props:{cid:{type:String,default:"tki-qrcode-canvas"},size:{type:Number,default:200},unit:{type:String,default:"upx"},show:{type:Boolean,default:!0},val:{type:String,default:""},background:{type:String,default:"#ffffff"},foreground:{type:String,default:"#000000"},pdground:{type:String,default:"#000000"},icon:{type:String,default:""},iconSize:{type:Number,default:40},lv:{type:Number,default:3},onval:{type:Boolean,default:!1},loadMake:{type:Boolean,default:!1},usingComponents:{type:Boolean,default:!0},showLoading:{type:Boolean,default:!0},loadingText:{type:String,default:"二维码生成中"}},data:function(){return{result:""}},methods:{_makeCode:function(){var t=this;this._empty(this.val)?uni.showToast({title:"二维码内容不能为空",icon:"none",duration:2e3}):i=new r.default({context:t,canvasId:t.cid,usingComponents:t.usingComponents,showLoading:t.showLoading,loadingText:t.loadingText,text:t.val,size:t.cpSize,background:t.background,foreground:t.foreground,pdground:t.pdground,correctLevel:t.lv,image:t.icon,imageSize:t.iconSize,cbResult:function(e){t._result(e)}})},_clearCode:function(){this._result(""),i.clear()},_saveCode:function(){var t=this;""!=this.result&&uni.saveImageToPhotosAlbum({filePath:t.result,success:function(){uni.showToast({title:"二维码保存成功",icon:"success",duration:2e3})}})},_result:function(t){this.result=t,this.$emit("result",t)},_empty:function(t){var e=typeof t,o=!1;return"number"==e&&""==String(t)||"undefined"==e?o=!0:"object"==e?"{}"!=JSON.stringify(t)&&"[]"!=JSON.stringify(t)&&null!=t||(o=!0):"string"==e?""!=t&&"undefined"!=t&&"null"!=t&&"{}"!=t&&"[]"!=t||(o=!0):"function"==e&&(o=!1),o}},watch:{size:function(t,e){var o=this;t==e||this._empty(t)||(this.cSize=t,this._empty(this.val)||setTimeout((function(){o._makeCode()}),100))},val:function(t,e){var o=this;this.onval&&(t==e||this._empty(t)||setTimeout((function(){o._makeCode()}),0))}},computed:{cpSize:function(){return"upx"==this.unit?uni.upx2px(this.size):this.size}},mounted:function(){var t=this;this.loadMake&&(this._empty(this.val)||setTimeout((function(){t._makeCode()}),0))}};e.default=s},b8b9:function(t,e,o){"use strict";var n=o("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n(o("5530")),r=n(o("05b0")),s=o("2f62"),a=n(o("b677")),u=o("4ea0"),l={components:{qrcode:a.default},data:function(){return{staticServer:this.$staticServer,imgUrlHead:this.$imgUrlHead,value:"1",size:80,config:r.default.server,data:"",extenPic:""}},computed:(0,i.default)({},(0,s.mapState)(["themes"])),watch:{},mounted:function(){var t=this;(0,u.applyPromoter)().then((function(e){1==e.status&&(t.data=e.result,t.value=e.result.vueDomain+"/marketingModules/myExtension/extensionJump?parentUserName="+e.result.userName,t.$refs.qrcode._makeCode(),console.log(t.value))}))},methods:{onCopy:function(){console.log(this.value),this.$copyText(this.value).then((function(t){uni.showToast({title:"内容已复制"})}),(function(t){uni.showToast({title:"失败",icon:"none"})}))},savePic:function(){console.log(this.$refs.qrcode);var t=this;uni.previewImage({urls:[t.$refs.qrcode.result]})},onError:function(){uni.showToast({title:"复制失败",icon:"none"})}}};e.default=l},c275:function(t,e,o){"use strict";o.r(e);var n=o("b7ce"),i=o.n(n);for(var r in n)"default"!==r&&function(t){o.d(e,t,(function(){return n[t]}))}(r);e["default"]=i.a},d406:function(t,e,o){"use strict";o("cb29"),o("a9e3"),o("b680"),o("542d"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={};(function(){function t(t){var e,o,n;return t<128?[t]:t<2048?(e=192+(t>>6),o=128+(63&t),[e,o]):(e=224+(t>>12),o=128+(t>>6&63),n=128+(63&t),[e,o,n])}function e(e){for(var o=[],n=0;n<e.length;n++)for(var i=e.charCodeAt(n),r=t(i),s=0;s<r.length;s++)o.push(r[s]);return o}function o(t,o){this.typeNumber=-1,this.errorCorrectLevel=o,this.modules=null,this.moduleCount=0,this.dataCache=null,this.rsBlocks=null,this.totalDataCount=-1,this.data=t,this.utf8bytes=e(t),this.make()}o.prototype={constructor:o,getModuleCount:function(){return this.moduleCount},make:function(){this.getRightType(),this.dataCache=this.createData(),this.createQrcode()},makeImpl:function(t){this.moduleCount=4*this.typeNumber+17,this.modules=new Array(this.moduleCount);for(var e=0;e<this.moduleCount;e++)this.modules[e]=new Array(this.moduleCount);this.setupPositionProbePattern(0,0),this.setupPositionProbePattern(this.moduleCount-7,0),this.setupPositionProbePattern(0,this.moduleCount-7),this.setupPositionAdjustPattern(),this.setupTimingPattern(),this.setupTypeInfo(!0,t),this.typeNumber>=7&&this.setupTypeNumber(!0),this.mapData(this.dataCache,t)},setupPositionProbePattern:function(t,e){for(var o=-1;o<=7;o++)if(!(t+o<=-1||this.moduleCount<=t+o))for(var n=-1;n<=7;n++)e+n<=-1||this.moduleCount<=e+n||(this.modules[t+o][e+n]=o>=0&&o<=6&&(0==n||6==n)||n>=0&&n<=6&&(0==o||6==o)||o>=2&&o<=4&&n>=2&&n<=4)},createQrcode:function(){for(var t=0,e=0,o=null,n=0;n<8;n++){this.makeImpl(n);var i=s.getLostPoint(this);(0==n||t>i)&&(t=i,e=n,o=this.modules)}this.modules=o,this.setupTypeInfo(!1,e),this.typeNumber>=7&&this.setupTypeNumber(!1)},setupTimingPattern:function(){for(var t=8;t<this.moduleCount-8;t++)null==this.modules[t][6]&&(this.modules[t][6]=t%2==0,null==this.modules[6][t]&&(this.modules[6][t]=t%2==0))},setupPositionAdjustPattern:function(){for(var t=s.getPatternPosition(this.typeNumber),e=0;e<t.length;e++)for(var o=0;o<t.length;o++){var n=t[e],i=t[o];if(null==this.modules[n][i])for(var r=-2;r<=2;r++)for(var a=-2;a<=2;a++)this.modules[n+r][i+a]=-2==r||2==r||-2==a||2==a||0==r&&0==a}},setupTypeNumber:function(t){for(var e=s.getBCHTypeNumber(this.typeNumber),o=0;o<18;o++){var n=!t&&1==(e>>o&1);this.modules[Math.floor(o/3)][o%3+this.moduleCount-8-3]=n,this.modules[o%3+this.moduleCount-8-3][Math.floor(o/3)]=n}},setupTypeInfo:function(t,e){for(var o=i[this.errorCorrectLevel]<<3|e,n=s.getBCHTypeInfo(o),r=0;r<15;r++){var a=!t&&1==(n>>r&1);r<6?this.modules[r][8]=a:r<8?this.modules[r+1][8]=a:this.modules[this.moduleCount-15+r][8]=a;a=!t&&1==(n>>r&1);r<8?this.modules[8][this.moduleCount-r-1]=a:r<9?this.modules[8][15-r-1+1]=a:this.modules[8][15-r-1]=a}this.modules[this.moduleCount-8][8]=!t},createData:function(){var t=new d,e=this.typeNumber>9?16:8;t.put(4,4),t.put(this.utf8bytes.length,e);for(var n=0,i=this.utf8bytes.length;n<i;n++)t.put(this.utf8bytes[n],8);t.length+4<=8*this.totalDataCount&&t.put(0,4);while(t.length%8!=0)t.putBit(!1);while(1){if(t.length>=8*this.totalDataCount)break;if(t.put(o.PAD0,8),t.length>=8*this.totalDataCount)break;t.put(o.PAD1,8)}return this.createBytes(t)},createBytes:function(t){for(var e=0,o=0,n=0,i=this.rsBlock.length/3,r=new Array,a=0;a<i;a++)for(var u=this.rsBlock[3*a+0],c=this.rsBlock[3*a+1],d=this.rsBlock[3*a+2],h=0;h<u;h++)r.push([d,c]);for(var f=new Array(r.length),p=new Array(r.length),v=0;v<r.length;v++){var m=r[v][0],g=r[v][1]-m;o=Math.max(o,m),n=Math.max(n,g),f[v]=new Array(m);for(a=0;a<f[v].length;a++)f[v][a]=255&t.buffer[a+e];e+=m;var y=s.getErrorCorrectPolynomial(g),w=new l(f[v],y.getLength()-1),x=w.mod(y);p[v]=new Array(y.getLength()-1);for(a=0;a<p[v].length;a++){var b=a+x.getLength()-p[v].length;p[v][a]=b>=0?x.get(b):0}}var C=new Array(this.totalDataCount),P=0;for(a=0;a<o;a++)for(v=0;v<r.length;v++)a<f[v].length&&(C[P++]=f[v][a]);for(a=0;a<n;a++)for(v=0;v<r.length;v++)a<p[v].length&&(C[P++]=p[v][a]);return C},mapData:function(t,e){for(var o=-1,n=this.moduleCount-1,i=7,r=0,a=this.moduleCount-1;a>0;a-=2){6==a&&a--;while(1){for(var u=0;u<2;u++)if(null==this.modules[n][a-u]){var l=!1;r<t.length&&(l=1==(t[r]>>>i&1));var c=s.getMask(e,n,a-u);c&&(l=!l),this.modules[n][a-u]=l,i--,-1==i&&(r++,i=7)}if(n+=o,n<0||this.moduleCount<=n){n-=o,o=-o;break}}}}},o.PAD0=236,o.PAD1=17;for(var i=[1,0,3,2],r={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7},s={PATTERN_POSITION_TABLE:[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],G15:1335,G18:7973,G15_MASK:21522,getBCHTypeInfo:function(t){var e=t<<10;while(s.getBCHDigit(e)-s.getBCHDigit(s.G15)>=0)e^=s.G15<<s.getBCHDigit(e)-s.getBCHDigit(s.G15);return(t<<10|e)^s.G15_MASK},getBCHTypeNumber:function(t){var e=t<<12;while(s.getBCHDigit(e)-s.getBCHDigit(s.G18)>=0)e^=s.G18<<s.getBCHDigit(e)-s.getBCHDigit(s.G18);return t<<12|e},getBCHDigit:function(t){var e=0;while(0!=t)e++,t>>>=1;return e},getPatternPosition:function(t){return s.PATTERN_POSITION_TABLE[t-1]},getMask:function(t,e,o){switch(t){case r.PATTERN000:return(e+o)%2==0;case r.PATTERN001:return e%2==0;case r.PATTERN010:return o%3==0;case r.PATTERN011:return(e+o)%3==0;case r.PATTERN100:return(Math.floor(e/2)+Math.floor(o/3))%2==0;case r.PATTERN101:return e*o%2+e*o%3==0;case r.PATTERN110:return(e*o%2+e*o%3)%2==0;case r.PATTERN111:return(e*o%3+(e+o)%2)%2==0;default:throw new Error("bad maskPattern:"+t)}},getErrorCorrectPolynomial:function(t){for(var e=new l([1],0),o=0;o<t;o++)e=e.multiply(new l([1,a.gexp(o)],0));return e},getLostPoint:function(t){for(var e=t.getModuleCount(),o=0,n=0,i=0;i<e;i++)for(var r=0,s=t.modules[i][0],a=0;a<e;a++){var u=t.modules[i][a];if(a<e-6&&u&&!t.modules[i][a+1]&&t.modules[i][a+2]&&t.modules[i][a+3]&&t.modules[i][a+4]&&!t.modules[i][a+5]&&t.modules[i][a+6]&&(a<e-10?t.modules[i][a+7]&&t.modules[i][a+8]&&t.modules[i][a+9]&&t.modules[i][a+10]&&(o+=40):a>3&&t.modules[i][a-1]&&t.modules[i][a-2]&&t.modules[i][a-3]&&t.modules[i][a-4]&&(o+=40)),i<e-1&&a<e-1){var l=0;u&&l++,t.modules[i+1][a]&&l++,t.modules[i][a+1]&&l++,t.modules[i+1][a+1]&&l++,0!=l&&4!=l||(o+=3)}s^u?r++:(s=u,r>=5&&(o+=3+r-5),r=1),u&&n++}for(a=0;a<e;a++)for(r=0,s=t.modules[0][a],i=0;i<e;i++){u=t.modules[i][a];i<e-6&&u&&!t.modules[i+1][a]&&t.modules[i+2][a]&&t.modules[i+3][a]&&t.modules[i+4][a]&&!t.modules[i+5][a]&&t.modules[i+6][a]&&(i<e-10?t.modules[i+7][a]&&t.modules[i+8][a]&&t.modules[i+9][a]&&t.modules[i+10][a]&&(o+=40):i>3&&t.modules[i-1][a]&&t.modules[i-2][a]&&t.modules[i-3][a]&&t.modules[i-4][a]&&(o+=40)),s^u?r++:(s=u,r>=5&&(o+=3+r-5),r=1)}var c=Math.abs(100*n/e/e-50)/5;return o+=10*c,o}},a={glog:function(t){if(t<1)throw new Error("glog("+t+")");return a.LOG_TABLE[t]},gexp:function(t){while(t<0)t+=255;while(t>=256)t-=255;return a.EXP_TABLE[t]},EXP_TABLE:new Array(256),LOG_TABLE:new Array(256)},u=0;u<8;u++)a.EXP_TABLE[u]=1<<u;for(u=8;u<256;u++)a.EXP_TABLE[u]=a.EXP_TABLE[u-4]^a.EXP_TABLE[u-5]^a.EXP_TABLE[u-6]^a.EXP_TABLE[u-8];for(u=0;u<255;u++)a.LOG_TABLE[a.EXP_TABLE[u]]=u;function l(t,e){if(void 0==t.length)throw new Error(t.length+"/"+e);var o=0;while(o<t.length&&0==t[o])o++;this.num=new Array(t.length-o+e);for(var n=0;n<t.length-o;n++)this.num[n]=t[n+o]}l.prototype={get:function(t){return this.num[t]},getLength:function(){return this.num.length},multiply:function(t){for(var e=new Array(this.getLength()+t.getLength()-1),o=0;o<this.getLength();o++)for(var n=0;n<t.getLength();n++)e[o+n]^=a.gexp(a.glog(this.get(o))+a.glog(t.get(n)));return new l(e,0)},mod:function(t){var e=this.getLength(),o=t.getLength();if(e-o<0)return this;for(var n=new Array(e),i=0;i<e;i++)n[i]=this.get(i);while(n.length>=o){var r=a.glog(n[0])-a.glog(t.get(0));for(i=0;i<t.getLength();i++)n[i]^=a.gexp(a.glog(t.get(i))+r);while(0==n[0])n.shift()}return new l(n,0)}};var c=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]];function d(){this.buffer=new Array,this.length=0}o.prototype.getRightType=function(){for(var t=1;t<41;t++){var e=c[4*(t-1)+this.errorCorrectLevel];if(void 0==e)throw new Error("bad rs block @ typeNumber:"+t+"/errorCorrectLevel:"+this.errorCorrectLevel);for(var o=e.length/3,n=0,i=0;i<o;i++){var r=e[3*i+0],s=e[3*i+2];n+=s*r}var a=t>9?2:1;if(this.utf8bytes.length+a<n||40==t){this.typeNumber=t,this.rsBlock=e,this.totalDataCount=n;break}}},d.prototype={get:function(t){var e=Math.floor(t/8);return this.buffer[e]>>>7-t%8&1},put:function(t,e){for(var o=0;o<e;o++)this.putBit(t>>>e-o-1&1)},putBit:function(t){var e=Math.floor(this.length/8);this.buffer.length<=e&&this.buffer.push(0),t&&(this.buffer[e]|=128>>>this.length%8),this.length++}};var h=[];n=function(t){if(this.options={text:"",size:256,correctLevel:3,background:"#ffffff",foreground:"#000000",pdground:"#000000",image:"",imageSize:30,canvasId:t.canvasId,context:t.context,usingComponents:t.usingComponents,showLoading:t.showLoading,loadingText:t.loadingText},"string"===typeof t&&(t={text:t}),t)for(var e in t)this.options[e]=t[e];for(var n=null,i=(e=0,h.length);e<i;e++)if(h[e].text==this.options.text&&h[e].text.correctLevel==this.options.correctLevel){n=h[e].obj;break}e==i&&(n=new o(this.options.text,this.options.correctLevel),h.push({text:this.options.text,correctLevel:this.options.correctLevel,obj:n}));var r=function(t){var e=t.options;return e.pdground&&(t.row>1&&t.row<5&&t.col>1&&t.col<5||t.row>t.count-6&&t.row<t.count-2&&t.col>1&&t.col<5||t.row>1&&t.row<5&&t.col>t.count-6&&t.col<t.count-2)?e.pdground:e.foreground},s=function(t){t.showLoading&&uni.showLoading({title:t.loadingText,mask:!0});for(var e=uni.createCanvasContext(t.canvasId,t.context),o=n.getModuleCount(),i=t.size,s=t.imageSize,a=(i/o).toPrecision(4),u=(i/o).toPrecision(4),l=0;l<o;l++)for(var c=0;c<o;c++){var d=Math.ceil((c+1)*a)-Math.floor(c*a),h=Math.ceil((l+1)*a)-Math.floor(l*a),f=r({row:l,col:c,count:o,options:t});e.setFillStyle(n.modules[l][c]?f:t.background),e.fillRect(Math.round(c*a),Math.round(l*u),d,h)}if(t.image){var p=function(e,o,n,i,r,s,a,u,l){e.setLineWidth(a),e.setFillStyle(t.background),e.setStrokeStyle(t.background),e.beginPath(),e.moveTo(o+s,n),e.arcTo(o+i,n,o+i,n+s,s),e.arcTo(o+i,n+r,o+i-s,n+r,s),e.arcTo(o,n+r,o,n+r-s,s),e.arcTo(o,n,o+s,n,s),e.closePath(),u&&e.fill(),l&&e.stroke()},v=Number(((i-s)/2).toFixed(2)),m=Number(((i-s)/2).toFixed(2));p(e,v,m,s,s,2,6,!0,!0),e.drawImage(t.image,v,m,s,s)}setTimeout((function(){e.draw(!0,(function(){setTimeout((function(){uni.canvasToTempFilePath({width:t.width,height:t.height,destWidth:t.width,destHeight:t.height,canvasId:t.canvasId,quality:Number(1),success:function(e){t.cbResult&&t.cbResult(e.tempFilePath)},fail:function(e){t.cbResult&&t.cbResult(e)},complete:function(){t.showLoading&&uni.hideLoading()}},t.context)}),t.text.length+100)}))}),t.usingComponents?0:150)};s(this.options)},n.prototype.clear=function(t){var e=uni.createCanvasContext(this.options.canvasId,this.options.context);e.clearRect(0,0,this.options.size,this.options.size),e.draw(!1,(function(){t&&t()}))}})();var i=n;e.default=i},db3f:function(t,e,o){"use strict";o.r(e);var n=o("41d4"),i=o("aff3");for(var r in i)"default"!==r&&function(t){o.d(e,t,(function(){return i[t]}))}(r);o("32b1");var s,a=o("f0c5"),u=Object(a["a"])(i["default"],n["b"],n["c"],!1,null,"84996c92",null,!1,n["a"],s);e["default"]=u.exports},e4ca:function(t,e,o){var n=o("24fb");e=n(!1),e.push([t.i,".tki-qrcode[data-v-994ed276]{position:relative}.tki-qrcode-canvas[data-v-994ed276]{position:fixed;top:%?-99999?%;left:%?-99999?%;z-index:-99999}",""]),t.exports=e},f2c8:function(t,e,o){var n=o("1bdb");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=o("4f06").default;i("9640a896",n,!0,{sourceMap:!1,shadowMode:!1})}}]);