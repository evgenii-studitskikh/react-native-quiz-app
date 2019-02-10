import React from "react";
import { Container, Content, Text } from 'native-base';
import { createStackNavigator, createAppContainer } from "react-navigation";

type Props = {};
export default class HomeScreen extends React.Component<Props> {
  
  static navigationOptions = {
    title: 'Quiz',
  };

  render() {
    return (
      <Container>
        <Content>
          <Text>
            This is Quiz App
          </Text>
        </Content>
      </Container>
    );
  }
}
