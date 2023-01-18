import { connect } from "react-redux";
import { GetPersonInfo } from "../store/slice/personInfoSlice.js";
import Lk from "./Lk.jsx";

let mapStateToProps = (state) => {
  return {
    personInfo: state.personInfoReducer.personInfo,
  };
};

const LkContainer = connect(mapStateToProps,{GetPersonInfo})(Lk);
export default LkContainer;
