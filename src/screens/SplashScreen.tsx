import { View, Text, ImageBackground, Image, ViewBase } from 'react-native'
import React from 'react'
import { appInfor } from '../constains/appInfos'


const SplashScreen = () => {
  return (
    <ImageBackground source={require('../assets/images/splash-image.png')} 
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        }}
        imageStyle={{flex: 1}}>
          <Image source={require('../assets/images/logo.png')} 
          style={{
            width: appInfor.sizes.WIDTH * 0.8,
            resizeMode: 'contain'
          }}>
          </Image>
          
    </ImageBackground>
  )
}

export default SplashScreen