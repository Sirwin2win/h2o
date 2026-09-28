// src/features/products/productAPI.js

import axios from "axios";

const API_BASE = "https://api2.buywaterh2o.com/send-email";

export const createMailAPI = (mail) => axios.post(API_BASE, mail);
export const resetMailAPI = (mail) =>
  axios.post("https://api2.buywaterh2o.com/api/auth/forgot-password", mail);
export const updateMailAPI = (mail) =>
  axios.put("https://api2.buywaterh2o.com/api/auth/update-password", mail);
