import { useEffect, useState } from 'react';
import { getGif } from '../helpers/getGif';

export const useFetchGifs = (category) => {

  const [state, setState] = useState({
    data: [],
    loading: true
  });

  useEffect(() => {

    getGif(category)
      .then(data => {
        setTimeout(() => {

          setState({ data, loading: false });

        }, 3000)

      })
  }, [category])

  return state
}