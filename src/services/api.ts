import { getCookie, setCookie } from "./utils";
import { fetchUserProfile } from "./actions/profileForm";
import { setAuthChecked, setUser } from "./actions/checkAuth";
import { AppThunk } from "./types";

export const api = "https://norma.nomoreparties.space/api";

export const checkResponse = (res: Response): Promise<any> => {
  return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
};

export async function request(url: string, options: RequestInit) {
  const fullUrl = `${api}${url}`;
  const response = await fetch(fullUrl, options);
  return checkResponse(response);
}

export async function refreshToken() {
  const token = getCookie("refreshToken");
  try {
    const response = await fetch(`${api}/auth/token`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        token: token,
      }),
    });

    const data = await response.json();

    if (data && data.success) {
      setCookie("accessToken", data.accessToken, { expires: 1800 });
      return true;
    }
    return false;
  } catch (error) {
    return false;
  }
}

export const checkUserAuth = () => {
  return async (dispatch: AppThunk<Promise<unknown>>) => {
    dispatch(setAuthChecked(false)); //

    const token = getCookie("accessToken");

    if (token) {
      try {
        const data = await fetchUserProfile(token);
        dispatch(setUser(data.user));
      } catch (error) {
        // Handle the error here
      }
    }

    dispatch(setAuthChecked(true));
  };
};
