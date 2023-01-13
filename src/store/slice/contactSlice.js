import { createSlice } from "@reduxjs/toolkit";
import adress from "../../assets/svg/adress.svg";
import mail from "../../assets/svg/mail.svg";
import phone from "../../assets/svg/phone.svg";
import mode from "../../assets/svg/mode.svg";
import {GetAllHelp} from "../../api/help.js";
import {helpSlice} from "./helpSlice.js";
import {GetAllContacts} from "../../api/contact.js";
const initialState = {
  contacts: [
    // {
    //   title: "Адрес",
    //   icon: adress,
    //   text:
    //     "г. Екатеринбург, улица Посадская, 16а, корпус И, помещение И-101\n" +
    //     "620102",
    // },
    // {
    //   title: "E-mail",
    //   icon: mail,
    //   text: "info@agregatekb.ru",
    // },
    // {
    //   title: "Телефон",
    //   icon: phone,
    //   text: "+7(343) 287-57-32, +7(965) 532-70-26, +7(922) 209-53-32",
    // },
    // {
    //   title: "Время работы",
    //   icon: mode,
    //   text: "Пн – Пт: с 9:00 до 17:00",
    // },
  ],
  isLoading: false,
  error: "",
};

export const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    fetchContact(state) {
      state.isLoading = true;
    },
    successFetchContact(state, action) {
      state.contacts = action.payload;
      state.isLoading = false;
    },
  },
});

export const GetContact = () => {
  return async (dispatch) => {
    dispatch(contactsSlice.actions.fetchContact());
    const response = await GetAllContacts();
    let contacts = response.data
    let ADDRESS = 1, EMAIL = 2, PHONE = 3, WORK_TIME = 4, ABOUT_COMPANY = 5;
    let descriptions = {
      1 : contacts.find(el => el.subType === ADDRESS).description,
      2 : contacts.find(el => el.subType === EMAIL).description,
      3 : contacts.find(el => el.subType=== PHONE).description,
      4 : contacts.find(el => el.subType === WORK_TIME).description,
      5 : contacts.find(el => el.subType === ABOUT_COMPANY).description
    };
    contacts = {
      text: descriptions[ABOUT_COMPANY],
      contacts: [
        {
          id: ADDRESS,
          title: "Адрес",
          icon: adress,
          text: descriptions[ADDRESS],
        },
        {
          id: EMAIL,
          title: "E-mail",
          icon: mail,
          text: descriptions[EMAIL],
        },
        {
          id: PHONE,
          title: "Телефон",
          icon: phone,
          text: descriptions[PHONE]
        },
        {
          id: WORK_TIME,
          title: "Время работы",
          icon: mode,
          text: descriptions[WORK_TIME],
        }
      ]
    };
    dispatch(contactsSlice.actions.successFetchContact(contacts));
  };
};

export default contactsSlice.reducer;
