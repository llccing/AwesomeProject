import React, { Component } from 'react'
import {
  View,
  Text,
  Image,
  StyleSheet,
  Animated,
  Easing,
  TouchableHighlight,
  ScrollView,
  RefreshControl,
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons'
import PropTypes from 'prop-types'
import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view'
import TabBar from './TabBar'
import utils from '../../utils'

// 启动页
class InitPage extends Component {
  static propTypes = {
    hide: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props)
    this.state = {
      fadeInOpacity: new Animated.Value(1),
      scale: new Animated.Value(1),
    }
  }

  // 执行过渡动画
  _execAnimated() {
    Animated.timing(this.state.fadeInOpacity, {
      // 目标值
      toValue: 0,
      // 动画时间
      duration: 1000,
      // 表示缓动函数
      easing: Easing.linear,
      delay: 2000,
    }).start()

    Animated.timing(this.state.scale, {
      // 目标值
      toValue: 12,
      // 动画时间
      duration: 1000,
      // 表示缓动函数
      easing: Easing.linear,
      delay: 2200,
    }).start()

    /**
     * 停止两秒后，只有一个动画生效。
     * https://www.jianshu.com/p/2532c0e99c85
     *
     * alloyTeam 详解RN 动画
     * http://www.alloyteam.com/2016/01/reactnative-animated/
     */

    // Animated.sequence([
    //   Animated.delay(2000),

    //   Animated.timing(this.state.fadeInOpacity, {
    //     // 目标值
    //     toValue: 0,
    //     // 动画时间
    //     duration: 1000,
    //     // 表示缓动函数
    //     easing: Easing.linear,
    //   }),

    //   Animated.timing(this.state.scale, {
    //     // 目标值
    //     toValue: 12,
    //     // 动画时间
    //     duration: 1000,
    //     // 表示缓动函数
    //     easing: Easing.linear,
    //   }),
    // ]).start()
  }

  componentDidMount() {
    this._execAnimated()
    setTimeout(() => {
      this.props.hide()
    }, 3000)
  }
  render() {
    const { fadeInOpacity, scale } = this.state

    return (
      <Animated.View
        style={[styles.initContainer, { opacity: fadeInOpacity, transform: [{ scale }] }]}
      >
        <Icon name={'logo-twitter'} size={85} style={styles.twitterColor} />
      </Animated.View>
    )
  }
}

class MainPage extends Component {
  clickTime = 0

  static PropTypes = {
    navigate: PropTypes.func
  }

  constructor(props) {
    super(props)

    this.state = {
      isRefreshing: false,
    }
  }

  _onRefresh() {
    this.setState({
      isRefreshing: true,
    })

    setTimeout(() => {
      this.setState({
        isRefreshing: false,
      })
    }, 2000)
  }

  _addCilck() {
    this.clickTime++

    // 增加一个有趣的返回。
    if (this.clickTime > 1) {
      this.props.navigate('Home')
    }
  }

  componentWillUnmount() {
    this.clickTime = 0
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.top}>
          <View>
            <Icon
              onPress={() => this._addCilck()}
              name={'ios-person-add'}
              size={25}
              style={styles.topIcon}
            />
          </View>
          <View>
            <Icon name={'logo-twitter'} size={25} style={styles.topIcon} />
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Icon name={'md-search'} size={25} style={[styles.topIcon, { marginRight: 5 }]} />
            <IconMaterial name={'square-edit-outline'} size={25} style={styles.topIcon} />
          </View>
        </View>

        <ScrollableTabView
          style={styles.scrollTabView}
          tabBarPosition={'bottom'}
          initialPage={0}
          renderTabBar={() => <TabBar />}
        >
          <ScrollView
            tabLabel={{ icon: 'ios-home', title: '主页' }}
            style={styles.tabView}
            refreshControl={
              <RefreshControl
                refreshing={this.state.isRefreshing}
                tintColor="gray"
                title="正在刷新"
                onRefresh={() => this._onRefresh}
              />
            }
          >
            <View style={{ flex: 1 }}>
              <Image
                resizeMode="contain"
                style={{ width: utils.size.width - 30, height: utils.size.height - 200 }}
                source={require('../img/day3.png')}
              />
            </View>
          </ScrollView>
          <ScrollView
            tabLabel={{ icon: 'md-notifications-outline', title: '通知' }}
            style={styles.tabView}
          >
            <View style={styles.card}>
              <Text>222</Text>
            </View>
          </ScrollView>
          <ScrollView tabLabel={{ icon: 'md-mail', title: '私信' }} style={styles.tabView}>
            <View style={styles.card}>
              <Text>333</Text>
            </View>
          </ScrollView>
          <ScrollView tabLabel={{ icon: 'md-person', title: '我' }} style={styles.tabView}>
            <View style={styles.card}>
              <Text>4</Text>
            </View>
          </ScrollView>
        </ScrollableTabView>
      </View>
    )
  }
}

export default class extends Component {
  constructor(props) {
    super(props)

    this.state = {
      initPageShow: true,
    }
  }

  _hideInitPage() {
    this.setState({
      initPageShow: false,
    })

    console.log(this.props)
  }

  _navigate(name) {
    this.props.navigation.navigate(name)
  }

  render() {
    return (
      <View style={styles.wrapper}>
        {this.state.initPageShow ? (
          <InitPage hide={() => this._hideInitPage()} />
        ) : (
          <MainPage navigate={(name) => this._navigate(name)} />
        )}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  initContainer: {
    flex: 1,
    backgroundColor: '#1da1f2',
    /**
     * 对于默认 flexDirection = 'column', alignItems='center' 是处理水平居中
     * 而对于 flexDirection = 'row', 也就是一般pc页面， alignItems='center'是垂直居中
     */
    alignItems: 'center',
    justifyContent: 'center',
    // transform: [{ scale: 0 }],
  },
  twitterColor: {
    color: '#fff',
  },

  top: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,

    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },

  topIcon: {
    color: '#1da1f2',
  },

  // scrollableTabView
  scrollTabView: {
    flex: 1,
  },

  scrollItem: {
    borderWidth: 1,
    borderColor: 'blue',
  },

  tabView: {
    flex: 1,
    padding: 10,
    backgroundColor: 'rgba(0,0,0,0.01)',
  },

  card: {
    borderWidth: 1,
    backgroundColor: '#fff',
    borderColor: 'rgba(0,0,0,0.1)',
    margin: 5,
    flex: 1,
    padding: 15,
    shadowColor: '#ccc',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
  },
})
