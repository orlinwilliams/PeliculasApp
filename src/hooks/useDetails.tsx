import {useEffect, useState} from 'react';
import {Cast, CreditsResponse, MovieDetailResponse} from '../interfaces/movieInterface';
import movieDB from '../api/MovieDB';

interface DetailState {
  loading: boolean;
  detail?: MovieDetailResponse;
  cast: Cast[];
}

export const useDetails = (idMovie: number) => {
  const [details, setDetails] = useState<DetailState>({
    loading: true,
    detail: undefined,
    cast: []
  });

  const getDetailMovie = async () => {
    const detailPromise = movieDB.get<MovieDetailResponse>(`/${idMovie}`);   
    const castPromise = movieDB.get<CreditsResponse>(`/${idMovie}/credits`);   

    const [detailResp, castResp] = await Promise.all([detailPromise, castPromise]);
    
    setDetails({
        loading: false,
        detail: detailResp.data,
        cast: castResp.data.cast
    });


  };

  useEffect(() => {
    getDetailMovie();
  }, []);

  return {
    ...details
  };
};
