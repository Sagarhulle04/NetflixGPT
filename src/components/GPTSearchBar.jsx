import React, { useState } from "react";
import { GoogleGenAI } from "@google/genai";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addMovies, setLoading } from "../utils/gptMovieSlice";
import GPTMovieSuggestion from "./GPTMovieSuggestion";

const GPTSearchBar = () => {
  const dispatch = useDispatch();

  const [searchText, setSearchText] = useState("");

  async function tmdbSearchMovie(movie) {
    const res = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`,
      API_OPTIONS,
    );

    const data = await res.json();

    return data.results;
  }

  const handleSearch = async (e) => {
    e.preventDefault();

    dispatch(setLoading(true));

    const query =
      "Act as a movie recommendation system and suggust some movie for the query : " +
      searchText +
      ". Only give me 5 movies name, comma seperated like the example result given ahead. Example result: Gadar, Singham, Golmaal, DHurandar, Prem Ratan Dhan Payo";

    const ai = new GoogleGenAI({
      apiKey: import.meta.env.VITE_GEMINI_API_KEY,
    });

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: query,
    });

    const gptMovieList = response.text.split(",");

    // console.log(gptMovieList);

    const serachMovies = gptMovieList.map((movie) => tmdbSearchMovie(movie));

    const data = await Promise.all(serachMovies);

    dispatch(addMovies(data));

    // console.log(data);
  };

  return (
    <div className="sticky top-20 z-40 bg-linear-to-b from-black via-black/80 to-transparent py-8 mt-8">
      <div className="flex justify-center px-4">
        <form onSubmit={handleSearch} className="w-full max-w-2xl">
          <div className="grid grid-cols-12 gap-3">
            <input
              type="text"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              placeholder="Search movies by genre, actor, or plot..."
              className="col-span-9 px-4 py-3 text-base text-black bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-opacity-50 placeholder-gray-500"
            />
            <button
              type="submit"
              className="col-span-3 px-6 py-3 text-white font-semibold rounded-lg bg-red-600 hover:bg-red-700 transition-colors duration-200 cursor-pointer shadow-lg hover:shadow-xl"
            >
              Search
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default GPTSearchBar;
