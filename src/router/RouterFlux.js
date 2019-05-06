import React, { Component } from 'react'
import { Container } from 'native-base';
import { Router, Scene } from 'react-native-router-flux';
import TabNavigator from './Router';
import WellcomeScreen from '../components/WellcomeScreen';

//redux config
import { createStore, applyMiddleware } from 'redux';
import { connect, Provider } from 'react-redux';
import thunk from 'redux-thunk';

import allReducers from '../redux/reducers';
import { getData, getNews } from '../redux/actions';
import DetailNews from '../components/detail/DetailNews';
import Login from '../components/user/Login';
import Register from '../components/user/Register';

const store = createStore(allReducers, applyMiddleware(thunk))
const RouterRedux = connect()(Router)

store.dispatch(getData());
store.dispatch(getNews())

//redux config end

export default class RouterFlux extends Component {
  render() {
    return (
        <Provider store={store}>
          <RouterRedux>
              <Scene key='root'>
                  <Scene key='wellomescreen' hideNavBar component={WellcomeScreen} />
                  <Scene key='index' hideNavBar component={TabNavigator} />
                  <Scene key='newsDetail' hideNavBar component={DetailNews} />
                  <Scene key='login' hideNavBar component={Login} />
                  <Scene key='register' hideNavBar component={Register} />
              </Scene>
          </RouterRedux>
        </Provider>
    )
  }
}
