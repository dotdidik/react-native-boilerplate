import React, { Component } from "react";
import { createBottomTabNavigator, createAppContainer } from "react-navigation";
import ScreenHome from "../components/ScreenHome";
import ScreenProducts from "../components/ScreenProducts";
import ScreenProfile from "../components/ScreenProfile";

import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { Container ,Icon } from 'native-base';
import { Platform } from 'react-native'
import Three from "../components/Three";

const TabNavigator = createMaterialBottomTabNavigator(
  {
    Home: {
      screen: ScreenHome,
      navigationOptions: {
        tabBarLabel: 'Home',
        tabBarIcon: ({ tintColor, focused }) => (
          <Icon 
            size={20} 
            name={ Platform.OS === 'android' ? 
            ( focused ? 'ios-home' : 'ios-home' ) : 'ios-home'}  
            style={{ color: tintColor }}
          />
        )
      }
    },
    News: {
      screen: Three,
      navigationOptions: {
        tabBarLabel: 'News',
        tabBarIcon: ({ tintColor, focused }) => (
          <Icon 
            size={20} 
            name={ Platform.OS === 'android' ? 
            ( focused ? 'paper' : 'paper' ) : 'paper'}  
            style={{ color: tintColor }}
          />
        )
      }
    },
    Products: {
      screen: ScreenProducts,
      navigationOptions: {
        tabBarLabel: 'Products',
        tabBarIcon: ({ tintColor, focused }) => (
          <Icon 
            size={20} 
            name={ Platform.OS === 'android' ? 
            ( focused ? 'ios-home' : 'ios-home' ) : 'ios-home'}  
            style={{ color: tintColor }}
          />
        )
      }
    },
    Profile: {
      screen: ScreenProfile,
      navigationOptions: {
        tabBarLabel: 'Profile',
        tabBarIcon: ({ tintColor, focused }) => (
          <Icon 
            size={20} 
            name={ Platform.OS === 'android' ? 
            ( focused ? 'ios-home' : 'ios-home' ) : 'ios-home'}  
            style={{ color: tintColor }}
          />
        )
      }
    }
  },
  {
    initialRouteName: 'Home',
    activeColor: 'blue',
    inactiveColor: '#BBBBBB',
    barStyle: {
      backgroundColor: '#fff'
    }
  }
);

const TabNav = createAppContainer(TabNavigator);

class AppTab extends Component {
  render() {
    return (
      <Container>
        <TabNav />
      </Container>
    );
  }
}

export default AppTab;
