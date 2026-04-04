import React from "react";

const MovieList = ({ title, movies }) => {
  if (!movies) return;

  console.log(movies[0]?.poster_path);

  return (
    <div>
      <h1 className="text-white text-3xl font-serif">{title}</h1>
      {movies.map((movie) => (
        <div className="flex gap-3" key={movie?.id}>
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie?.poster_path}`}
            alt="poster_path"
            className="h-20 w-20"
          />
        </div>
      ))}
    </div>
  );
};

export default MovieList;
