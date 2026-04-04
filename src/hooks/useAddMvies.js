import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addMovies } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constants";

export const useAddMovies = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    async function getPopularMovie() {
      const data = await fetch(
        "https://api.themoviedb.org/3/trending/movie/day?language=en-US",
        API_OPTIONS,
      );
      const res = await data.json();
      dispatch(addMovies(res.results));
    }
    getPopularMovie();
  }, []);
};
