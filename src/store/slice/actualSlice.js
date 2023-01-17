import { createSlice } from "@reduxjs/toolkit";
import { GetActualsProducts, GetFilteredActual } from "../../api/product.js";
import newsSlice from "./newsSlice.js";
const initialState = {
  actual: {
    data: [],
    pageCount: 0,
  },
  isLoading: false,
  error: "",
};

export const actualSlice = createSlice({
  name: "actual",
  initialState,
  reducers: {
    fetchActual(state) {
      state.isLoading = true;
    },
    successFetchActual(state, action) {
      state.actual = action.payload;
      state.isLoading = false;
    },
    failureFetchActual(state) {
      state.actual = initialState.actual;
      state.isLoading = false;
      state.error = "Извините, что то пошло не так";
    },
  },
});

export const GetActual = (page, limit) => {
  return async (dispatch) => {
    dispatch(actualSlice.actions.fetchActual());
    try {
      const response = await GetActualsProducts(page, limit);
      dispatch(actualSlice.actions.successFetchActual(response));
    } catch (e) {
      dispatch(actualSlice.actions.failureFetchActual());
    }
  };
};

export const GetActualFiltered = (
  page,
  limit,
  minPrice,
  maxPrice,
  categoryId
) => {
  return async (dispatch) => {
    dispatch(actualSlice.actions.fetchActual());
    const response = await GetFilteredActual(
      page,
      limit,
      minPrice,
      maxPrice,
      categoryId
    );
    dispatch(actualSlice.actions.successFetchActual(response));
  };
};

export default actualSlice.reducer;
