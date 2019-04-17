import React, { Component } from 'react'
import { Container } from 'native-base';
import { Router, Scene } from 'react-native-router-flux';
import TabNavigator from './Router';
import WellcomeScreen from '../components/WellcomeScreen';

export default class RouterFlux extends Component {
  render() {
    return (
        <Container>
          <Router>
              <Scene key='root'>
                  <Scene key='wellomescreen' hideNavBar component={WellcomeScreen} />
                  <Scene key='index' hideNavBar component={TabNavigator} />
              </Scene>
          </Router>
        </Container>
    )
  }
}
