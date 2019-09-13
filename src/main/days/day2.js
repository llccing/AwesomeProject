import React, { Component } from 'react'
import { View, Button, Text, StyleSheet, ScrollView } from 'react-native'
import Swiper from 'react-native-swiper'
import Icon from 'react-native-vector-icons/Ionicons'
import utils from '../utils'

const weatherData = [
  {
    key: 0,
    city: '福州',
    night: true,
    abs: '大部晴朗',
    degree: 15,
    today: { week: '星期六', day: '今天', high: 16, low: 14 },
    hours: [
      { key: 101, time: '现在', icon: 'ios-moon', degree: '15°', color: 'rgba(255,255,255,1)' },
      {
        key: 102,
        time: '3时',
        icon: 'ios-cloudy-night',
        degree: '15°',
        color: 'rgba(255,255,255,0.8)',
      },
      {
        key: 103,
        time: '4时',
        icon: 'ios-cloudy-night',
        degree: '16°',
        color: 'rgba(255,255,255,0.8)',
      },
      {
        key: 104,
        time: '5时',
        icon: 'ios-cloudy-night',
        degree: '16°',
        color: 'rgba(255,255,255,0.8)',
      },
      {
        key: 105,
        time: '6时',
        icon: 'ios-cloudy-night',
        degree: '16°',
        color: 'rgba(255,255,255,0.8)',
      },
      { key: 106, time: '06:21', icon: 'ios-sunny', degree: '日出', color: '#fedf32' },
      {
        key: 107,
        time: '7时',
        icon: 'ios-partly-sunny',
        degree: '16°',
        color: 'rgba(255,255,255,0.9)',
      },
      {
        key: 108,
        time: '8时',
        icon: 'ios-partly-sunny',
        degree: '18°',
        color: 'rgba(255,255,255,0.9)',
      },
      { key: 109, time: '9时', icon: 'ios-sunny', degree: '19°', color: '#fedf32' },
      { key: 110, time: '10时', icon: 'ios-sunny', degree: '122°', color: '#fedf32' },
      { key: 111, time: '11时', icon: 'ios-sunny', degree: '23°', color: '#fedf32' },
      { key: 112, time: '13时', icon: 'ios-sunny', degree: '22°', color: '#fedf32' },
      { key: 113, time: '13时', icon: 'ios-sunny', degree: '22°', color: '#fedf32' },
      {
        key: 114,
        time: '14时',
        icon: 'ios-partly-sunny',
        degree: '16°',
        color: 'rgba(255,255,255,0.9)',
      },
      {
        key: 115,
        time: '15时',
        icon: 'ios-partly-sunny',
        degree: '22°',
        color: 'rgba(255,255,255,0.9)',
      },
      {
        key: 116,
        time: '16时',
        icon: 'ios-partly-sunny',
        degree: '21°',
        color: 'rgba(255,255,255,0.9)',
      },
      {
        key: 117,
        time: '17时',
        icon: 'ios-partly-sunny',
        degree: '19°',
        color: 'rgba(255,255,255,0.9)',
      },
      {
        key: 118,
        time: '18时',
        icon: 'ios-partly-sunny',
        degree: '18°',
        color: 'rgba(255,255,255,0.9)',
      },
      {
        key: 119,
        time: '18:06',
        icon: 'ios-partly-sunny-outline',
        degree: '日落',
        color: 'rgba(255,255,255,0.9)',
      },
      {
        key: 120,
        time: '19时',
        icon: 'ios-cloudy-night',
        degree: '18°',
        color: 'rgba(255,255,255,0.8)',
      },
      {
        key: 121,
        time: '20时',
        icon: 'ios-cloudy-night',
        degree: '18°',
        color: 'rgba(255,255,255,0.8)',
      },
      {
        key: 122,
        time: '21时',
        icon: 'ios-cloudy-night',
        degree: '18°',
        color: 'rgba(255,255,255,0.8)',
      },
      {
        key: 123,
        time: '22时',
        icon: 'ios-cloudy-night',
        degree: '17°',
        color: 'rgba(255,255,255,0.8)',
      },
      { key: 124, time: '23时', icon: 'ios-cloudy', degree: '17°', color: 'rgba(255,255,255,0.8)' },
      { key: 125, time: '0时', icon: 'ios-cloudy', degree: '17°', color: 'rgba(255,255,255,0.8)' },
      { key: 126, time: '1时', icon: 'ios-cloudy', degree: '17°', color: 'rgba(255,255,255,0.8)' },
      { key: 127, time: '2时', icon: 'ios-cloudy', degree: '17°', color: 'rgba(255,255,255,0.8)' },
    ],
    days: [
      { key: 21, day: '星期一', icon: 'ios-partly-sunny', high: 21, low: 16 },
      { key: 22, day: '星期二', icon: 'ios-rainy', high: 22, low: 14 },
      { key: 23, day: '星期三', icon: 'ios-rainy', high: 21, low: 11 },
      { key: 24, day: '星期四', icon: 'ios-rainy', high: 12, low: 8 },
      { key: 25, day: '星期五', icon: 'ios-rainy', high: 9, low: 7 },
      { key: 26, day: '星期六', icon: 'ios-partly-sunny', high: 13, low: 9 },
      { key: 27, day: '星期日', icon: 'ios-rainy', high: 17, low: 13 },
      { key: 28, day: '星期一', icon: 'ios-partly-sunny', high: 18, low: 14 },
      { key: 29, day: '星期二', icon: 'ios-partly-sunny', high: 22, low: 17 },
    ],
    info: '今天：今天大部多云。现在气温 15°；最高气温23°。',
    rise: '06:21',
    down: '18:06',
    prop: '10%',
    humi: '94%',
    dir: '东北偏北',
    speed: '3千米／小时',
    feel: '15°',
    rain: '0.0 厘米',
    pres: '1,016 百帕',
    sight: '5.0 公里',
    uv: '0',
  },
  {
    key: 1,
    city: '卡尔加里',
    night: false,
    abs: '大部晴朗',
    degree: 15,
    today: { week: '星期六', day: '今天', high: 16, low: 14 },
    hours: [
      { key: 101, time: '现在', icon: 'ios-moon', degree: '15°', color: 'rgba(255,255,255,1)' },
      {
        key: 102,
        time: '3时',
        icon: 'ios-cloudy-night',
        degree: '15°',
        color: 'rgba(255,255,255,0.8)',
      },
      {
        key: 103,
        time: '4时',
        icon: 'ios-cloudy-night',
        degree: '16°',
        color: 'rgba(255,255,255,0.8)',
      },
      {
        key: 104,
        time: '5时',
        icon: 'ios-cloudy-night',
        degree: '16°',
        color: 'rgba(255,255,255,0.8)',
      },
      {
        key: 105,
        time: '6时',
        icon: 'ios-cloudy-night',
        degree: '16°',
        color: 'rgba(255,255,255,0.8)',
      },
      { key: 106, time: '06:21', icon: 'ios-sunny-outline', degree: '日出', color: '#fedf32' },
      {
        key: 107,
        time: '7时',
        icon: 'ios-partly-sunny',
        degree: '16°',
        color: 'rgba(255,255,255,0.9)',
      },
      {
        key: 108,
        time: '8时',
        icon: 'ios-partly-sunny',
        degree: '18°',
        color: 'rgba(255,255,255,0.9)',
      },
      { key: 109, time: '9时', icon: 'ios-sunny', degree: '19°', color: '#fedf32' },
      { key: 110, time: '10时', icon: 'ios-sunny', degree: '122°', color: '#fedf32' },
      { key: 111, time: '11时', icon: 'ios-sunny', degree: '23°', color: '#fedf32' },
      { key: 112, time: '13时', icon: 'ios-sunny', degree: '22°', color: '#fedf32' },
      { key: 113, time: '13时', icon: 'ios-sunny', degree: '22°', color: '#fedf32' },
      {
        key: 114,
        time: '14时',
        icon: 'ios-partly-sunny',
        degree: '16°',
        color: 'rgba(255,255,255,0.9)',
      },
      {
        key: 115,
        time: '15时',
        icon: 'ios-partly-sunny',
        degree: '22°',
        color: 'rgba(255,255,255,0.9)',
      },
      {
        key: 116,
        time: '16时',
        icon: 'ios-partly-sunny',
        degree: '21°',
        color: 'rgba(255,255,255,0.9)',
      },
      {
        key: 117,
        time: '17时',
        icon: 'ios-partly-sunny',
        degree: '19°',
        color: 'rgba(255,255,255,0.9)',
      },
      {
        key: 118,
        time: '18时',
        icon: 'ios-partly-sunny',
        degree: '18°',
        color: 'rgba(255,255,255,0.9)',
      },
      {
        key: 119,
        time: '18:06',
        icon: 'ios-partly-sunny-outline',
        degree: '日落',
        color: 'rgba(255,255,255,0.9)',
      },
      {
        key: 120,
        time: '19时',
        icon: 'ios-cloudy-night',
        degree: '18°',
        color: 'rgba(255,255,255,0.8)',
      },
      {
        key: 121,
        time: '20时',
        icon: 'ios-cloudy-night',
        degree: '18°',
        color: 'rgba(255,255,255,0.8)',
      },
      {
        key: 122,
        time: '21时',
        icon: 'ios-cloudy-night',
        degree: '18°',
        color: 'rgba(255,255,255,0.8)',
      },
      {
        key: 123,
        time: '22时',
        icon: 'ios-cloudy-night',
        degree: '17°',
        color: 'rgba(255,255,255,0.8)',
      },
      { key: 124, time: '23时', icon: 'ios-cloudy', degree: '17°', color: 'rgba(255,255,255,0.8)' },
      { key: 125, time: '0时', icon: 'ios-cloudy', degree: '17°', color: 'rgba(255,255,255,0.8)' },
      { key: 126, time: '1时', icon: 'ios-cloudy', degree: '17°', color: 'rgba(255,255,255,0.8)' },
      { key: 127, time: '2时', icon: 'ios-cloudy', degree: '17°', color: 'rgba(255,255,255,0.8)' },
    ],
    days: [
      { key: 21, day: '星期一', icon: 'ios-partly-sunny', high: 21, low: 16 },
      { key: 22, day: '星期二', icon: 'ios-rainy', high: 22, low: 14 },
      { key: 23, day: '星期三', icon: 'ios-rainy', high: 21, low: 11 },
      { key: 24, day: '星期四', icon: 'ios-rainy', high: 12, low: 8 },
      { key: 25, day: '星期五', icon: 'ios-rainy', high: 9, low: 7 },
      { key: 26, day: '星期六', icon: 'ios-partly-sunny', high: 13, low: 9 },
      { key: 27, day: '星期日', icon: 'ios-rainy', high: 17, low: 13 },
      { key: 28, day: '星期一', icon: 'ios-partly-sunny', high: 18, low: 14 },
      { key: 29, day: '星期二', icon: 'ios-partly-sunny', high: 22, low: 17 },
    ],
    info: '今天：今天大部多云。现在气温 15°；最高气温23°。',
    rise: '06:21',
    down: '18:06',
    prop: '10%',
    humi: '94%',
    dir: '东北偏北',
    speed: '3千米／小时',
    feel: '15°',
    rain: '0.0 厘米',
    pres: '1,016 百帕',
    sight: '5.0 公里',
    uv: '0',
  },
]

