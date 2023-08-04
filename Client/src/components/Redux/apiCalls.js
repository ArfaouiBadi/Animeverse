import { loginFailure, loginStart, loginSuccess } from "./userReducer";
import axios from "axios";

export const login = async (dispatch, user) => {
dispatch(loginSuccess(user));


};