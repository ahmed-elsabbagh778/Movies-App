import { createSlice } from "@reduxjs/toolkit";

const storedWatchList = localStorage.getItem("moviesWatchList");

const watchListSlice = createSlice({
  name: "watchList",
  initialState: {
    moviesWatchList: storedWatchList ? JSON.parse(storedWatchList) : [],
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

      localStorage.setItem(
        "moviesWatchList",
        JSON.stringify(state.moviesWatchList)
      );
    },
  },
});

export const { addRemoveMovie } = watchListSlice.actions;

export default watchListSlice.reducer;
