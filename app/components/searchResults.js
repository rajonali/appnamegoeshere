import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Container, Header, Content, Card, CardItem, Body, Text } from 'native-base';


export default class SearchResults extends React.Component {


    //style={{ backgroundColor: 'red' }}
    render() {
      return (
        <Container>
            <Header />
            <Content>
            <Card>
                <CardItem>
                <Body>
                    <Text>
                    //Your text here
                    </Text>
                </Body>
                </CardItem>
            </Card>
            </Content>
        </Container>
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
