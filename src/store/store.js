import { configureStore } from "@reduxjs/toolkit";
import watchListReducer from "./slices/watchList";

const store = configureStore({
  reducer: {
    watchList: watchListReducer,
  },
});

export default store;
