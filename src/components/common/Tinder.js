import React, { Component } from 'react';
import { Image } from 'react-native';
import { DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body, Icon, View } from 'native-base';

export default class Tinder extends Component {
  state = {
      cards:[
          {
            text: 'Didik',
            name: 'Ganteng',
            image: 'https://avatars2.githubusercontent.com/u/26860501?s=460&v=4'
          },
          {
            text: 'Irawan',
            name: 'Handsome',
            image: 'https://avatars2.githubusercontent.com/u/26860501?s=460&v=4'
          },
          {
        
            text: 'Didik Irawan',
            name: 'You have no coice',
            image: 'https://avatars2.githubusercontent.com/u/26860501?s=460&v=4'
          }
        ]
  }
  render() {
    return (
        <View style={{height:500}}>
          <DeckSwiper
            dataSource={this.state.cards}
            renderItem={item =>
              <Card style={{ elevation: 3 }}>
                <CardItem>
                  <Left>
                    <Thumbnail source={{ uri : item.image}} />
                    <Body>
                      <Text>{item.text}</Text>
                      <Text note>{item.name}</Text>
                    </Body>
                  </Left>
                </CardItem>
                <CardItem cardBody>
                  <Image 
                    style={{ height: 300, flex: 1 }} 
                    source={{ uri : item.image}} />
                </CardItem>
                <CardItem>
                  <Icon name="heart" style={{ color: '#ED4A6A' }} />
                  <Text>{item.name}</Text>
                </CardItem>
              </Card>
            }
          />
        </View>
    );
  }
}