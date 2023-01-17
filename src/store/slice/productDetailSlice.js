import { createSlice } from "@reduxjs/toolkit";
import { GetProductDetail } from "../../api/product.js";
const initialState = {
  detail: {},
  isLoading: false,
  error: "",
};

export const productDetailSlice = createSlice({
  name: "productDetail",
  initialState,
  reducers: {
    fetchDetail(state) {
      state.isLoading = true;
    },
    successFetchDetail(state, action) {
      state.detail = action.payload;
      state.isLoading = false;
    },
    failureFetchDetail(state) {
      state.detail = initialState.detail;
      state.isLoading = false;
      state.error = "Извините, что то пошло не так";
    },
  },
});

export const GetDetailProducts = (id) => {
  return async (dispatch) => {
    dispatch(productDetailSlice.actions.fetchDetail());
    try {
      const response = await GetProductDetail(id);
      dispatch(productDetailSlice.actions.successFetchDetail(response));
    } catch (e) {
      dispatch(productDetailSlice.actions.failureFetchDetail());
    }
  };
};

export default productDetailSlice.reducer;
