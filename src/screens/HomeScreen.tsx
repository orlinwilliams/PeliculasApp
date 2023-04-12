import {StackScreenProps} from '@react-navigation/stack';
import React, {useContext, useEffect} from 'react';
import {View, Dimensions, ScrollView} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';
import Loading from '../components/Loading';
import MovieImage from '../components/MovieImage';
import {useMovies} from '../hooks/useMovies';
import {HorizontalSlider} from '../components/HorizontalSlider';
import {GradientBackground} from '../components/GradientBackground';
import {getColors} from '../helpers/getColors';
import {GradientContext} from '../contexts/ColorContext';

const {width: windowWidth} = Dimensions.get('window');

export const HomeScreen = () => {
  const {top} = useSafeAreaInsets();
  const {nowPlaying, popular, toRated, upcoming, loading} = useMovies();
  const {setColorMain} = useContext(GradientContext);

  const getPosterColors = async (index: number) => {
    const uri = `https://image.tmdb.org/t/p/w500${nowPlaying[index].poster_path}`;
    const [primary = 'green', secondary = 'blue'] = await getColors(uri);

    setColorMain({
      primary,
      secondary,
    });    
  };

  useEffect(() => {
    if(nowPlaying.length > 0) {
      getPosterColors(0);
      
    }
  }, [nowPlaying]);

  if (loading) {
    return <Loading />;
  }

  return (
    <GradientBackground >
      <ScrollView>
        <View style={{marginTop: top + 10}}>
          <View
            style={{
              height: 440,
            }}>
            <Carousel
              data={nowPlaying}
              renderItem={({item}) => <MovieImage movie={item} />}
              sliderWidth={windowWidth}
              itemWidth={300}
              onSnapToItem={index => getPosterColors(index)}
            />
          </View>
        </View>

        <HorizontalSlider data={popular} title="Populares" />
        <HorizontalSlider data={toRated} title="Top Rated" />
        <HorizontalSlider data={upcoming} title="Upcoming" />
      </ScrollView>
    </GradientBackground>
  );
};
