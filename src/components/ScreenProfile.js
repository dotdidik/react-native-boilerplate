import React, { Component } from 'react'
import { Container, Text, Header, Content, Button, View } from 'native-base';
import { connect } from 'react-redux';
import { Image } from 'react-native';
import { Actions } from 'react-native-router-flux';

class ScreenProfile extends Component {
  render() {
    console.log('profile', this.props)

    let isLoggedIn;
    if(this.props.logged){
      isLoggedIn =  
      <View>
        <Image 
          source={{uri: 'https://cdn.images.express.co.uk/img/dynamic/36/590x/Avengers-Iron-Man-was-almost-played-by-another-major-star-936289.jpg'}}
          style={{width: 100, height: 100}}
        />
        <Text>{this.props.user.user.email}</Text>
      </View>
    } else {
      isLoggedIn =
      <Button onPress={() => Actions.login()}>
        <Text>PLEASE LOGIN</Text>
      </Button>
    }

    return (
      <Container>
        <Header />
        <Content>
         {isLoggedIn}
        </Content>
      </Container>
    )
  }
}

const mapStateToProps = ({sessionReducer: { loading, error, registered, user, logged }}) => ({
  loading : loading,
  error : error,
  registered : registered,
  user : user,
  logged : logged
})

export default connect(
  mapStateToProps
)(ScreenProfile)
