import React, { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/constants";
import Spinner from "./Spinner";

export default function VideoBackground({ movie }) {
  const [videoKey, setVideoKey] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!movie?.id) return;

    async function getVideoKey() {
      setIsLoading(true);
      try {
        const data = await fetch(
          `https://api.themoviedb.org/3/movie/${movie.id}/videos`,
          API_OPTIONS,
        );
        const res = await data.json();
        const trailers = res.results;
        console.log(trailers);

        const trailerKey = trailers.filter((video) => video.type === "Trailer");
        console.log(trailerKey);

        setVideoKey(trailerKey[0]);
      } catch (err) {
        console.error("Error fetching video key:", err);
        setVideoKey("");
      } finally {
        setIsLoading(false);
      }
    }

    getVideoKey();
  }, [movie?.id]);

  if (!movie?.id) return null;

  return (
    <div className="fixed inset-0 -z-10 w-screen overflow-hidden">
      {isLoading ? (
        <Spinner />
      ) : videoKey ? (
        <div className="absolute top-0 left-0 w-screen h-full">
          {/* Container for aspect ratio cover */}
          <div className="absolute top-0 left-0 w-screen aspect-video overflow-hidden">
            <iframe
              className="absolute top-1/2 left-1/2 min-w-[177.78%] min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2 pointer-events-none scale-150"
              src={`https://www.youtube.com/embed/${videoKey.key}?playlist=${videoKey.key}&loop=1&autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&showinfo=0&vq=hd1080`}
              title="background-video"
              allow="autoplay; encrypted-media; picture-in-picture"
            />
          </div>
        </div>
      ) : null}

      {/* Optional overlay */}
      <div className="absolute inset-0 bg-black/10"></div>
    </div>
  );
}
