import React, { Component } from 'react';
import {
    Text,
    View,
    Image,
    ImageBackground,
    TextInput,
    AsyncStorage,
    Alert,
    ScrollView
} from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as LoginAction from '../../redux/actions/loginAction';
import * as ConfigAction from '../../redux/actions/configAction';
import Utils from '../../config/utils';
import Tool from '../../config/tool';
import Color from '../../config/colors';
import styles from './style/style_register';
import  Toast from '../../utils/ToastUtil';
import Button from 'apsl-react-native-button';
import Progress from '../../components/progress/progress';
import ToastUtil from '../../utils/ToastUtil';
import {imgs } from '../../resources'

class login extends Component {
   
    componentDidMount(){
        console.log('1212')
        AsyncStorage.getItem("token", (error, object) => {
            console.log(error)
            console.log(object)
            // console.log('---------------object----------')
            if (object != null){
                this.props.navigation.replace('Home')
            }
        }).then((e,d)=>{
            console.log(e)
            console.log(d)
        }).catch((e)=>{
            console.log(e)
        })
    }

    componentWillUnmount() {
        this.timer && clearTimeout(this.timer);
    }
    constructor(props){
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <ImageBackground style={styles.lr_container} source={imgs.login_regiser_bg}>
                   <View style={styles.lr_btn_txt_view}>
                    <Button  style={styles.lr_btn_txt_l} textStyle={styles.lr_text} onPress={()=>{
                        this.props.navigation.push('Login')
                    }}>登录</Button>
                    <Button  style={styles.lr_btn_txt} textStyle={styles.lr_text} onPress={()=>{
                        this.props.navigation.push('Register')
                    }}>注册</Button>
                    </View>
                
            </ImageBackground>
        );
    }
    platformAlert(msg){
        that = this
        Alert.alert(
            '提示',
            msg,
            [ 
                {text: '确定', onPress: () => {
                    that.setState({
                        modalVisible:false
                    })
                }}
            ] )
    }
    //验证码登录
    onLogin(){
        _this = this
        this.setState({
            isShowWait :true
        })
        this.props.loginAction.login({
            mobile : this.state.phone,
            password : this.state.password,
            resolved:(data)=>{
                console.log('注册成功')
                console.log(data)
                ToastUtil.showShort('登录成功');
                if(data.code == '0'){
                    _this.saveToken(data);//存储token
                    
                    _this.props.navigation.replace('Home')
                }
            },
            rejected:(data)=>{
                console.log(data)
                _this.setState({
                    isShowWait :false
                })
                _this.platformAlert(data.message);//弹出错误信息
            }
        });
    }
    saveToken(data){
        AsyncStorage.setItem("avatar",data.data.avatar);
        AsyncStorage.setItem("btos",data.data.btos);
        AsyncStorage.setItem("email",data.data.email);
        AsyncStorage.setItem("hashrate",data.data.hashrate);
        AsyncStorage.setItem("mobile",data.data.mobile);
        AsyncStorage.setItem("regdate",data.data.regdate);
        
        //保存数据并登录
        AsyncStorage.setItem("token", data.data.token, (err) => {
            // console.log('保存token失败')
            // console.log(err)
        });
    }

    //输入手机号时
    onPhone(text){
        if (Tool.isPhone(text)){
            if (this.state.password){
                this.setState({
                    showLoginBtn:false,
                    phone:text
                })
            }else{
                this.setState({
                    showLoginBtn:true,
                    phone:text
                })
            }
        }else {
            this.setState({
                showLoginBtn:true,
                phone:text
            })
        }
    }
   
    changePassword(text){
        if(text.length > 0 && Tool.isPhone(this.state.phone) ){
            this.setState({
                showLoginBtn : false,
                password : text
            })
        }else{
            this.setState({
                showLoginBtn : true,
                password : text
            })
        }
    }
}
export default connect((state,props)=>({
	login:state.login
}),dispatch=>({
	loginAction:bindActionCreators(LoginAction,dispatch),
	configAction:bindActionCreators(ConfigAction,dispatch)
}),null,{
	widthRef:true
})(login);
