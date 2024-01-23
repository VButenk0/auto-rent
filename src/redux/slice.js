import { createSlice } from "@reduxjs/toolkit";
import { getAdvertsThunk } from "./operations";

const initialState = {
  adverts: [],
  favorites: JSON.parse(localStorage.getItem("favorites")) || [],
  isLoading: false,
  error: null,
};

const slice = createSlice({
  name: "adverts",
  initialState,
  reducers: {
    addAdverts: (state, { payload }) => {
      state.adverts = [...state.adverts, ...payload];
      state.isLoading = false;
    },
    toggleFavorite: (state, { payload }) => {
      const existingIndex = state.favorites.findIndex(
        (fav) => fav.id === payload.id
      );

      if (existingIndex !== -1) {
        state.favorites.splice(existingIndex, 1);
      } else {
        state.favorites.push(payload);
      }
      localStorage.setItem("favorites", JSON.stringify(state.favorites));
    },
    removeFromFavorites: (state, { payload }) => {
      const existingIndex = state.favorites.findIndex(
        (fav) => fav.id === payload.id
      );

      if (existingIndex !== -1) {
        state.favorites.splice(existingIndex, 1);
        localStorage.setItem("favorites", JSON.stringify(state.favorites));
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAdvertsThunk.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getAdvertsThunk.fulfilled, (state, { payload }) => {
        state.adverts = [...state.adverts, ...payload];
        state.isLoading = false;
      })
      .addCase(getAdvertsThunk.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export const { addAdverts, toggleFavorite, removeFromFavorites } =
  slice.actions;
export const advertsReducer = slice.reducer;
