'use strict';

import React, { Component } from 'react';
import { StackNavigator, createAppContainer  } from 'react-navigation';
import logo from './../resources/house.png';
import {
  Alert,
  StyleSheet,
  View,
  Button,
  TextInput,
  Image,
} from 'react-native';

type Props = {};
export default class Login extends React.Component {
    render() {
      return (
        <View style={styles.container}>
          <View style={styles.imageContainer}>
            <Image source={logo}/>
          </View>

          <View style={styles.buttonContainer}>
             <TextInput
                style={styles.loginInput}
                placeholder='Login'/>
           </View>

           <View style={styles.buttonContainer}>
             <TextInput
                style={styles.loginInput}
                placeholder='Password'/>
          </View>

          <View style={styles.buttonContainer}>
            <Button
              onPress={() => this.props.navigation.navigate('Home')}
              title="Log in"
              color="#841584"
            />
          </View>
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
     flex: 1,
     justifyContent: 'center'
    },
    imageContainer: {
     justifyContent: 'center',
     alignItems: 'center',
     //borderWidth: 1,
     //borderRadius: 50,
    },
    buttonContainer: {
      margin: 20
    },
    alternativeLayoutButtonContainer: {
      margin: 20,
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    loginInput: {
      height: 36,
      padding: 4,
      marginRight: 5,
      flexGrow: 1,
      fontSize: 18,
      borderWidth: 1,
      //borderColor: '#48BBEC',
      borderRadius: 8,
      //color: '#48BBEC',
    },
  });
