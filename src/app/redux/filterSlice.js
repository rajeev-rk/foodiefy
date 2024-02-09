import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  category: null,
  priceRange: { min: null, max: null },
  availability: null,
  sortBy: null,
  minRating: null,
  searchKeyword: '',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setCategory(state, action) {
      state.category = action.payload;
    },
    setPriceRange(state, action) {
      state.priceRange = action.payload;
    },
    setAvailability(state, action) {
      state.availability = action.payload;
    },
    setSortBy(state, action) {
      state.sortBy = action.payload;
    },
    setMinRating(state, action) {
      state.minRating = action.payload;
    },
    setSearchKeyword(state, action) {
      state.searchKeyword = action.payload;
    },
    clearFilter(state) {
      state.category = null;
      state.priceRange = { min: null, max: null };
      state.availability = null;
      state.sortBy = null;
      state.minRating = null;
      state.searchKeyword = '';
    },
  },
});

export const {
  setCategory,
  setPriceRange,
  setAvailability,
  setSortBy,
  setMinRating,
  setSearchKeyword,
  clearFilter,
} = filterSlice.actions;


export const selectCategoryFilter = state => state.filter.category;
export const selectPriceRangeFilter = state => state.filter.priceRange;
export const selectAvailabilityFilter = state => state.filter.availability;
export const selectSortByFilter = state => state.filter.sortBy;
export const selectMinRatingFilter = state => state.filter.minRating;
export const selectSearchKeywordFilter = state => state.filter.searchKeyword;

export default filterSlice.reducer;
