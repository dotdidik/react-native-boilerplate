import React, { Component } from 'react';
import { StatusBar, Platform } from 'react-native'
import { Container, Content, StyleProvider} from 'native-base';
import HomeTopView from './homescreen/TopView';
import PromoView from './homescreen/PromoView';
import { ScrollView } from 'react-native-gesture-handler';
export default class ScreenHome extends Component {
  render() {
    return (
        <Container>
          <ScrollView>
            <Content>
                <HomeTopView />
                <PromoView />
            </Content>
          </ScrollView>
        </Container>
    )
  }
}
