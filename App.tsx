import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Navigation } from './src/navigator/Navigation';
import { FadeScreen } from './src/screens/FadeScreen';
import { GradientProvider } from './src/contexts/ColorContext';

const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        <Navigation />
      </AppState>
      {/* <FadeScreen /> */}
    </NavigationContainer>
  )
};

const AppState = ({children}: any) => {
  return (<GradientProvider>
    {children}
  </GradientProvider>)
}

export default App;
