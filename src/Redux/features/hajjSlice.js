import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  hajjDetailsData: [],
  isLoading: true,
  isError: false,
  error: "",
};

export const fetchHajjData = createAsyncThunk(
  "hajj/fetchHajjData",
  async (data) => {
    const response = await axios.post(
      "http://localhost:5000/api/v1/hajj",
      data
    );

    return response.data.getPackage;
  }
);

const hajjSlice = createSlice({
  name: "hajj",
  reducers: {},
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchHajjData.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchHajjData.fulfilled, (state, action) => {
      state.hajjDetailsData = action.payload;
      state.isLoading = false;
    });

    builder.addCase(fetchHajjData.rejected, (state, action) => {
      state.isError = true;
      state.error = action.error.message;
      state.isLoading = false;
    });
  },
});

export default hajjSlice.reducer;
