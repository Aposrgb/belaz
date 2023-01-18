import { Api } from "./api.js";

export const Autorize = async (email, password) => {
  const response = await Api.post("api/security/auth", {
    email: email,
    password: password,
  });
  localStorage.setItem("token", response.data.data.token);
  window.location.reload();
};
export const Registration = async (
  email,
  password,
  name,
  surname,
  patronymic,
  phone
) => {
  const response = await Api.post("api/security/registration", {
    email: email,
    password: password,
    name: name,
    surname: surname,
    patronymic: patronymic,
    phone: phone,
  });
  return response.data;
};
