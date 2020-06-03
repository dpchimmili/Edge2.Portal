import http from "./httpService";
import { apiUrl } from "../config.json";

const apiEndpoint = apiUrl + "/users/adduser";

export function register(user) {
    return http.post(apiEndpoint, {
    username: user.username,
    password: user.password,
        firstName: user.firstName,
        lastName: user.lastName
  });
}
