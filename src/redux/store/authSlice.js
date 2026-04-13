import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  user: null, // Stores email, uid, etc.
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUserLogged: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload; // payload should be { email, uid }
    },
    setUserLoggedOut: (state) => {
      state.isAuthenticated = false;
      state.user = null;
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice;
