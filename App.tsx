import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SplashScreen } from './src/screens';
import AuthNavigator from './src/navigators/AuthNavigator';
import { NavigationContainer } from '@react-navigation/native';

const App = () => {
  const [isShowSplash, setIsShowSpalsh] = useState(true);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setIsShowSpalsh(false);
    }, 1500);

    return () => clearTimeout(timeOut);
  }, []);
  return (
    isShowSplash ? (
      <SplashScreen />
    ) : (
      <NavigationContainer>
       <AuthNavigator />
      </NavigationContainer>
    )
  );
  
}

export default App