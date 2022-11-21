import {createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SearchScreen from './src/Screens/SearchScreen';
import SearchShowScreen from './src/Screens/SearchShowScreen';
const navigator = createStackNavigator( {
  Search: SearchScreen,
  Show: SearchShowScreen
}, {
  initialRouteName: 'Search',
  defaultNavigationOptions: {
    title: 'Search',
  }
} );

export default createAppContainer( navigator );