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
    TouchableOpacity,
    ActivityIndicator,
    Image
} from 'react-native';
var Dimensions = require('Dimensions');
var {width, height} = Dimensions.get('window');

export default class progressHUD extends Component {
    //传入值
    static defaultProps = {
        //提示文字
        promptText : '请稍后...',
        //是否显示
        isShow:false,
        //错误(true)还是正确(false),没传(null)则是菊花等待
        isError:null,
    };
    constructor(props){
        super(props);
        this.state = {
            //是否显示
            isShow:false,
        };
    }
    componentWillReceiveProps(nextProps){
        // console.log('nextProps')
        // console.log(nextProps)
        this.setState({
            isShow:nextProps.isShow
        })
        if (nextProps.isError !== null){
            setTimeout(() => {
                this.setState({
                    isShow:false
                })
                // console.log('退出HUD')
            }, 2000);
            return
        }
    }

    render() {
        if (this.props.isError === null){
            return(
                <Modal
                    animationType={'fade'}
                    transparent={true}
                    visible={this.state.isShow}
                >
                    <View style={styles.container}>
                        <View style={styles.fudongViewStyle}>
                            <ActivityIndicator
                                animating={true}
                                style={[{height: 40}]}
                                size="small"
                                color="white"
                            />
                            <Text  allowFontScaling={false} style={{color:'white',marginTop:10,marginLeft:5,marginRight:5}}>
                                {this.props.promptText}
                            </Text>
                        </View>
                    </View>
                </Modal>
            )
        }else{
            return(
                <Modal
                    animationType={'fade'}
                    transparent={true}
                    visible={this.state.isShow}
                >
                    <View style={styles.container}>
                        <View style={styles.fudongViewStyle}>
                            <Image style={{
                                width:40,
                                height:40,
                            }}
                                   source={this.props.isError === false ? require('./错误.png') : require('./正确.png')}
                            />
                            <Text  allowFontScaling={false} style={{color:'white',marginTop:10,marginLeft:5,marginRight:5}}>
                                {this.props.promptText}
                            </Text>
                        </View>
                    </View>
                </Modal>
            )
        }
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent:'center',
        flex:1,
        right:0,
        bottom:0,
        backgroundColor:'rgba(0,0,0,0.5)'
    },
    fudongViewStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        width:130,
        height:130,
        backgroundColor:'rgba(0,0,0,0.8)',
        // 设置圆角
        borderRadius:5,
    },
});
