import React, { Component } from 'react'
//import { View, Text } from 'react-native'
import { Actions, Router, Scene } from 'react-native-router-flux'
import { Provider, connect } from 'react-redux'
import configureStore from './app/config/configureStore'


import Hub from './app/screens/hub'
import Signin from './app/screens/signin'

const ConnectedRouter = connect()(Router)
const store = configureStore()

const Scenes = Actions.create(
  <Scene key='root'>
    <Scene key='hub' component={Hub} title='Hub' />
    <Scene key='signin' component={Signin} title='Sign-in' initial />
  </Scene>
)

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter scenes={Scenes}/>
      </Provider>
    )
  }
}