import {Movie, MovieDBNowPlaying} from '../interfaces/movieInterface';
import movieDB from '../api/MovieDB';
import {useEffect, useState} from 'react';

export const useMovies = () => {
  const [peliculasEnCine, setPeliculasEnCine] = useState<Movie[]>([]);
  const [loading, setloading] = useState(true);

  const getPeliculasEnCine = async () => {
    try {
      const resp = await movieDB.get<MovieDBNowPlaying>('/now_playing');
      setPeliculasEnCine(resp.data.results);
      setloading(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getPeliculasEnCine();
  }, []);

  return {
    peliculasEnCine,
    loading,
  };
};
