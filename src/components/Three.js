import React, { Component } from 'react'
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right, Spinner, View } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { Image } from 'react-native';
import { getNews } from '../redux/actions';

class Three extends Component {
  componentDidMount(){
    this.props.loadNews()
  }
  render() {
    console.log('test props',this.props)
    let newsCome;
    if(this.props.loading){
      newsCome = <Spinner color='red'/>
    } else {
      newsCome = <View>
      {
          this.props.news.map((n, index) => 
          <Card key={index}>
              <CardItem 
                cardBody button 
                onPress={() => Actions.newsDetail({nDetail : n})}>
                <Image 
                  source={{uri: n.categories}} 
                  style={{height: 200, width: null, flex: 1}}
                />
              </CardItem>
              <CardItem>
                  <Text>{n.title}</Text>
              </CardItem>
          </Card>
          )
      }
    </View>
    }
    return (
      <Container>
        <Header />
        <Content>
          {newsCome}
        </Content>
      </Container>
    )
  }
}

const mapStateToProps = state => {
  return {
    news: state.news.news,
    loading: state.news.loading
  }
}

mapDispatchToProps={
  loadNews : getNews
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Three)
