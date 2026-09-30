import axios from "axios";

const API_BASE = "https://api2.buywaterh2o.com/api/orders";

// export const createPayAPI = (checkout) => axios.post(API_BASE, checkout);
export const getPayAPI = () => axios.get(API_BASE);
export const createPayAPI = (checkout, token) =>
  axios.post(`${API_BASE}/payment/verify`, checkout, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
