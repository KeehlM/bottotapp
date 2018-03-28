
import React from 'react';
import { connect } from 'react-redux';
// import CodePush from 'react-native-code-push';
import { bindActionCreators } from 'redux';
// import Icon from 'react-native-vector-icons/Ionicons';
// import Main from '../pages/home/Main';
import Community from '../pages/community/index';
import * as homeCreators from '../redux/actions/homeAction';
import * as configCreators from '../redux/actions/configAction';

class MainContainer extends React.Component {
  static navigationOptions = {
    title: '首页',
    // tabBarIcon: ({ tintColor }) => (
    //   <Icon name="md-home" size={25} color={tintColor} />
    // )
  };

  static componentDidMount() {
    // CodePush.sync({
    //   deploymentKey: 'RGOUfyINiLicZnld67aD0nrbRvyLV1Ifekvul',
    //   updateDialog: {
    //     optionalIgnoreButtonLabel: '稍后',
    //     optionalInstallButtonLabel: '后台更新',
    //     optionalUpdateMessage: 'iReading有新版本了，是否更新？',
    //     title: '更新提示'
    //   },
    //   installMode: CodePush.InstallMode.ON_NEXT_RESTART
    // });
  }

  render() {
    // return <Main {...this.props} />;
    return <Community {...this.props} />;
  }
}


export default connect((state,props)=>({
  home:state.home
}),dispatch=>({
  homeAction:bindActionCreators(homeCreators,dispatch),
  configAction:bindActionCreators(configCreators,dispatch)
}))(MainContainer)