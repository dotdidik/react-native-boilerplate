import React, { Component } from 'react'
import Swiper from 'react-native-swiper'
import { StyleSheet, ImageBackground } from 'react-native'
import { Container, Content, Card, CardItem, Text } from 'native-base';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { connect } from 'react-redux'

class TopSwiper extends Component {
  render() {
    console.log(this.props.posts);
    
    return (
      <Container style={{ height: hp('52%'), backgroundColor: '#e7e7e8' }}>
        <Swiper style={styles.wrapper} showsButtons={false}>
            {
                this.props.posts.slice(0,4).map((swip, index) => 
                <Content padder key={index}>
                    <Card>
                        <CardItem cardBody>
                            <ImageBackground 
                                imageStyle={{ resizeMode: 'stretch' }} 
                                source={{ uri: swip.gambar }} 
                                style={styles.sapiImg}
                            >
                                <Text style={styles.sapiName}>{swip.nama}</Text>
                            </ImageBackground>
                        </CardItem>
                        <CardItem>
                            <Text numberOfLines={2}>{swip.keterangan}</Text>
                        </CardItem>
                        <CardItem footer bordered>
                            <Text>Rp.{swip.harga}</Text>
                        </CardItem>
                    </Card>
                </Content>
                )
            }
        </Swiper>
      </Container>
    )
  }
}

const styles = StyleSheet.create ({
    sapiName: {
        flex: 1,
        color: 'white',
        top: '75%',
        left: '3%',
        fontSize: hp('3.5%')
    },

    sapiImg: {
        flex: 1,
        width: null,
        height: hp('27%'),

    }
})

const mapStateToProps = state => {
    return {
        posts: state.datas
    }
}

export default connect(
    mapStateToProps
)(TopSwiper)
