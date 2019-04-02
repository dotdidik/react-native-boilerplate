import React, { Component } from 'react'
import { Container } from 'native-base';
import { Router, Scene } from 'react-native-router-flux';
import DetailPromo from '../components/details/DetailPromo';
import TabNavigator from './Router';

export default class RouterFlux extends Component {
  render() {
    return (
        <Container>
          <Router>
              <Scene key='test'>
                  <Scene key='promodetail' hideNavBar component={TabNavigator} />
              </Scene>
          </Router>
        </Container>
    )
  }
}
