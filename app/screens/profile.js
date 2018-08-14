import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Icon } from 'native-base';

export default class Profile extends React.Component {

  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name="ios-contact" style={{ color: tintColor }} />
    )
  }
    render() {
      return (
          <View style={styles.container}>
            <Text>profile</Text>
          </View>
  
        );  
    }
  }
  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "orange"
  },
});
