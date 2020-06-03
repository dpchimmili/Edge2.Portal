import jwtDecode from "jwt-decode";
import http from "./httpService";
import { apiUrl } from "../config.json";

const apiEndpoint = apiUrl + "/Users/authenticate";
const tokenKey = "token";

http.setJwt(getJwt());

export async function login(username, password) {
    const { data: jwt } = await http.post(apiEndpoint, { username, password });
    debugger;
    localStorage.setItem(tokenKey, JSON.stringify(jwt));
}

export function loginWithJwt(jwt) {
    localStorage.setItem(tokenKey, jwt);
}

export function logout() {
  localStorage.removeItem(tokenKey);
}

export function getCurrentUser() {
  try {
      const jwt = localStorage.getItem(tokenKey);
      const usr = JSON.parse(jwt)
      return { 'name': usr.firstName + ' ' + usr.lastName, 'isAdmin': usr.isAdmin };
  } catch (ex) {
    return null;
  }
}

export function getJwt() {
    const usr = JSON.parse(localStorage.getItem(tokenKey))
  return usr? usr.jwtToken : null;
}

export default {
  login,
  loginWithJwt,
  logout,
  getCurrentUser,
  getJwt
};
