import React, { Component } from 'react';
import {Tab, Tabs, ScrollableTab, Text, Content} from 'native-base';
import Tab1 from './tabs/Tab1';
import Tab2 from './tabs/Tab2';

export default class ProductTabs extends Component {
  render() {
    return (
      <Tabs>
        <Tab heading='Food'>
            <Content>
              <Tab1 />
            </Content>
        </Tab>
        <Tab heading='Hard Drink'>
          <Content>
            <Tab2 />
          </Content>    
        </Tab>
      </Tabs>
    )
  }
}
