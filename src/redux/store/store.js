import { configureStore } from "@reduxjs/toolkit";
import contactSlice from "./contactSlice";

const store = configureStore({
    reducer: {
        contact: contactSlice.reducer
    }
})

export default store;