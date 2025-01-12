import { connect } from "react-redux";
import { GetNewsAll } from "../store/slice/newsSlice.js";
import { PostFeedbackFunc } from "../store/slice/feedbackSlice.js";
import Contact from "./Contact.jsx";
import {GetSearch} from "../store/slice/searcSlice.js";
import {GetContact} from "../store/slice/contactSlice.js";
let mapStateToProps = (state) => {
  return {
    news: state.newsReducer.news,
    contacts: state.contactReducer.contacts,
  };
};

const ContactContainer = connect(mapStateToProps, {
  GetContact,
  GetNewsAll,
  PostFeedbackFunc,
  GetSearch
})(Contact);
export default ContactContainer;
