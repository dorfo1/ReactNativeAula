import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createStackNavigator,createAppContainer} from 'react-navigation'
import Seasons from './src/screens/Seasons/Seasons'
import Corridas from './src/screens/Corridas/Corridas'



const AppNavigator = createStackNavigator(
  {
    Seasons:{
      screen: Seasons
    },
    Corridas:{
      screen: Corridas
    }
  },
  {
    initialRouteName : 'Seasons',
    defaultNavigationOptions:{
      headerStyle:{
        backgroundColor: '#333'
      },
      headerTintColor: '#fff',
      headerTitleStyle:{
        fontWeight: 'bold',
      },
    },

  }
);


export default createAppContainer(AppNavigator)
