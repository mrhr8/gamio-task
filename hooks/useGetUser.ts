import { useQuery } from "@tanstack/react-query";
import { User } from "../types/user";
import { QueryKeys } from "utils/queryKeys/constants";
import fetchUser from "utils/api/fetchUser";

function useGetUser() {
  const data = useQuery<User, Error>({
    queryKey: [QueryKeys.user],
    queryFn: fetchUser,
  });

  return data;
}

export default useGetUser;
