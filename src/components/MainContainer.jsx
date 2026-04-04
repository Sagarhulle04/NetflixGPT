import React, { useState } from "react";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const [mute, setMute] = useState(true);

  const movies = useSelector((store) => store.movie?.nowPlayingMovie);

  if (!movies) return;

  const randomVideo = Math.floor(Math.random() * movies.length);
  return (
    <div className="absolute">
      <VideoTitle movie={movies[randomVideo]} mute={mute} setMute={setMute} />
      <VideoBackground movie={movies[randomVideo]} />
    </div>
  );
};

export default MainContainer;
