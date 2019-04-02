import React, { Component } from 'react'
import {Card, CardItem, Left, Body, Thumbnail, Text} from 'native-base'
import { Image } from 'react-native';
export default class AppCard extends Component {
  render() {
    return (
        <Card key={this.props.key} style={this.props.cardStyle}>
          <CardItem cardBody>
            <Body>
            <Image style={{height: 200, width: 200, flex: 1}} source={{uri: 'https://avatars2.githubusercontent.com/u/26860501?s=460&v=4'}} style={{height: 200, width: null, flex: 1}}/>
              <Text>hahah</Text>
            </Body>
          </CardItem>
        </Card>
    )
  }
}
