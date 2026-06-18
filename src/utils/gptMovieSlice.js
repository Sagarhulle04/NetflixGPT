import { createSlice } from "@reduxjs/toolkit";

const gptMovieSlice = createSlice({
  name: "gptMovies",
  initialState: {
    movies: null,
    loading: false,
  },
  reducers: {
    addMovies: (state, action) => {
      state.movies = action.payload;
      state.loading = false;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export default gptMovieSlice.reducer;

export const { addMovies, setLoading } = gptMovieSlice.actions;
