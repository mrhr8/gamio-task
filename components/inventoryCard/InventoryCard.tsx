import { Reward } from "../../types/inventory";
import { ReactElement, FC } from "react";
import Image from "next/image";
import styles from "./inventoryCard.module.css";
import CodeIcon from "../../assets/icons/code.svg";
import CopyIcon from "../../assets/icons/copy.svg";
import { toast } from "react-toastify";

const InventoryCard: FC<Reward> = (props): ReactElement => {
  const { image_url, title, type, claimed, shipped, used, code } = props;

  const copyCodeToClipboard = (): void => {
    if (code) {
      navigator.clipboard
        .writeText(code)
        .then(() => {
          toast(`Copied ${code?.toUpperCase()} to clipboard!`);
        })
        .catch((err) => {
          toast(`Failed to copy code to clipboard: ${err}`);
        });
    }
  };

  return (
    <div className={styles.card}>
      <Image
        className={styles.product}
        src={image_url}
        alt={title}
        width={200}
        height={160}
      />
      <div className={styles["status-container"]}>
        {claimed && !used && type === "code" && (
          <p className={styles.claimed}>Claimed</p>
        )}
        {claimed && used && type === "code" && (
          <p className={styles.used}>Used</p>
        )}
        {!claimed && !shipped && type !== "code" && (
          <p className={styles.owned}>Owned</p>
        )}
        {claimed && shipped && type !== "code" && (
          <p className={styles.shipped}>Shipped</p>
        )}
      </div>
      <p className={styles.name}>{title}</p>
      {code && (
        <div className={styles["code-container"]}>
          <span className={styles["code-text-container"]}>
            <CodeIcon className={styles["code-icon"]} />
            Code
          </span>
          <span className={styles.code} onClick={copyCodeToClipboard}>
            {code.slice(0, 12)}...
            <CopyIcon className={styles["copy-icon"]} />
          </span>
        </div>
      )}
      {!claimed && !shipped && type !== "code" && (
        <p className={styles["order-shipping"]}>order shipping</p>
      )}
    </div>
  );
};

export default InventoryCard;
