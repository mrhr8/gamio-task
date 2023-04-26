import type { NextPage } from "next";
import Head from "next/head";
import UserProfileBanner from "@/components/userProfileBanner/UserProfileBanner";
import InventoryList from "@/components/inventoryList/InventoryList";

function getStaticProps() {
  return {
    props: {
      title: "Settings",
    },
  };
}

const SettingsPage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Settings</title>
      </Head>
      <UserProfileBanner />
      <div>
        <InventoryList title="settings" />
      </div>
    </div>
  );
};

export default SettingsPage;
