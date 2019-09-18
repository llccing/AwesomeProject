import React, { Component } from 'react'
import { Alert, StyleSheet, Text, Button, View } from 'react-native'
import { MapView, Marker } from 'react-native-amap3d'

const styles = StyleSheet.create({})

export default class MarkerExample extends Component {
  _coordinates = [
    {
      latitude: 116.3702415368347,
      longitude: 40.08144705283713,
    },
  ]

  state = {
    longitude: 116.3702415368347,
    latitude: 40.08144705283713,
  }

  _changePosition() {
    let longitude = this.state.longitude + 0.01
    let latitude = this.state.latitude + 0.01
    console.log(longitude)
    this.setState({
      longitude,
      latitude,
    })
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <MapView locationEnabled style={{ flex: 1 }}>
          <Marker
            active
            title="家"
            color="red"
            description="哈哈，我到家了"
            coordinate={{
              latitude: this.state.latitude,
              longitude: this.state.longitude,
            }}
          />
        </MapView>
        <View style={{ height: 50, alignItems: 'center', justifyContent: 'center' }}>
          <Button title="我的位置" onPress={() => this._changePosition()}></Button>
        </View>
      </View>
    )
  }
}
