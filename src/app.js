/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
  FlatList
} from 'react-native';

import Post from './components/Post';

const width = Dimensions.get('screen').width;

class InstaluraMobile extends Component {

  constructor() {
      super();
      this.state = {
          fotos: []
      }
  }

  componentDidMount() {
      fetch('http://192.168.15.14:1880/teste')
          .then(resposta => resposta.json())
          .then(json => this.setState({fotos: json}));
  }

  render() {
    return (
      <FlatList
        style={styles.container}
        keyExtractor={item => item.id}
        data={this.state.fotos}
        renderItem={ ({item}) =>
          <Post foto={item}/>
        }
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop:20
  }
});


export default () => {
  AppRegistry.registerComponent('InstaluraMobile', () => InstaluraMobile);
}
