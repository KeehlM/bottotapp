import { Platform } from 'react-native';
module.exports = {
	statics: {
    	// 项目名称
    	APPNAME: "",
    	
    	// 公司名称
    	COMMPANY: "",
    	
    	// 内容tab前缀
    	CONTENTTABPREFIX: "_content_tab_",
    	
    	// APi服务地址
         APIADDRESS : "http://47.74.230.79/public/index.php/",
    	IMAGEADDRESS : "",//图片服务器正式
    	
    	// 客户端标识
    	CLIENT : "business",
    	
    	// salt
    	SALT : "BOTTOSTHEREALBLOCKCHAIN",   	
        //mobile_token
        MOBILE_TOKEN:'bottos888',
    	// session story name
    	SESSION_LOCAL_STORAGE : 'uzee_session',
    	
    	// client Type
    	CLIENT_TYPE : Platform.OS,
    	
    	// api 调用默认的超时时间  ms
    	REQUEST_API_TIMEOUT : 5000,
    	
    	// client version 当前客户端版本
    	CLIENT_VERSION : "v1.0.0",

        // IOS版本号
        CLIENT_VERSION_IOS : "1.0.4",
        
    	
    	// api请求时候的loading提示
    	REQUEST_API_LOADING_TEXT : "请稍候...",
    	
    	// 业务相关错误码配置
    	REQUEST_ERROR_CODE : {
            ERR_1009 : "SESSION_UNVALIED",
            ERR_600 : "PARAMS_ERR",
            ERR_0   : "SUCCESS" ,
        },
        // 服务端请求异常默认值
        SERVER_ERR_DEFAULT : {
            code : -1,
            message : "服务端异常!",
            response : {},
            flag : "FAIL"
        },
    	// 获取 client 授权 
    	getPowerBy: function() {
    		var string = "Powered by " + this.APPNAME + " | Copyright ©" + this.COMMPANY + " All rights reserved.";
    		return string;
    	},
        
    },
    //存储storage
    storageKey:{
        USER_TOKEN:'token',
		FIRST_IN_AD:'FIRST_IN_AD',
		UC_CODE:'UC_CODE'//第一次进入软件

    },
    //平台绑定类型
    platform:{
        'MOBILE':'手机',
        'WECHAT':'微信'
    },
    //分页配置信息
    paging:{
        page:1,
        page_size:20
    },
    placeHolderColor:'#909090',
    //textInput opacity
    activeOpacity:0.7,
    cartype:["C1","C2","A2","B1","B2"]
}