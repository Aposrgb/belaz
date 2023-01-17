import { createSlice } from "@reduxjs/toolkit";
import {
  GetFilteredRecommend,
  GetRecommendsProducts,
} from "../../api/product.js";
const initialState = {
  recommend: {
    data: [],
    pageCount: 0,
  },
  isLoading: false,
  error: "",
};

export const recommendSlice = createSlice({
  name: "recommends",
  initialState,
  reducers: {
    fetchRecommends(state) {
      state.isLoading = true;
    },
    successFetchRecommend(state, action) {
      state.recommend = action.payload;
      state.isLoading = false;
    },
    failureFetchRecommend(state) {
      state.recommend = initialState.recommend;
      state.isLoading = false;
      state.error = "Извините, что то пошло не так";
    },
  },
});

export const GetRecommends = (page, limit) => {
  return async (dispatch) => {
    dispatch(recommendSlice.actions.fetchRecommends());
    try {
      const response = await GetRecommendsProducts(page, limit);
      dispatch(recommendSlice.actions.successFetchRecommend(response));
    } catch (e) {
      dispatch(recommendSlice.actions.failureFetchRecommend());
    }
  };
};

export const GetRecommendFiltered = (
  page,
  limit,
  minPrice,
  maxPrice,
  categoryId
) => {
  return async (dispatch) => {
    dispatch(recommendSlice.actions.fetchRecommends());
    try {
      const response = await GetFilteredRecommend(
        page,
        limit,
        minPrice,
        maxPrice,
        categoryId
      );
      dispatch(recommendSlice.actions.successFetchRecommend(response));
    } catch (e) {
      dispatch(recommendSlice.actions.failureFetchRecommend());
    }
  };
};

export default recommendSlice.reducer;
