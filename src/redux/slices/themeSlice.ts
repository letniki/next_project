'use client'
import {configureStore, createSlice} from "@reduxjs/toolkit";

type IThemeState ={
    theme: boolean;
}

const initialState: IThemeState ={
    theme: false
}
export const themeSlice = createSlice({
    name: "themeSlice",
    initialState: initialState,
    reducers: {
        changeTheme: (state) => {state.theme = !state.theme}
    }
}
)

export const {changeTheme} = themeSlice.actions;

export default themeSlice.reducer;
