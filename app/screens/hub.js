
import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  Platform
} from "react-native";


import Profile from './profile'
import Messages from './messages'
import Search from './search'


import { createMaterialTopTabNavigator } from 'react-navigation';

import { Icon } from 'native-base'

export default class Hub extends React.Component {
    /** 
    static navigationOptions = {
        headerStyle: {
        },
        headerLeft: <Icon name="ios-contact" style={{ paddingLeft: 10, color: 'pink' }} />,
        title: "Hub",
        headerRight: <Icon style={{ paddingRight: 10, color: 'pink' }} name="ios-chatboxes" />,
        position: 'absolute'
        }
    */
  render() {
      
      return (
          <View style={styles.container}>
            <View>
            <Text>dsdas</Text>
            <AppTabNavigator />
            </View>
          </View>
  
        );  
    }
  }


    

  const AppTabNavigator = createMaterialTopTabNavigator({

    ProfileTab: {
        screen: Profile
    },
    Search: {
        screen: Search
    },
    Messages: {
        screen: Messages
    }

}, {
        animationEnabled: true,
        swipeEnabled: true,
        initialRouteName: 'Search',
        tabBarPosition: "top",
    
        tabBarOptions: {
            tinColor: '#fff',
            activeTintColor: '#eee',
            inactiveTintColor: '#fff',
            showIcon: true,
            showLabel: true,
            lazyLoad: false,
            upperCaseLabel: false,
            indicatorStyle: {
            backgroundColor: 'green'
            },


            labelStyle :{
            },

            tabStyle: {
            },
                
            style: {
                backgroundColor: 'blue',
                borderTopWidth: 3,
                borderTopColor: 'black',
            },


        }   

        })









const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'purple',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