export default class extends Component {
  hoursItem() {
    const hours = [
      { key: 101, time: '现在', icon: 'ios-moon', degree: '15°', color: 'rgba(255,255,255,1)' },
      {
        key: 102,
        time: '3时',
        icon: 'ios-cloudy-night',
        degree: '15°',
        color: 'rgba(255,255,255,0.8)',
      },
      {
        key: 103,
        time: '4时',
        icon: 'ios-cloudy-night',
        degree: '16°',
        color: 'rgba(255,255,255,0.8)',
      },
      {
        key: 104,
        time: '5时',
        icon: 'ios-cloudy-night',
        degree: '16°',
        color: 'rgba(255,255,255,0.8)',
      },
      {
        key: 105,
        time: '6时',
        icon: 'ios-cloudy-night',
        degree: '16°',
        color: 'rgba(255,255,255,0.8)',
      },
      { key: 106, time: '06:21', icon: 'ios-sunny-outline', degree: '日出', color: '#fedf32' },
      {
        key: 107,
        time: '7时',
        icon: 'ios-partly-sunny',
        degree: '16°',
        color: 'rgba(255,255,255,0.9)',
      },
      {
        key: 108,
        time: '8时',
        icon: 'ios-partly-sunny',
        degree: '18°',
        color: 'rgba(255,255,255,0.9)',
      },
      { key: 109, time: '9时', icon: 'ios-sunny', degree: '19°', color: '#fedf32' },
      { key: 110, time: '10时', icon: 'ios-sunny', degree: '122°', color: '#fedf32' },
      { key: 111, time: '11时', icon: 'ios-sunny', degree: '23°', color: '#fedf32' },
      { key: 112, time: '13时', icon: 'ios-sunny', degree: '22°', color: '#fedf32' },
      { key: 113, time: '13时', icon: 'ios-sunny', degree: '22°', color: '#fedf32' },
      {
        key: 114,
        time: '14时',
        icon: 'ios-partly-sunny',
        degree: '16°',
        color: 'rgba(255,255,255,0.9)',
      },
      {
        key: 115,
        time: '15时',
        icon: 'ios-partly-sunny',
        degree: '22°',
        color: 'rgba(255,255,255,0.9)',
      },
      {
        key: 116,
        time: '16时',
        icon: 'ios-partly-sunny',
        degree: '21°',
        color: 'rgba(255,255,255,0.9)',
      },
      {
        key: 117,
        time: '17时',
        icon: 'ios-partly-sunny',
        degree: '19°',
        color: 'rgba(255,255,255,0.9)',
      },
      {
        key: 118,
        time: '18时',
        icon: 'ios-partly-sunny',
        degree: '18°',
        color: 'rgba(255,255,255,0.9)',
      },
      {
        key: 119,
        time: '18:06',
        icon: 'ios-partly-sunny',
        degree: '日落',
        color: 'rgba(255,255,255,0.9)',
      },
      {
        key: 120,
        time: '19时',
        icon: 'ios-cloudy-night',
        degree: '18°',
        color: 'rgba(255,255,255,0.8)',
      },
      {
        key: 121,
        time: '20时',
        icon: 'ios-cloudy-night',
        degree: '18°',
        color: 'rgba(255,255,255,0.8)',
      },
      {
        key: 122,
        time: '21时',
        icon: 'ios-cloudy-night',
        degree: '18°',
        color: 'rgba(255,255,255,0.8)',
      },
      {
        key: 123,
        time: '22时',
        icon: 'ios-cloudy-night',
        degree: '17°',
        color: 'rgba(255,255,255,0.8)',
      },
      { key: 124, time: '23时', icon: 'ios-cloudy', degree: '17°', color: 'rgba(255,255,255,0.8)' },
      { key: 125, time: '0时', icon: 'ios-cloudy', degree: '17°', color: 'rgba(255,255,255,0.8)' },
      { key: 126, time: '1时', icon: 'ios-cloudy', degree: '17°', color: 'rgba(255,255,255,0.8)' },
      { key: 127, time: '2时', icon: 'ios-cloudy', degree: '17°', color: 'rgba(255,255,255,0.8)' },
    ]
    // 遍历
    return hours.map((item, idx) => (
      <View
        key={item.key}
        style={[
          styles.itemStyle,
          idx === 0 ? styles.itemstyleFirst : null,
          idx === hours.length - 1 ? styles.itemstyleLast : null,
        ]}
      >
        <Text style={styles.hourTime}>{item.time}</Text>
        <Icon name={item.icon} size={18} style={[styles.itemIcon, { color: item.color }]} />
        <Text style={styles.hourDegree}>{item.degree}</Text>
      </View>
    ))
  }

