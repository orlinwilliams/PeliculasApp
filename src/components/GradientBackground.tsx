import React, {useContext, useEffect} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {GradientContext} from '../contexts/ColorContext';
import {View, Animated, StyleSheet} from 'react-native';
import { useFade } from '../hooks/useFade';

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const GradientBackground = ({children}: Props) => {
  const {color, prevColor, setPrevColorMain} = useContext(GradientContext);
  const {opacity, fadeIn, fadeOut} = useFade();

  useEffect(() => {
    fadeIn(()=>{
      setPrevColorMain(color);
      fadeOut();
    });

  }, [color])
  
  return (
    <View style={{flex: 1}}>
      
      <LinearGradient
        colors={[prevColor.primary, prevColor.secondary, 'white']}
        style={{...StyleSheet.absoluteFillObject}}
        start={{x: 0.1, y: 0.1}}
        end={{x: 0.7, y: 0.7}}
      />

      <Animated.View style={{...StyleSheet.absoluteFillObject, opacity}}>
        <LinearGradient
          colors={[color.primary, color.secondary, 'white']}
          style={{...StyleSheet.absoluteFillObject}}
          start={{x: 0.1, y: 0.1}}
          end={{x: 0.7, y: 0.7}}
        />
      </Animated.View>

      {children}
    </View>
  );
};
