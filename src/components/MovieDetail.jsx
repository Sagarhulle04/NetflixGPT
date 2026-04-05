import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { API_OPTIONS } from "../utils/constants";
import { useMovieDetails } from "../hooks/useMovieDetails";
import { useSelector } from "react-redux";

const MovieDetail = () => {
  const { id } = useParams();

  useMovieDetails(id);
  const movieDetail = useSelector((store) => store.movie.movieDetails);
  console.log(movieDetail);

  return <div className="text-white">MovieDetail</div>;
};

export default MovieDetail;
