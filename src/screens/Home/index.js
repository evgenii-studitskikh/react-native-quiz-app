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
  Text
} from 'native-base';
import { createStackNavigator, createAppContainer } from "react-navigation";

type Props = {};
export default class HomeScreen extends React.Component<Props> {

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
            <Title>Quiz</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <Text>
            This is Quiz App
          </Text>
        </Content>
      </Container>
    );
  }
}
