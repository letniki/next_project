'use client'
import {configureStore} from "@reduxjs/toolkit";
import { themeSlice} from "./slices/themeSlice";

export const actions = themeSlice.actions;
export const store = configureStore({
    reducer: {
        theme: themeSlice.reducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
