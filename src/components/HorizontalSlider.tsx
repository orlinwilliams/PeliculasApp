import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import MovieImage from './MovieImage';
import {Movie} from '../interfaces/movieInterface';

interface Props {
  data: Movie[];
  title: string;
  width?: number;
  height?: number;
}

export const HorizontalSlider = ({
  data,
  title,
  height = 200,
  width = 150,
}: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        data={data}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        renderItem={({item}) => (
          <MovieImage movie={item} height={height} width={width} />
        )}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
    color: 'black',
  },
  container: {
    marginTop: 5,
    marginBottom: 12,
  },
});
