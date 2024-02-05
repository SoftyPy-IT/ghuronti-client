import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
 

const initialState = {
  toursDetailsData: [],
  isLoading: true,
  isError: false,
  error: "",
};

export const fetchToursData = createAsyncThunk(
  "tours/fetchToursData",
  async (data) => {
    const response = await axios.post("http://localhost:5000/api/v1/tours/gets/packages", data);
    return response.data;
  }
);

const toursSlice = createSlice({
  name: "hotel",
  reducers: {},
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchToursData.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchToursData.fulfilled, (state, action) => {
      state.toursDetailsData = action.payload;
      state.isLoading = false;
    });

    builder.addCase(fetchToursData.rejected, (state, action) => {
      state.isError = true;
      state.error = action.error.message;
      state.isLoading = false;
    });
  },
});

 

export default toursSlice.reducer;
 