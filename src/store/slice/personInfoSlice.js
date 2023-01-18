import { createSlice } from "@reduxjs/toolkit";
import { GetPerson } from "../../api/lk";
import avatar from "../../assets/images/avatar.png";
const initialState = {
  personInfo: {
    firstname: "",
    surname: "",
    avatar: avatar,
    id: 0,
    dateRegistration: "",
    patronymic: "",
    email: "",
    phone: "",
  },
  isLoading: false,
  error: "",
};

export const personInfoSlice = createSlice({
  name: "personInfo",
  initialState,
  reducers: {
    fetchPerson(state) {
      state.isLoading = true;
    },
    successFetchPerson(state, action) {
      state.personInfo = {...action.payload, avatar};
      state.isLoading = false;
    },
    failureFetchPerson(state) {
      state.personInfo = initialState.personInfo;
      state.isLoading = false;
      state.error = "Извините, что то пошло не так";
    },
  },
});

export const GetPersonInfo = () => {
  return async (dispatch) => {
    dispatch(personInfoSlice.actions.fetchPerson());
    try {
      const response = await GetPerson();
      dispatch(personInfoSlice.actions.successFetchPerson(response.data));
    } catch (e) {
      dispatch(personInfoSlice.actions.failureFetchPerson());
    }
  };
};

export default personInfoSlice.reducer;
