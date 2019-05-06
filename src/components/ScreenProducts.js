import React, { Component } from 'react'
import {Text, Container} from 'native-base'
import AppList from './common/AppList';
export default class ScreenProducts extends Component {
  render() {
    return (
      <Container>
        <AppList />
      </Container>
    )
  }
}
