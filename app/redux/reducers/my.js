import * as types from '../constants/actionTypes';
const defaultUserState = {
	platforms:{
		MOBILE:{
			account:''
		},
		WECHAT:{
			account_type:'',
			status:''
		}
	},
	isPending:false
};

function my(state = defaultUserState, action) {
	const { payload, meta = {}, type, error } = action;
	const { sequence = {}, packageList } = meta;
	if(sequence.type === 'start' || error) {
		return state;
	}
  	switch (action.type) {
  		case types.GET_USERACCOUNTLIST_BY_PLATFORM:
	  		return{
	  			...state,
	  			platforms:payload.response,
	  			isPending:true
	  		}
    	default:
      	return state;
  	}
}
function transform(data){
	let newData = [];
	for(var i in data){
		newData.push(data[i])
	}
	console.log(newData)
	return newData;
}
module.exports = my;
