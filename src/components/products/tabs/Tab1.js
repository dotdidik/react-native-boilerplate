import React, { Component } from 'react'
import { View, Text, Title } from 'native-base'
import {StyleSheet, Dimensions} from 'react-native'
import AppCard from '../../common/AppCard';
import { ScrollView } from 'react-native-gesture-handler';
export default class Tab1 extends Component {
  render() {
    return (
        <ScrollView>
            <View style={styles.container}>
                <AppCard 
                    cardStyle={styles.card}
                />
                <AppCard 
                    cardStyle={styles.card}
                />
                <AppCard 
                    cardStyle={styles.card}
                />
                <AppCard 
                    cardStyle={styles.card}
                />
                <AppCard 
                    cardStyle={styles.card}
                />
                <AppCard 
                    cardStyle={styles.card}
                />
            </View>
        </ScrollView>
    )
  }
}

export const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginTop: 20
    },
    card:{
        borderRadius: 4,
        borderWidth: 10,
        borderColor: 'black',
        width: width * 0.47,
        height: 200,
        backgroundColor: 'white',
        margin: 10,
        alignItems: "center",
        borderRadius: 4,
        borderWidth: 1,
        borderColor: 'black'
    }
})