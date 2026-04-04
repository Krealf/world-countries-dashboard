import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {filterByCode} from "../../config";

const initialState = {
  currentCountry: null,
  neighbors: [],
  status: "idle",
  error: null,
}

export const loadCountryByName = createAsyncThunk(
  "@@details/load-country-by-name",
  (name, {extra: {client, api}}) => {
    return client.get(api.searchByCountry(name))
  }
)

export const loadNeighborsByBorder = createAsyncThunk(
  "@@details/load-country-by-border",
  (borders, {extra: {client, api}}) => {
    return client.get(api.filterByCode(borders))
  }
)

const detailsSlice = createSlice({
  name: "@@details",
  initialState,
  reducers: {
    clearDetails: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadCountryByName.pending, (state, action) => {
        state.status = "loading"
        state.error = null
      })
      .addCase(loadCountryByName.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.payload || action.meta.error
      })
      .addCase(loadCountryByName.fulfilled, (state, action) => {
        state.status = "received";
        state.currentCountry = action.payload.data[0];
      })
      .addCase(loadNeighborsByBorder.fulfilled, (state, action) => {
        state.status = "received";
        state.neighbors = action.payload.data.map(country => country.name);
      })
  }
})

export const {clearDetails} = detailsSlice.actions
export const detailsReducer = detailsSlice.reducer

export const selectCurrentCountry = (state) => (state.details.currentCountry)
export const selectAllDetails = (state) => (state.details);
export const selectNeighbors = (state) => (state.details.neighbors);