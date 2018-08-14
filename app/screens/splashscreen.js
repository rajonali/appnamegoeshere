import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  Platform
} from "react-native";


import Profile from './profile'
import Messages from './messages'

import { Icon } from 'native-base'

export default class Splashscreen extends React.Component {


  render() {
      
      return (
          <View style={styles.container}>
            <Text>Splashscreen</Text>
          </View>
  
        );  
    }
  }
  





const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


