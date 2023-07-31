import { loginFailure, loginStart, loginSuccess } from "./userReducer";
import axios from "axios";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await axios.post("http://localhost:3002/user/login", user);
    console.log(user)
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};