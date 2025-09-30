// auth.js (utility file)
export const isLoggedIn = () => {
  return localStorage.getItem("token") !== null;
};