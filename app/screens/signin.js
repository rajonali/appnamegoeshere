import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Container, Button, Text, Icon } from 'native-base';


export default class Signin extends React.Component {

    render() {
      return (
          <View style={styles.container}>
            <Container>
              <Image source={require('../res/light.png')} />
              <Text>APPNAMEGOESHERE</Text>
            </Container>
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
    paddingTop: 50
  },
});
