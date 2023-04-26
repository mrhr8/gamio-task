import axios, { AxiosResponse } from "axios";
import { RewardResponse } from "../../types/inventory";

const INVENTORY_URL: string = process.env.NEXT_PUBLIC_INVENTORY_URL as string;
const TOKEN: string = process.env.NEXT_PUBLIC_XC_TOKEN as string;

const fetchInventory = async (): Promise<RewardResponse> => {
  const response: AxiosResponse<RewardResponse> = await axios({
    method: "GET",
    url: INVENTORY_URL,
    headers: {
      "Content-Type": "application/json",
      "xc-token": TOKEN,
    },
  });
  return response.data;
};

export default fetchInventory;
