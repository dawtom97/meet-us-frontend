import { DisplayUser } from "../models/DisplayUser.interface";
import { NewUser } from "../models/NewUser";
import axios from "axios";

const register = async (newUser: NewUser): Promise<DisplayUser | null> => {
  const response = await axios.post(
    `${process.env.BASE_API}/auth/register` ||
      "http://localhost:3333/api/auth/register",
    newUser
  );
  return response.data
};





const authService = {
  register,
//   login,
//   logout,
//   verifyJwt,
};

export default authService;
