import { createSlice } from "@reduxjs/toolkit";
import { GetFilterProducts } from "../../api/product.js";
const initialState = {
  filter: {},
  isLoading: false,
  error: "",
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    fetchFilter(state) {
      state.isLoading = true;
    },

    successFilter(state, action) {
      state.filter = action.payload;
      state.isLoading = false;
    },
    failureFetchFilter(state) {
      state.filter = initialState.filter;
      state.isLoading = false;
      state.error = "Извините, что то пошло не так";
    },
  },
});

export const GetFilter = () => {
  return async (dispatch) => {
    dispatch(filterSlice.actions.fetchFilter());
    try {
      const response = await GetFilterProducts();
      dispatch(filterSlice.actions.successFilter(response));
    } catch (e) {
      dispatch(filterSlice.actions.failureFetchFilter());
    }
  };
};

export default filterSlice.reducer;
