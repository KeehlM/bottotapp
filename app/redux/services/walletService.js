import * as requestService from './request';
import * as storageService from './storage';
import Config from '../../config/';

//获取提现记录列表
export function getMyTradeIndex(page,page_size){
	let fetchApi = 'Business.My.Trade.index';
	let data = {
		page:page,
		page_size:page_size
	}
    return requestService.post(fetchApi,data);
}
