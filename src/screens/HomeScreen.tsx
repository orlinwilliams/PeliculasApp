import { StackScreenProps } from '@react-navigation/stack';
import React, {useEffect} from 'react';
import {View, Text, Button} from 'react-native';
import movieDB from '../api/MovieDB';
import { MovieDBNowPlaying } from '../interfaces/movieInterface';

interface Props extends StackScreenProps<any, any> {}
export const HomeScreen = ({navigation}:Props) => {

  useEffect(() => {
    movieDB.get<MovieDBNowPlaying>('/now_playing').then(res => {
      console.log(res.data.results[0].title);
    });
  }, []);

  return (
    <View>
      <Text>Home</Text>
      <Button title='Detail' onPress={()=>{navigation.navigate("Detail");}} />
    </View>
  );
};
