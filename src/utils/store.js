import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../utils/userSlice.js";
import movieSlice from "../utils/movieSlice.js";

const store = configureStore({
  reducer: {
    user: userSlice,
    movie: movieSlice,
  },
});

export default store;
