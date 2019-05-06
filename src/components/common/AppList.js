import React, { Component } from 'react'
import { connect } from 'react-redux';
import { 
    List, 
    ListItem,
    Left,
    Thumbnail,
    Body,
    Right,
    Text } from 'native-base'
class AppList  extends Component {
  render() {
    return (
        <List>
            {
                this.props.posts.map((post, index)=>
                    <ListItem avatar key={index}>
                        <Left>
                            <Thumbnail source={{ uri: post.gambar }} />
                        </Left>
                        <Body>
                            <Text>{ post.nama }</Text>
                            <Text note>{post.harga}</Text>
                        </Body>
                        <Right>
                            <Text note>3:43 pm</Text>
                        </Right>
                    </ListItem>
                )
            }
        </List>
    )
  }
}

const mapStateToProps = state => {
    return {
        posts: state.datas
    }
}

export default connect(
    mapStateToProps
)(AppList)