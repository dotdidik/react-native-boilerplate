import React, { PureComponent } from 'react';
import { Text, Dimensions, Image, StyleSheet, View } from 'react-native';

import SwiperFlatList from 'react-native-swiper-flatlist';


export default class AppSwiper extends PureComponent {
    state = {
      datas : [
        {
            title: 'Beautiful and dramatic',
            subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
            illustration: 'https://i.imgur.com/UYiroysl.jpg'
        },
        {
            title: 'Earlier this morning',
            subtitle: 'Lorem ipsum dolor sit amet',
            illustration: 'https://i.imgur.com/UPrs1EWl.jpg'
        },
        {
            title: 'White Pocket Sunset',
            subtitle: 'Lorem ipsum dolor sit amet et nuncat ',
            illustration: 'https://i.imgur.com/MABUbpDl.jpg'
        },
        {
            title: 'Acrocorinth',
            subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
            illustration: 'https://i.imgur.com/KZsmUi2l.jpg'
        },
        {
            title: 'The lone tree',
            subtitle: 'Lorem ipsum dolor sit amet',
            illustration: 'https://i.imgur.com/2nCt3Sbl.jpg'
        },
        {
            title: 'Middle Earth',
            subtitle: 'Lorem ipsum dolor sit amet',
            illustration: 'https://i.imgur.com/lceHsT6l.jpg'
        }
    ]
    }
 
  render() {

    return (
        <View style={styles.container}>
          <SwiperFlatList
            index={0}
          >
            {
              this.state.datas.map((data, index)=>
              <View key={index} style={[styles.child]}>
                <Image style={styles.image} source={{uri: data.illustration}} />
                <Text>{data.title}</Text>
              </View>
              )
            }
          </SwiperFlatList>
        </View>
    );
  }
}

export const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  child: {
    height: 80,
    width: width * 0.4,
    justifyContent: 'center',
    margin: 5,
    marginBottom: 30,
    borderRadius: 10
  },
  text: {
    fontSize: 15,
    textAlign: 'center'
  },
  image: {
    height: 80,
    width: width * 0.4,
    borderRadius: 8
  },
});