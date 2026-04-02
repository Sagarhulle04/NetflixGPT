import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";

export const useNowPlaying = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    async function getNowPlayingData() {
      const data = await fetch(
        "https://api.themoviedb.org/3/trending/all/day",
        API_OPTIONS,
      );
      const res = await data.json();
      dispatch(addNowPlayingMovies(res.results));
    }
    getNowPlayingData();
  }, []);
};
