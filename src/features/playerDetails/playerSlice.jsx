// playerSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  player1Name: '',
  player2Name: '',
};

const playerSlice = createSlice({
  name: 'players',
  initialState,
  reducers: {
    setPlayer1Name: (state, action) => {
      state.player1Name = action.payload;
    },
    setPlayer2Name: (state, action) => {
      state.player2Name = action.payload;
    },
  },
});

export const { setPlayer1Name, setPlayer2Name } = playerSlice.actions;
export default playerSlice.reducer;
