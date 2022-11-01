import axios from "axios";
import URL from "../../config/URL";
const token = localStorage.getItem("token");
export const register = (name, email, password) => async (dispatch) => {
  try {
    const res = await axios.post(`${URL}/user/register`, {
      name,
      email,
      password,
    });
    console.log("register!!");
    localStorage.setItem("token", res.data?.token);
    localStorage.setItem("user", res.data?.user._id);
    console.log(res.data.user._id);
    dispatch({
      type: "REGISTER",
      payload: res?.data,
    });
  } catch (error) {
    console.log("err");
    console.log(error.message);
  }
};

export const login = (name, password) => async (dispatch) => {
  try {
    const res = await axios.post(
      `${URL}/user/login`,
      {
        name,
        password,
      },
      {
        headers: {
          authorization: token, //the token is a variable which holds the token;
        },
      }
    );
    localStorage.setItem("token", res.data?.token);
    localStorage.setItem("user", res.data?.user._id);
    dispatch({
      type: "LOGIN",
      payload: { data: res?.data, islogin: true },
    });
  } catch (error) {
    console.log("user does not exist", error);
  }
};
