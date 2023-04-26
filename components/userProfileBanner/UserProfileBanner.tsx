import styles from "./userProfileBanner.module.css";
import { FC, ReactElement } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
import useGetUser from "../../hooks/useGetUser";

const UserProfileBanner: FC = (): ReactElement => {
  const router = useRouter();
  const { data, isError, isLoading, error } = useGetUser();

  if (isLoading) {
    return <div className="loading">Loading...</div>;
  }

  if (isError) {
    return <div className="error">Error: {error?.message}</div>;
  }

  return (
    <header className={styles["banner-container"]}>
      <Image
        src="/images/banner_rectangle.png"
        alt="banner-rectangle"
        width={211}
        height={308}
        className={styles["banner-rectangle"]}
      />
      <div className={styles["user-data-container"]}>
        <Image
          src={data.AvatarUrl}
          alt="Avatar"
          width={160}
          height={160}
          className={styles.avatar}
        />
        <div className={styles["user-data"]}>
          <h3 className={styles.name}>
            {data.Name} <span className={styles.level}>{data.level}</span>
          </h3>
          <p className={styles.username}>@{data.Username}</p>
        </div>
      </div>
      <nav className={styles.navigation}>
        <Link
          href="/userProfile/overview"
          className={`${styles["navigation__item"]} ${
            router.pathname === "/userProfile/overview" ? styles.active : ""
          }`}
        >
          Overview
        </Link>
        <Link
          href="/userProfile/inventory"
          className={`${styles["navigation__item"]} ${
            router.pathname === "/userProfile/inventory" ? styles.active : ""
          }`}
        >
          Inventory
        </Link>
        <Link
          href="/userProfile/settings"
          className={`${styles["navigation__item"]} ${
            router.pathname === "/userProfile/settings" ? styles.active : ""
          }`}
        >
          Settings
        </Link>
      </nav>
      <div className={styles["mobile-divider"]}></div>
    </header>
  );
};

export default UserProfileBanner;
