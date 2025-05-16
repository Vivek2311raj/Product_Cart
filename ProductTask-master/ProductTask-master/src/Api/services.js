import { axiosInstance } from "./axiosInstance";

export const AuthApi = (payload) => {
  return axiosInstance.post(`auth/login`, payload);
};

export const ProductListApi = (payload) => {
  return axiosInstance.get("products", payload);
};

export const ProductListSearchApi = (query, payload) => {
  return axiosInstance.get(`products/search?q=${query}`, payload);
};

export const AddProductApi = (payload) => {
  return axiosInstance.post(`add`, payload);
};

export const EditProductApi = (productID, payload) => {
  return axiosInstance.put(`products/${productID}`, payload);
};

export const DeleteProductApi = (productID, payload) => {
  return axiosInstance.delete(`products/${productID}`, payload);
};
