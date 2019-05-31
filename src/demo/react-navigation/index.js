import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'
import { createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation'

class Home extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignContent: 'center', justifyContent: 'center' }}>
        <Text>home</Text>
        <Button title="go to detail"
          onPress={() => this.props.navigation.navigate('Detail')}
        >
        </Button>
      </View>
    )
  }
}

class Detail extends Component {
  render() {
    return (
      <View>
        <Text>this is detail</Text>

        <Button title="back to home" onPress={() => this.props.navigation.goBack()} />

        <Button title='go home' onPress={() => this.props.navigation.navigate('Home')}/>
      </View>
    )
  }
}

// iOS默认从右侧滑入，Android从底部淡入。
const AppNavigator = createStackNavigator({
  Home,
  Detail,
}, {
    initialRouteName: 'Home'
  })

const AppContainer = createAppContainer(AppNavigator)

export default class App extends Component {
  render() {
    return (
      <AppContainer />
    )
  }
}
