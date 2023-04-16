import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../index';
import { Place } from '@/types/catalog';

type CatalogState = {
  places: Place[],
}

const initialState: CatalogState = {
  places: [],
};


export const catalogSlice = createSlice({
  name: 'catalog',
  initialState,
  reducers: {
    setPlaces(state: CatalogState, action: PayloadAction<Place[]>) {
      state.places = action.payload;
    },
  },
  extraReducers: (builder) => {
  },
});

export const { setPlaces } = catalogSlice.actions;
export const selectPlaces = (state: RootState) => state.catalog.places;
export default catalogSlice.reducer;