import { createSlice } from "@reduxjs/toolkit";
import { PostFeedback } from "../../api/feedback";
const initialState = {
  feedback: {},
  isLoading: false,
  error: "",
};

export const feedbackSlice = createSlice({
  name: "feedback",
  initialState,
  reducers: {
    postFeedback(state) {
      state.isLoading = true;
    },

    successPostFeedback(state, action) {
      state.feedback = action.payload;
      state.isLoading = false;
    },
    failureFetchFeedback(state) {
      state.feedback = initialState.feedback;
      state.isLoading = false;
      state.error = "Извините, что то пошло не так";
    },
  },
});

export const PostFeedbackFunc = (name, phone, email, message) => {
  return async (dispatch) => {
    dispatch(feedbackSlice.actions.postFeedback());
    try {
      const response = await PostFeedback(name, phone, email, message);
      dispatch(feedbackSlice.actions.successPostFeedback(response));
    } catch (e) {
      dispatch(feedbackSlice.actions.failureFetchFeedback());
    }
  };
};

export default feedbackSlice.reducer;
