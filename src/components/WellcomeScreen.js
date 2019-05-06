import React, { Component } from 'react'
import { Container, Text, Button, View, Spinner } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux'
import { restoreSession } from '../redux/actions'
class WellcomeScreen extends Component {

  componentDidUpdate(prevProps) {
    const { error, logged } = this.props;
    if(!prevProps.error && error) Alert.alert('error', error);
    if(logged) Actions.reset('index')
  }

  componentDidMount(){
    this.props.restore();
  }

  render() {
    console.log('this restoring', this.props);
    let condition;
    if(this.props.loading){
      condition = <Spinner color='blue'/>
    } else {
      condition = <View style={{flex: 1, justifyContent: 'center'}}>
                    <Button onPress={() => Actions.index()}>
                        <Text>Lihat Products</Text>
                    </Button>
                      <Button onPress={() => Actions.login()}>
                          <Text>Login</Text>
                      </Button>
                  </View>
    }
    return (
      <Container>
        {condition}
      </Container>
    )
  }
}

const mapStateToProps = ({sessionReducer: { loading, error, registered, user, logged, restoring }}) => ({
  loading : loading,
  restoring: restoring,
  error : error,
  registered : registered,
  user : user,
  logged : logged
})

const mapDispatchToProps = {
  restore: restoreSession
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WellcomeScreen)