  daysItem() {
    const days = [
      { key: 21, day: '星期一', icon: 'ios-partly-sunny', high: 21, low: 16 },
      { key: 22, day: '星期二', icon: 'ios-rainy', high: 22, low: 14 },
      { key: 23, day: '星期三', icon: 'ios-rainy', high: 21, low: 11 },
      { key: 24, day: '星期四', icon: 'ios-rainy', high: 12, low: 8 },
      { key: 25, day: '星期五', icon: 'ios-rainy', high: 9, low: 7 },
      { key: 26, day: '星期六', icon: 'ios-partly-sunny', high: 13, low: 9 },
      { key: 27, day: '星期日', icon: 'ios-rainy', high: 17, low: 13 },
      { key: 28, day: '星期一', icon: 'ios-partly-sunny', high: 18, low: 14 },
      { key: 29, day: '星期二', icon: 'ios-partly-sunny', high: 22, low: 17 },
    ]

    return days.map(item => (
      <View style={styles.daysItem} key={item.key}>
        <Text style={styles.daysItemDay}>{item.day}</Text>
        <Icon size={18} name={item.icon} style={[styles.daysItemIcon, { color: '#fff' }]} />
        <View style={styles.daysItemDegree}>
          <Text style={styles.daysItemDegreeHigh}>{item.high}</Text>
          <Text style={styles.daysItemDegreeLow}>{item.low}</Text>
        </View>
      </View>
    ))
  }

