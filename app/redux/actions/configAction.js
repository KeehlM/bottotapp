
import { createAction } from 'redux-actions';
import * as types from '../constants/actionTypes';
import * as storageService from '../services/storage';
import * as myService from '../services/myService';
console.log(createAction)
export const setConfig = createAction(types.SET_CONFIG, async({key, value})=> {
	return storageService.setItem(key, value);
}, ({key, value, resolved, rejected})=>{
	return {
		key,
		value,
		statics:true,
		resolved,
		rejected
	}
});

export const updateConfig = createAction(types.UPDATE_CONFIG, async({key, value})=> {
	return storageService.mergeItem(key, value);
}, ({key, value, resolved, rejected})=>{
	return {
		key,
		value, 
		statics:true,
		resolved,
		rejected
	}
});

export const removeConfig = createAction(types.REMOVE_CONFIG, async({key})=>{
	return storageService.removeItem(key);
}, ({key,resolved,rejected})=>{
	return {
		key,
		statics:true,
		resolved,
		rejected
	}
});

export const getConfig = createAction(
	types.GET_CONFIG,
	async({key})=> {
	return await storageService.getItem(key);
}, ({key,resolved, rejected})=>{
	return {
		key,
		statics:true,
		resolved,
      	rejected
	}
});

//获取版本号
export const getAppVersionInstall = createAction(
	types.GET_APP_VERSION_INSTALL,
	async({app_name,platform,version})=>{
		return await myService.getAppVersionInstall(app_name,platform,version);
	},
	({resolved,rejected})=>{
		return{
			resolved,
			rejected
		}
	}
)
