import React from 'react';
import { StyleSheet, Text, View, Keyboard, TextView } from 'react-native';

// import AV from 'leancloud-storage';
// import Icon from 'react-native-vector-icons/Ionicons';
import ToastUtil from '../../utils/ToastUtil';

let feedbackText;

class Feedback extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: '建议',
    tabBarIcon: ({ tintColor }) => (
      <TextView  color={tintColor} >
        建议
      </TextView>
    ),
    // headerRight: (
    //   <Icon.Button
    //     name="md-checkmark"
    //     backgroundColor="transparent"
    //     underlayColor="transparent"
    //     activeOpacity={0.8}
    //     onPress={() => {
    //       navigation.state.params.handleCheck();
    //     }}
    //   />
    // )
  });
  componentDidMount() {
    feedbackText = '';
    this.props.navigation.setParams({ handleCheck: this.onActionSelected });
  }

  onActionSelected = () => {
    if (feedbackText === undefined || feedbackText.replace(/\s+/g, '') === '') {
      ToastUtil.showShort('请填写建议内容哦~');
    } else {
      ToastUtil.showShort('您的问题已反馈，我们会及时跟进处理');
      this.textInput.clear();
      Keyboard.dismiss();
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Text  allowFontScaling={false}>正在加急研发中...</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff'
  },
  textInput: {
    flex: 1,
    fontSize: 18,
    padding: 15,
    textAlignVertical: 'top'
  }
});

export default Feedback;
