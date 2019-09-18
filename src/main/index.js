import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'
import {
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer,
} from 'react-navigation'

import Home from './home/'
import Day1 from './days/day1'
import Day2 from './days/day2'
import Day3 from './days/day3/day3'
import Day4 from './days/day4';
import Day5 from './days/day5'
import Day6 from './days/day6'

// iOS默认从右侧滑入，Android从底部淡入。
const AppNavigator = createStackNavigator(
  {
    Home,
    Day1,
    Day2,
    Day3,
    Day4,
    Day5,
    Day6
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
