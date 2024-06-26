import { ENV } from "@/utils";
import { jwtDecode } from "jwt-decode";

export class Token {
  setToken(token) {
    localStorage.setItem(ENV.TOKEN, token);
  }

  getToken() {
    return localStorage.getItem(ENV.TOKEN);
  }

  hasExpired(token) {
    const decodedToken = jwtDecode(token);
    const expiredDate = decodedToken.exp * 1000;
    const currentDate = new Date().getTime();

    if (currentDate >= expiredDate) {
      return true;
    } else {
      return false;
    }
  }

  removeToken() {
    localStorage.removeItem(ENV.TOKEN);
  }
}
