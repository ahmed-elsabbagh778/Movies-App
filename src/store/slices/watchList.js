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
        state.moviesWatchList = state.moviesWatchList.filter(
          (movie) => movie.id !== action.payload.id
        );
      } else {
        state.moviesWatchList.push(action.payload);
      }
    },
  },
});

export const { addRemoveMovie } = watchListSlice.actions;

export default watchListSlice.reducer;
