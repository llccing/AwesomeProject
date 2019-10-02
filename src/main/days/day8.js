import React, { Component } from 'react'
import { View, Text, Image, Button, StyleSheet, ScrollView } from 'react-native'
import {
  createDrawerNavigator,
  createAppContainer,
  SafeAreaView,
  DrawerItems,
} from 'react-navigation'
import Icon from 'react-native-vector-icons/Ionicons'

import Day5 from './day5'

// https://itnext.io/the-intricacies-of-nesting-navigators-in-react-native-using-react-navigation-fef52ca72964

const customDrawerContentComponent = props => (
  <ScrollView>
    <SafeAreaView style={styles.DrawerItemsContainer} forceInset={{ horizontal: 'never' }}>
      <View style={styles.header}>
        <Image
          style={styles.img}
          resizeMode="contain"
          source={require('../../static/image/llccing.jpeg')}
        />
        <View style={styles.name}>
          <Text style={styles.nameText}>llccing</Text>
        </View>
        <View style={styles.email}>
          <Text style={styles.emailText}>lcf33123@foxmail.com</Text>
        </View>
      </View>
      <DrawerItems {...props} />
    </SafeAreaView>
  </ScrollView>
)

const myDrawerNavigator = createDrawerNavigator(
  {
    YourAddress: {
      screen: Day5,
      navigationOptions: {
        title: '你的地点',
        drawerIcon: ({ tintColor }) => (
          <View style={{ color: tintColor }}>
            <Icon name={'ios-locate'} size={20} />
          </View>
        ),
      },
    },

    YourContribution: {
      screen: Day5,
      navigationOptions: {
        title: '你的贡献',
        drawerIcon: ({ tintColor }) => (
          <View style={{ color: tintColor }}>
            <Icon name={'ios-paper-plane'} size={20} />
          </View>
        ),
      },
    },

    offLine: {
      screen: Day5,
      navigationOptions: {
        title: '离线区域',
        drawerIcon: ({ tintColor }) => (
          <View style={{ color: tintColor }}>
            <Icon name={'ios-pulse'} size={20} />
          </View>
        ),
      },
    },

    RealTimeTraffic: {
      screen: Day5,
      navigationOptions: {
        title: '实时路况',
        drawerIcon: ({ tintColor }) => (
          <View style={{ color: tintColor }}>
            <Icon name={'ios-radio'} size={20} />
          </View>
        ),
      },
    },

    bus: {
      screen: Day5,
      navigationOptions: {
        title: '公交线路',
        drawerIcon: ({ tintColor }) => (
          <View style={{ color: tintColor }}>
            <Icon name={'ios-bus'} size={20} />
          </View>
        ),
      },
    },

    bycicle: {
      screen: Day5,
      navigationOptions: {
        title: '骑车线路',
        drawerIcon: ({ tintColor }) => (
          <View style={{ color: tintColor }}>
            <Icon name={'ios-football'} size={20} />
          </View>
        ),
      },
    },

    SatelliteImage: {
      screen: Day5,
      navigationOptions: {
        title: '卫星图像',
        drawerIcon: ({ tintColor }) => (
          <View style={{ color: tintColor }}>
            <Icon name={'ios-flame'} size={20} />
          </View>
        ),
      },
    },

    terrain: {
      screen: Day5,
      navigationOptions: {
        title: '地形',
        drawerIcon: ({ tintColor }) => (
          <View style={{ color: tintColor }}>
            <Icon name={'ios-globe'} size={20} />
          </View>
        ),
      },
    },
  },
  {
    drawerType: 'slide',
    contentComponent: customDrawerContentComponent,
  },
)

export default myDrawerNavigator

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  DrawerItemsContainer: {
    flex: 1,
  },
  header: {
    padding: 10,
    backgroundColor: '#364f6b',
  },

  img: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },

  name: {
    marginTop: 10,
  },
  nameText: {
    fontSize: 14,
    color: '#fff',
  },
  email: {
    textAlign: 'right',
    marginTop: 5,
  },
  emailText: {
    fontSize: 14,
    color: '#fff',
  },
})
