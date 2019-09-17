import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default class extends Component {
  render() {
    return (
      <View style={styles.con}>
        <Text>will update, when 30 days finish!</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  con: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
