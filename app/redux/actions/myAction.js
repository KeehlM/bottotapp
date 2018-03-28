import * as types from '../constants/actionTypes';
import { createAction } from 'redux-actions';
import * as myService from '../services/myService';
//通过验证码登录
export const fetchAuthenticationByCode = createAction(
	types.GET_AUTHENTICATION_BY_CODE,
	async({account, password})=> {
	    return await myService.fetchAuthenticationByCode(account, password);
	  },
	  ({account, resolved, rejected})=> {
	    return {
	      account,
	      resolved,
	      rejected
	    }
	}

);
//微信登录
export const authenticationByWxQq = createAction(
	types.GET_AUTHENTICATION_BY_WXQQ,
	async({account,account_type,icon,mobile,mobile_code})=>{
		return await myService.authenticationByWxQq(account,account_type,icon,mobile,mobile_code);
	},
	({account,resolved,rejected})=>{
		return{
			account,
			resolved,
			rejected
		}
	}
)
//个人中心
export const getMyUserAppInfo = createAction(
	types.GET_MY_USER_APPINFO,
	async()=>{
		return await myService.getMyUserAppInfo();
	},
	({resolved,rejected})=>{
		return{
			resolved,
			rejected
		}
	}
)

//设置页
export const getMyUserAccount = createAction(
	types.GET_MY_USER_USER_ACCOUNT,
	async(platform)=>{
		return await myService.getMyUserAccount(platform);
	},
	({resolved,rejected})=>{
		return{
			resolved,
			rejected
		}
	}
)

//更换手机号-步骤一-获取验证码
export const getMyUserCode = createAction(
	types.GET_MY_USER_CODE,
	async(type)=>{
		return await myService.getMyUserCode(type);
	},
	({resolved,rejected})=>{
		return{
			resolved,
			rejected
		}
	}
)

//更换手机号-步骤二-校验当前绑定手机验证码
export const getMyUserCheckFirstChangeMobileCode = createAction(
	types.GET_MY_USER_CHECK_FLRSTCHANGEMOBLIE_CODE,
	async(code)=>{
		return await myService.getMyUserCheckFirstChangeMobileCode(code);
	},
	({resolved,rejected})=>{
		return{
			resolved,
			rejected
		}
	}
)

//更换手机号-步骤三-获取新手机号验证码
export const getMyUserNewCode = createAction(
	types.GET_MY_USER_NEWCODE,
	async(new_mobile)=>{
		return await myService.getMyUserNewCode(new_mobile);
	},
	({resolved,rejected})=>{
		return{
			resolved,
			rejected
		}
	}
)

//更换手机号-步骤四-保存并验证新手机号码
export const getMyUserChangeMobile = createAction(
	types.GET_MY_USER_CHANGE_MOBILE,
	async(code,new_mobile)=>{
		return await myService.getMyUserChangeMobile(code,new_mobile);
	},
	({resolved,rejected})=>{
		return{
			resolved,
			rejected
		}
	}
)
//修改头像
export const getMyUserChangeHuadImg = createAction(
	types.GET_MY_USER_CHANGE_HEADIMG,
	async(head_path)=>{
		return await myService.getMyUserChangeHuadImg(head_path);
	},
	({resolved,rejected})=>{
		return{
			resolved,
			rejected
		}
	}
)
//绑定第三方授权账号(绑定微信)
export const getMyUserBindThirdAccount = createAction(
	types.GET_MY_USER_BIND_THIRDACCOUNT,
	async(account,account_type)=>{
		return await myService.getMyUserBindThirdAccount(account,account_type);
	},
	({resolved,rejected})=>{
		return{
			resolved,
			rejected
		}
	}
)

//解绑第三方授权账号(解绑微信)
export const getMyUserChangeThrdAccountStatus = createAction(
	types.GET_MY_USER_BIND_THIRDACCOUNT,
	async(account,account_type,platform,status)=>{
		return await myService.getMyUserChangeThrdAccountStatus(account,account_type,platform,status);
	},
	({resolved,rejected})=>{
		return{
			resolved,
			rejected
		}
	}
)

//消息列表（版本/学员)
export const getMyNoticeGetLists = createAction(
	types.GET_MY_NOTICE_GET_LISTS,
	async(paging,type)=>{
		// console.log('123')
		// console.log(paging)
		// console.log(type)
		return await myService.getMyNoticeGetLists(paging,type);
	},
	({resolved,rejected})=>{
		return{
			resolved,
			rejected
		}
	}
)

//点击查看，取消红点
export const getMyNoticeUpdateLog = createAction(
	types.GET_MY_NOTICE_GET_LISTS,
	async(last_id,type)=>{
		return await myService.getMyNoticeUpdateLog(last_id,type);
	},
	({resolved,rejected})=>{
		return{
			resolved,
			rejected
		}
	}
)

