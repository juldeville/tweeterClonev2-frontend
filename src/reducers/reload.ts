import { createSlice } from "@reduxjs/toolkit";
const initialState: boolean = false;

const reloadSlice = createSlice({
  name: "tags",
  initialState,
  reducers: {
    refreshTags: (state) => !state,
  },
});

export const { refreshTags } = reloadSlice.actions;
export default reloadSlice.reducer;
