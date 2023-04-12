import {useRef} from 'react';
import {Animated} from 'react-native';

export const useFade = () => {
  const opacity = useRef(new Animated.Value(0)).current;

  const fadeIn = (callback?:Function) => {
    // Will change opacity value to 1 in 5 seconds
    Animated.timing(opacity, {
      toValue: 1,
      duration: 200,
      useNativeDriver: true,
    }).start( () => callback ? callback() : null);
  };

  const fadeOut = () => {
    // Will change opacity value to 0 in 3 seconds
    Animated.timing(opacity, {
      toValue: 0,
      duration: 100,
      useNativeDriver: true,
    }).start();
  };
  return {
    fadeIn,
    fadeOut,
    opacity,
  };
};
