import React,{ Component } from 'react';
import { Platform } from 'react-native';
import { Provider } from 'react-redux';
import { createStore,applyMiddleware} from 'redux';
import rootReducer from './redux/reducers';
import middlewares from './redux/middlewares';
// import thunkMiddleware from 'redux-thunk';
import App from './containers/app';

// const createStoreWithMiddleware = applyMiddleware(
// 	...middlewares
// )(createStore);

// const store = createStoreWithMiddleware(rootReducer)
const store = createStore(rootReducer, applyMiddleware(...middlewares))

export default class Root extends Component{
    constructor(props) {
        super(props);
        this.state = { };
    }
	render(){
        let {showName} = this.props
		return(
			<Provider store={store}>
				 <App/>
			</Provider>
		)
	}
}