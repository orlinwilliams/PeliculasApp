import React from 'react';
import {View, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const GradientBackground = ({children}: Props) => {
  return (
    <LinearGradient
      colors={['#5a5bf3', '#edaef9', '#81b1fa','white']}
      style={{flex: 1}}
      start={{x:0.1, y:0.1}}
      >
      {children}
    </LinearGradient>
  );
};
