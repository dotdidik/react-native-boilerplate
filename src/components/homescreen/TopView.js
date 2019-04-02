import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { View, Text, Col, Row, Grid, Icon } from 'native-base';

class HomeTopView extends Component {
  render() {
    return (
      <View>
        <View style={styles.container}>
            <Text style={styles.title}>GO NCANG</Text>
        </View>
        <View style={styles.topView}>
            <Grid>
                <Col style={styles.iconContain}>
                    <Icon style={{fontSize:40, color: 'blue'}} name='ios-bicycle'/>
                    <Text style={{fontSize:15}}>Ncang</Text>
                </Col>
                <Col style={styles.iconContain}>
                    <Icon style={{fontSize:40, color: 'blue'}} name='ios-boat'/>
                    <Text style={{fontSize:15}}>Boat</Text>
                </Col>
                <Col style={styles.iconContain}>
                    <Icon style={{fontSize:40, color: 'blue'}} name='ios-add-circle-outline'/>
                    <Text style={{fontSize:15}}>Top Up</Text>
                </Col>
            </Grid>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#135589',
        height:110,
        flex:1,
        justifyContent: "center",
        alignItems: "center",
        paddingBottom: 50
    },
    topView:{
        backgroundColor: '#3ddad7',
        height: 130,
        marginLeft: 14,
        marginRight: 14,
        marginTop: -50,
        borderRadius:10,
        flexDirection: 'row', 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    title:{
        fontSize: 25,
        color: '#FFFFFF',
        fontWeight: 'bold'
    },
    iconContain:{
        backgroundColor: '#EDFAFD', 
        height: 87,
        margin: 15,
        width: 87,
        borderRadius: 87/2,
        justifyContent: "center",
        alignItems: "center",
    }
})

export default HomeTopView;