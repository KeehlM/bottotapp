import {
  Platform,
} from 'react-native';
import Utils from './utils'
module.exports = {
  normalize:(size) => {
    if (Utils.pixelRatio >= 2 && Utils.pixelRatio < 3) {
      // iphone 5s and older Androids
      if (Utils.deviceWidth < 360) {
        return size * 0.95;
      }
      // iphone 5
      if (Utils.deviceHeight < 667) {
        return size;
        // iphone 6-6s
      } else if (Utils.deviceHeight >= 667 && Utils.deviceHeight <= 735) {
        return size * 1.15;
      }
      // older phablets
      return size * 1.25;
    } else if (Utils.pixelRatio >= 3 && Utils.pixelRatio < 3.5) {
      // catch Android font scaling on small machines
      // where pixel ratio / font scale ratio => 3:3
      if (Utils.deviceWidth <= 360) {
        return size;
      }
      // Catch other weird android width sizings
      if (Utils.deviceHeight < 667) {
        return size * 1.15;
        // catch in-between size Androids and scale font up
        // a tad but not too much
      }
      if (Utils.deviceHeight >= 667 && Utils.deviceHeight <= 735) {
        return size * 1.2;
      }
      // catch larger devices
      // ie iphone 6s plus / 7 plus / mi note 等等
      return size * 1.27;
    } else if (Utils.pixelRatio >= 3.5) {
      // catch Android font scaling on small machines
      // where pixel ratio / font scale ratio => 3:3
      if (Utils.deviceWidth <= 360) {
        return size;
        // Catch other smaller android height sizings
      }
      if (Utils.deviceHeight < 667) {
        return size * 1.2;
        // catch in-between size Androids and scale font up
        // a tad but not too much
      }
      if (Utils.deviceHeight >= 667 && Utils.deviceHeight <= 735) {
        return size * 1.25;
      }
      // catch larger phablet devices
      return size * 1.4;
    } else
    // if older device ie pixelRatio !== 2 || 3 || 3.5
    {
      return size;
    }
  },
  s3 : 3,  
  s10 : 10,  
  s15 : 15,  
  s30 : 30,  
  s38 : 38,  
  s40 : 40,//代表设计稿是40
  s45 : 45,
  s48 : 48,
  s60 : 60,
  s64 : 64,
  s72 : 72,
  s80 : 80,
  s90 : 90,
  s269 : 269,
  s_72 : -72,
  s_133 : -133,
}

