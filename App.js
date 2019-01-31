
'use strict';

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import Login from './js/Login';
import SearchPage from './js/SearchPage';
import SearchResults from './js/SearchResults';

const AppNavigator = createStackNavigator({
  Login: { screen: Login },
  Home: { screen: SearchPage },
  Results: { screen: SearchResults },
});

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
