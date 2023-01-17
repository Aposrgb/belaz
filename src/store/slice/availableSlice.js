import { createSlice } from "@reduxjs/toolkit";
import {
  GetAvailablesProducts,
  GetFilteredAvailables,
} from "../../api/product.js";
const initialState = {
  availables: {
    data: [],
    pageCount: 0,
  },

  isLoading: false,
  error: "",
};

export const availableSlice = createSlice({
  name: "availables",
  initialState,
  reducers: {
    fetchAvailables(state) {
      state.isLoading = true;
    },
    successFetchAvailables(state, action) {
      state.availables = action.payload;
      state.isLoading = false;
    },
    failureFetchAvailables(state) {
      state.availables = initialState.availables;
      state.isLoading = false;
      state.error = "Извините, что то пошло не так";
    },
  },
});

export const GetAvailables = (page, limit) => {
  return async (dispatch) => {
    dispatch(availableSlice.actions.fetchAvailables());
    try {
      const response = await GetAvailablesProducts(page, limit);
      dispatch(availableSlice.actions.successFetchAvailables(response));
    } catch (e) {
      dispatch(availableSlice.actions.failureFetchAvailables());
    }
  };
};

export const GetAvailablesFiltered = (
  page,
  limit,
  minPrice,
  maxPrice,
  categoryId
) => {
  return async (dispatch) => {
    dispatch(availableSlice.actions.fetchAvailables());
    const response = await GetFilteredAvailables(
      page,
      limit,
      minPrice,
      maxPrice,
      categoryId
    );
    dispatch(availableSlice.actions.successFetchAvailables(response));
  };
};

export default availableSlice.reducer;
