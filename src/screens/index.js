import React from 'react';
import { View, Text } from 'react-native';
import { createDrawerNavigator, createAppContainer } from 'react-navigation';

import HomeScreen from './Home';

const RootStack = createDrawerNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        title: 'Quiz'
      }
    },
  },
  {
    initialRouteName: 'Home',
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}