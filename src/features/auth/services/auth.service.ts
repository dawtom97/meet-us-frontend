import { DisplayUser } from "../models/DisplayUser.interface";
import { NewUser } from "../models/NewUser";
import axios from "axios";
import jwtDecode from "jwt-decode";
import { LoginUser } from "../models/LoginUser.interface";
import { Jwt } from "../models/Jwt";
import { DecodedJwt } from "../models/DecodedJwt.interface";

const register = async (newUser: NewUser): Promise<DisplayUser | null> => {
  const response = await axios.post(
    `${process.env.REACT_APP_BASE_API}/auth/register`,
    newUser
  );
  console.log(response, newUser);
  return response.data;
};

const login = async (user: LoginUser): Promise<Jwt | null> => {
  const response = await axios.post(
    `${process.env.REACT_APP_BASE_API}/auth/login`,
    user
  );

  if(response.data) {
    localStorage.setItem('jwt',JSON.stringify(response.data));
    const decodedJwt: DecodedJwt = jwtDecode(response.data.token);
    localStorage.setItem('user',JSON.stringify(decodedJwt.user));
  }

  return response.data;
};

const logout = ():void => {
  localStorage.removeItem("user");
  localStorage.removeItem("jwt");
}

const verifyJwt = async (jwt: string): Promise<Boolean | any> => {
  const response = await axios.post(
    `${process.env.REACT_APP_BASE_API}/auth/verify-jwt`,
    {jwt}
  );

  if(response.data) {
    const jwtExpirationMs = response.data.exp * 1000;
    return jwtExpirationMs > Date.now();
  }

  return false;
};

const authService = {
  register,
  login,
  logout,
  verifyJwt,
};

export default authService;
