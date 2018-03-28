import {
	DeviceEventEmitter
} from 'react-native'
export default function callback() {
	return next => action => {
		const { meta = {}, error, payload } = action;
		const { sequence = {}, resolved, rejected } = meta;
		if (sequence.type !== 'next') return next(action);
		//error ?  : (resolved && resolved(payload));
		if(error && payload.message === '请求超时!'){
			DeviceEventEmitter.emit('fetchFailed','请求超时');
			return;
		}
		if(meta.statics){
			if(error){
				rejected && rejected(payload)
			}else{
				resolved && resolved(payload)
			}
		}else{
			if(payload.code===1009){
				DeviceEventEmitter.emit('loginStatus','登录失效');
				return;
			}else{
				if(error || (payload.code != 0)){
					rejected && rejected(payload)
				}else{
					resolved && resolved(payload)
				}
			}
			
		}
		next(action);
	}
}
