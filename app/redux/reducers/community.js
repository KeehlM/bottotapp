import * as types from '../constants/actionTypes';

const initialState = {
  profitList:[],
  isPending:false,
  totalMoney:0
};

export default function (state = initialState, action) {
	const { payload, meta = {}, type, error } = action;
	const { sequence = {}, packageList } = meta;
	if(sequence.type === 'start' || error) {
		return state;
	}
  	switch(type) {
	  	case types.GET_PROFITLIST:
	  		return{
	  			...state,
	  			profitList:payload.response.data,
	  			isPending:true,
	  			totalMoney:payload.response.total
	  		}
	    default:
	      return state;
  	}
}
