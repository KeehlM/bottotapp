import { combineReducers } from 'redux';
import home from './home';
import my from './my';
import community from './community';
module.exports = combineReducers({
  home,
  community,
  my
});
