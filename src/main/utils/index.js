import React from 'react'
import { PixelRatio } from 'react-native'
import Dimensions from 'Dimensions'

const Utils = {
    ratio: PixelRatio.get(),
    pixel: 1/PixelRatio.get(),
    size: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    }
}


export default Utils