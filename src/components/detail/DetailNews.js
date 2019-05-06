import React, { Component } from 'react'
import { ActivityIndicator } from 'react-native'
import { Container, Header, Content, Text, Left, Body, Title, Icon, Button } from 'native-base';
import { WebView } from "react-native-webview";
import { Actions } from 'react-native-router-flux';
export default class DetailNews extends Component {
  
  ActivityIndicatorLoadingView(){
    return(
      <ActivityIndicator 
        color='red'
        size='large'
        style={{flex: 1, justifyContent: 'center'}}
      />
    )
  }

  render() {
    console.log(this.props)
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={() => Actions.pop()}>
              <Icon name='ios-back'/>
            </Button>
          </Left>
          <Body>
            <Title>{this.props.nDetail.title}</Title>
          </Body>
        </Header>
        <WebView 
          source={{ uri: this.props.nDetail.content }}
          renderLoading={this.ActivityIndicatorLoadingView}
          startInLoadingState={true}
        />
      </Container>
    )
  }
}
