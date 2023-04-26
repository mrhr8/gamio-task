import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import UserProfileBanner from "../../components/userProfileBanner/UserProfileBanner";
import InventoryList from "@/components/inventoryList/InventoryList";
import { dehydrate, QueryClient } from "@tanstack/react-query";
import { QueryKeys } from "utils/queryKeys/constants";
import fetchInventory from "utils/api/fetchInventory";

export const getStaticProps: GetStaticProps = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: [QueryKeys.inventoryItems],
    queryFn: fetchInventory,
  });

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
      revalidate: 3600,
    },
  };
};

const InventoryPage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Inventory</title>
      </Head>
      <UserProfileBanner />
      <div>
        <InventoryList title="inventory" />
      </div>
      <div className="accent"></div>
    </div>
  );
};

export default InventoryPage;
