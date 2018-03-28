import React, { Component } from 'react';
import {
    Text,
    View,
    Image,
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
import {imgs} from '../../resources'

class login extends Component {
   
    componentDidMount(){
        AsyncStorage.setItem("dasf","123123",(e,o)=>{
            ToastUtil.showShort(e);
            ToastUtil.showShort(o);
            
            console.log(e)
            console.log(o)
        })
        try{

            AsyncStorage.getItem("login_data", (error, object) => {
                console.log(error)
                console.log(object)
                console.log('---------------object----------')
                if (object != null){
                    this.props.navigation.replace('Home')
                }
            })
        }catch(e){
                console.log(e)
        }
            
    }

    componentWillUnmount() {
        this.timer && clearTimeout(this.timer);
    }
    constructor(props){
        super(props);
        this.state = {
            showLoginBtn : true,
            phone:'',
            password:'',//密码

            isHUD : false,
            //提示文字
            promptText : '',
            //标题文字
            titleText : '',
            isShowWait : false,
            source:null,
        };
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.bg_logo}>
                    <Image
                        style={styles.icon_bg}
                        source={imgs.login_bg}
                    />
                    <Image
                        style={styles.icon_logo}
                        source={imgs.logo}
                    />
                </View>
                
                <View style={styles.content}>
                    <TextInput style={styles.loginTextStyles}
                        placeholderTextColor="white"
                        selectTextOnFocus = {true}
                        placeholder="请输入手机号码"
                        keyboardType="numeric"
                        clearButtonMode="while-editing"
                        underlineColorAndroid={'transparent'}
                        onChangeText={this.onPhone.bind(this)}
                    />
                    
                    <TextInput style={styles.loginTextStyles}
                        placeholderTextColor="white"
                        selectTextOnFocus = {true}                        
                        placeholder="请输入密码"
                        clearButtonMode="while-editing"
                        underlineColorAndroid={'transparent'}
                        onChangeText={this.changePassword.bind(this)}
                    />
                    
                    <Button
                        allowFontScaling={false}
                        style={[styles.loginBtn, {
                            backgroundColor: this.state.showLoginBtn == true ? 'gray' : 'white',
                        }]}
                        isLoading={this.state.isShowWait}
                        isDisabled={this.state.showLoginBtn}
                        textStyle={[styles.loginBtnText,{
                            color: this.state.showLoginBtn == true ? 'white' : Color.blue1,
                        }]}
                        onPress={this.onLogin.bind(this)}>
                        登  陆
                    </Button>
                    
                    <View >
                        <Text  allowFontScaling={false} style={styles.agreement}>我已阅读并同意《用户协议》</Text>
                    </View>
                </View>
                    
                {/* <ProgressHUD visible = {this.state.isHUD}
                             promptText={this.state.promptText}
                             titleText={this.state.titleText}
                             onPressIn={()=>{
                                 this.setState({
                                     isHUD:false,
                                     
                                 })
                             }}
                /> */}
            </View>
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
      try{
        let d = AsyncStorage.setItem("login_data", JSON.stringify(data.data), (e,o)=>{
            console.log('e')
            ToastUtil.showShort(e);
            ToastUtil.showShort(o);
        });
        console.log(d)
        d.then((e)=>{
            console.log(e)
        })
      }catch(e){
          console.log(e)
      }
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
