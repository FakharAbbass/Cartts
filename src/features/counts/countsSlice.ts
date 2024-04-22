import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import fetchCount from "../../features/counts/fetchCount";

export const fetchCountsAsync = createAsyncThunk(
  "counts/fetchCounts",
  async () => {
    const response = await fetchCount();
    return response.data;
  }
);

const initialState: any = {
  counts: null,
  status: "idle",
  error: null,
};

const countsSlice = createSlice({
  name: "counts",
  initialState,
  reducers: {
    incrementLikes: (state) => {
      if (state.counts) {
        state.counts.push += 1;
      }
    },
    incrementComments: (state) => {
      if (state.counts) {
        state.counts.push += 1;
      }
    },
    incrementShares: (state) => {
      if (state.counts) {
        state.counts.push += 1;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCountsAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCountsAsync.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.counts = action.payload;
      })
      .addCase(fetchCountsAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { incrementLikes, incrementComments, incrementShares } =
  countsSlice.actions;
export const selectCounts = (state: RootState) => state.counts.counts;
export default countsSlice.reducer;
