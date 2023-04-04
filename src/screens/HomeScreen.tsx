import {StackScreenProps} from '@react-navigation/stack';
import React, {useEffect} from 'react';
import {View, Text, Button} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';
import Loading from '../components/Loading';
import MovieImage from '../components/MovieImage';
import {useMovies} from '../hooks/useMovies';

interface Props extends StackScreenProps<any, any> {}

export const HomeScreen = ({navigation}: Props) => {
  const {top} = useSafeAreaInsets();
  const {peliculasEnCine, loading} = useMovies();

  if(loading){
    return (
      <Loading/>
    )
  }

  return (
    <View style={{marginTop: top + 10}}>
      <Carousel
        data={peliculasEnCine}
        renderItem={ ()=>< MovieImage movie={peliculasEnCine[0]} />}
        sliderWidth={360}
        itemWidth={300}
      />
    </View>
  );
};
