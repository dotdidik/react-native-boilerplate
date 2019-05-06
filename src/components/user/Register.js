import React, { Component } from 'react'
import { Container, Header, Content, Text,Form, Item, Input, Label, Button } from 'native-base';
import { signupUser } from '../../redux/actions'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux';

class Register extends Component {
  componentDidUpdate(prevProps){
    if (this.props.registered) Actions.reset('index')
  }
  state = {
    email: '',
    password: ''
  }

  handleEmail = email => this.setState({email});
  handlePassword = password => this.setState({password})

  handleRegisterSend = () => {
    const { email, password } = this.state;
    this.props.onDaftar(email, password);
  }

  render() {
    console.log('loggin tes', this.props)
    const {email, password} = this.state
    return (
      <Container>
        <Header />
        <Content>
            <Text>Silahkan register</Text>
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
                <Button rounded onPress={this.handleRegisterSend}>
                    <Text>Register</Text>
                </Button>
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
  onDaftar : signupUser
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Register)
