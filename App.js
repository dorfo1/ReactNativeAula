import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createStackNavigator,createAppContainer} from 'react-navigation'
import Seasons from './src/screens/Seasons/Seasons'
import MenuTemporada from './src/screens/MenuTemporada/MenuTemporada'
import Pilotos from './src/screens/Pilotos/Pilotos'
import Corridas from './src/screens/Corridas/Corridas'

const AppNavigator = createStackNavigator(
  {
    Seasons:{
      screen: Seasons
    },
    MenuTemporada:{
      screen: MenuTemporada
    },
    Pilotos:{
      screen: Pilotos
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
