import * as requestService from './request';
import * as storageService from './storage';
import Config from '../../config/';

//通过验证码登录
export function fetchAuthenticationByCode(mobile, code){
	let fetchApi = 'Business.Pub.User.codeLogin';
    let data =  {
        code:code,
        mobile:mobile
    }
    return requestService.post(fetchApi,data);
}

export function authenticationByWxQq(account,account_type,icon,mobile,mobile_code){
	let fetchApi = 'Business.Pub.User.jointLogin';
	let data = {
		account:account,
		account_type:account_type,
		icon:icon,
		mobile:mobile,
		mobile_code:mobile_code
	}
	return requestService.post(fetchApi,data)
}

//更换手机号-步骤四-保存并验证新手机号码
export function getMyUserChangeMobile(code){
	let fetchApi = 'Business.My.User.changeMobile';
	let data = code;
	return requestService.post(fetchApi,data);
}
//个人中心
export function getMyUserAppInfo(){
	let fetchApi = 'Business.My.User.appInfo';
	return requestService.post(fetchApi);
}

//设置页
export function getMyUserAccount(platform){
	let fetchApi = 'Business.My.User.getUserAccountList';
	let data = platform
	return requestService.post(fetchApi,data);
}

//更换手机号-步骤一-获取验证码
export function getMyUserCode(type){
	let fetchApi = 'Business.My.User.code';
	let data = type
	return requestService.post(fetchApi,data);
}

//更换手机号-步骤一-获取验证码
export function getMyUserCheckFirstChangeMobileCode(code){
	let fetchApi = 'Business.My.User.checkFirstChangeMobileCode';
	let data = code
	return requestService.post(fetchApi,data);
}

//更换手机号-步骤三-获取新手机号验证码
export function getMyUserNewCode(new_mobile){
	let fetchApi = 'Business.My.User.newCode';
	let data = new_mobile;
	return requestService.post(fetchApi,data);
}

//修改头像
export function getMyUserChangeHuadImg(head_path){
	let fetchApi = 'Business.My.User.changeHeadImg';
	let data = head_path;
	return requestService.post(fetchApi,data);
}

export function getToken(){
    return storageService.getItem(Config.storageKey.USER_TOKEN);
}

//绑定第三方授权账号(绑定微信)
export function getMyUserBindThirdAccount(account){
	let fetchApi = 'Business.My.User.bindThirdAccount';
	let data = account
	return requestService.post(fetchApi,data);
}

//解绑第三方授权账号(解绑微信)
export function getMyUserChangeThrdAccountStatus(account){
	let fetchApi = 'Business.My.User.changeThirdAccountStatus';
	let data = account
	return requestService.post(fetchApi,data);
}

//消息列表（版本/学员)
export function getMyNoticeGetLists(account){
	let fetchApi = 'Business.My.Notice.getLists';
	let data = account
	// console.log('data..')
	// console.log(data)

	return requestService.post(fetchApi,data);
}

//点击查看，取消红点
export function getMyNoticeUpdateLog(account){
	let fetchApi = 'Business.My.Notice.updateLog';
	let data = account
	return requestService.post(fetchApi,data);
}
//获取所有车型列表
export function getAllCarsType(){
	let fetchApi = 'Business.Pub.User.getDriveType';
	return requestService.post(fetchApi);
}

//退出登录
export function getPubUserLogout(){
	let fetchApi = 'Business.Pub.User.logout';
	return requestService.post(fetchApi);
}

//添加班型
export function addClassType(drive_type,price,title){
	let fetchApi = 'Business.My.Item.insert';
	let data = {
		drive_type:drive_type,
		price:price,
		title:title,
	}
	return requestService.post(fetchApi,data);
}
//修改班型
export function updateClassType(item_code,drive_type,price,title){
	let fetchApi = 'Business.My.Item.update';
	let data = {
		item_code:item_code,
		drive_type:drive_type,
		price:price,
		title:title,
	}
	return requestService.post(fetchApi,data);
}
//获取班型型列表
export function getClassTypeLists(){
	let fetchApi = 'Business.My.Item.lists';
	return requestService.post(fetchApi);
}
//删除班型
export function deleteClassTypeItem(item_code){
	let fetchApi = 'Business.My.Item.delete';
	let data = {
		item_code:item_code
	}
	return requestService.post(fetchApi,data);
}

//完善教练信息
export function completeCardInfo(manifesto,of_school_age,promotion_pictures,services,trainee_range){
	let fetchApi = 'Business.My.Card.insert';
	let data = {
		manifesto:manifesto,
		of_school_age:of_school_age,
		promotion_pictures:promotion_pictures,
		services:services,
		trainee_range:trainee_range,
	}
	return requestService.post(fetchApi,data);
}


//获取教练信息
export function getCoachInfo(need_all_service){
	let fetchApi = 'Business.My.Card.info';
	let data = {
		need_all_service:need_all_service
	}
	return requestService.post(fetchApi,data);
}


//获取服务列表
export function getCardService(){
	let fetchApi = 'Business.My.Card.getServices';
	return requestService.post(fetchApi);
}


//修改教练信息
export function updateCoachInfo(manifesto,of_school_age,promotion_pictures,services,trainee_range){
	let fetchApi = 'Business.My.Card.update';
	let data = {
		manifesto:manifesto,
		of_school_age:of_school_age,
		promotion_pictures:promotion_pictures,
		services:services,
		trainee_range:trainee_range,
	}
	return requestService.post(fetchApi,data);
}

//获取版本更新
export function getAppVersionInstall(app_name,platform,version){
	let fetchApi = 'Business.Pub.Version.push';
	let data = {
		app_name:app_name,
		platform:platform,
		version:version,
	}
	return requestService.post(fetchApi,data);
}
//分享请求微信qq
export function shareEncrypt(){
	let fetchApi = 'Business.My.Card.encrypt';
	return requestService.post(fetchApi);
}

//驾校列表
export function getSchoolList(){
	let fetchApi = 'Business.My.User.schoolList';
	return requestService.post(fetchApi);
}

//更新默认驾校
export function updateDefaultSchool(uc_code){
	let fetchApi = 'Business.My.User.updateDefaultSchool';
	let data = {
		uc_code:uc_code
	}
	return requestService.post(fetchApi,data);
}

//消息列表
export function getMyNoticeLists(account){
    let fetchApi = 'Business.My.Notice.lists';
    let data = account

    return requestService.post(fetchApi,data);
}

//我的账单Business.My.User.settlementList
export function getMyUserSettlementList(account){
    let fetchApi = 'Business.My.User.settlementList';
    let data = account
    return requestService.post(fetchApi,data);
}

//意见反馈
export function getMyAdvisoryCreat(uc_code,remark){
    let fetchApi = 'Business.My.Advisory.create';
    let data = {
        uc_code:uc_code,
        remark:remark
	}
    console.log('xxxxxxx')
    console.log(data)
    return requestService.post(fetchApi,data);
}