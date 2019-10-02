import React, { Component } from 'react'
import { View, Text, PanResponder, StyleSheet, Animated } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

// https://dev.to/hyra/getting-started-with-the-panresponder-in-react-native-9mf
// demo from this
export default class extends Component {
  constructor(props) {
    super(props)

    this.state = {
      pan: new Animated.ValueXY(),
      scale: new Animated.Value(1),
    }
  }

  componentWillMount() {
    this._panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onStartShouldSetPanResponderCapture: () => true,

      onMoveShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponderCapture: () => true,

      onPanResponderGrant: (evt, gestureState) => {
        this.state.pan.setOffset({ x: this.state.pan.x._value, y: this.state.pan.y._value })

        this.state.pan.setValue({ x: 0, y: 0 })

        Animated.spring(
          this.state.scale,
          { toValue: 1.1, friction: 3 }
        ).start();
      },

      onPanResponderMove: Animated.event([null, { dx: this.state.pan.x, dy: this.state.pan.y }]),

      onPanResponderRelease: (e, { vx, vy }) => {
        console.log('onPanResponderRelease', e)
        this.state.pan.flattenOffset()

        Animated.spring(
          this.state.scale,
          {toValue: 1, friction: 3}
        ).start()
      },
    })

    console.log(this._panResponder)
  }

  render() {
    let { pan, scale } = this.state

    console.log('pan', pan)

    let [translateX, translateY] = [pan.x, pan.y]

    let rotate = '0deg'

    let iconStyle = { transform: [{ translateX }, { translateY }, {scale}] }

    return (
      <View style={styles.container}>
        <Animated.View style={iconStyle} {...this._panResponder.panHandlers}>
          <Icon name={'logo-twitter'} size={85} color="white"  />
        </Animated.View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1da1f2',
  },
  icon: {
    color: 'blue',
  },
})
