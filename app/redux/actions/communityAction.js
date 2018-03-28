import { createAction } from 'redux-actions';
import * as types from '../constants/actionTypes';
import * as walletService from '../services/walletService';


//钱包
export const getMyTradeIndex = createAction(
    types.GET_MY_TRADE_INDEX,
    async({page,page_size})=>{
        return await walletService.getMyTradeIndex(page,page_size);
    },
    ({resolved,rejected})=>{
        return{
            resolved,
            rejected
        }
    }
)


