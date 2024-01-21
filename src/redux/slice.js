import { createSlice } from "@reduxjs/toolkit";
import { getAdvertsThunk } from "./operations";

const initialState = {
  adverts: [],
  isLoading: false,
  error: null,
  // nextPage: 1,
};

const slice = createSlice({
  name: "adverts",
  initialState,
  reducers: {
    addAdverts: (state, { payload }) => {
      state.adverts = [...state.adverts, ...payload];
      state.isLoading = false;
      // state.nextPage += 1;
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

export const { addAdverts } = slice.actions;
export const advertsReducer = slice.reducer;
