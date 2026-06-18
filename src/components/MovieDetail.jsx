import React from "react";
import { useParams } from "react-router-dom";
import { useMovieDetails } from "../hooks/useMovieDetails";
import { useSelector } from "react-redux";

const MovieDetail = () => {
  const { id } = useParams();

  useMovieDetails(id);

  const movieDetail = useSelector((store) => store.movie.movieDetails);

  if (!movieDetail || movieDetail?.id?.toString() !== id) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white px-4">
        <div className="text-center">
          <div className="mx-auto mb-6 h-16 w-16 rounded-full border-4 border-gray-700 border-t-red-600 animate-spin"></div>
          <p className="text-lg font-medium">Loading movie details...</p>
        </div>
      </div>
    );
  }

  const {
    backdrop_path,
    poster_path,
    title,
    name,
    original_title,
    overview,
    genres,
    runtime,
    release_date,
    status,
    vote_average,
    vote_count,
    tagline,
    videos,
  } = movieDetail;

  const displayTitle = title || name || original_title || "Untitled";
  const videoResults = videos?.results || [];
  const youtubeVideos = videoResults.filter(
    (video) => video.site === "YouTube" && video.key,
  );

  return (
    <div className="relative min-h-screen text-white bg-black">
      <div className="absolute inset-0 overflow-hidden">
        {backdrop_path ? (
          <img
            src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
            alt={displayTitle}
            className="h-full w-full object-cover opacity-60"
          />
        ) : (
          <div className="h-full w-full bg-slate-900" />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-black" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[320px_minmax(0,1fr)] items-start">
          <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-slate-950/80">
            {poster_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                alt={displayTitle}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="flex h-full min-h-[480px] items-center justify-center bg-slate-800 text-gray-300">
                No poster available
              </div>
            )}
          </div>

          <div className="space-y-6">
            <div className="space-y-4">
              <p className="inline-flex rounded-full border border-red-500/30 bg-red-500/10 px-3 py-1 text-sm font-semibold uppercase tracking-[0.24em] text-red-300">
                {status || "Unknown"}
              </p>
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white">
                {displayTitle}
              </h1>
              {tagline && <p className="text-gray-300 italic">“{tagline}”</p>}
            </div>

            <div className="flex flex-wrap gap-3 text-sm text-gray-300">
              {release_date && (
                <span>{new Date(release_date).toLocaleDateString()}</span>
              )}
              {runtime && <span>{runtime} min</span>}
              {vote_average !== undefined && (
                <span>⭐ {vote_average.toFixed(1)} / 10</span>
              )}
              {vote_count !== undefined && (
                <span>{vote_count.toLocaleString()} votes</span>
              )}
            </div>

            {genres && genres.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {genres.map((genre) => (
                  <span
                    key={genre.id}
                    className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-sm text-gray-200"
                  >
                    {genre.name}
                  </span>
                ))}
              </div>
            )}

            <div className="rounded-3xl border border-white/10 bg-black/60 p-6 shadow-xl">
              <h2 className="text-2xl font-semibold text-white mb-4">
                Overview
              </h2>
              <p className="text-gray-200 leading-8">
                {overview || "No overview available for this movie."}
              </p>
            </div>

            {youtubeVideos.length > 0 && (
              <div className="rounded-3xl border border-white/10 bg-black/60 p-6 shadow-xl">
                <h2 className="text-2xl font-semibold text-white mb-4">
                  Trailers & Videos
                </h2>
                <div className="space-y-8">
                  {youtubeVideos.slice(0, 3).map((video) => (
                    <div key={video.id} className="space-y-3">
                      <div className="aspect-video w-full overflow-hidden rounded-2xl border border-white/10 bg-slate-950 shadow-lg">
                        <iframe
                          className="h-full w-full"
                          src={`https://www.youtube.com/embed/${video.key}`}
                          title={video.name}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      </div>
                      <div className="px-2 py-3 rounded-2xl border border-white/10 bg-slate-900/90">
                        <h3 className="text-lg font-semibold text-white">
                          {video.name}
                        </h3>
                        <p className="text-sm text-gray-400">
                          {video.type} • {video.site}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-black/60 p-6">
                <h3 className="text-lg font-semibold text-white mb-2">
                  Release
                </h3>
                <p className="text-gray-200">{release_date || "N/A"}</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-black/60 p-6">
                <h3 className="text-lg font-semibold text-white mb-2">
                  Status
                </h3>
                <p className="text-gray-200">{status || "N/A"}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
