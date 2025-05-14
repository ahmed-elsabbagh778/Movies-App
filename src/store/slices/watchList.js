import { createSlice } from "@reduxjs/toolkit";

const storedWatchList = localStorage.getItem("moviesWatchList");
const storedShowsWatchList = localStorage.getItem("showsWatchList");

const watchListSlice = createSlice({
  name: "watchList",
  initialState: {
    moviesWatchList: storedWatchList ? JSON.parse(storedWatchList) : [],
    showsWatchList: storedShowsWatchList
      ? JSON.parse(storedShowsWatchList)
      : [],
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
    addRemoveShow: (state, action) => {
      const showExist = state.showsWatchList.find(
        (show) => show.id === action.payload.id
      );

      if (showExist) {
        state.showsWatchList = state.showsWatchList.filter(
          (show) => show.id !== action.payload.id
        );
      } else {
        state.showsWatchList.push(action.payload);
      }

      localStorage.setItem(
        "showsWatchList",
        JSON.stringify(state.showsWatchList)
      );
    },
  },
});

export const { addRemoveMovie, addRemoveShow } = watchListSlice.actions;

export default watchListSlice.reducer;
