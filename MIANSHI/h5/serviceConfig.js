// prod生产环境
// const config = {
//         shareUrl: 'https://mdiamonds.legendshop.cn/',
//         server: 'https://userapp.legendshop.cn',
//         photoServer: 'https://legendshop-diamonds.oss-cn-shenzhen.aliyuncs.com/',
//         staticServer: 'https://legendshop-front-resource.oss-cn-shenzhen.aliyuncs.com/miniprogram/',
//         imServer: 'wss://diamondsim.legendshop.cn',
//         AmapKey: 'b67650d214590281b2ab8e413473553d',
//     }
    
// test测试环境
// const config ={
//         shareUrl: "https://mdiamonds-test.legendshop.cn/",
//         server: "https://userapp-test.legendshop.cn",
//         photoServer: "http://legendshop-test.oss-cn-shenzhen.aliyuncs.com/",
//         staticServer: "https://legendshop-front-resource.oss-cn-shenzhen.aliyuncs.com/miniprogram/",
//         imServer: "ws://diamondsim-test.legendshop.cn",
//         AmapKey: "b67650d214590281b2ab8e413473553d",
//     }

// 北京康营
// const config = {
// 	    shareUrl: "https://m.zhizhenbao.net/",
// 	    server: "https://api.zhizhenbao.net",
// 	    photoServer: "https://kangying.oss-cn-beijing.aliyuncs.com/",
// 	    staticServer: "https://legendshop-front-resource.oss-cn-shenzhen.aliyuncs.com/miniprogram/",
// 	    imServer: "wss://im.zhizhenbao.net",
// 	    AmapKey: "05c91eb8a4c468c3f43b5358805dd825",
//      companyName:'北京康营',//app专用，privacyPolicy《用户服务协议和隐私政策》里公司全称，不传值就默认是：广州朗尊软件科技有限公司
//      copyright: '北京康营', //版本所有。不设值的话默认是：朗尊电商
// 	}

// 微服务(远洋)
// const config ={
//         shareUrl: "http://192.168.0.19/",
//         server: "http://192.168.0.19:9999", 
//         photoServer: "http://192.168.0.148:3005/photoserver/photo/", //图片服务器地址
//         staticServer: "https://legendshop-front-resource.oss-cn-shenzhen.aliyuncs.com/miniprogram/",
//         imServer: "ws://192.168.0.19:2397",
//         AmapKey: "b67650d214590281b2ab8e413473553d",
//         isOauth2: true,//用来判断是否是微服务
//     }

// 微服务(一撕得)
const config ={
        //shareUrl: "https://m.yiside.cn/",
        server: "https://userapp.yiside.cn", 
		server: "https://userapp-test.legendshop.cn",
        photoServer: "https://ls-yiside.oss-cn-hangzhou.aliyuncs.com/", //图片服务器地址
        staticServer: "https://ls-yiside.oss-cn-hangzhou.aliyuncs.com/miniprogram/",
        imServer: "ws://im.yiside.cn",
        AmapKey: "b67650d214590281b2ab8e413473553d",
        isOauth2: true,//用来判断是否是微服务
        closeDiscovery:true,//屏蔽种草功能
        companyName:'一撕得',//app专用，privacyPolicy《用户服务协议和隐私政策》里公司全称，不传值就默认是：广州朗尊软件科技有限公司
        copyright: '一撕得商城', //版本所有。不设值的话默认是：朗尊电商
    }
