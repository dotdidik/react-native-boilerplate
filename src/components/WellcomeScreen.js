import React, { Component } from 'react'
import { Container, Text, Button } from 'native-base';
import { Actions } from 'react-native-router-flux';

export default class WellcomeScreen extends Component {
  render() {
    return (
      <Container>
        <Button onPress={() => Actions.index()}>
            <Text>Home</Text>
        </Button>
      </Container>
    )
  }
}
