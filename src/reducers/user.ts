import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserState } from "@/types";

const initialState: UserState = {
  value: { username: "", token: "", firstname: "" },
};

const userState = createSlice({
  name: "user",
  initialState,
  reducers: {
    authenticate: (state: UserState, action: PayloadAction<{ username: string; token: string }>) => {
      state.value.username = action.payload.username;
      state.value.token = action.payload.token;
    },
    logOut: (state: UserState) => {
      state.value.username = "";
      state.value.token = "";
    },
  },
});

export const { authenticate, logOut } = userState.actions;
export default userState.reducer;
