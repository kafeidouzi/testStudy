(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["accountModules-loginChoose-loginChoose"],{"0c89":function(t,n,e){"use strict";var o=e("4ea4");e("c975"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=o(e("5530")),a=o(e("5763")),r=e("2f62"),s=o(e("4663")),c=e("e198"),u=e("2d54"),l={data:function(){return{session_key:"",userInfo:"",phoneModel:"",staticServer:this.$staticServer,canIUseGetUserProfile:!1}},components:{uniPopup:a.default},onShow:function(){var t=this;uni.getSystemInfo({success:function(n){t.phoneModel=n.model}}),uni.getUserProfile&&(this.canIUseGetUserProfile=!0)},mounted:function(){this.login()},computed:(0,i.default)((0,i.default)({},(0,r.mapState)(["themes","from"])),{},{getPhoneWhite:function(){return this.phoneModel.indexOf("iPhone X")>=0||this.phoneModel.indexOf("iPhone 11")>=0||this.phoneModel.indexOf("iPhone 12")>=0}}),methods:{goPhonePage:function(){uni.navigateTo({url:"/accountModules/bindingPhone/bindingPhone"})},getuserinfo:function(t){t.detail.userInfo?(this.$refs.loginIntroduce.open(),this.userInfo=t.detail.userInfo):uni.showToast({title:"您拒绝了微信授权登录",duration:2e3,icon:"none"})},getUserProfile:function(t){var n=this;uni.getUserProfile({desc:"用于完善会员资料",success:function(t){t.userInfo?(n.$refs.loginIntroduce.open(),n.userInfo=t.userInfo):uni.showToast({title:"您拒绝了微信授权登录",duration:2e3,icon:"none"})}})},getphonenumber:function(t){if(t.detail.encryptedData){var n=t.detail,e=n.encryptedData,o=n.iv,i=this;uni.checkSession({success:function(){""!=i.session_key&&i.autoAnalysis(e,o)}})}else uni.showToast({title:"您拒绝了微信授权手机号",duration:2e3,icon:"none"})},closePop:function(){this.$refs.loginIntroduce.close()},goServicePage:function(){uni.navigateTo({url:"/accountModules/register/agreement"})},goPrivacyPage:function(){uni.navigateTo({url:"/accountModules/register/platformPrivacyPolicy"})},login:function(t,n){var e=this;uni.login({success:function(t){if(t.code){e.code=t.code;var n={code:t.code,type:"weixin"};s.default.getKey(n).then((function(t){e.session_key=t.result}))}else uni.switchTab({url:"/pages/index/index"})},fail:function(t){console.log("wx.login失败: %o",t),uni.switchTab({url:"/pages/index/index"}),uni.showToast({title:"自动登录失败, 请联系客服!",icon:"none",duration:2e3})}})},autoAnalysis:function(t,n){var e=this,o={encryptedData:t,iv:n,sessionKey:this.session_key,avatarUrl:this.userInfo.avatarUrl,nickName:this.userInfo.nickName};this.from&&(o.userSource=this.from),s.default.getInfo(JSON.stringify(o)).then((function(t){if(1==t.status)c.appToken.setToken(t.result,"weixinMpLogin"),c.appToken.setOpenId(t.result.additionalInformation.open_id),1==t.result.additionalInformation.register&&e.$buriedPoint("注册",1,1),u.pages.goBeforePage(1,["login"]),uni.showToast({title:"登录成功"});else if(2==t.status){var n=t.result;c.passport.setPassportIdKey(n),uni.redirectTo({url:"/accountModules/bindingPhone/bindingPhone"}),uni.hideToast(),uni.hideLoading()}}))}}};n.default=l},"0ed8":function(t,n,e){"use strict";var o;e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return a})),e.d(n,"a",(function(){return o}));var i=function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("v-uni-view",{staticClass:"login-choose-wrapper"},[o("v-uni-view",{staticClass:"shop-info-wrapper"},[o("v-uni-view",{staticClass:"shop-img"},[o("v-uni-image",{staticClass:"img",attrs:{src:t.staticServer+"static/images/logo-yuan.png",mode:""}})],1),o("v-uni-view",{staticClass:"shop-name"},[t._v("一撕得商城")])],1),o("v-uni-view",{staticClass:"button-wrapper"},[t.canIUseGetUserProfile?o("v-uni-button",{staticClass:"button-style",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.getUserProfile.apply(void 0,arguments)}}},[o("v-uni-image",{staticClass:"login-pic",attrs:{src:e("9748"),mode:""}}),t._v("微信账号快捷登录")],1):o("v-uni-button",{staticClass:"button-style",attrs:{"open-type":"getUserInfo"},on:{getuserinfo:function(n){arguments[0]=n=t.$handleEvent(n),t.getuserinfo.apply(void 0,arguments)}}},[o("v-uni-image",{staticClass:"login-pic",attrs:{src:e("9748"),mode:""}}),t._v("微信账号快捷登录")],1)],1),o("v-uni-view",{staticClass:"login-register",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.goPhonePage.apply(void 0,arguments)}}},[t._v("输入手机号码登录/注册")]),o("v-uni-view",{staticClass:"agreement-footer"},[o("span",{staticClass:"red-color",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.goServicePage.apply(void 0,arguments)}}},[t._v("《服务条款》")]),t._v("与"),o("span",{staticClass:"red-color",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.goPrivacyPage.apply(void 0,arguments)}}},[t._v("《隐私政策》")])]),o("uniPopup",{ref:"loginIntroduce",attrs:{type:"bottom"}},[o("v-uni-view",{staticClass:"introduce-content"},[o("v-uni-view",{staticClass:"introduce-wrapper"},[o("v-uni-view",{staticClass:"pop-title"},[t._v("登录说明")]),o("v-uni-view",{staticClass:"img-wrapper",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.closePop.apply(void 0,arguments)}}},[o("v-uni-image",{staticClass:"img",attrs:{src:e("ed50"),mode:""}})],1),o("v-uni-view",{staticClass:"login-tips"},[t._v("在您注册成为一撕得商城会员的过程中，您需要通过点击同意的形式在线签署"),o("span",{staticStyle:{"font-weight":"bold"}},[t._v("《一撕得服务条款》、《隐私政策》")]),t._v("，请您务必仔细阅读、充分理解内容后再点击同意"),o("span",{staticStyle:{"font-weight":"bold"}},[t._v("（尤其是以\n                        粗体并下划线标识的条款，因为这些条款可能会明确您应履行的义务或对您的权力有所限制）。")])]),o("v-uni-view",{staticClass:"login-tips"},[t._v("请您注意：如果您不同意上述服务条款、隐私政策或者其中任何约定，请您停止注册。如您阅读并点击同意即表示您已充分阅读、理解\n                    并接受其全部内容，并表明您也同意一撕得商城可以依据以上隐私政策来处理您的个人信息。如您对以上服务条款、隐私政策有任何疑惑，可以联系一撕得商城客服。")]),o("v-uni-view",{staticClass:"agree-tips"},[t._v("点击同意即表示您已阅读并同意"),o("span",{staticClass:"red-color",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.goServicePage.apply(void 0,arguments)}}},[t._v("《一撕得服务条款》")]),t._v("与"),o("span",{staticClass:"red-color",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.goPrivacyPage.apply(void 0,arguments)}}},[t._v("《隐私政策》")])])],1),o("v-uni-view",{staticClass:"footer-btns"},[o("v-uni-view",{staticClass:"btn-left btn",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.closePop.apply(void 0,arguments)}}},[t._v("不同意")]),o("v-uni-button",{staticClass:"btn-right btn",attrs:{"open-type":"getPhoneNumber"},on:{getphonenumber:function(n){arguments[0]=n=t.$handleEvent(n),t.getphonenumber.apply(void 0,arguments)}}},[t._v("同意")])],1)],1)],1),t.getPhoneWhite?o("v-uni-view",{staticClass:"bottom-white"}):t._e()],1)},a=[]},"16de":function(t,n,e){"use strict";var o=e("7130"),i=e.n(o);i.a},"1c78":function(t,n,e){var o=e("ec89");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var i=e("4f06").default;i("7adf82d0",o,!0,{sourceMap:!1,shadowMode:!1})},"1ef7":function(t,n,e){"use strict";var o;e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return a})),e.d(n,"a",(function(){return o}));var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return t.showPopup?e("v-uni-view",{staticClass:"uni-popup",class:[t.popupstyle],on:{touchmove:function(n){n.stopPropagation(),n.preventDefault(),arguments[0]=n=t.$handleEvent(n),t.clear.apply(void 0,arguments)}}},[t.maskShow?e("uni-transition",{staticClass:"uni-mask--hook",attrs:{"mode-class":["fade"],styles:t.maskClass,duration:t.duration,show:t.showTrans},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.onTap.apply(void 0,arguments)}}}):t._e(),e("uni-transition",{attrs:{"mode-class":t.ani,styles:t.transClass,duration:t.duration,show:t.showTrans},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.onTap.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"uni-popup__wrapper-box",on:{click:function(n){n.stopPropagation(),arguments[0]=n=t.$handleEvent(n),t.clear.apply(void 0,arguments)}}},[t._t("default")],2)],1)],1):t._e()},a=[]},"349d":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o={created:function(){"message"===this.type&&(this.maskShow=!1,this.childrenMsg=null)},methods:{customOpen:function(){this.childrenMsg&&this.childrenMsg.open()},customClose:function(){this.childrenMsg&&this.childrenMsg.close()}}};n.default=o},3958:function(t,n,e){"use strict";e.r(n);var o=e("0c89"),i=e.n(o);for(var a in o)"default"!==a&&function(t){e.d(n,t,(function(){return o[t]}))}(a);n["default"]=i.a},3972:function(t,n,e){"use strict";e.r(n);var o=e("fa6e"),i=e.n(o);for(var a in o)"default"!==a&&function(t){e.d(n,t,(function(){return o[t]}))}(a);n["default"]=i.a},4450:function(t,n,e){"use strict";var o=e("4be3"),i=e.n(o);i.a},"45bd":function(t,n,e){"use strict";var o;e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return a})),e.d(n,"a",(function(){return o}));var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return t.isShow?e("v-uni-view",{ref:"ani",staticClass:"uni-transition",class:[t.ani.in],style:"transform:"+t.transform+";"+t.stylesObject,on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.change.apply(void 0,arguments)}}},[t._t("default")],2):t._e()},a=[]},"4be3":function(t,n,e){var o=e("777f");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var i=e("4f06").default;i("75777a91",o,!0,{sourceMap:!1,shadowMode:!1})},5763:function(t,n,e){"use strict";e.r(n);var o=e("1ef7"),i=e("d715");for(var a in i)"default"!==a&&function(t){e.d(n,t,(function(){return i[t]}))}(a);e("4450");var r,s=e("f0c5"),c=Object(s["a"])(i["default"],o["b"],o["c"],!1,null,"a3668d3c",null,!1,o["a"],r);n["default"]=c.exports},6061:function(t,n,e){"use strict";e.r(n);var o=e("45bd"),i=e("3972");for(var a in i)"default"!==a&&function(t){e.d(n,t,(function(){return i[t]}))}(a);e("16de");var r,s=e("f0c5"),c=Object(s["a"])(i["default"],o["b"],o["c"],!1,null,"77ed88fe",null,!1,o["a"],r);n["default"]=c.exports},6788:function(t,n,e){"use strict";e.r(n);var o=e("0ed8"),i=e("3958");for(var a in i)"default"!==a&&function(t){e.d(n,t,(function(){return i[t]}))}(a);e("c876");var r,s=e("f0c5"),c=Object(s["a"])(i["default"],o["b"],o["c"],!1,null,"6a683cf2",null,!1,o["a"],r);n["default"]=c.exports},7130:function(t,n,e){var o=e("fef4");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var i=e("4f06").default;i("080119fe",o,!0,{sourceMap:!1,shadowMode:!1})},"777f":function(t,n,e){var o=e("24fb");n=o(!1),n.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.uni-popup[data-v-a3668d3c]{position:fixed;z-index:99}.uni-popup__mask[data-v-a3668d3c]{position:absolute;top:0;bottom:0;left:0;right:0;background-color:rgba(0,0,0,.4);opacity:0}.mask-ani[data-v-a3668d3c]{-webkit-transition-property:opacity;transition-property:opacity;-webkit-transition-duration:.2s;transition-duration:.2s}.uni-top-mask[data-v-a3668d3c]{opacity:1}.uni-bottom-mask[data-v-a3668d3c]{opacity:1}.uni-center-mask[data-v-a3668d3c]{opacity:1}.uni-popup__wrapper[data-v-a3668d3c]{display:block;position:absolute}.top[data-v-a3668d3c]{top:var(--window-top)}.bottom[data-v-a3668d3c]{bottom:0}.uni-popup__wrapper-box[data-v-a3668d3c]{display:block;position:relative;\r\n  /* iphonex 等安全区设置，底部安全区适配 */padding-bottom:constant(safe-area-inset-bottom);padding-bottom:env(safe-area-inset-bottom)}.content-ani[data-v-a3668d3c]{-webkit-transition-property:opacity,-webkit-transform;transition-property:opacity,-webkit-transform;transition-property:transform,opacity;transition-property:transform,opacity,-webkit-transform;-webkit-transition-duration:.2s;transition-duration:.2s}.uni-top-content[data-v-a3668d3c]{-webkit-transform:translateY(0);transform:translateY(0)}.uni-bottom-content[data-v-a3668d3c]{-webkit-transform:translateY(0);transform:translateY(0)}.uni-center-content[data-v-a3668d3c]{-webkit-transform:scale(1);transform:scale(1);opacity:1}',""]),t.exports=n},9748:function(t,n){t.exports="data:image/png;base64,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"},c876:function(t,n,e){"use strict";var o=e("1c78"),i=e.n(o);i.a},d715:function(t,n,e){"use strict";e.r(n);var o=e("f8a6"),i=e.n(o);for(var a in o)"default"!==a&&function(t){e.d(n,t,(function(){return o[t]}))}(a);n["default"]=i.a},ec89:function(t,n,e){var o=e("24fb");n=o(!1),n.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.login-choose-wrapper[data-v-6a683cf2]{background:#fff;height:100vh;box-sizing:border-box;padding-top:%?232?%}.login-choose-wrapper .bottom-white[data-v-6a683cf2]{height:%?68?%;position:fixed;left:0;bottom:0;background:#fff;width:100vw;z-index:99}.login-choose-wrapper .red-color[data-v-6a683cf2]{color:#dc231e}.login-choose-wrapper .login-tips[data-v-6a683cf2]{font-family:PingFangSC-Regular;font-size:%?28?%;color:#2a2a2a}.login-choose-wrapper .shop-info-wrapper[data-v-6a683cf2]{margin:0 auto}.login-choose-wrapper .shop-info-wrapper .shop-img[data-v-6a683cf2]{margin:0 auto;width:%?112?%;height:%?112?%;border-radius:%?112?%}.login-choose-wrapper .shop-info-wrapper .shop-img .img[data-v-6a683cf2]{width:100%;height:100%}.login-choose-wrapper .shop-info-wrapper .shop-name[data-v-6a683cf2]{margin:%?20?% auto %?200?%;font-family:PingFangSC-Medium;font-size:%?32?%;color:#333;font-weight:700;text-align:center}.login-choose-wrapper .button-wrapper[data-v-6a683cf2]{width:100%;margin:0 auto}.login-choose-wrapper .button-wrapper .button-style[data-v-6a683cf2]{width:%?630?%;height:%?88?%;background:#0cba08;border-radius:%?44?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;color:#fff;font-family:PingFangSC-Medium;font-size:%?32?%;margin-bottom:%?40?%}.login-choose-wrapper .button-wrapper .button-style[data-v-6a683cf2]::after{border:none;background-color:none}.login-choose-wrapper .button-wrapper .button-style .login-pic[data-v-6a683cf2]{margin-right:%?20?%;width:%?48?%;height:%?40?%}.login-choose-wrapper .login-register[data-v-6a683cf2]{font-family:PingFangSC-Regular;font-size:%?28?%;color:#0091ff;width:%?294?%;margin:0 auto %?352?%}.login-choose-wrapper .agreement-footer[data-v-6a683cf2]{margin:0 auto;font-family:PingFangSC-Regular;font-size:%?28?%;color:#151515;text-align:center;position:fixed;bottom:%?80?%;width:100%}.login-choose-wrapper .introduce-content[data-v-6a683cf2]{background:#fff;border-radius:8px 8px 0 0}.login-choose-wrapper .introduce-content .introduce-wrapper[data-v-6a683cf2]{padding:%?30?% %?30?% %?0?%}.login-choose-wrapper .introduce-content .introduce-wrapper .pop-title[data-v-6a683cf2]{margin:0 auto %?54?%;width:%?144?%;font-family:PingFangSC-Regular;font-size:%?36?%;color:#333}.login-choose-wrapper .introduce-content .introduce-wrapper .img-wrapper[data-v-6a683cf2]{width:%?28?%;height:%?28?%;position:absolute;top:%?30?%;right:%?30?%}.login-choose-wrapper .introduce-content .introduce-wrapper .img-wrapper .img[data-v-6a683cf2]{width:100%;height:100%}.login-choose-wrapper .introduce-content .introduce-wrapper .agree-tips[data-v-6a683cf2]{margin:%?200?% 0 %?28?%;font-family:PingFangSC-Regular;font-size:%?28?%;color:#333}.login-choose-wrapper .introduce-content .footer-btns[data-v-6a683cf2]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;height:%?96?%;font-family:PingFangSC-Regular;font-size:%?32?%;color:#666;padding-left:%?30?%}.login-choose-wrapper .introduce-content .footer-btns .btn[data-v-6a683cf2]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;box-sizing:border-box;border-radius:%?90?%;width:calc((100vw - %?90?%) / 2)}.login-choose-wrapper .introduce-content .footer-btns .btn-left[data-v-6a683cf2]{box-sizing:border-box;height:%?90?%;border:%?2?% solid #dc231e;color:#dc231e}.login-choose-wrapper .introduce-content .footer-btns .btn-right[data-v-6a683cf2]{box-sizing:border-box;height:%?90?%;background-color:#dc231e;color:#fff;border-radius:%?90?%;font-size:%?32?%;padding:%?0?%}.login-choose-wrapper .introduce-content .footer-btns .btn-right[data-v-6a683cf2]::after{background-color:none;border:none;width:%?0?%;height:%?0?%}',""]),t.exports=n},ed50:function(t,n){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAAcBJREFUWAnN2EFOwzAQBdDaSpZwHth0FQXlCtyCE1RchhugiG02cB66TNTiHzFVSj3xzDiJsNTacsczL64qp3F1Xb+cTqfX3W7XlWX53Lbtdxhv1pqmue/7/i0U3HvvD66qKgDuIHDOfRVF8bQVCphhGD7O5/MD6od29OGtG4fhDR8gAIE0t1YfwaBU5/E1YWeo8BaoGAaG0QIIF7DG15eq5WhnUoEUl9NLalxAKCRZYAVJc1+B1kJJMah/A1oapcGwoKVQWswsKBdlwSRBVpQVIwJpUTkYMUiKysWoQCkUPv9zUJoO6+jPHsm5xu0C4ientgmDHGoQFsVQmKeWcxtjAqEwh8rBIC/uh/5VM+0Qtzt0ZTm7pAYxmM9fzGMuSgWKYWg3ANn0Zz+HoT8FkhjaQa4X7ZCmkCY2hkqCLAUsawg3C8pJbF3LgqwJ6UrRW3JEQZZEU8h0rM11A9ImmBbnxpqcVyDNQq44Ny/NfQFJF3AFJfOSGiNIEigpKIlJ1XKpAEkRbcxcTY+HRUvc6WlQOGrwIAPnIK2DARbcD+1pkg5KOptofo0+hoIlPEXzhzA4htf7Go9f5i6GUKgNAyw/Yo7IYWMzubsAAAAASUVORK5CYII="},f3e3:function(t,n,e){"use strict";var o=e("4ea4");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=o(e("349d")),a={top:"top",bottom:"bottom",center:"center",message:"top",dialog:"center",share:"bottom"},r={data:function(){return{config:a}},mixins:[i.default]};n.default=r},f8a6:function(t,n,e){"use strict";var o=e("4ea4");e("d3b7"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=o(e("6061")),a=o(e("f3e3")),r={name:"UniPopup",components:{uniTransition:i.default},props:{animation:{type:Boolean,default:!0},type:{type:String,default:"center"},maskClick:{type:Boolean,default:!0}},provide:function(){return{popup:this}},mixins:[a.default],watch:{type:{handler:function(t){this[this.config[t]]()},immediate:!0},maskClick:{handler:function(t){this.mkclick=t},immediate:!0}},data:function(){return{duration:300,ani:[],showPopup:!1,showTrans:!1,maskClass:{position:"fixed",bottom:0,top:0,left:0,right:0,backgroundColor:"rgba(0, 0, 0, 0.4)"},transClass:{position:"fixed",left:0,right:0},maskShow:!0,mkclick:!0,popupstyle:"top"}},created:function(){this.mkclick=this.maskClick,this.animation?this.duration=300:this.duration=0},methods:{clear:function(t){t.stopPropagation()},open:function(){var t=this;this.showPopup=!0,this.$nextTick((function(){new Promise((function(n){clearTimeout(t.timer),t.timer=setTimeout((function(){t.showTrans=!0,t.$nextTick((function(){n()}))}),50)})).then((function(n){clearTimeout(t.msgtimer),t.msgtimer=setTimeout((function(){t.customOpen&&t.customOpen()}),100),t.$emit("change",{show:!0,type:t.type})}))}))},close:function(t){var n=this;this.showTrans=!1,this.$nextTick((function(){n.$emit("change",{show:!1,type:n.type}),clearTimeout(n.timer),n.customOpen&&n.customClose(),n.timer=setTimeout((function(){n.showPopup=!1}),300)}))},onTap:function(){this.mkclick&&this.close()},top:function(){this.popupstyle="top",this.ani=["slide-top"],this.transClass={position:"fixed",left:0,right:0}},bottom:function(){this.popupstyle="bottom",this.ani=["slide-bottom"],this.transClass={position:"fixed",left:0,right:0,bottom:0}},center:function(){this.popupstyle="center",this.ani=["zoom-out","fade"],this.transClass={position:"fixed",display:"flex",flexDirection:"column",bottom:0,left:0,right:0,top:0,justifyContent:"center",alignItems:"center"}}}};n.default=r},fa6e:function(t,n,e){"use strict";var o=e("4ea4");e("4160"),e("a9e3"),e("ac1f"),e("5319"),e("159b"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=o(e("5530")),a={name:"uniTransition",props:{show:{type:Boolean,default:!1},modeClass:{type:Array,default:function(){return[]}},duration:{type:Number,default:300},styles:{type:Object,default:function(){return{}}}},data:function(){return{isShow:!1,transform:"",ani:{in:"",active:""}}},watch:{show:{handler:function(t){t?this.open():this.close()},immediate:!0}},computed:{stylesObject:function(){var t=(0,i.default)((0,i.default)({},this.styles),{},{"transition-duration":this.duration/1e3+"s"}),n="";for(var e in t){var o=this.toLine(e);n+=o+":"+t[e]+";"}return n}},created:function(){},methods:{change:function(){this.$emit("click",{detail:this.isShow})},open:function(){var t=this;for(var n in clearTimeout(this.timer),this.isShow=!0,this.transform="",this.ani.in="",this.getTranfrom(!1))"opacity"===n?this.ani.in="fade-in":this.transform+="".concat(this.getTranfrom(!1)[n]," ");this.$nextTick((function(){setTimeout((function(){t._animation(!0)}),50)}))},close:function(t){clearTimeout(this.timer),this._animation(!1)},_animation:function(t){var n=this,e=this.getTranfrom(t);for(var o in this.transform="",e)"opacity"===o?this.ani.in="fade-".concat(t?"out":"in"):this.transform+="".concat(e[o]," ");this.timer=setTimeout((function(){t||(n.isShow=!1),n.$emit("change",{detail:n.isShow})}),this.duration)},getTranfrom:function(t){var n={transform:""};return this.modeClass.forEach((function(e){switch(e){case"fade":n.opacity=t?1:0;break;case"slide-top":n.transform+="translateY(".concat(t?"0":"-100%",") ");break;case"slide-right":n.transform+="translateX(".concat(t?"0":"100%",") ");break;case"slide-bottom":n.transform+="translateY(".concat(t?"0":"100%",") ");break;case"slide-left":n.transform+="translateX(".concat(t?"0":"-100%",") ");break;case"zoom-in":n.transform+="scale(".concat(t?1:.8,") ");break;case"zoom-out":n.transform+="scale(".concat(t?1:1.2,") ");break}})),n},_modeClassArr:function(t){var n=this.modeClass;if("string"!==typeof n){var e="";return n.forEach((function(n){e+=n+"-"+t+","})),e.substr(0,e.length-1)}return n+"-"+t},toLine:function(t){return t.replace(/([A-Z])/g,"-$1").toLowerCase()}}};n.default=a},fef4:function(t,n,e){var o=e("24fb");n=o(!1),n.push([t.i,".uni-transition[data-v-77ed88fe]{-webkit-transition-timing-function:ease;transition-timing-function:ease;-webkit-transition-duration:.3s;transition-duration:.3s;-webkit-transition-property:opacity,-webkit-transform;transition-property:opacity,-webkit-transform;transition-property:transform,opacity;transition-property:transform,opacity,-webkit-transform}.fade-in[data-v-77ed88fe]{opacity:0}.fade-active[data-v-77ed88fe]{opacity:1}.slide-top-in[data-v-77ed88fe]{\n\t/* transition-property: transform, opacity; */-webkit-transform:translateY(-100%);transform:translateY(-100%)}.slide-top-active[data-v-77ed88fe]{-webkit-transform:translateY(0);transform:translateY(0)\n\t/* opacity: 1; */}.slide-right-in[data-v-77ed88fe]{-webkit-transform:translateX(100%);transform:translateX(100%)}.slide-right-active[data-v-77ed88fe]{-webkit-transform:translateX(0);transform:translateX(0)}.slide-bottom-in[data-v-77ed88fe]{-webkit-transform:translateY(100%);transform:translateY(100%)}.slide-bottom-active[data-v-77ed88fe]{-webkit-transform:translateY(0);transform:translateY(0)}.slide-left-in[data-v-77ed88fe]{-webkit-transform:translateX(-100%);transform:translateX(-100%)}.slide-left-active[data-v-77ed88fe]{-webkit-transform:translateX(0);transform:translateX(0);opacity:1}.zoom-in-in[data-v-77ed88fe]{-webkit-transform:scale(.8);transform:scale(.8)}.zoom-out-active[data-v-77ed88fe]{-webkit-transform:scale(1);transform:scale(1)}.zoom-out-in[data-v-77ed88fe]{-webkit-transform:scale(1.2);transform:scale(1.2)}",""]),t.exports=n}}]);