import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Icon } from 'native-base'


export default class Messages extends React.Component {

  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name="ios-chatboxes" style={{ color: tintColor }} />
    )
  }

    render() {
      
      return (
          <View style={styles.container}>
            <Text>messages</Text>
          </View>
  
        );  
    }
  }
  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
