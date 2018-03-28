import * as requestService from './request';
import * as storageService from './storage';

//获取学员列表
export function getTraineeList(trainee_status,keywords,page,page_size,coach_code,){
	let fetchApi = 'Business.Students.Trainee.traineeList';
	let data={
		trainee_status:trainee_status,
		keywords:keywords,
		page:page || -1,
		page_size:page_size || -1,
		coach_code:coach_code
	}
    return requestService.post(fetchApi,data);
}
//获取学习中的详情
export function getStudyingStatus(coach_code){
	let fetchApi = 'Business.Students.Trainee.studyingStat';
	let data={
		coach_code:coach_code || ''
	}
    return requestService.post(fetchApi,data);
}

//获取学员详情
export function getStudentDetail(code,type){
	let fetchApi = 'Business.Students.Trainee.traineeInfo';
	let data={
		code:code,
		type:type
	}
    return requestService.post(fetchApi,data);
}

//更新意向
export function updateLeadsDetail(leads_code,remark){
	let fetchApi = 'Business.Students.Trainee.updateLeads';
	let data={
		leads_code:leads_code,
		remark:remark,

	}
    return requestService.post(fetchApi,data);
}

//上传金额
export function updateMoneyDetail(ta_code,remark){
	let fetchApi = 'Business.Students.Trainee.addPayRemark';
	let data={
		ta_code:ta_code,
		remark:remark,

	}
    return requestService.post(fetchApi,data);
}

//删除意向
export function deleteLeadsStudent(leads_code){
	let fetchApi = 'Business.Students.Trainee.deleteLeads';
	let data={
		leads_code:leads_code
	}
    return requestService.post(fetchApi,data);
}
//报名下拉信息
export function getAppSignupInfo(leads_code){
	let fetchApi = 'Business.Students.User.appSignupInfo';
    return requestService.post(fetchApi);
}
//报名表单提交
export function submitStudentInfo(car_code,card_id,drive_type,leads_code,mobile,remark,user_name){
	let fetchApi = 'Business.Students.User.appSignup';
	let data={
		car_code:car_code,
		card_id:card_id,
		drive_type:drive_type,
		leads_code:leads_code,
		mobile:mobile,
		remark:remark||'',
		user_name:user_name,
	}
    return requestService.post(fetchApi,data);
}
//添加学员笔记
export function addStudentNote(coach_code,content,images,ta_code){
	let fetchApi = 'Business.Students.Trainee.addNote';
	let data={
		coach_code:coach_code,
		content:content,
		images:images,
		ta_code:ta_code
	}
    return requestService.post(fetchApi,data);
}
//更新学员笔记
export function updateStudentNote(content,id,images,){
	let fetchApi = 'Business.Students.Trainee.updateNote';
	let data={
		content:content,
		id:id,
		images:images
	}
    return requestService.post(fetchApi,data);
}
//学员笔记详情
export function studentNoteDetail(id){
	let fetchApi = 'Business.Students.Trainee.noteInfo';
	let data={
		id:id
	}
    return requestService.post(fetchApi,data);
}
//学员笔记详情
export function studentNoteList(coach_code,ta_code,page,page_size){
	let fetchApi = 'Business.Students.Trainee.noteList';
	let data={
		coach_code:coach_code,
		ta_code:ta_code,
		page:page,
		page_size:page_size
	}
    return requestService.post(fetchApi,data);
}
//底部小红点
export function getMyNoticeGetstatus(app_name,platform){
	let fetchApi = 'Business.My.Notice.getStatus';
	let data={
		app_name:app_name,
		platform:platform,
	}
	return requestService.post(fetchApi,data);
}
//热更新
export function getApplyAppUrl(app_name,platform){
	let fetchApi = 'Business.Pub.Version.getApplyAppUrl';
	let data={
		app_name:app_name,
		platform:platform,
	}
    return requestService.post(fetchApi,data);
}

//修改成绩的接口
export function updateUserStudy(ta_code,subject_type_in,score){
	let fetchApi = 'Business.Students.Trainee.updateUserStudy';
	let data={
		ta_code:ta_code,
		subject_type_in:subject_type_in,
		score:score,
	}
	return requestService.post(fetchApi,data);
}
export function getNoticeStatus(){
    let fetchApi = 'Business.My.Notice.status';
    return requestService.post(fetchApi);
}
