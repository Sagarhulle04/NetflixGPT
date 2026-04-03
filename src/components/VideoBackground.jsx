import React, { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/constants";
import Spinner from "./Spinner";
import useBackgroundMovie from "../hooks/useBackgroundMovie";

export default function VideoBackground({ movie }) {
  // console.log(movie);

  const { videoKey, isLoading } = useBackgroundMovie(movie);

  if (!movie?.id) return null;

  return (
    <div className="fixed inset-0 -z-10 w-screen overflow-hidden">
      {isLoading ? (
        <Spinner />
      ) : videoKey ? (
        <div className="absolute top-0 left-0 w-screen h-full">
          <div className="absolute top-0 left-0 w-screen aspect-video overflow-hidden">
            <iframe
              className="absolute top-1/2 left-1/2 min-w-[177.78%] min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2 pointer-events-none scale-150"
              src={`https://www.youtube.com/embed/${videoKey.key}?playlist=${videoKey.key}&loop=1&autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&showinfo=0&playsinline=1&vq=hd1440`}
              title="background-video"
              allow="autoplay; encrypted-media; picture-in-picture"
            />
          </div>
        </div>
      ) : null}

      <div className="absolute inset-0 bg-black/10"></div>
    </div>
  );
}
