import React from 'react';
import { ImageBackground, Image, ActivityIndicator } from 'react-native';
import { appInfor } from '../constains/appInfos'; // Fixed typo in "constains" to "constants"
import { SpaceComponent } from '../components'; // Fixed typo in "constains" to "constants"
import { appColors } from '../constains/appColor';

const SplashScreen = () => {
  return (
      <ImageBackground
          source={require('../assets/images/splash-image.png')}
          style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
          }}
          imageStyle={{ flex: 1 }}>
          <Image
              source={require('../assets/images/logo.png')}
              style={{
                  width: appInfor.sizes.WIDTH * 0.6,
                  resizeMode: 'contain',
              }}
          />
          <SpaceComponent height={20} />
          <ActivityIndicator color={appColors.grayColor} size={22} />
      </ImageBackground>
  );
};

export default SplashScreen;