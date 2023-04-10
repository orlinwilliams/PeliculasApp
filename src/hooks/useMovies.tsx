import { Movie, MovieDBResponse } from '../interfaces/movieInterface';
import movieDB from '../api/MovieDB';
import { useEffect, useState } from 'react';

interface MoviesState {
  nowPlaying: Movie[];
  popular: Movie[];
  toRated: Movie[];
  upcoming: Movie[]

}

export const useMovies = () => {
  const [moviesState, setMoviesState] = useState<MoviesState>({
    nowPlaying: [],
    popular: [],
    toRated: [],
    upcoming: []
  });
  const [loading, setloading] = useState(true);

  const getMovies = async () => {
    try {
      const nowPlayingPromise = movieDB.get<MovieDBResponse>('/now_playing');
      const popularPromise = movieDB.get<MovieDBResponse>('/popular');
      const topRatedPromise = movieDB.get<MovieDBResponse>('/top_rated');
      const upcomingPromise = movieDB.get<MovieDBResponse>('/upcoming');

      const resp = await Promise.all([
        nowPlayingPromise,
        popularPromise,
        topRatedPromise,
        upcomingPromise
      ]);

      setMoviesState({
        nowPlaying: resp[0].data.results,
        popular: resp[1].data.results,
        toRated: resp[2].data.results,
        upcoming: resp[3].data.results
      })
      setloading(false);
    } catch (error) {
      console.error(error);
    }
  };


  useEffect(() => {
    getMovies();
  }, []);

  return {
    ...moviesState,
    loading,
  };
};
