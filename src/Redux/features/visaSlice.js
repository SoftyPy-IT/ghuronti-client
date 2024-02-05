// visaSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
 

const initialState = {
  visaDetailsData: [],
  isLoading: true,
  isError: false,
  error: "",
};

export const fetchVisaData = createAsyncThunk(
  "visa/fetchVisaData",
  async (data) => {
    const response = await axios.post("http://localhost:5000/api/v1/visa/gets/package", data);
    return response.data;
  }
);

const visaSlice = createSlice({
  name: "visa",
  reducers: {},
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchVisaData.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchVisaData.fulfilled, (state, action) => {
      state.visaDetailsData = action.payload;
      state.isLoading = false;
    });

    builder.addCase(fetchVisaData.rejected, (state, action) => {
      state.isError = true;
      state.error = action.error.message;
      state.isLoading = false;
    });
  },
});

// export const { setVisaDetailsData, setLoading, setError } = visaSlice.actions;

// export const selectVisaDetailsData = (state) => state.visa.visaDetailsData;
// export const selectLoading = (state) => state.visa.isLoading;
// export const selectError = (state) => state.visa.error;

export default visaSlice.reducer;

// // visaSlice.js
// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// export const fetchVisaData = createAsyncThunk(
//   "visa/fetchVisaData",
//   async (data, { dispatch }) => {
//     try {
//       dispatch(setLoading(true));

//       const response = await axios.post("http://localhost:5000/api/v1", data);

//       if (response.data.message === "Successfully visa details posted.") {
//         dispatch(setVisaDetailsData(response.data.getPackage));
//         return response.data.getPackage;
//       } else if (
//         response.data.message === "Please select a country and visa type."
//       ) {
//         dispatch(setError("Please select a country and visa type."));
//       } else if (response.data.message === "No matching package found.") {
//         dispatch(setError("No matching package found."));
//       }
//     } catch (error) {
//       dispatch(setError(error.message));
//     } finally {
//       dispatch(setLoading(false));
//     }
//   }
// );

// const visaSlice = createSlice({
//   name: "visa",
//   reducers: {},
//   initialState: {
//     visaDetailsData: [],
//     isLoading: false,
//     error: null,
//   },
//   extraReducers: {
//     setVisaDetailsData: (state, action) => {
//       state.visaDetailsData = action.payload;
//     },
//     setLoading: (state, action) => {
//       state.isLoading = action.payload;
//     },
//     setError: (state, action) => {
//       state.error = action.payload;
//     },
//   },
// });

// export const { setVisaDetailsData, setLoading, setError } = visaSlice.actions;

// export const selectVisaDetailsData = (state) => state.visa.visaDetailsData;
// export const selectLoading = (state) => state.visa.isLoading;
// export const selectError = (state) => state.visa.error;

// export default visaSlice.reducer;
