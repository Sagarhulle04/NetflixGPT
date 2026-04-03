import React from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { TfiControlPlay } from "react-icons/tfi";

const VideoTitle = ({ movie }) => {
  const imageUrl = `https://image.tmdb.org/t/p/w500${movie?.poster_path || movie?.backdrop_path}`;

  return (
    <div className=" items-center mt-40 ml-15 px-4">
      <div className=" md:flex-row items-center md:items-start gap-6 md:gap-8">
        <img
          className="h-44 w-44 rounded-full object-cover shadow-lg hover:scale-105 transition-transform duration-300"
          src={imageUrl}
          alt={movie?.title || "Movie Poster"}
        />

        <div className="max-w-md flex flex-col gap-4">
          <p className="text-gray-100 mt-6 text-sm md:text-base">
            {movie?.overview?.slice(0, 150)}...
          </p>

          <div className="flex gap-4 mt-2">
            <button className="flex items-center gap-2 cursor-pointer bg-red-600 text-white px-4 py-2 rounded-lg shadow hover:bg-red-700 transition-colors">
              <TfiControlPlay /> Play Now
            </button>
            <button className="flex items-center gap-2 cursor-pointer bg-gray-200 text-gray-800 px-4 py-2 rounded-lg shadow hover:bg-gray-300 transition-colors">
              <AiOutlineInfoCircle /> More Info
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
