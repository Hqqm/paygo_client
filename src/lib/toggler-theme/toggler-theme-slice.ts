import { createSlice } from "@reduxjs/toolkit";

const togglerThemeSlice = createSlice({
  name: "toggleTheme",
  initialState: {
    mode: "light"
  },
  reducers: {
    setThemeInLocalStorage: (_, action) => {
      window.localStorage.setItem("theme", action.payload.mode);
    },
    setTheme: (state, action) => {
      state.mode = action.payload.mode;
    }
  }
});

export const {
  actions: { setThemeInLocalStorage, setTheme },
  reducer
} = togglerThemeSlice;
