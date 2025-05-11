import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: boolean = false;
const tagState = createSlice({
  name: "tags",
  initialState,
  reducers: {
    refreshTags: (state) => !state,
  },
});

export const { refreshTags } = tagState.actions;

export default tagState.reducer;
