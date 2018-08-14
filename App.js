import React, { Component } from 'react'
//import { View, Text } from 'react-native'
import { Provider, connect } from 'react-redux'
import configureStore from './app/config/configureStore'
import { createStackNavigator } from 'react-navigation';


//Stack navs
import Hub from './app/screens/hub'
import Signin from './app/screens/signin'
import Signup from './app/screens/signup'
import Splashscreen from './app/screens/splashscreen'

//Connect to redux
const store = configureStore()


export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppStackNavigator />
      </Provider>
    )
  }
}


const AppStackNavigator = createStackNavigator(
  //Router Config
  {
    Hub: { 
      screen: Hub
    },
    Spash: { 
      screen: Splashscreen
    },
    Signin: { 
      screen: Signin 
    },
    Signup: { 
      screen: Signup 
    }
  },

  //Visual options
  {
    headerMode: 'none'
  },
)






