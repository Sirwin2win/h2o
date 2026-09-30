// src/features/products/productAPI.js

import axios from "axios";

const API_BASE = "https://api2.buywaterh2o.com/api/orders";

export const fetchOrdersAPI = () => axios.get(API_BASE);
export const fetchOrderByIdAPI = (userId) => axios.get(`${API_BASE}/${userId}`);
export const createOrderAPI = (checkout, token) => axios.post(API_BASE, checkout,{
    headers: {
      Authorization: `Bearer ${token}`,
    }, 
});
// export const updateProductAPI = (id, product) => axios.put(`${API_BASE}/${id}`, product);
// export const deleteProductAPI = (id) => axios.delete(`${API_BASE}/${id}`);

