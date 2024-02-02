import { createSlice } from "@reduxjs/toolkit";

const initialAuth = {
  email: "",
};

const authStateSlice = createSlice({
  name: "auth",
  initialState: initialAuth,

  reducers: {
    login: (state, action) => {
      state.email = action.payload;
    },
    logout: (state) => {
      state.email = initialAuth.email;
    },
  },
});

export const authStateReducer = authStateSlice.reducer;
export const { login, logout } = authStateSlice.actions;
