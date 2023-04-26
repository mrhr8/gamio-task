import axios, { AxiosResponse } from "axios";
import { User } from "../../types/user";

const USER_URL: string = process.env.NEXT_PUBLIC_USER_URL as string;
const TOKEN: string = process.env.NEXT_PUBLIC_XC_TOKEN as string;

const fetchUser = async (): Promise<User> => {
  const response: AxiosResponse<User> = await axios({
    method: "GET",
    url: USER_URL,
    headers: {
      "Content-Type": "application/json",
      "xc-token": TOKEN,
    },
  });
  return response.data;
};

export default fetchUser;
