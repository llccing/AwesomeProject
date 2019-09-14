import React, { Component } from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Dimensions,
  TouchableHighlight,
  Alert,
} from 'react-native'
import { createStackNavigator, createAppContainer } from 'react-navigation'
import Swiper from 'react-native-swiper'
import Icon from 'react-native-vector-icons/Ionicons'
const { width } = Dimensions.get('window')

class Home extends Component {
  constructor() {
    super()
  }
  _onIconPress(item) {
    if (!item.routeName) {
      Alert.alert('提示', '页面还在开发中……')
      return
    }

    this.props.navigation.navigate(item.routeName)
  }
  render() {
    var i = 2
    var elements = [
      {
        title: '计时器',
        routeName: 'Day1',
        icon: 'md-time',
        size: 50,
        style: {
          color: '#b030b0',
        },
      },
      {
        title: '天气预报',
        routeName: 'Day2',
        icon: 'ios-sunny',
        size: 50,
        style: {
          color: '#1089ff',
        },
      },
      {
        title: 'A weather app2',
        icon: 'logo-sass',
        size: 50,
        style: {
          color: '#f00',
        },
      },
      {
        title: 'A weather app3',
        icon: 'logo-sass',
        size: 50,
        style: {
          color: '#f00',
        },
      },
      {
        title: 'A weather app4',
        icon: 'logo-sass',
        size: 50,
        style: {
          color: '#f00',
        },
      },
      {
        title: 'A weather app5',
        icon: 'logo-sass',
        size: 50,
        style: {
          color: '#f00',
        },
      },
    ]

    var Boxs = elements.map(item => {
      return (
        <TouchableHighlight
          key={item.title}
          onPress={this._onIconPress.bind(this, item)}
          underlayColor={'#eee'}
          style={styles.touchItem}
        >
          <View key={item.title} style={styles.boxItem}>
            <Icon name={item.icon} size={item.size} style={[styles.itemImage, item.style]} />
            <Text style={styles.itemTitle}>{item.title}</Text>
          </View>
        </TouchableHighlight>
      )
    })

    let path = '../../static/image/scene/'
    let imageBike = require(`${path}bike.jpg`)
    let imageDog = require(`${path}dog.jpg`)
    let imageGirl = require(`${path}girl.jpg`)
    let imageLove = require(`${path}love.jpg`)
    let imageSouth = require(`${path}south.jpg`)

    return (
      <ScrollView style={styles.container}>
        <Swiper height={150} autoplay={true} showsButtons={false}>
          <View style={styles.slider}>
            <Image style={styles.image} source={imageBike} />
          </View>

          <View style={styles.slider}>
            <Image style={styles.image} source={imageDog} />
          </View>
          <View style={styles.slider}>
            <Image style={styles.image} source={imageGirl} />
          </View>
          <View style={styles.slider}>
            <Image style={styles.image} source={imageLove} />
          </View>
          <View style={styles.slider}>
            <Image style={styles.image} source={imageSouth} />
          </View>
        </Swiper>
        <View style={styles.boxContainer}>{Boxs}</View>
      </ScrollView>
    )
  }
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  boxContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  touchItem: {
    borderWidth: 1,
    borderColor: '#eee',
  },
  boxItem: {
    width: width / 3 - 2,
    height: 100,
  },

  itemImage: {
    textAlign: 'center',
    margin: 10,
  },

  itemTitle: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },

  slider: {
    flex: 1,
  },
  image: {
    flex: 1,
    width,
  },
})
