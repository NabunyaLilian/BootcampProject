import axios from "axios";
import jwt_decode from "jwt-decode";
import setAuthToken from "../../../utils/setAuthToken";
import actionTypes from "./actionTypes";

const host = process.env.HOST;


export const loginsuccess = token => (
    {
        type: actionTypes.LOGINSUCCESS,
        payload: token
    }
)

export const loginfail = error => (
  {
      type: actionTypes.LOGINFAIL,
      payload: error
  }
)

export const login = (Username, Password) => (dispatch) => {
  const url = `${host}/auth/login`;
  const data = {
      Username,
      Password
  };
  const requestData = {
    method: "POST",
    mode: "no-cors",
    headers: {
      "Content-Type": "application/json",
    },
    data: JSON.stringify(data),
  };
  return axios(url, requestData)
    .then((response) => {
      const { Access_token } = response.data;
      localStorage.setItem("auth_token", Access_token);
      setAuthToken(Access_token);
      const decodedData = jwt_decode(Access_token);
      dispatch(loginsuccess(decodedData));
      window.location.href= '/products'
    })
    .catch(error => dispatch(loginfail(error.response.data.error)));
};
