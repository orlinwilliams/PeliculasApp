import React from 'react';
import {View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {Movie} from '../interfaces/movieInterface';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/core';


interface Props {
  movie: Movie;
  width?: number;
  height?:number;
}

export type RootStackParamList = {
  Detail: { movie: Movie } | undefined;
};

const MovieImage = ({movie, height = 410, width = 300}: Props) => {
  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;  
  
  const natigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  
  return (
    <TouchableOpacity    
      onPress={ ()=>natigation.navigate('Detail', {movie}) }
    activeOpacity={0.8}
    style={{height,width}}>
      <View style={styles.card}>
        <Image
          source={{
            uri,
          }}
          style={styles.image}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({  
  card: {
    flex:1,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 6,
    marginRight:10
    
  },
  image: {
    flex: 1,
    borderRadius: 15,
  },
});

export default MovieImage;
