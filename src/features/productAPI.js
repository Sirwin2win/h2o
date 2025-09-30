// src/features/products/productAPI.js

import axios from 'axios';

const API_BASE = 'https://api.buywaterh2o.com/api/products';

export const fetchProductsAPI = () => axios.get(API_BASE);
export const fetchSixProductsAPI = (limit = 8) => axios.get(`${API_BASE}?limit=${limit}`);
export const fetchProductByIdAPI = (id) => axios.get(`${API_BASE}/${id}`);
export const createProductAPI = (product) => axios.post(API_BASE, product);
export const updateProductAPI = (id, product) => axios.put(`${API_BASE}/${id}`, product);
export const deleteProductAPI = (id) => axios.delete(`${API_BASE}/${id}`);
