import { createSlice } from "@reduxjs/toolkit";
import { GetFilteredPopular, GetPopularsProducts } from "../../api/product.js";
const initialState = {
  populars: {
    data: [],
    pageCount: 0,
  },
  isLoading: false,
  error: "",
};

export const popularSlice = createSlice({
  name: "populars",
  initialState,
  reducers: {
    fetchPopulars(state) {
      state.isLoading = true;
    },
    successFetchPopulars(state, action) {
      state.populars = action.payload;
      state.isLoading = false;
    },
    failureFetchPopulars(state) {
      state.populars = initialState.populars;
      state.isLoading = false;
      state.error = "Извините, что то пошло не так";
    },
  },
});

export const GetPopulars = (page, limit) => {
  return async (dispatch) => {
    dispatch(popularSlice.actions.fetchPopulars());
    try {
      const response = await GetPopularsProducts(page, limit);
      dispatch(popularSlice.actions.successFetchPopulars(response));
    } catch (e) {
      dispatch(popularSlice.actions.failureFetchPopulars());
    }
  };
};

export const GetPopularFiltered = (
  page,
  limit,
  minPrice,
  maxPrice,
  categoryId
) => {
  return async (dispatch) => {
    dispatch(popularSlice.actions.fetchPopulars());
    const response = await GetFilteredPopular(
      page,
      limit,
      minPrice,
      maxPrice,
      categoryId
    );
    try {
      dispatch(popularSlice.actions.successFetchPopulars(response));
    } catch (e) {
      popularSlice.actions.failureFetchPopulars();
    }
  };
};

export default popularSlice.reducer;
