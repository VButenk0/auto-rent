import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAdvertsThunk = createAsyncThunk(
  "getAdverts",
  async (page, thunkApi) => {
    try {
      const { data } = await axios.get(
        "https://65aaa43e081bd82e1d977662.mockapi.io/adverts",
        {
          params: {
            page,
            limit: 12,
          },
        }
      );
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
