import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'
import {
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer,
} from 'react-navigation'

import Home from './home/'
import Day1 from './days/day1'

// iOS默认从右侧滑入，Android从底部淡入。
const AppNavigator = createStackNavigator(
  {
    Home,
    Day1,
  },
  {
    initialRouteName: 'Home',
  },
)

const AppContainer = createAppContainer(AppNavigator)

export default class App extends Component {
  render() {
    return <AppContainer />
  }
}
