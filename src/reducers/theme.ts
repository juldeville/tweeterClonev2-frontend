import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ThemeStyle } from "@/types";
interface ThemeState {
  value: ThemeStyle;
}
const initialState: ThemeState = {
  value: "",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    changeTheme: (state: ThemeState, action: PayloadAction<ThemeStyle>) => {
      state.value = action.payload;
    },
    systemTheme: (state: ThemeState) => {
      state.value = "";
    },
  },
});

export const { changeTheme, systemTheme } = themeSlice.actions;
export default themeSlice.reducer;
