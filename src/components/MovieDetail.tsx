import React from 'react';
import {Cast, MovieDetailResponse} from '../interfaces/movieInterface';
import currencyFormatter from 'currency-formatter';
import Icon from 'react-native-vector-icons/Ionicons';
import {Text, View, FlatList} from 'react-native';
import {Actor} from './Actor';

interface Props {
  cast: Cast[];
  detail: MovieDetailResponse;
}

export const MovieDetail = ({cast, detail}: Props) => {
  return (
    <>
      <View style={{marginTop: 5, marginHorizontal: 15}}>
        <View style={{flexDirection: 'row'}}>
          <Icon name="star-outline" color="black" size={18} />
          <Text style={{marginLeft: 6}}>{detail.vote_average}</Text>
          <Text> {detail.genres.map(g => g.name).join(', ')}</Text>
        </View>
        <Text
          style={{
            fontSize: 18,
            fontWeight: '600',
            marginTop: 5,
            color: 'black',
          }}>
          Historia
        </Text>
        <Text style={{fontSize: 16}}>{detail.overview}</Text>
        <Text
          style={{
            fontSize: 18,
            fontWeight: '600',
            marginTop: 5,
            color: 'black',
          }}>
          Presupuesto
        </Text>
        <Text style={{fontSize: 16}}>
          {currencyFormatter.format(detail.budget, {code: 'USD'})}
        </Text>
        <Text
          style={{
            fontSize: 18,
            fontWeight: '600',
            marginTop: 5,
            color: 'black',
          }}>
          Actores
        </Text>

        <FlatList
          data={cast}
          renderItem={({item}) => <Actor actor={item} />}
          keyExtractor={item => item.id.toString()}
          showsHorizontalScrollIndicator={false}
          horizontal={true}></FlatList>
      </View>
    </>
  );
};
