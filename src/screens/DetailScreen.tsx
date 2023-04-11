import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {View, Image, Dimensions, Text, ScrollView} from 'react-native';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {stackParams} from '../navigator/Navigation';
import {useDetails} from '../hooks/useDetails';
import Loading from '../components/Loading';
import {MovieDetail} from '../components/MovieDetail';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props extends StackScreenProps<stackParams, 'Detail'> {}

const screenHeight = Dimensions.get('screen').height;

export const DetailScreen = ({route, navigation}: Props) => {
  const movie = route.params;
  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  const {detail, loading, cast} = useDetails(movie.id);

  if (loading) {
    return <Loading />;
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <Image source={{uri}} style={styles.image} />
      </View>

      <View style={styles.containerText}>
        <Text style={styles.subTitle}>{movie.original_title}</Text>
        <Text style={styles.title}>{movie.title}</Text>
      </View>

      <MovieDetail cast={cast} detail={detail!} />
      <TouchableOpacity
      onPress={() => navigation.goBack()}
        style={{
          marginLeft: 10,
          position: 'absolute',
          top: 20,
          left: 10,
          zIndex: 1,
        }}>
        <Icon name="arrow-back" size={35} color="white" />
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: screenHeight * 0.7,
    backgroundColor: 'red',
    borderBottomEndRadius: 15,
    borderBottomStartRadius: 15,
    overflow: 'hidden',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 6,
  },
  image: {
    flex: 1,
  },
  containerText: {
    marginTop: 10,
    marginHorizontal: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  subTitle: {
    fontSize: 16,
  },
});
