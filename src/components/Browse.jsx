import React, { useEffect } from "react";
import Header from "./Header";
import { API_OPTIONS } from "../utils/constants";

const Browse = () => {
  useEffect(() => {
    async function getNowPlayingData() {
      const data = await fetch(
        "https://api.themoviedb.org/3/trending/all/day",
        API_OPTIONS,
      );
      const res = await data.json();
      console.log(res);
    }
    getNowPlayingData();
  }, []);

  return <div></div>;
};

export default Browse;
