import { createSlice } from "@reduxjs/toolkit";

const gptToggleSlice = createSlice({
  name: "gpt",
  initialState: false,
  reducers: {
    toggle: (state, action) => {
      return action.payload;
    },
  },
});

export default gptToggleSlice.reducer;

export const { toggle } = gptToggleSlice.actions;
