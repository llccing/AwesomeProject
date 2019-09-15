import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

// https://github.com/ptomasroos/react-native-scrollable-tab-view/blob/master/Example/FacebookTabBar.js
export default class extends Component {
  icons = []

  constructor(props) {
    super(props)
    this.icons = []
  }

  componentDidMount() {
    // 不理解，这句话的意思。
    // this._listener = this.props.scrollValue.addListener()
  }

  setAnimationValue({ value }) {
    this.icons.forEach((icon, i) => {
      const progress = value - i >= 0 && value - 1 <= 1 ? value - i : 1
      icon.setNativeProps({
        style: {
          color: this.iconColor(progress),
        },
      })
    })
  }

  iconColor(progress) {
    const red = 59 + (204 - 59) * progress
    const green = 89 + (204 - 89) * progress
    const blue = 152 + (204 - 152) * progress
    return `rgb(${red}, ${green}, ${blue})`
  }

  render() {
    return (
      <View style={[styles.tabs, this.props.style]}>
        {this.props.tabs.map((tab, i) => (
          <TouchableOpacity
            key={tab.icon}
            onPress={() => this.props.goToPage(i)}
            style={styles.tab}
          >
            <Icon
              name={tab.icon}
              size={20}
              color={this.props.activeTab === i ? '#1da1f2' : 'rgb(204,204,204)'}
              ref={icon => {
                this.icons[i] = icon
              }}
            />
            <Text style={{ color: this.props.activeTab === i ? '#1da1f2' : 'rgb(204,204,204)' }}>
              {tab.title}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  tabs: {
    height: 45,
    flexDirection: 'row',
    paddingTop: 5,
    borderWidth: 1,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderBottomColor: 'rgba(0,0,0,0.05)',
  },

  tab: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 10,
  },
})
