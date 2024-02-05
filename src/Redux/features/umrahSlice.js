import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  umrahDetailsData: [],
  isLoading: true,
  isError: false,
  error: "",
};

export const fetchUmrahData = createAsyncThunk(
  "umrah/fetchUmrahData",
  async (data) => {
    const response = await axios.post(
      "http://localhost:5000/api/v1/umrag/get/packages",
      data
    );

    return response.data.getPackage;
  }
);

const umrahSlice = createSlice({
  name: "umrah",
  reducers: {},
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchUmrahData.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchUmrahData.fulfilled, (state, action) => {
      state.umrahDetailsData = action.payload;
      state.isLoading = false;
    });

    builder.addCase(fetchUmrahData.rejected, (state, action) => {
      state.isError = true;
      state.error = action.error.message;
      state.isLoading = false;
    });
  },
});

export default umrahSlice.reducer;
