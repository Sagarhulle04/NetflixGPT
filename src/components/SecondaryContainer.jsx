import React, { useEffect } from "react";
import MovieList from "./MovieList";
import { API_OPTIONS } from "../utils/constants";
import { useNowPlaying } from "../hooks/useNowPlayingMovie";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const nowPlayingMovies = useSelector((store) => store.movie?.nowPlayingMovie);
  const nowPopularMovies = useSelector((store) => store.movie?.popularMovies);
  const nowTopRatedMovies = useSelector((store) => store.movie?.topRated);
  const nowUpComingMovie = useSelector((store) => store.movie?.upcoming);
  const nowAddMovies = useSelector((store) => store.movie?.movies);
  const nowAddTV = useSelector((store) => store.movie?.tv);
  // console.log(nowAddTV);

  return (
    <div className="bg-black text-white w-screen">
      <div className="p-4 md:p-10 relative z-20 flex flex-col gap-8">
        <MovieList title="Popular" movies={nowPopularMovies} />
        <MovieList title="Now Playing" movies={nowPlayingMovies} />
        <MovieList title="Top Rated" movies={nowTopRatedMovies} />
        <MovieList title="Upcoming" movies={nowUpComingMovie} />
        <MovieList title="Movies" movies={nowAddMovies} />
        <MovieList title="TV" movies={nowAddTV} />
      </div>
    </div>
  );
};

export default SecondaryContainer;

// MovieList - Popular
// MovieList - Now Playing
// MovieList - Top Rated
// MovieList - Upcoming
// MovieList - Movies
// MovieList - TV
// MovieList - Top Rated
