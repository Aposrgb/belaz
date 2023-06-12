import { createSlice } from "@reduxjs/toolkit";
import { GetProductsAll, GetProductsCategory, getFilteredProducts } from "../../api/product.js";
const initialState = {
  products: [],
  isLoading: false,
  error: "",
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    fetchProducts(state) {
      state.isLoading = true;
    },
    successFetchProducts(state, action) {
      state.products = action.payload;
      state.isLoading = false;
    },
    failureFetchProducts(state) {
      state.products = initialState.products;
      state.isLoading = false;
      state.error = "Извините, что то пошло не так";
    },
  },
});

export const GetProducts = (page, limit, categoryId) => {
  return async (dispatch) => {
    dispatch(productsSlice.actions.fetchProducts());
    try {
      const response = await GetProductsCategory(page, limit, categoryId);
      dispatch(productsSlice.actions.successFetchProducts(response));
    } catch (e) {
      dispatch(productsSlice.actions.failureFetchProducts());
    }
  };
};

export const getProductsFiltered = (
  page,
  limit,
  minPrice,
  maxPrice,
  categoryId,
  brandId,
) => {
  return async (dispatch) => {
    dispatch(productsSlice.actions.fetchProducts());
    const response = await getFilteredProducts(
      page,
      limit,
      minPrice,
      maxPrice,
      categoryId,
      brandId
    );
    try {
      dispatch(productsSlice.actions.successFetchProducts(response));
    } catch (e) {
      productsSlice.actions.failureFetchProducts();
    }
  };
};

export default productsSlice.reducer;
