import React,{
	AsyncStorage
} from 'react-native';

export function setItem(key, value) {
	if (key && value){
		return AsyncStorage.setItem(key, JSON.stringify(value));
	}
}

export function mergeItem(key, value) {
	if (key && value){
		return AsyncStorage.mergeItem(key, JSON.stringify(value));
	}
}

export function getItem(key) {

	return AsyncStorage.getItem(key)
		.then(function (value) {

			// console.log('55555555')
			// console.log(value)
			let newValue = value !== null  ? value : '';
			// console.log(newValue)
			return newValue;
		})
		.catch(e=>{

			// console.log('666666666')
			console.log(e)
		});
}

export function multiGet(keys) {
	return AsyncStorage.multiGet(keys)
		.then(results=> {
			return results.map(item=> {
				return [item[0], JSON.parse(item[1])]
			})
		});
}

export function multiRemove(keys) {
	return AsyncStorage.multiRemove(keys)
}

export function removeItem(key){
	return AsyncStorage.removeItem(key)
}

export const clear = AsyncStorage.clear;