import React, { Component } from "react";
import { createBottomTabNavigator, createAppContainer } from "react-navigation";
import ScreenHome from "../components/ScreenHome";
import ScreenProducts from "../components/ScreenProducts";
import ScreenProfile from "../components/ScreenProfile";
import { Container } from "native-base";

const TabNavigator = createBottomTabNavigator(
  {
    Home: ScreenHome,
    One: ScreenProducts,
    Two: ScreenProfile
  },
  {
    tabBarPosition: "bottom",
    swipeEnabled: true,
    lazy: true,
    tabBarOptions: {
      activeTintColor: "#f2f2f2",
      activeBackgroundColor: "#135589",
      inactiveTintColor: "#666",
      labelStyle: {
        fontSize: 18,
        padding: 12
      }
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
