import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Container, Header, Item, Input, Icon, Button, Text } from 'native-base'
import SearchResults from '../components/searchResults'


export default class Search extends React.Component {

    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-search" style={{ color: tintColor }} />
        )
      }
    
    render() {
      return (
          <Container style={styles.container}>
            <Header searchBar rectangle>
            <Item>
                <Icon name="ios-search" />
                <Input placeholder="Search" />
                <Icon name="ios-people" />
            </Item>
            <Button transparent >
                <Text>Search</Text>
            </Button>
            </Header>
            <SearchResults />
  
          </Container>
        );  
    }
  }
  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "orange"
  },
});
