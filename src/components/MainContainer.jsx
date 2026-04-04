import React, { useState } from "react";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";
import { useSelector } from "react-redux";
import SecondaryContainer from "./SecondaryContainer";

const MainContainer = () => {
  const [mute, setMute] = useState(true);

  const movies = useSelector((store) => store.movie?.nowPlayingMovie);

  if (!movies) return;

  const randomVideo = Math.floor(Math.random() * movies.length);
  return (
    <div className="relative w-screen aspect-video sm:h-screen md:aspect-video overflow-hidden bg-black">
      <VideoBackground movie={movies[randomVideo]} />
      <div className="absolute top-0 left-0 w-full h-full z-10">
        <VideoTitle movie={movies[randomVideo]} mute={mute} setMute={setMute} />
      </div>
    </div>
  );
};

export default MainContainer;
