// src/features/products/productAPI.js

import axios from 'axios';

const API_BASE = 'https://api.buywaterh2o.com/api/category';

export const fetchCategoriesAPI = () => axios.get(API_BASE);
export const fetchCategoryByIdAPI = (id) => axios.get(`${API_BASE}/${id}`);
export const createCategoryAPI = (category) => axios.post(API_BASE, category);
export const updateCategoryAPI = (id, category) => axios.put(`${API_BASE}/${id}`, category);
export const deleteCategoryAPI = (id) => axios.delete(`${API_BASE}/${id}`);
