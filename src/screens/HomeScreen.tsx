import { StackScreenProps } from '@react-navigation/stack';
import React, { useEffect } from 'react';
import { View, Dimensions, ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';
import Loading from '../components/Loading';
import MovieImage from '../components/MovieImage';
import { useMovies } from '../hooks/useMovies';
import { HorizontalSlider } from '../components/HorizontalSlider';
import { GradientBackground } from '../components/GradientBackground';

const { width: windowWidth } = Dimensions.get('window');
interface Props extends StackScreenProps<any, any> { }

export const HomeScreen = ({ navigation }: Props) => {

  const { top } = useSafeAreaInsets();
  const { nowPlaying, popular, toRated, upcoming, loading } = useMovies();

  if (loading) {
    return (
      <Loading />
    )
  }

  return (

    <GradientBackground>
    
    <ScrollView>
      <View style={{ marginTop: top + 10 }}>
        <View style={{
          height: 440,
        }}>
          <Carousel
            data={nowPlaying}
            renderItem={({ item }) => < MovieImage movie={item} />}
            sliderWidth={windowWidth}
            itemWidth={300}
          />
        </View>
      </View>
     
      <HorizontalSlider data={popular} title="Populares"/>
      <HorizontalSlider data={toRated} title="Top Rated"/>
      <HorizontalSlider data={upcoming} title="Upcoming"/>

    </ScrollView>
    </GradientBackground>
  );
};
