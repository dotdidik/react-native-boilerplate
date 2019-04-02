import React, { Component } from 'react'
import TabNavigator from './src/router/Router';
import getTheme from './native-base-theme/components'
import material from './native-base-theme/variables/material'
import { StyleProvider, View, Container } from 'native-base';
import {Platform, StatusBar} from 'react-native';
import RouterFlux from './src/router/RouterFlux';

class App extends Component {
  componentWillMount() {
    if (Platform.OS === 'android') {
      StatusBar.setTranslucent(false);
      StatusBar.setBackgroundColor('#135589')
    }
  }
  render() {
    return (
      <StyleProvider style={getTheme(material)}>
          <TabNavigator />
      </StyleProvider>
    )
  }
}

export default App;