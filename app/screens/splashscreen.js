import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  Platform
} from "react-native";


import Profile from './profile'
import Messages from './messages'

import { createMaterialTopTabNavigator } from 'react-navigation';

import { Icon } from 'native-base'

export default class Splashscreen extends React.Component {

  static navigationOptions = {

    headerLeft: <Icon name="ios-contact" style={{ paddingLeft: 10 }} />,
    title: "APPNAME",
    headerRight: <Icon style={{ paddingRight: 10 }} name="ios-chatboxes" />
  }

  render() {
      
      return (
          <View style={styles.container}>
            <Text>splashscreen</Text>
          </View>
  
        );  
    }
  }
  


  const AppTabNavigator = createMaterialTopTabNavigator({

    ProfileTab: {
        screen: Profile
    },
    Messages: {
        screen: Messages
    }

}, {
        animationEnabled: true,
        swipeEnabled: true,
        tabBarPosition: "bottom",
        tabBarOptions: {
            style: {
                ...Platform.select({
                    android: {
                        backgroundColor: 'white'
                    }
                })
            },
            activeTintColor: '#000',
            inactiveTintColor: '#d1cece',
            showLabel: false,
            showIcon: true
        }
})









const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
