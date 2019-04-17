import React, { Component } from 'react';
import getTheme from './native-base-theme/components'
import material from './native-base-theme/variables/material'
import { StyleProvider, View, Container } from 'native-base';
import RouterFlux from './src/router/RouterFlux';
import SplashScreen from 'react-native-splash-screen'

class App extends Component {
  componentDidMount() {
    SplashScreen.hide();
  }

  render() {
    return (
      <StyleProvider style={getTheme(material)}>
          <RouterFlux />
      </StyleProvider>
    )
  }
}

export default App;