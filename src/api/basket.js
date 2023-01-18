import { Api } from "./api.js";

export const AddProductsBasket = async (productId, count) => {
  const token = localStorage.token;
  const response = await Api.put("/api/basket/" + productId, {
    RequestData: { count: 1 },
    headers: { apiKey: token },
  });
  return response.data;
};

export const DeleteProductsBasket = async (productId) => {
  const token = localStorage.token;
  const response = await Api.delete("/api/basket/" + productId, {
    RequestData: {},
    headers: { apiKey: token },
  });
  return response.data;
};

export const ChangeProductsBasket = async (productId, count) => {
  const token = localStorage.token;
  const response = await Api.patch("/api/basket/" + productId, {
    RequestData: { count: 1 },
    headers: {apiKey: token },
  });
  return response.data;
};

export const AllProductsBasket = async () => {
  const token = localStorage.token;
  const response = await Api.get("api/basket", {
    headers: {apiKey: token },
  });
  return response.data;
};
