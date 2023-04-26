import type { NextPage } from "next";
import Head from "next/head";
import UserProfileBanner from "@/components/userProfileBanner/UserProfileBanner";
import InventoryList from "@/components/inventoryList/InventoryList";

const OverviewPage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Overview</title>
      </Head>
      <UserProfileBanner />
      <div>
        <InventoryList title="overview" />
      </div>
    </div>
  );
};

export default OverviewPage;
