import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, Button, TouchableHighlight, FlatList } from 'react-native';
import Swiper from 'react-native-swiper';
import Icon from 'react-native-vector-icons/Ionicons';
import Utils from '../utils/'

class WatchFace extends Component {
  static propTypes = {
    totalTime: PropTypes.string
  }

  render() {
    return (
      <View style={styles.WatchFace}>
        <Text style={styles.totalTime}>{this.props.totalTime}</Text>
      </View>
    )
  }
}

class WatchControl extends Component {

  // 开始
  _start() {
    console.log('开始')
  }

  // 记录次数
  _recordTimes() {
    console.log('记录次数')
  }

  render() {
    return (
      <View style={styles.WatchControl}>
        <TouchableHighlight style={styles.btn} onPress={() => this._start()} underlayColor={'#eee'}>
          <Text style={styles.btnText}>计次</Text>
        </TouchableHighlight>

        <TouchableHighlight style={styles.btn} onPress={() => this._start()} underlayColor={'#eee'}>
          <Text style={styles.btnText}>启动</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

class WatchRecord extends Component {
  static propTypes = {
    records: PropTypes.array
  }

  render() {
    const { records } = this.props
    console.log(records)
    return (
      <FlatList data={records}
        keyExtractor={(item, idx) => idx}
        renderItem={({ item, idx }) => <Text>{item.text}</Text>} />
    )
  }
}


class Day1 extends Component {
  constructor(props) {
    super(props)

    this.state = {
      totalTime: '00:00:00',
      records: [
        { text: '', },
        { text: '', },
        { text: '', },
        { text: '', },
        { text: '', },
      ]
    }
  }

  _changeTime() {
    this.setState({ totalTime: `${Math.random()}` })
  }

  render() {
    const { totalTime, records } = this.state
    return (
      <View style={styles.container}>
        <WatchFace totalTime={totalTime} />

        <View style={styles.bottom}>
          <WatchControl />

          <WatchRecord records={records} />
        </View>
      </View>
    )
  }
}

export default Day1
const border = {
  borderStyle: 'solid',
  borderWidth: 1,
  borderColor: '#0f0',
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,

    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#f00',
  },

  WatchFace: {
    flexDirection: 'row',
    height: 100,
    justifyContent: 'center',
    alignItems: 'center'
  },

  totalTime: {
    fontSize: 40,
  },

  bottom: {
    flex: 1,
    backgroundColor: '#f7f7f7',
  },

  WatchControl: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 20,

    // borderStyle: 'solid',
    // borderWidth: 1,
    // borderColor: '#000',
  },
  btn: {
    // flex: 1,
    height: 70,
    width: 70,
    borderRadius: 50,
    marginLeft: 20,
    marginRight: 20,

    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  },

  btnText: {
    // ...border
  },

  btnRecord: {

  }
})