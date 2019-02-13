import React from 'react';
import { View, Text } from 'react-native';
import { createDrawerNavigator, createAppContainer, DrawerItems } from 'react-navigation';

import HomeScreen from './Home';
import QuestionScreen from './Question';
import header_pic from '../assets/images/header.png';
import { HeaderLogo } from './styled';

class DrawerComponent extends React.Component {
  render() {
    return (
      <View>
        <HeaderLogo source={header_pic}/>
        <DrawerItems {...this.props} />
      </View>
    );
  }
}

const RootStack = createDrawerNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        title: 'Quiz'
      }
    },
    Question: {
      screen: QuestionScreen,
      navigationOptions: {
        title: 'Question'
      }
    }
  },
  {
    initialRouteName: 'Question',
    contentComponent: DrawerComponent
  }
);



const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}