  render() {
    console.log(JSON.stringify(weatherData))
    return (
      <View style={styles.wrapper}>
        <Swiper>
          <View style={styles.slide1}>
            {/* top */}
            <View style={styles.top}>
              <Text style={styles.cityName}>北京</Text>
              <Text style={styles.abs}>大部晴朗</Text>
              <Text style={styles.degree}>15</Text>
              <Text style={styles.dot}>°</Text>
            </View>

            {/* center */}
            <View style={styles.centerWrapper}>
              <View style={styles.today}>
                <View style={styles.todayLeft}>
                  <Text style={styles.todayWeek}>星期六</Text>
                  <Text style={styles.todayDay}>今天</Text>
                </View>

                <View style={styles.todayRight}>
                  <Text style={styles.todayHigh}>16</Text>
                  <Text style={styles.todayLow}>14</Text>
                </View>
              </View>

              <ScrollView horizontal={true} style={styles.scrollview}>
                {this.hoursItem()}
              </ScrollView>

              {/* days */}
              <View style={styles.daysWrapper}>{this.daysItem()}</View>

              {/* todays desc */}
              <View>
                
              </View>
            </View>
          </View>
          <View style={styles.slide2}>
            <Text style={styles.text}>Beautiful</Text>
          </View>
        </Swiper>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },

  slide1: {
    flex: 1,
    backgroundColor: '#9DD6EB',
  },

  // 顶部展示
  top: {
    paddingTop: 70,
    alignItems: 'center',
  },
  cityName: {
    fontSize: 25,
    color: '#fff',
    paddingBottom: 5,
  },
  abs: {
    fontSize: 15,
    color: '#fff',
  },
  degree: {
    fontSize: 85,
    color: '#fff',
    fontWeight: '100',
  },
  dot: {
    fontSize: 40,
    color: '#fff',
    position: 'absolute',
    top: 130,
    right: utils.size.width / 2 - 55,
  },

  // center
  centerWrapper: {
    paddingLeft: 20,
    paddingRight: 20,
  },

  today: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  todayLeft: {
    flexDirection: 'row',
  },
  todayRight: {
    flexDirection: 'row',
  },

  todayWeek: {
    marginRight: 5,
    color: '#fff',
    fontSize: 18,
  },
  todayDay: {
    color: '#fff',
    fontSize: 18,
  },

  todayHigh: {
    marginRight: 5,
    color: '#fff',
    fontSize: 18,
  },
  todayLow: {
    color: '#eee',
    fontSize: 18,
  },

  // scrollview
  scrollview: {
    marginLeft: -20,
    marginRight: -20,
    marginTop: 5,
    borderColor: '#ddd',
    borderWidth: 1,
    borderLeftWidth: 0,
    borderRightColor: 0,
    paddingTop: 5,
    paddingBottom: 5,
  },

  itemStyle: {
    paddingRight: 5,
    paddingLeft: 5,

    alignItems: 'center',
    // width: 1000,
    // height: 100,
  },

  itemstyleFirst: {
    paddingLeft: 20,
  },

  itemstyleLast: {
    paddingRight: 20,
  },

  hourTime: {
    color: '#fff',
  },

  itemIcon: {
    marginTop: 5,
    marginBottom: 5,
  },

  hourDegree: {
    color: '#fff',
  },

  // days
  daysWrapper: {
    marginTop: 5,
    marginBottom: 5,
  },

  daysItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',

    paddingTop: 3,
    paddingBottom: 3,
  },
  daysItemDay: {
    color: '#fff',
    fontSize: 18,
    flex: 1,
  },
  daysItemIcon: {
    flex: 1,
    textAlign: 'center',
  },
  daysItemDegree: {
    justifyContent: 'flex-end',
    alignItems: 'center',

    flexDirection: 'row',
    flex: 1,
  },

  daysItemDegreeHigh: {
    color: '#fff',
    fontSize: 18,
    width: 35,
    textAlign: 'right',
  },
  daysItemDegreeLow: {
    fontSize: 18,
    color: '#eee',
    textAlign: 'right',
    width: 35,
  },

  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#01024e',
  },

  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
})
