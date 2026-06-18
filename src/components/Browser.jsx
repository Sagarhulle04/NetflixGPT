import { useAddMovies } from "../hooks/useAddMvies";
import { useNowPlaying } from "../hooks/useNowPlayingMovie";
import { usePopularMovie } from "../hooks/usePopularMovie";
import { useTopRated } from "../hooks/useTopRated";
import { useAddTV } from "../hooks/useTv";
import { useUpComing } from "../hooks/useUpComing";
import GPTSearch from "./GPTSearch";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import { useSelector } from "react-redux";

const Browser = () => {
  useNowPlaying();
  usePopularMovie();
  useTopRated();
  useUpComing();
  useAddMovies();
  useAddTV();

  const gpt = useSelector((store) => store.gpt);
  console.log(gpt);

  return (
    <div>
      <div className="absolute w-full z-50 bg-transparent">
        <Header />
      </div>
      {gpt ? (
        <GPTSearch />
      ) : (
        <>
          {" "}
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browser;
