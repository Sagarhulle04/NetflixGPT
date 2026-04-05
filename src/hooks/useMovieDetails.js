import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addMovieDetails } from "../utils/movieSlice";

export const useMovieDetails = (id) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (!id) return;

    async function getMovieDetails() {
      const data = await fetch(
        `https://api.themoviedb.org/3/movie/${id}`,
        API_OPTIONS,
      );
      const res = await data.json();
      dispatch(addMovieDetails(res));
    }
    getMovieDetails();
  }, [id, dispatch]);
};
