import { Api } from "./api.js";

export const GetPerson = async () => {
  const token = localStorage.token;
  return await Api.get("api/user", {
    headers: {apiKey: token },
  }).then((response) => {
    return response.data;
  });
};
