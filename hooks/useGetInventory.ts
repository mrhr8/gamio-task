import { useQuery } from "@tanstack/react-query";
import { RewardResponse } from "../types/inventory";
import { QueryKeys } from "utils/queryKeys/constants";
import fetchInventory from "utils/api/fetchInventory";

function useGetUser() {
  const data = useQuery<RewardResponse, Error>({
    queryKey: [QueryKeys.inventoryItems],
    queryFn: fetchInventory,
    staleTime: 3600,
  });

  return data;
}

export default useGetUser;
