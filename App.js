import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Button} from 'native-base'
import Seasons from './src/screens/Seasons/Seasons'

export default class App extends React.Component {
  
  componentDidMount(){

  }
  
  
  render() {
    return (
      <Seasons/>
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
