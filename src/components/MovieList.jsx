import React from "react";

const MovieList = ({ title, movies }) => {
  return (
    <div className="w-full relative z-10 text-white pb-8 overflow-hidden">
      <h1 className="text-white text-xl md:text-3xl font-bold py-3 pl-4 md:pl-12">
        {title}
      </h1>
      <div className="flex overflow-x-scroll no-scrollbar overflow-y-visible pb-4 pt-2">
        <div className="flex gap-4 md:gap-6 pl-4 md:pl-12 pr-4 md:pr-12">
          {movies &&
            movies.map((movie) => {
              if (!movie?.poster_path) return null;
              return (
                <div
                  key={movie.id}
                  className="w-36 md:w-48 shrink-0 cursor-pointer transition-transform duration-300 hover:scale-105 hover:z-20 origin-center"
                >
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${movie?.poster_path}`}
                    alt={`Poster of ${movie?.title}`}
                    className="w-full h-full object-cover rounded-md md:rounded-lg shadow-lg aspect-2/3"
                  />
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
