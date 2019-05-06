import React, { Component } from 'react'
import { Container, View, Text, Header, Content, Form, Item, Input, Label, Button } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { loginUser } from '../../redux/actions'
import { connect } from 'react-redux';

class Login extends Component {
  componentDidUpdate(prevProps){
    if (this.props.logged) Actions.reset('index')
  }
  state = {
    email: '',
    password: ''
  }

  handleEmail = email => this.setState({email});
  handlePassword = password => this.setState({password})

  handleLoginSend = () => {
    const { email, password } = this.state;
    this.props.loginButton(email, password);
  }

  render() {
    console.log('login', this.props.user);
    const {email, password} = this.state
    return (
      <Container>
        <Header />
        <Content>
            <View style={{flex: 1, justifyContent: 'center'}}>
                <Text>Login</Text>
                <Form>
                    <Item inlineLabel>
                        <Label>Username</Label>
                        <Input 
                          keyboardType="email-address"
                          onChangeText={this.handleEmail}
                          value={email}
                        />
                    </Item>
                    <Item inlineLabel last>
                        <Label>Password</Label>
                        <Input 
                          secureTextEntry={true}
                          onChangeText={this.handlePassword}
                          value={password}
                        />
                    </Item>
                </Form>
                <Button rounded onPress={this.handleLoginSend}>
                    <Text>Login</Text>
                </Button>
                <Button rounded light onPress={() => Actions.register()}>
                    <Text>Register</Text>
                </Button>
            </View>
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
const mapDispatchToProps = {
  loginButton : loginUser
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)
