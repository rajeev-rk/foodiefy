import { createSlice } from '@reduxjs/toolkit';
import { selectAllItems } from './productsSlice';

const initialState = {
  category: null,
  priceRange: { min: null, max: null },
  availability: null,
  sortBy: null,
  minRating: null,
  searchKeyword: '',
  trendingOnly: true,
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
    setTrendingOnly(state, action) {
      state.trendingOnly = action.payload;
    },
    clearFilter(state) {
      state.category = null;
      state.priceRange = { min: null, max: null };
      state.availability = null;
      state.sortBy = null;
      state.minRating = null;
      state.searchKeyword = '';
      state.trendingOnly = false;
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
  setTrendingOnly,
  clearFilter,
} = filterSlice.actions;


export const selectCategoryFilter = state => state.filter.category;
export const selectPriceRangeFilter = state => state.filter.priceRange;
export const selectAvailabilityFilter = state => state.filter.availability;
export const selectSortByFilter = state => state.filter.sortBy;
export const selectMinRatingFilter = state => state.filter.minRating;
export const selectSearchKeywordFilter = state => state.filter.searchKeyword;
export const selectTrendingOnlyFilter = state => state.filter.trendingOnly;

export const selectFilteredProducts = (state) => {
  const products = selectAllItems(state);
  const categoryFilter = selectCategoryFilter(state);
  const priceRangeFilter = selectPriceRangeFilter(state);
  const availabilityFilter = selectAvailabilityFilter(state);
  const minRatingFilter = selectMinRatingFilter(state);
  const searchKeywordFilter = selectSearchKeywordFilter(state);
  const trendingOnly = selectTrendingOnlyFilter(state);

  return products.filter(product => {
    // Apply category filter
    if (categoryFilter && product.category !== categoryFilter) {
      return false;
    }

    // Apply price range filter
    if (priceRangeFilter.min !== null && priceRangeFilter.max !== null) {
      if (product.price < priceRangeFilter.min || product.price > priceRangeFilter.max) {
        return false;
      }
    }

    // Apply availability filter
    if (availabilityFilter !== null && product.availability !== availabilityFilter) {
      return false;
    }

    // Apply minimum rating filter
    if (minRatingFilter !== null && product.rating < minRatingFilter) {
      return false;
    }

    // Apply search keyword filter
    if (searchKeywordFilter.trim() !== '' && !product.name.toLowerCase().includes(searchKeywordFilter.toLowerCase())) {
      return false;
    }

    // Apply trending filter
    if (trendingOnly && !product.isTrending) {
      return false;
    }

    return true;
  });
};

export default filterSlice.reducer;
