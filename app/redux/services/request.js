import _ from 'lodash';
import * as MyService from './myService';
const timeout = 3000000;
import Main from '../../config/main';
import Md5 from '../../config/md5';
import hashes from 'js-sha1';

import Config from '../../config/index';
import Tool from '../../config/tool';
import * as storageService from './storage';
import CryptoJS from "crypto-js";

function filterJSON(res) {
	// console.log(res)
	try{
		//if(res.headers.get("content-length") > 0){
			// res.json().then((data)=>{console.log(data.token)})
			
			return res.json();
		//}
	}
	catch(e){
		throw new Error('数据转换失败');
	}
}

function filterStatus(res) {
	// console.log(res)
	if (res.ok) {
		// console.log(res)
		return res;
	} else {

		throw new Error('请求异常');
	}
}

function timeoutFetch(ms, promise) {
  return new Promise((resolve, reject) => {
    // const timer = setTimeout(() => {
    //   reject(new Error("请求超时!"));
    // }, ms);
    promise.then(
      (res) => {
        // clearTimeout(timer);
		resolve(res);
      },
      (err) => {
		// clearTimeout(timer);
        reject(err);
      }
    );
  })
}

export function request(uri, type = "GET", headers = {}, data = ""){
	let apiInfo = Main.getApi(uri);
		// console.log(apiInfo);
	// return MyService.getToken().then((storage)=>{
		// console.log(storage);
		let token;
		// token = storage ? storage : '';
		let newdata = data;
		for(let s in newdata){
			if(s == 'password'){
			let key = CryptoJS.enc.Latin1.parse('201707eggplant99');
			let iv  = CryptoJS.enc.Latin1.parse('1234567890123412');
			let encrypted = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(newdata[s]), key, { iv: iv,mode:CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7});  
			newdata[s] = encrypted.toString()
			}
		}
		
		let hashstr = uri;
	
		for(let s in newdata){
			hashstr += newdata[s]
		}
		hashstr += Config.statics.SALT
		// console.log(hashstr)
		// console.log('----------')
		let hashCode = Md5.hex_md5(hashstr);//进行md5加密

		// console.log(hashCode)

		let resultdata = newdata;

		if(!resultdata.sign){
			resultdata.sign = hashCode
		}
		// let token='c892114e94e4b4ebd47091330b0eb935';
		// let token = 'a0d1aa4f8a700ec9bdbe4a9e5bd0f79f';
		// let callData = getCallData(apiInfo,JSON.stringify(data),token);
		// console.log(resultdata)
		let fetchOption = {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/x-www-form-urlencoded'
			},
			body:Tool.toQueryString(resultdata,true)
		};
		// console.log(fetchOption)
		
		return timeoutFetch(timeout, fetch(apiInfo.address, fetchOption))
		.then(filterStatus)
		.then(filterJSON)
		.catch(function(error) {
			// console.log('error11111');
			console.log(error);
				throw error;
		});
	// });
	
}
export function requestSendMobileCode(uri, type = "GET", headers = {}, data = ""){
	let apiInfo = Main.getApi(uri);
	/**
	 * 先进行排序，然后拼接成字符串
	 * 在进行sha1加密
	 * 再进行md5加密
	 * 最后转换成大写
	 */
	let time_stamp = Date.parse(new Date()).toString();
	time_stamp = time_stamp.substr(0,10)
	let random_str = time_stamp * Math.random();
	let arithmetic = [time_stamp,random_str,Config.statics.MOBILE_TOKEN];
	arithmetic = arithmetic.sort();
	let str = arithmetic.join('');
	let  sha1str = hashes(str) ;//
	let md5str = Md5.hex_md5(sha1str).toLocaleUpperCase();
	
	let newdata = data;
	if(!newdata.encrypted_code){
		newdata.encrypted_code = md5str;
	}
	if(!newdata.time_stamp){
		newdata.time_stamp = time_stamp;
	}
	if(!newdata.random_str){
		newdata.random_str = random_str;
	}
	let hashstr = uri;
	
	for(let s in newdata){
		hashstr += newdata[s]
	}
	hashstr += Config.statics.SALT
	// console.log(hashstr)
	// console.log('----------')
	let hashCode = Md5.hex_md5(hashstr);//进行md5加密
	// console.log(hashCode)
	let resultdata = newdata;

	if(!resultdata.sign){
		resultdata.sign = hashCode
	}
	
	// console.log(apiInfo.address)
	// console.log('----------')
	// console.log(resultdata)
	let fetchOption = {
		method: 'POST',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/x-www-form-urlencoded'
		},
		body:Tool.toQueryString(resultdata,true)
	};
	
	
	// console.log(fetchOption)
	return timeoutFetch(timeout, fetch(apiInfo.address, fetchOption))
	.then(filterStatus)
	.then(filterJSON)
	.catch(function(error) {
		// console.log('error11111');
		console.log(error);
			throw error;
	});
}

export function get(uri, headers = {}) {
	return request(uri, "GET", headers);
}

export function post(uri, data = "", headers = {}) {
	if(!headers["Content-type"]){
		headers["Content-type"] = 'application/x-www-form-urlencoded';
	}
	// console.log('~~~~~~~')
	// console.log(data)
	if(uri == "index/member/sendMobileCode"){
		return requestSendMobileCode(uri, "POST", headers, data);
	}
	return request(uri, "POST", headers, data);
}

export function remove(uri, headers = {}) {
	return request(uri, "DELETE", headers);
}