import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTopRatedMovie } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constants";

export const useTopRated = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    async function getPopularMovie() {
      const data = await fetch(
        "https://api.themoviedb.org/3/tv/top_rated",
        API_OPTIONS,
      );
      const res = await data.json();
      dispatch(addTopRatedMovie(res.results));
    }
    getPopularMovie();
  }, []);
};
