import { FC, ReactElement } from "react";
import { ListTitle } from "types/inventory";
import styles from "./inventoryList.module.css";
import useGetInventory from "../../hooks/useGetInventory";
import InventoryCard from "../inventoryCard/InventoryCard";

const InventoryList: FC<ListTitle> = (props): ReactElement => {
  const { data } = useGetInventory();

  return (
    <div className={styles["list-container"]}>
      <h3 className={styles.title}>{props.title}</h3>
      <div className={styles.list}>
        {data &&
          data.list.map((card) => <InventoryCard key={card.Id} {...card} />)}
      </div>
    </div>
  );
};

export default InventoryList;
