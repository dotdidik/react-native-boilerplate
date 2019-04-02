import React, { Component } from 'react'
import {View, Text, Container, Content, List, ListItem, Left, Thumbnail, Body, Right} from 'native-base'
import AppHeader from './common/AppHeader';
import axios from 'axios';

class ScreenProfile extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      datas: []
    }
  }

  componentDidMount(){
    axios.get('http://reduxblog.herokuapp.com/api/posts?key=didik1234')
      .then(res => {
        this.setState({
          datas : res.data
        })
        console.log('data from server',res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    return (
      <Container>
        <AppHeader 
          titlehead="List Data"
        />
        <Content>
          <List>
            {
              this.state.datas.map((data, index) => 
                <ListItem avatar key={index}>
                  <Left>
                    <Thumbnail source={{ uri: data.categories }} />
                  </Left>
                  <Body>
                    <Text>{data.title}</Text>
                    <Text note>{data.content}</Text>
                  </Body>
                </ListItem>
              )
            }
          </List>
        </Content>
      </Container>
    )
  }
}

export default ScreenProfile;
