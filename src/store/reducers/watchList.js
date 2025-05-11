import { createSlice } from "@reduxjs/toolkit";

const watchListSlice = createSlice({
  name: "watchList",
  initialState: {
    moviesWatchList: [],
  },

  reducers: {
    addRemoveMovie: (state, action) => {
      const movieExist = state.moviesWatchList.find(
        (movie) => movie.id === action.payload.id
      );

      if (movieExist) {
        movieExist.watchList = false;
      } else {
        movieExist.watchList = true;
      }
    },
  },
});

export const { addRemoveMovie } = watchListSlice.actions;

export default watchListSlice.reducer;
