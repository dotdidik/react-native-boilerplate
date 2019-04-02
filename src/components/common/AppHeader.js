import React, { Component } from 'react'
import { Header, Left, Button, Icon, Body, Title, Right, Thumbnail } from 'native-base'

export default class AppHeader extends Component {
  render() {
    return (
        <Header>
            <Left>
                <Button transparent>
                    <Icon
                        name={this.props.iconname}
                    />
                </Button>
            </Left>
            <Body><Title>{this.props.titlehead}</Title></Body>
            <Right>
                <Thumbnail small source={{uri: this.props.imguri}} />
            </Right>
        </Header>
    )
  }
}
