/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react'
import { Text, View, Image, StyleSheet, FlatList } from 'react-native'

var MOCKED_MOVIES_LIST = [
  {
    title: '复仇者4',
    year: '2019',
    poster: {
      uri: 'http://qiniu.llccing.cn/cssWorld/test/img01.png',
    },
  },
]

var url2 = 'http://qiniu.llccing.cn/cssWorld/test/img01.png';

var REQUEST_URL =
  'https://raw.githubusercontent.com/facebook/react-native/0.51-stable/docs/MoviesExample.json'

type Props = {}
export default class HelloWorldApp extends Component<Props> {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      loaded: false,
    }
    this.fetchData = this.fetchData.bind(this)
  }

  componentDidMount() {
    this.fetchData()
  }

  fetchData() {
    fetch(REQUEST_URL)
      .then(resp => resp.json())
      .then(data => {
        this.setState({
          data: this.state.data.concat(data.movies),
          loaded: true
        })
        console.log(data)
      })
  }

  renderLoadingView() {
    return (
      <View style={styles.container}>
        <Text>正在加载电影数据……</Text>
      </View>
    )
  }

  renderMovie(data) {
    let movie = data.item;
    return (
      <View style={styles.container}>
        {/* <Image source={{ uri: url2 }} style={styles.img} /> */}
        <Image source={{ uri: movie.posters.profile }} style={styles.img} />
        <View style={styles.rightContainer}>
          <Text style={styles.title}>{movie.title}</Text>
          <Text style={styles.year}>{movie.year}</Text>
        </View>
      </View>
    )
  }

  render() {
    if (!this.state.data) {
      return this.renderLoadingView()
    }

    return (
      <FlatList
        data={this.state.data}
        renderItem={this.renderMovie}
        keyExtractor={item=>item.id}
      />
    )
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee'
  },
  img: {
    width: 120,
    height: 190,
    borderWidth: 1,
  },
  rightContainer: {
    flex: 1,
    // backgroundColor: '#f00',
    textAlign: 'center',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 8,
  },
  year: {
    textAlign: 'center',
  },
})
