
import { StackNavigator, TabNavigator } from 'react-navigation';
import Splash from '../pages/Splash';
import CommunityContainer from '../containers/CommunityContainer';
import MainContainer from '../containers/MainContainer';
import WebViewPage from '../pages/ItemDetail/WebViewPage';
import Me from '../pages/me/me';
import Login from '../pages/login/login';
import Register from '../pages/login/register';
import LoginRegister from '../pages/login/loginRegister';

const TabContainer = TabNavigator(
  {
    Main: { screen: MainContainer },
    Community: { screen: CommunityContainer },
    Me: { screen: Me }
  },
  {
    lazy: true,
    tabBarPosition: 'bottom',
    tabBarOptions: {
      activeTintColor: '#3e9ce9',
      inactiveTintColor: '#999999',
      showIcon: true,
      style: {
        backgroundColor: '#fff'
      },
      indicatorStyle: {
        opacity: 0
      },
      tabStyle: {
        padding: 0
      }
    }
  } 
);

const App = StackNavigator(
  {
    Splash: { screen: Splash },
    Community: {
      screen: CommunityContainer,
      navigationOptions: {
        headerLeft: null
      }
    },
    Home: {
      screen: TabContainer,
      navigationOptions: {
        headerLeft: null
      }
    },
    
    LoginRegister: {
      screen: LoginRegister,
      navigationOptions: {
        header: null
      }
    },
    Register: {
      screen: Register,
      navigationOptions: {
        header: null
      }
    },
    Login: {
      screen: Login,
      navigationOptions: {
        header: null
      }
    },
    
    Web: { screen: WebViewPage }
  },
  {
    headerMode: 'screen',
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#3e9ce9'
      },
      headerTitleStyle: {
        color: '#fff',
        fontSize: 20
      },
      headerTintColor: '#fff'
    }
  }
);

export default App;
