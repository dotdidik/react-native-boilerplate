import React, { Component } from 'react'
import {View, Text, Container, Content} from 'native-base'
import AppHeader from './common/AppHeader';
import ProductTabs from './products/ProductsTab';
export default class ScreenProducts extends Component {
  render() {
    return (
      <Container>
        <ProductTabs />
      </Container>
    )
  }
}