//获取所有车型列表
export const getAllCarsType = createAction(
	types.GET_ALL_CARS_TYPE,
	async()=>{
		return await myService.getAllCarsType();
	},
	({resolved,rejected})=>{
		return{
			resolved,
			rejected
		}
	}
)

//获取所有车型列表
export const addClassType = createAction(
	types.GET_ALL_CARS_TYPE,
	async({drive_type,price,title})=>{
		return await myService.addClassType(drive_type,price,title);
	},
	({resolved,rejected})=>{
		return{
			resolved,
			rejected
		}
	}
)

//修改班型
export const updateClassType = createAction(
	types.GET_ALL_CARS_TYPE,
	async({item_code,drive_type,price,title})=>{
		return await myService.updateClassType(item_code,drive_type,price,title);
		},
	({resolved,rejected})=>{
		return{
			resolved,
			rejected
		}
	}
)
//退出登录
export const getPubUserLogout = createAction(
	types.GET_PUB_USER_LOGOUT,
	async()=> {
		return await myService.getPubUserLogout();
	},
	({resolved,rejected})=>{
		return{
			resolved,
			rejected
		}
	}
)

//获取班型型列表
export const getClassTypeLists = createAction(
	types.GET_CLASS_LISTS,
	async()=>{
		return await myService.getClassTypeLists();
	},
	({resolved,rejected})=>{
		return{
			resolved,
			rejected
		}
	}
)

//删除班型
export const deleteClassTypeItem = createAction(
	types.GET_CLASS_LISTS,
	async({item_code})=>{
		return await myService.deleteClassTypeItem(item_code);
	},
	({resolved,rejected})=>{
		return{
			resolved,
			rejected
		}
	}
)

//完善教练信息
export const completeCardInfo = createAction(
	types.COMPLETE_CARD_INFO,
	async({manifesto,of_school_age,promotion_pictures,services,trainee_range})=>{
		return await myService.completeCardInfo(manifesto,of_school_age,promotion_pictures,services,trainee_range);
	},
	({resolved,rejected})=>{
		return{
			resolved,
			rejected
		}
	}
)

//获取教练信息
export const getCoachInfo = createAction(
	types.GET_CAOCH_INFO,
	async({need_all_service})=>{
		return await myService.getCoachInfo(need_all_service);
	},
	({resolved,rejected})=>{
		return{
			resolved,
			rejected
		}
	}
)

//获取服务列表
export const getCardService = createAction(
	types.GET_CARD_SERVICE,
	async()=>{
		return await myService.getCardService();
	},
	({resolved,rejected})=>{
		return{
			resolved,
			rejected
		}
	}
)

//修改教练信息
export const updateCoachInfo = createAction(
	types.UPDATE_COACH_INFO,
	async({manifesto,of_school_age,promotion_pictures,services,trainee_range})=>{
		return await myService.updateCoachInfo(manifesto,of_school_age,promotion_pictures,services,trainee_range);
	},
	({resolved,rejected})=>{
		return{
			resolved,
			rejected
		}
	}
)

//分享请求微信qq
export const shareEncrypt = createAction(
	types.SHARE_ENCRYPT_INFOMATION,
	async()=>{
		return await myService.shareEncrypt();
	},
	({resolved,rejected})=>{
		return{
			resolved,
			rejected
		}
	}
)

//分享请求微信qq
export const getSchoolList = createAction(
	types.GET_SCHOOL_LIST,
	async()=>{
		return await myService.getSchoolList();
	},
	({resolved,rejected})=>{
		return{
			resolved,
			rejected
		}
	}
)

//删除班型
export const updateDefaultSchool = createAction(
	types.UPDATE_DEFAULT_SCHOOL,
	async({uc_code})=>{
		return await myService.updateDefaultSchool(uc_code);
	},
	({resolved,rejected})=>{
		return{
			resolved,
			rejected
		}
	}
)

//消息列表
export const getMyNoticeLists = createAction(
    types.GET_BUSINESS_MY_NOTICE_LISTS,
    async(paging)=>{
        return await myService.getMyNoticeLists(paging);
    },
    ({resolved,rejected})=>{
        return{
            resolved,
            rejected
        }
    }
)

//我的账单
export const getMyUserSettlementList = createAction(
    types.GET_BUSINESS_MY_USER_SETTLEMENT_LIST,
    async(paging)=>{
        return await myService.getMyUserSettlementList(paging);
    },
    ({resolved,rejected})=>{
        return{
            resolved,
            rejected
        }
    }
)
//意见反馈
export const getMyAdvisoryCreat = createAction(
    types.GET_BUSINESS_MY_ADVISORY_CREATE,
    async({uc_code,remark})=>{
        console.log('zzzzzzz')
        console.log(uc_code)
        console.log(remark)
        return await myService.getMyAdvisoryCreat(uc_code,remark);
    },
    ({resolved,rejected})=>{
        return{
            resolved,
            rejected
        }
    }
)