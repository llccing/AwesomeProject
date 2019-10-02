import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'
import {
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer,
  SafeAreaView,
  Theme,
} from 'react-navigation'

import Home from './home'
import Day1 from './days/day1'
import Day2 from './days/day2'
import Day3 from './days/day3/day3'
import Day4 from './days/day4'
import Day5 from './days/day5'
import Day6 from './days/day6'
import Day7 from './days/day7'
import Day8 from './days/day8'

// iOS默认从右侧滑入，Android从底部淡入。
const AppNavigator = createStackNavigator(
  {
    Home: { screen: Home },
    Day1: { screen: Day1 },
    Day2: { screen: Day2 },
    Day3: { screen: Day3 },
    Day4: { screen: Day4 },
    Day5: { screen: Day5 },
    Day6: { screen: Day6 },
    Day7: { screen: Day7 },
    Day8: { screen: Day8 },
  },
  // 如果没有指定初始化路由，那么默认从定义的第一个开始。
  // {
  //   initialRouteName: 'Home',
  // },
)

const AppContainer = createAppContainer(AppNavigator)

export default class App extends Component {
  render() {
    return (
      <AppContainer
        onNavigationStateChange={(prevState, newState, action) => {
          console.log('navigationStateChange', prevState)
        }}
      />
    )
  }
}
