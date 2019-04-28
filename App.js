/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { Platform, StyleSheet, Text, View, Button} from 'react-native';
import { createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation'

class HomeScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button title="go to Detail"
          onPress={() => this.props.navigation.navigate('Details')}
        >
        </Button>
      </View>
    )
  }
}

class DetailScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Detail Screen</Text>
        <Button
          title="go to Details, 再去一次"
          onPress={() => this.props.navigation.push('Details')}
        />
        
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />

        <Button title="Go back" onPress={() => this.props.navigation.goBack()} />
      </View>
    )
  }
}

// const AppNavigator = createStackNavigator({
//   Home: HomeScreen,
//   Details: DetailScreen,
// }, {
//   initialRouteName: 'Home'
//   })

const AppNavigator = createBottomTabNavigator({
  Home: HomeScreen,
  Details: DetailScreen,
}, {
  initialRouteName: 'Home'
  })

const AppContainer = createAppContainer(AppNavigator)

export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}