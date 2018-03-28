import { createAction } from 'redux-actions';
import * as types from '../constants/actionTypes';
import * as loginService from '../services/loginService';


//获取验证码
export const getCodeByPhone = createAction( 
	types.GET_CODE_BY_PHONE,
	async({mobile})=>{
		return await loginService.getCodeByPhone(mobile);
	},
	({resolved,rejected})=>{
		return{
			resolved,
			rejected
		}
	}
)

//注册
export const register = createAction( 
	types.REGISTER,
	async({mobile,code,password})=>{
		return await loginService.register(mobile,code,password);
	},
	({resolved,rejected})=>{
		return{
			resolved,
			rejected
		}
	}
)

//密码登陆
export const login = createAction(
	types.LOGIN,
	async({mobile,password})=>{
		return await loginService.login(mobile,password);
	},
	({resolved,rejected})=>{
		return{
			resolved,
			rejected
		}
	}
)

//微信登陆
export const getAuthenticationByWXQQ = createAction(
	types.GET_AUTHENTICATION_BY_WXQQ,
	async({account,account_type,icon,mobile,mobile_code})=>{
		return await loginService.getAuthenticationByWXQQ(account,account_type,icon,mobile,mobile_code);
	},
	({resolved,rejected})=>{
		return{
			resolved,
			rejected
		}
	}
)

//登录成功后选择的驾校
export const chooseSchoolLogin = createAction(
	types.CHOOSE_SCHOOL_LOGIN,
	async({uc_code})=>{
		return await loginService.chooseSchoolLogin(uc_code);
	},
	({resolved,rejected})=>{
		return{
			resolved,
			rejected
		}
	}
 )