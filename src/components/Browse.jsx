import React, { useEffect } from "react";
import Header from "./Header";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { useNowPlaying } from "../hooks/useNowPlayingMovie";

const Browse = () => {
  const movies = useSelector((store) => store.movie);
  console.log(movies);

  return <div></div>;
};

export default Browse;
