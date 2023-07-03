import { Api } from "./api.js";

export const Autorize = (email, password) => {
  return Api.post("api/security/auth", {
    email: email,
    password: password,
  })
};
export const registration = async (
  email,
  password,
  name,
  surname,
  patronymic,
  phone,
  isJuristic
) => {
  const response = await Api.post("api/security/registration", {
    email: email,
    password: password,
    name: name,
    surname: surname,
    patronymic: patronymic,
    phone: phone,
    isJuristic: isJuristic
  });
  return response.data;
};
