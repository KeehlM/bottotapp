/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Modal,
    TouchableOpacity
} from 'react-native';
var Dimensions = require('Dimensions');
var {width, height} = Dimensions.get('window');

export default class progressHUD extends Component {
    //传入值
    static defaultProps = {
        //提示文字
        promptText : '',
        //标题文字
        titleText : '信息错误',
        //按钮文字
        btnText : '我知道了',
        //点击
        onPressIn: null,
        //是否显示
        visible:false
    };


    //收到新的props
    componentWillReceiveProps(){
        this.setState({
            visible:null,
        })
    }

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            visible:null,
        };

        this.onPressI = this.onPressI.bind(this);
    }

    render() {
        return(
            <Modal
                animationType={'fade'}
                transparent={true}
                visible={this.state.visible == null ? this.props.visible : this.state.visible}
            >
                <View style={styles.container}>
                    <View style={{
                        alignItems: 'center',
                        backgroundColor: 'white',
                        width : (width - 60) > 300 ? 300 : (width - 60),
                        borderRadius: 5
                    }}>
                        <View style={{
                            alignItems: 'center',
                            backgroundColor: 'white',
                            width : (width - 60) > 300 ? 300 - 20 : (width - 60 - 20),
                            borderColor: '#EAEAEA',
                            borderRadius: 0,
                            borderBottomWidth:1,
                        }}>
                            <Text  allowFontScaling={false} style={styles.titleTextStyle}>
                                {this.props.titleText}
                            </Text>
                            <Text  allowFontScaling={false} style={styles.promptTextStyle}>
                                {this.props.promptText}
                            </Text>
                        </View>
                        <View>
                            <TouchableOpacity onPress={this.onPressI.bind(this)}>
                                <Text  allowFontScaling={false} style={styles.btnTextStyle}>
                                    {this.props.btnText}
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        )
    }

    //点击按钮
    onPressI = function () {
        if (this.props.onPressIn){
            var {
                onPressIn,
            } = this.props;
            //返回出去
            onPressIn();
        }
        this.setState({
            visible:false,
        })
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(150,150,150,0.8)',
    },
    titleTextStyle:{
        marginTop:20,
        marginBottom:20,
        width: ((width - 60) > 300 ? 300 : (width - 60)) - 30,
        textAlign: 'center',//使文字在Text组件中居中
        fontSize:18,
        fontWeight: 'bold',
        color:"#666666"
    },
    promptTextStyle:{
        width: ((width - 60) > 300 ? 300 : (width - 60)) - 30,
        textAlign: 'center',//使文字在Text组件中居中
        fontSize:15,
        marginBottom:20,
        color:"#666666"
    },
    btnTextStyle:{
        marginTop:20,
        marginBottom:20,
        color:"#FF9600",
        textAlign: 'center',
        width: ((width - 60) > 300 ? 300 : (width - 60)) - 30
    }
});
