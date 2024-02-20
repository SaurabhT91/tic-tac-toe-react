import { configureStore } from "@reduxjs/toolkit";
import playerReducer from "./features/playerDetails/playerSlice";

export default configureStore({
  reducer: {
    players: playerReducer,
  },
});
