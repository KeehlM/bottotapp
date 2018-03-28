import * as requestService from './request';
import * as storageService from './storage';



//验证码
export function getCodeByPhone(mobile,encrypted_code,recommend_code,time_stamp,random_str){
	let fetchApi = 'index/member/sendMobileCode';
	let data={
		mobile:mobile,
		encrypted_code:encrypted_code,
		recommend_code:recommend_code||'1234',
		time_stamp:time_stamp,
		random_str:random_str,
	}
    return requestService.post(fetchApi,data);
}


//验证码
export function register(mobile,code,password,recommend_code){
	let fetchApi = 'index/member/register';
	let data={
		mobile:mobile,
		code:code,
		password:password,
		recommend_code:recommend_code||'1234',
	}
    return requestService.post(fetchApi,data);
}

//验证码
export function login(mobile,password){
	let fetchApi = 'index/member/login';
	let data={
		mobile:mobile,
		password:password,
	}
    return requestService.post(fetchApi,data);
}



//验证码登陆
export function getAuthenticationByCode(code,mobile){
	let fetchApi = 'Business.Pub.User.codeLogin';
	let data={
		mobile:mobile,
		code:code
	}
	return requestService.post(fetchApi,data);
}

//微信登陆
export function getAuthenticationByWXQQ(account,account_type,icon,mobile,mobile_code){
	let fetchApi = 'Business.Pub.User.jointLogin';
	let data={
		account:account,
		account_type:account_type,
		icon:icon,
		mobile:mobile,
		mobile_code:mobile_code
	}
	return requestService.post(fetchApi,data);
}
//登录成功后选择的驾校
export function chooseSchoolLogin(uc_code){
	let fetchApi = 'Business.Pub.User.chooseSchoolLogin';
	let data={
		uc_code:uc_code
	}
    return requestService.post(fetchApi,data);
}