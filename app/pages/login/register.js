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

class Register extends Component {

    componentDidMount(){
        console.log(this.props)
    }

    componentWillUnmount() {
        this.timer && clearTimeout(this.timer);
    }
    constructor(props){
        super(props);
        this.state = {
            showLoginBtn : true,
            showSendBtn : true,
            showCountdownBtn : true,
            phone:'',
            verification:'',//验证码
            password:'',//密码
            invite:'',//邀请码
            countdownNum:0,

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
                    <View style={styles.codeStyle}>
                        <TextInput style={styles.codeTextStyle}
                            placeholderTextColor="white"
                            selectTextOnFocus = {true}                            
                            placeholder="请输入短信验证码"
                            keyboardType="numeric"
                            clearButtonMode="while-editing"
                            underlineColorAndroid={'transparent'}
                            onChangeText={this.onVerification.bind(this)}
                        />
                        <Button
                            allowFontScaling={false}
                            style={styles.sendCode}
                            textStyle = {[styles.sendBtn,{
                                color:this.state.showSendBtn == true ? 'white' : Color.blue1
                            }]}
                            isDisabled={this.state.showSendBtn}
                            onPress={()=>this.countTime(60)}>
                            {this.state.showCountdownBtn == true ? '获取验证码' : '重新获取(' + this.state.countdownNum + ')'}
                        </Button>
                    </View>
                    <TextInput style={styles.loginTextStyles}
                        placeholderTextColor="white"
                        selectTextOnFocus = {true}                        
                        placeholder="请输入邀请码"
                        clearButtonMode="while-editing"
                        underlineColorAndroid={'transparent'}
                        onChangeText={this.changeInvite.bind(this)}
                    />
                    <Button
                        allowFontScaling={false}
                        style={[styles.registerBtn,{
                            backgroundColor: this.state.showLoginBtn == true ? 'gray' : 'white',
                        }]}
                        isLoading={this.state.isShowWait}
                        isDisabled={this.state.showLoginBtn}
                        textStyle={[styles.loginBtnText,{
                            color: this.state.showLoginBtn == true ? 'white' : Color.blue1,
                        }]}
                        onPress={this.onLogin.bind(this)}>
                        注  册
                    </Button>
                    
                        <Text  allowFontScaling={false} style={styles.agreement}>我已阅读并同意《用户协议》</Text>
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
        this.setState({
            isShowWait :true
        })
        this.props.loginAction.register({
            mobile : this.state.phone,
            code : this.state.verification,
            password : this.state.password,
            recommend_code:this.state.invite,
            resolved:(data)=>{
                console.log('注册成功')
                console.log(data)
                ToastUtil.showShort('注册成功');
                this.handleLoginSaveData(data);
            },
            rejected:(data)=>{
                console.log(data)
                this.setState({
                    isShowWait :false
                })
                this.platformAlert(data.msg);//弹出错误信息
            }
        });
    }
    //输入手机号时
    onPhone(text){
        if (Tool.isPhone(text)){
            if (this.state.verification.length == 6 && this.state.password){
                this.setState({
                    showLoginBtn:false,
                    showSendBtn:(this.state.showCountdownBtn === true ? false : true),
                    phone:text
                })
            }else{
                this.setState({
                    showLoginBtn:true,
                    showSendBtn:(this.state.showCountdownBtn === true ? false : true),
                    phone:text
                })
            }
        }else {
            this.setState({
                showLoginBtn:true,
                showSendBtn:true,
                phone:text
            })
        }
    }
    //输入验证码时
    onVerification(text){
        if (Tool.isPhone(this.state.phone) && text.length == 6 && this.state.password){
            this.setState({
                showLoginBtn : false,
                verification : text
            })
        }else{
            this.setState({
                showLoginBtn : true,
                verification : text
            })
        }
    }
    changePassword(text){
        if(text.length > 0 && Tool.isPhone(this.state.phone) && this.state.verification.length == 6){
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
    changeInvite(text){
        this.setState({
            invite : text
        })
    }
    //获取验证码
    getCode(){

        this.props.loginAction.getCodeByPhone({
            mobile:this.state.phone,
            resolved:(data)=>{
                console.log(data)
                alert(data.data)
            },
            rejected:(data)=>{
                console.log(data)
                this.platformAlert('未找到该手机号信息');//弹出错误信息
            }
        });
    }

    handleLoginSaveData(data,isWeChat){

        //首先判断school_choose 是否需要选择登陆驾校		YES: 需要选择 NO:不需要选择
        //如果为YES，需要弹出选择驾校的页面

        if(data.code == '0'){
           this.saveToken(data);//存储token
           this.props.navigation.replace('Login')
           
                // setTimeout(() => {
                //     this.setState({
                //         isShowWait :false
                //     })
                //         this.props.router.resetToAppInt()
                // }, 1000);
        }
       
    }
    saveToken(data){
        AsyncStorage.setItem("mobile",data.data.mobile);
        AsyncStorage.setItem("uc_code",data.data.uc_code);
        AsyncStorage.setItem("avatar",data.data.avatar);
        AsyncStorage.setItem("member_name",data.data.member_name);
        AsyncStorage.setItem("member_name",data.data.member_name);
        
        //保存数据并登录
        AsyncStorage.setItem("token", data.data.token, (err) => {
            // console.log('保存token失败')
            // console.log(err)
        });
    }

    //定时器
    countTime=(text)=>{
        if(this.state.phone==""){
            Toast.showShort('请输入手机号',false)
            return
        }else if(!Tool.isPhone(this.state.phone)){
            Toast.showShort('请输入正确的手机号',true)
            return
        }
        this.getCode();
        if(text != 0){
            this.setState({
                countdownNum:text,
                showSendBtn:true,
                showCountdownBtn:false,
            })
        }
        if (this.timer == null){
            this.timer = setInterval(
                () => {
                    if (this.state.countdownNum == 0){
                        this.setState({
                            countdownNum:0,
                            showSendBtn:(this.state.phone.length == 11 ? false : true),
                            showCountdownBtn:true,
                        })
                    }else{
                        var num = this.state.countdownNum - 1;
                        this.setState({
                            countdownNum:num,
                            showSendBtn:true,
                            showCountdownBtn:false,
                        })
                    }
                }, 1000);
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
})(Register);
