import React, { Component } from 'react';
import { Container, Text, Header, Content, View, Button} from 'native-base';
import AppList from './common/AppList';
import TopSwiper from './common/TopSwiper';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux'

import { restoreSession, logoutUser } from '../redux/actions'

class ScreenHome extends Component {
  componentDidMount() {
    this.props.restore()
  }

  logout = () => {
    this.props.logout();
    setTimeout(() => {
      Actions.reset('wellomescreen');
    }, 1000);
  };

  render() {
    console.log('update state', this.props)    
    return (
        <Container>
          <Header />
          <Content>
            <TopSwiper />
            <Button onPress={this.logout}>
              <Text>Logout</Text>
            </Button>
          </Content>
        </Container>
    )
  }
}

const mapStateToProps = ({sessionReducer: { user, logged }}) => ({
  user : user,
  logged : logged
})
const mapDispatchToProps = {
  restore : restoreSession,
  logout : logoutUser
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ScreenHome)
