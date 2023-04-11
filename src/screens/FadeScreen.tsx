import React, {useRef} from 'react';
import {
  View,
  StyleSheet,
  Animated,
  Text,
  Button,
  SafeAreaView,
} from 'react-native';
import {useFade} from '../hooks/useFade';
import {GradientBackground} from '../components/GradientBackground';

export const FadeScreen = () => {
  const {opacity, fadeIn, fadeOut} = useFade();

  return (
    <GradientBackground>
      <SafeAreaView style={styles.container}>
        <Animated.View style={{...styles.containerChildren, opacity}}>
          <Text style={{color: 'white'}}>Hello</Text>
        </Animated.View>

        <Button title="Fade In View" onPress={fadeIn} />
        <Button title="Fade Out View" onPress={fadeOut} />
      </SafeAreaView>
    </GradientBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerChildren: {
    height: 300,
    width: 300,
    backgroundColor: 'black',
  },
});
