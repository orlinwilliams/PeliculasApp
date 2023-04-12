import React, { useContext } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { GradientContext } from '../contexts/ColorContext';
import { useFade } from '../hooks/useFade';

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const GradientBackground = ({children}: Props) => {  
  const {color,} = useContext(GradientContext);
  return (
    <LinearGradient
      colors={[color.primary, color.secondary,'white']}
      style={{flex: 1, }}
      start={{x:0.1, y:0.1}}
      end={{x:0.7, y:0.7}}
      >
      {children}
    </LinearGradient>
  );
};
