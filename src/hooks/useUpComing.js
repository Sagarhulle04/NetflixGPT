import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUpcomingMovie } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constants";

export const useUpComing = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    async function getPopularMovie() {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/upcoming",
        API_OPTIONS,
      );
      const res = await data.json();
      dispatch(addUpcomingMovie(res.results));
    }
    getPopularMovie();
  }, []);
};
