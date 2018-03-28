import { createAction } from 'redux-actions';
import * as types from '../constants/actionTypes';
import * as homeService from '../services/homeService';


//获取学员列表
export const getTraineeList = createAction(
	types.GET_TRANINEELIST,
	async({trainee_status,keywords,page,page_size,coach_code,})=>{
		return await homeService.getTraineeList(trainee_status,keywords,page,page_size,coach_code,);
	},
	({resolved,rejected})=>{
		return{
			resolved,
			rejected
		}
	}
) 
//获取学习中的详情
export const getStudyingStatus = createAction(
	types.GET_STUDYING_STATUS,
	async({coach_code})=>{
		return await homeService.getStudyingStatus(coach_code,);
	},
	({resolved,rejected})=>{
		return{
			resolved,
			rejected
		}
	}
) 
 
//获取学员详情
export const getStudentDetail = createAction(
	types.GET_STUDENT_DETAIL,
	async({code,type})=>{
		return await homeService.getStudentDetail(code,type);
	},
	({resolved,rejected})=>{
		return{
			resolved,
			rejected
		}
	}
) 
 
//更新意向
export const updateLeadsDetail = createAction(
	types.UPDATE_LEADS_DETAIL,
	async({leads_code,remark})=>{
		return await homeService.updateLeadsDetail(leads_code,remark);
	},
	({resolved,rejected})=>{
		return{
			resolved,
			rejected
		}
	}
) 
//上传编辑金额
export const updateMoneyDetail = createAction(
	types.UPDATE_MONEY_DETAIL,
	async({ta_code,remark})=>{
		return await homeService.updateMoneyDetail(ta_code,remark);
	},
	({resolved,rejected})=>{
		return{
			resolved,
			rejected
		}
	}
) 
 //删除意向
export const deleteLeadsStudent = createAction(
	types.DELETE_LEADS_STUDENT,
	async({leads_code})=>{
		return await homeService.deleteLeadsStudent(leads_code);
	},
	({resolved,rejected})=>{
		return{
			resolved,
			rejected
		}
	}
)
  //报名下拉信息
export const getAppSignupInfo = createAction(
	types.GET_APP_SIGNUP_INFO,
	async()=>{
		return await homeService.getAppSignupInfo();
	},
	({resolved,rejected})=>{
		return{
			resolved,
			rejected
		}
	}
) 
 //报名表单提交
export const submitStudentInfo = createAction(
	types.SUBMIT_STUDENT_INFO,
	async({car_code,card_id,drive_type,leads_code,mobile,remark,user_name})=>{
		return await homeService.submitStudentInfo(car_code,card_id,drive_type,leads_code,mobile,remark,user_name);
	},
	({resolved,rejected})=>{
		return{
			resolved,
			rejected
		}
	}
)
 //添加学员笔记
export const addStudentNote = createAction(
	types.ADD_STUDENT_NOTE,
	async({coach_code,content,images,ta_code})=>{
		return await homeService.addStudentNote(coach_code,content,images,ta_code);
	},
	({resolved,rejected})=>{
		return{
			resolved,
			rejected
		}
	}
)
 //更新学员笔记
export const updateStudentNote = createAction(
	types.AUPDATE_STUDENT_NOTE,
	async({content,id,images})=>{
		return await homeService.updateStudentNote(content,id,images);
	},
	({resolved,rejected})=>{
		return{
			resolved,
			rejected
		}
	}
)

 //学员笔记详情
export const studentNoteDetail = createAction(
	types.STUDENT_NOTE_DETAIL,
	async({id})=>{
		return await homeService.studentNoteDetail(id);
	},
	({resolved,rejected})=>{
		return{
			resolved,
			rejected
		}
	}
)

 //学员笔记列表
export const studentNoteList = createAction(
	types.STUDENT_NOTE_LIST,
	async({coach_code,ta_code,page,page_size})=>{
		return await homeService.studentNoteList(coach_code,ta_code,page,page_size);
	},
	({resolved,rejected})=>{
		return{
			resolved,
			rejected
		}
	}
)

//底部小红点
export const getMyNoticeGetstatus = createAction(
	types.GET_MY_NOTICE_GETSTATUS,
	async({app_name,platform})=>{
		return await homeService.getMyNoticeGetstatus(app_name,platform);
	},
	({resolved,rejected})=>{
		return{
			resolved,
			rejected
		}
	}
)
//热更新
export const getApplyAppUrl = createAction(
   types.GET_APPLY_APP_URL,
   async({app_name,platform})=>{
	   return await homeService.getApplyAppUrl(app_name,platform);
   },
   ({resolved,rejected})=>{
	   return{
		   resolved,
		   rejected
	   }
   }
)
//修改成绩的接口
export const updateUserStudy = createAction(
	types.UPDATE_USER_STUDY,
	async({ta_code,subject_type_in,score})=>{
		return await homeService.updateUserStudy(ta_code,subject_type_in,score);
	},
	({resolved,rejected})=>{
		return{
			resolved,
			rejected
		}
	}
 )
 
//新小红点显示
export const getNoticeStatus = createAction(
    types.GET_BUSINESS_MY_NOTICE_STATUS,
    async()=>{
        return await homeService.getNoticeStatus();
    },
    ({resolved,rejected})=>{
        return{
            resolved,
            rejected
        }
	}
)