/*!
 *
 * Util模块 React Native module
 * 主要提供工具方法
 *
 */
import React from 'react'
import {
  PixelRatio,
  ActivityIndicatorIOS,
  Dimensions,
  Platform
  } from 'react-native';
  const marginTop=Platform.OS === 'android' ? 0 : 20
  const height = Dimensions.get('window').height
  const width = Dimensions.get('window').width
  const pixelRatio = PixelRatio.get();

module.exports = {
  /*最小线宽*/
  pixel: 1 / PixelRatio.get(),
  pixelRatio : pixelRatio,
  fontSizeScaler : pixelRatio/PixelRatio.getFontScale(),

  /*屏幕尺寸*/
  size: {
    height : height,
    width: width,
    heightpercent : (Platform.OS =='android' ? 1 : height / 667),
    widthpercent : (Platform.OS =='android' ? 1 : width / 375)
  }
};
