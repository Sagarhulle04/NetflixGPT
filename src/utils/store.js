import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../utils/userSlice.js";
import movieSlice from "../utils/movieSlice.js";
import gptToggleSlice from "../utils/gptToggle.js";
import gptMovieSlice from "../utils/gptMovieSlice.js";

const store = configureStore({
  reducer: {
    user: userSlice,
    movie: movieSlice,
    gpt: gptToggleSlice,
    gptMovie: gptMovieSlice,
  },
});

export default store;
