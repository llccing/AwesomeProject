import React, { Component } from 'react'
import { View, Button, Text, StyleSheet, ScrollView } from 'react-native'
import Swiper from 'react-native-swiper'
import Icon from 'react-native-vector-icons/Ionicons'
import utils from '../utils'
import weatherData from './mock/weatherData'

export default class extends Component {
  render() {
    console.log(JSON.stringify(weatherData))

    const slides = weatherData.map(itemData => {

      const daysItem = itemData.days.map(item => (
        <View style={styles.daysItem} key={item.key}>
          <Text style={styles.daysItemDay}>{item.day}</Text>
          <Icon size={18} name={item.icon} style={[styles.daysItemIcon, { color: '#fff' }]} />
          <View style={styles.daysItemDegree}>
            <Text style={styles.daysItemDegreeHigh}>{item.high}</Text>
            <Text style={styles.daysItemDegreeLow}>{item.low}</Text>
          </View>
        </View>
      ))

      const hoursItem = itemData.hours.map((item, idx) => (
        <View
          key={item.key}
          style={[
            styles.itemStyle,
            idx === 0 ? styles.itemstyleFirst : null,
            idx === itemData.hours.length - 1 ? styles.itemstyleLast : null,
          ]}
        >
          <Text style={styles.hourTime}>{item.time}</Text>
          <Icon name={item.icon} size={18} style={[styles.itemIcon, { color: item.color }]} />
          <Text style={styles.hourDegree}>{item.degree}</Text>
        </View>
      ))

      return (
        <View key={itemData.key} style={styles.slideWrap}>
          <ScrollView style={styles.pageCon}>
            <View style={itemData.night ? styles.slide2 : styles.slide1}>
              {/* top */}
              <View style={styles.top}>
                <Text style={styles.cityName}>{itemData.city}</Text>
                <Text style={styles.abs}>{itemData.abs}</Text>
                <Text style={styles.degree}>{itemData.degree}</Text>
                <Text style={styles.dot}>°</Text>
              </View>

              {/* center */}
              <View style={styles.centerWrapper}>
                <View style={styles.today}>
                  <View style={styles.todayLeft}>
                    <Text style={styles.todayWeek}>{itemData.today.week}</Text>
                    <Text style={styles.todayDay}>{itemData.today.day}</Text>
                  </View>

                  <View style={styles.todayRight}>
                    <Text style={styles.todayHigh}>{itemData.today.high}</Text>
                    <Text style={styles.todayLow}>{itemData.today.low}</Text>
                  </View>
                </View>

                <ScrollView
                  showsHorizontalScrollIndicator={false}
                  horizontal={true}
                  style={styles.scrollview}
                >
                  {hoursItem}
                </ScrollView>

                {/* days */}
                <View style={styles.daysWrapper}>{daysItem}</View>

                {/* todays desc */}
                <View style={styles.todayDesc}>
                  <Text
                    style={styles.todayDescText}
                  >{itemData.info}</Text>
                </View>

                {/* other */}
                <View style={styles.weatherOther}>
                  <View style={styles.weatherOtherSection}>
                    <View style={styles.weatherOtherLine}>
                      <Text style={styles.weatherOtherTitle}>日出：</Text>
                      <Text style={styles.weatherOtherValue}>{itemData.rise}</Text>
                    </View>
                    <View style={styles.weatherOtherLine}>
                      <Text style={styles.weatherOtherTitle}>日落：</Text>
                      <Text style={styles.weatherOtherValue}>{itemData.down}</Text>
                    </View>
                  </View>
                  <View style={styles.weatherOtherSection}>
                    <View style={styles.weatherOtherLine}>
                      <Text style={styles.weatherOtherTitle}>降雨概率：</Text>
                      <Text style={styles.weatherOtherValue}>{itemData.prop}</Text>
                    </View>
                    <View style={styles.weatherOtherLine}>
                      <Text style={styles.weatherOtherTitle}>湿度：</Text>
                      <Text style={styles.weatherOtherValue}>{itemData.humi}</Text>
                    </View>
                  </View>
                  <View style={styles.weatherOtherSection}>
                    <View style={styles.weatherOtherLine}>
                      <Text style={styles.weatherOtherTitle}>风速：</Text>
                      <Text style={styles.weatherOtherValue}>
                        <Text style={{ fontSize: 10 }}>{itemData.dir}</Text>
                        {itemData.speed}
                      </Text>
                    </View>
                    <View style={styles.weatherOtherLine}>
                      <Text style={styles.weatherOtherTitle}>体感温度：</Text>
                      <Text style={styles.weatherOtherValue}>{itemData.feel}</Text>
                    </View>
                  </View>
                  <View style={styles.weatherOtherSection}>
                    <View style={styles.weatherOtherLine}>
                      <Text style={styles.weatherOtherTitle}>降水量：</Text>
                      <Text style={styles.weatherOtherValue}>{itemData.rain}</Text>
                    </View>
                    <View style={styles.weatherOtherLine}>
                      <Text style={styles.weatherOtherTitle}>气压：</Text>
                      <Text style={styles.weatherOtherValue}>{itemData.pres}</Text>
                    </View>
                  </View>
                  <View style={styles.weatherOtherSection}>
                    <View style={styles.weatherOtherLine}>
                      <Text style={styles.weatherOtherTitle}>能见度：</Text>
                      <Text style={styles.weatherOtherValue}>{itemData.sight}</Text>
                    </View>
                    <View style={styles.weatherOtherLine}>
                      <Text style={styles.weatherOtherTitle}>紫外线指数：</Text>
                      <Text style={styles.weatherOtherValue}>{itemData.uv}</Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
      )
    })

    return (
      <View style={styles.wrapper}>
        <Swiper style={styles.swiper}>{slides}</Swiper>
      </View>
    )
  }
}

const fontSizeBasic = 15

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  slideWrap: {
    flex: 1,
  },

  pageCon: {
    flex: 1,
  },

  slide1: {
    // flex: 1,
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
    marginTop: 100,
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
    fontSize: fontSizeBasic,
  },
  todayDay: {
    color: '#fff',
    fontSize: fontSizeBasic,
  },

  todayHigh: {
    marginRight: 5,
    color: '#fff',
    fontSize: fontSizeBasic,
  },
  todayLow: {
    color: '#eee',
    fontSize: fontSizeBasic,
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
    fontSize: fontSizeBasic,
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
    fontSize: fontSizeBasic,
    width: 35,
    textAlign: 'right',
  },
  daysItemDegreeLow: {
    fontSize: fontSizeBasic,
    color: '#eee',
    textAlign: 'right',
    width: 35,
  },

  // today desc
  todayDesc: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRightWidth: 0,
    borderLeftWidth: 0,
    paddingTop: 5,
    paddingBottom: 5,
  },

  todayDescText: {
    fontSize: fontSizeBasic,
    color: '#fff',
  },

  // other

  weatherOtherLine: {
    flexDirection: 'row',
    marginTop: 5,
    marginBottom: 5,
  },

  weatherOtherTitle: {
    flex: 1,
    textAlign: 'right',
    marginRight: 5,

    fontSize: fontSizeBasic,
    color: '#fff',
  },

  weatherOtherValue: {
    flex: 1,
    marginLeft: 5,

    fontSize: fontSizeBasic,
    color: '#fff',
  },

  slide2: {
    backgroundColor: '#01024e',
  },

  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
})
