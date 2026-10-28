import axios from "axios";

const API_URL = "https://api2.buywaterh2o.com/api/auth/";


// Fetch all users (admin only)
export const fetchUsersAPI = (token) =>
  axios.get(API_BASE, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

// Register user
const register = async (user) => {
  const response = await axios.post(API_URL + "register", user);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};
// Login user
const login = async (user) => {
  const response = await axios.post(API_URL + "login", user);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};
// Logout user
const logout = () => {
  localStorage.removeItem("user");
  // localStorage.removeItem('cityId')
};

const authService = {
  register,
  logout,
  login,
};

export default authService;
