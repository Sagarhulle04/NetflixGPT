import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const GPTMovieSuggestion = () => {
  const gptData = useSelector((store) => store.gptMovie);
  const gptMovies = gptData?.movies;
  const isLoading = gptData?.loading;

  if (isLoading) {
    return (
      <div className="flex justify-center items-center py-20">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-gray-600 border-t-red-600 rounded-full animate-spin"></div>
          <p className="text-gray-400 text-lg">Fetching movie recommendations...</p>
        </div>
      </div>
    );
  }

  if (!gptMovies || gptMovies.length === 0) {
    return (
      <div className="text-center text-gray-400 py-12">
        <p className="text-xl">Search for movies to see recommendations</p>
      </div>
    );
  }

  return (
    <div className="w-full px-4 md:px-12 pb-12">
      <div className="space-y-8">
        {gptMovies &&
          gptMovies.map((movieList, index) => {
            if (!movieList || movieList.length === 0) return null;

            const movieTitle =
              movieList[0]?.title || `Recommendation ${index + 1}`;

            return (
              <div key={index} className="w-full">
                <h2 className="text-white text-lg md:text-2xl font-bold py-3 mb-4">
                  {movieTitle}
                </h2>
                <div className="flex overflow-x-scroll no-scrollbar overflow-y-visible pb-4">
                  <div className="flex gap-4 md:gap-6">
                    {movieList.map((movie) => {
                      if (!movie?.poster_path) return null;
                      return (
                        <div
                          key={movie.id}
                          className="w-32 md:w-40 shrink-0 cursor-pointer transition-transform duration-300 hover:scale-110 hover:z-20 origin-center group"
                        >
                          <Link to={`/browse/movie/${movie?.id}`}>
                            <div className="relative overflow-hidden rounded-lg shadow-lg">
                              <img
                                src={`https://image.tmdb.org/t/p/w500/${movie?.poster_path}`}
                                alt={`Poster of ${movie?.title}`}
                                className="w-full h-full object-cover aspect-2/3 group-hover:brightness-75 transition-all duration-300"
                              />
                              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <p className="text-white text-xs font-semibold truncate">
                                  {movie?.title}
                                </p>
                              </div>
                            </div>
                          </Link>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default GPTMovieSuggestion;
