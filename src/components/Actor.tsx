import React from 'react';
import {Cast} from '../interfaces/movieInterface';
import {View, Text, Image, StyleSheet} from 'react-native';

interface props {
  actor: Cast;
}
export const Actor = ({actor}: props) => {
  const uri = `https://image.tmdb.org/t/p/w500${actor.profile_path}`;

  return (
    <View style={styles.container}>
      {actor.profile_path && (
        <Image
          style={{height: 60, width: 50, borderRadius: 10}}
          source={{uri}}
        />
      )}

      <View style={{marginLeft: 5, paddingTop:5}}>
        <Text style={{color: 'black', fontWeight: 'bold', fontSize: 18}}>
          {actor.name}
        </Text>
        <Text style={{fontSize: 16}}>{actor.character}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginRight: 8,
    marginTop: 5,
    marginBottom: 20,    
    paddingRight: 8,
    backgroundColor: 'white',
    borderRadius: 10,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 6,
  },
});
