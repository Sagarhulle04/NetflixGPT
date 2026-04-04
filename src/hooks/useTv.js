import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addMovies, addTv } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constants";

export const useAddTV = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    async function getPopularMovie() {
      const data = await fetch(
        "https://api.themoviedb.org/3/trending/tv/day?language=en-US",
        API_OPTIONS,
      );
      const res = await data.json();
      dispatch(addTv(res.results));
    }
    getPopularMovie();
  }, []);
};
