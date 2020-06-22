import React from 'react'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SearchScreen from './src/screens/SearchSceen';
import DetailScreen from './src/screens/DetailScreen';

const navigator = createStackNavigator({
  Search: SearchScreen,
  Detail: DetailScreen
}, 

// Code for header not to be visible
{
  headerMode: 'none',
  defaultNavigationOptions: {
    headerVisible: false,
  }
});


const App = createAppContainer(navigator)

export default () => {
  return <App />
};