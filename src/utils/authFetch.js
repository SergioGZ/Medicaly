import { Token } from "@/api";
import Router from "next/router";

export async function authFetch(url, params) {
  const tokenCtrl = new Token();
  const token = tokenCtrl.getToken();

  const logout = () => {
    tokenCtrl.removeToken();
    Router.push("/join/sign-in");
  };

  if (!token) {
    logout();
  } else {
    if (tokenCtrl.hasExpired(token)) {
      logout();
    } else {
      const paramsTemp = {
        ...params,
        headers: {
          ...params?.headers,
          Authorization: `Bearer ${token}`,
        },
      };

      try {
        return await fetch(url, paramsTemp);
      } catch (error) {
        throw error;
      }
    }
  }
}
