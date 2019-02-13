import React from "react";
import { 
  Container,
  Header,
  Title,
  Content,
  Button,
  Left,
  Right,
  Body,
  Icon,
  H3
} from 'native-base';
import { createStackNavigator, createAppContainer } from "react-navigation";
import * as Progress from 'react-native-progress';

import { 
  ProgressLabel, 
  ProgressContainer, 
  QuestionContainer, 
  Question 
} from './styled';

export default class QuestionScreen extends React.Component {

  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button 
              transparent
              onPress={() => this.props.navigation.toggleDrawer()}
            >
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title>Question</Title>
          </Body>
          <Right />
        </Header>
        <Content contentContainerStyle={{ alignItems: 'center', height: '100%' }}>
          <H3 style={{ marginTop: 20 }}>Topic of the quiz</H3>
          <ProgressContainer>
            <Progress.Bar 
              progress={0.3} 
              width={null} 
              color='#35DBA7'
              unfilledColor='#DDDCE1'
              borderWidth={0}
            />
          </ProgressContainer>
          <QuestionContainer>
            <ProgressLabel>Question 1 of 2 (50%)</ProgressLabel>
            <Question>
              1. This is Quiz App, What you think about it? Can you tell me something?
            </Question>
          </QuestionContainer>
        </Content>
      </Container>
    );
  }
}
