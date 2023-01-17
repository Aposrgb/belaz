import { createSlice } from "@reduxjs/toolkit";
import { GetCategoryProducts } from "../../api/category.js";
const initialState = {
  category: [],
  isLoading: false,
  error: "",
};

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    fetchCategory(state) {
      state.isLoading = true;
    },
    successFetchCategory(state, action) {
      state.category = action.payload;
      state.isLoading = false;
    },
    failureFetchCategory(state) {
      state.category = [];
      state.isLoading = false;
      state.error = "Извините, что то пошло не так";
    },
  },
});

export const GetCategory = (page, limit) => {
  return async (dispatch) => {
    dispatch(categorySlice.actions.fetchCategory());
    try {
      const response = await GetCategoryProducts(page, limit);
      dispatch(categorySlice.actions.successFetchCategory(response));
    } catch (e) {
      dispatch(categorySlice.actions.failureFetchCategory());
    }
  };
};

export default categorySlice.reducer;
