import React, { Component } from 'react'
import { Container } from 'native-base';
import { Router, Scene } from 'react-native-router-flux';
import DetailPromo from '../components/details/DetailPromo';
import TabNavigator from './Router';
import Joss from './Joss';

export default class RouterFlux extends Component {
  render() {
    return (
        <Container>
          <Router>
              <Scene key='root'>
                  <Scene key='promodetail' hideNavBar component={TabNavigator} />
                  <Scene key='jancuk' component={Joss}/>
              </Scene>
          </Router>
        </Container>
    )
  }
}
