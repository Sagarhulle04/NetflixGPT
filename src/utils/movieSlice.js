import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    nowPlayingMovie: {},
    popularMovies: {},
    topRated: {},
    upcoming: {},
    movies: {},
    tv: {},
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovie = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTopRatedMovie: (state, action) => {
      state.topRated = action.payload;
    },
    addUpcomingMovie: (state, action) => {
      state.upcoming = action.payload;
    },
    addMovies: (state, action) => {
      state.movies = action.payload;
    },
    addTv: (state, action) => {
      state.tv = action.payload;
    },
  },
});

export const {
  addNowPlayingMovies,
  addPopularMovies,
  addTopRatedMovie,
  addUpcomingMovie,
  addMovies,
  addTv,
} = movieSlice.actions;

export default movieSlice.reducer;
