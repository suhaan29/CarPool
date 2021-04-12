/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import Icon from "react-native-vector-icons/AntDesign"
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import HomeScreen from './src/screen/HomeScreen';
import DestinationScreen from './src/screen/DestinationScreen'

const App = () => {
return(
  <DestinationScreen />
);
};



export default App;
