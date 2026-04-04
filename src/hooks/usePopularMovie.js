import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constants";

export const usePopularMovie = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    async function getPopularMovie() {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/popular",
        API_OPTIONS,
      );
      const res = await data.json();
      dispatch(addPopularMovies(res.results));
    }
    getPopularMovie();
  }, []);
};
