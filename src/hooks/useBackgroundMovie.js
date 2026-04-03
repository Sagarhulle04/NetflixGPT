import { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/constants";

const useBackgroundMovie = (movie) => {
  const [videoKey, setVideoKey] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!movie?.id) return;

    async function getVideoKey() {
      try {
        const data = await fetch(
          `https://api.themoviedb.org/3/movie/${movie.id}/videos`,
          API_OPTIONS,
        );
        const res = await data.json();
        const trailers = res.results;

        const trailerKey = trailers.filter((video) => video.type === "Trailer");

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
  return { videoKey, isLoading };
};

export default useBackgroundMovie;
