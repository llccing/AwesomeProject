import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, Text, View, Button, TouchableHighlight, FlatList } from 'react-native'
import Swiper from 'react-native-swiper'
import Icon from 'react-native-vector-icons/Ionicons'
import Utils from '../utils/'

class WatchFace extends Component {
  static propTypes = {
    totalTime: PropTypes.string.isRequired,
    sectionTime: PropTypes.string.isRequired,
  }

  render() {
    // 解构不能用吗？
    // const { totalTime, sectionTime } = this.state
    return (
      <View style={styles.WatchFace}>
        <Text style={styles.sectionTime}>{this.props.sectionTime}</Text>
        <Text style={styles.totalTime}>{this.props.totalTime}</Text>
      </View>
    )
  }
}

class WatchControl extends Component {
  static propTypes = {
    stopWatch: PropTypes.func.isRequired,
    clearRecord: PropTypes.func.isRequired,
    startWatch: PropTypes.func.isRequired,
    addRecord: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props)
    this.state = {
      watchOn: false,
      startBtnText: '启动',
      startBtnColor: 'green',
      stopBtnText: '计次',
      underlayColor: '#fff',
    }
  }

  // 开始
  _start() {
    if (!this.state.watchOn) {
      this.props.startWatch()
      this.setState({
        startBtnText: '停止',
        startBtnColor: '#ff0044',
        stopBtnText: '计次',
        underlayColor: '#eee',
        watchOn: true,
      })
    } else {
      this.props.stopWatch()
      this.setState({
        startBtnText: '启动',
        startBtnColor: '#60B644',
        stopBtnText: '复位',
        underlayColor: '#eee',
        watchOn: false,
      })
    }
  }

  // 记录次数
  _addRecord() {
    if (this.state.watchOn) {
      this.props.addRecord()
    } else {
      this.props.clearRecord()
      this.setState({
        stopBtnText: '计次',
      })
    }
  }

  render() {
    return (
      <View style={styles.WatchControl}>
        <TouchableHighlight
          style={styles.btn}
          onPress={() => this._start()}
          underlayColor={this.state.underlayColor}
        >
          <Text style={styles.btnText}>{this.state.startBtnText}</Text>
        </TouchableHighlight>

        <TouchableHighlight
          style={styles.btn}
          onPress={() => this._addRecord()}
          underlayColor={this.state.underlayColor}
        >
          <Text style={styles.btnText}>{this.state.stopBtnText}</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

class WatchRecord extends Component {
  static propTypes = {
    records: PropTypes.array.isRequired,
  }

  render() {
    const { records } = this.props
    console.log(999, records)
    let records2 = [
      { title: '1', time: '123123' },
      { title: '2', time: '123123' },
      { title: '2', time: '123123' },
      { title: '3', time: 123 },
      { title: '4', time: 'asdfa' },
      { title: '5', time: '123123' },
      { title: '6', time: 'asdfasd' },
    ]
    return (
      <FlatList
        data={records}
        keyExtractor={(item, idx) => `${idx}`}
        renderItem={({ item, idx }) => (
          <View style={styles.watchRecordRow}>
            <Text>{item.title}</Text>
            <Text>{item.time}</Text>
          </View>
        )}
      />
    )
  }
}

export default class extends Component {
  constructor(props) {
    super(props)

    this.state = {
      stopWatch: false,
      resetWatch: true,
      initialTime: 0,
      currentTime: 0,
      recordTime: 0,
      timeAccumulation: 0,
      totalTime: '00:00.00',
      sectionTime: '00:00.00',
      recordCounter: 0,
      record: [
        { title: '', time: '' },
        { title: '', time: '' },
        { title: '', time: '' },
        { title: '', time: '' },
        { title: '', time: '' },
        { title: '', time: '' },
        { title: '', time: '' },
      ],
    }
  }

  _startWatch() {
    if (this.state.resetWatch) {
      this.setState({
        stopWatch: false,
        resetWatch: false,
        timeAccumulation: 0,
        initialTime: new Date().getTime(),
      })
    } else {
      this.setState({
        stopWatch: false,
        initialTime: new Date().getTime(),
      })
    }

    let milSecond, second, minute, countingTime, secmilSecond, secsecond, secminute, seccountingTime
    let interval = setInterval(() => {
      this.setState({
        currentTime: new Date().getTime(),
      })
      countingTime = this.state.timeAccumulation + this.state.currentTime - this.state.initialTime
      minute = Math.floor(countingTime / (60 * 1000))
      second = Math.floor((countingTime - 6000 * minute) / 1000)
      milSecond = Math.floor((countingTime % 1000) / 10)
      seccountingTime = countingTime - this.state.recordTime
      secminute = Math.floor(seccountingTime / (60 * 1000))
      secsecond = Math.floor((seccountingTime - 6000 * secminute) / 1000)
      secmilSecond = Math.floor((seccountingTime % 1000) / 10)

      this.setState({
        totalTime:
          (minute < 10 ? '0' + minute : minute) +
          ':' +
          (second < 10 ? '0' + second : second) +
          '.' +
          (milSecond < 10 ? '0' + milSecond : milSecond),
        sectionTime:
          (secminute < 10 ? '0' + secminute : secminute) +
          ':' +
          (secsecond < 10 ? '0' + secsecond : secsecond) +
          '.' +
          (secmilSecond < 10 ? '0' + secmilSecond : secmilSecond),
      })
      if (this.state.stopWatch) {
        this.setState({
          timeAccumulation: countingTime,
        })
        clearInterval(interval)
      }
    }, 10)
  }

  _stopWatch() {
    this.setState({
      stopWatch: true,
    })
  }

  _addRecord() {
    let { recordCounter, record, sectionTime } = this.state
    recordCounter++
    if (recordCounter < 8) {
      record.pop()
    }
    record.unshift({ title: `计次${recordCounter}`, text: sectionTime })
    this.setState({
      recordTime: this.state.timeAccumulation + this.state.currentTime - this.state.initialTime,
      recordCounter: recordCounter,
      record: record,
    })
    console.log(this.state.record)
  }

  _clearRecord() {
    this.setState({
      stopWatch: false,
      resetWatch: true,
      initialTime: 0,
      currentTime: 0,
      recordTime: 0,
      timeAccumulation: 0,
      totalTime: '00:00.00',
      sectionTime: '00:00.00',
      recordCounter: 0,
      record: [
        { title: '', time: '' },
        { title: '', time: '' },
        { title: '', time: '' },
        { title: '', time: '' },
        { title: '', time: '' },
        { title: '', time: '' },
        { title: '', time: '' },
      ],
    })
  }

  componentWillUnmount() {
    this._clearRecord()
    this._stopWatch()
  }

  render() {
    const { totalTime, record, sectionTime } = this.state

    return (
      <View style={styles.container}>
        <WatchFace totalTime={totalTime} sectionTime={sectionTime} />

        <View style={styles.bottom}>
          <WatchControl
            startWatch={() => this._startWatch()}
            stopWatch={() => this._stopWatch()}
            addRecord={() => this._addRecord()}
            clearRecord={() => this._clearRecord()}
          />

          <WatchRecord records={this.state.record} />
        </View>
      </View>
    )
  }
}

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

    // borderStyle: 'solid',
    // borderWidth: 1,
    // borderColor: '#f00',
  },

  WatchFace: {
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },

  sectionTime: {
    alignSelf: 'flex-end',
    fontSize: 14,
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
    backgroundColor: '#fff',
  },

  btnText: {
    // ...border
  },

  watchRecordRow: {
    flexDirection: 'row',
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 50,
    paddingRight: 50,
    justifyContent: 'space-between',
  },
})
