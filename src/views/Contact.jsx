import React, { useEffect } from "react";
import Search from "../components/Search/Search.jsx";
import BreadcrumbContacts from "../components/Breadcrumb/BreadcrumbContacts.jsx";
import Title from "../components/Title/Title.jsx";
import ContactsContent from "../components/ContactsContent/ContactsContent.jsx";
import {GetSearch} from "../store/slice/searcSlice.js";

const Contact = (props) => {
  useEffect(() => {
    props.GetNewsAll(1, 5, 2022);
    props.GetContact();
  }, []);
  return (
    <div className="content">
      <Search GetSearch={props.GetSearch}/>
      <BreadcrumbContacts />
      <Title arrow={false} title="Контакты" />
      <ContactsContent
        PostFeedbackFunc={props.PostFeedbackFunc}
        news={props.news}
        contacts={props.contacts.contacts}
        text={props.contacts.text}
      />
    </div>
  );
};

export default Contact;
