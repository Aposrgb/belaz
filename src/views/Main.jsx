import React from "react";
import Benefits from "../components/Benefits/Benefits";
import HomeBunner from "../components/HomeBanner/HomeBunner.jsx";
import NewsForm from "../components/News/NewsForm.jsx";

const Main = (props) => {
  return (
    <div>
        <HomeBunner GetSearch={props.GetSearch}/>
        <Benefits benefits={props.benefits} />
        <NewsForm/>
    </div>
  );
};

export default Main;
