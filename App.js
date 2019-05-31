/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import Home from './src/main/'
import Navigation from './src/demo/react-navigation/'

const demos = [
  Navigation,
]

const isProd = true

export default isProd ? Home : demos[0]
