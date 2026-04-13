import { configureStore } from "@reduxjs/toolkit";
import contactSlice from "./contactSlice";
import authSlice from "./authSlice";

const store = configureStore({
    reducer: {
        contact: contactSlice.reducer,
        auth: authSlice.reducer
    }
})

export default store;