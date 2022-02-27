import React from "react";

import styles from "./index.module.css";

export const Content = () => {
  return (
    <div className={styles.contentWrapper}>
      <div className={styles.title}>
        <span>Forge</span>
        <span className={styles.greenDecoration}>NFT</span>
        <span>Smoothly</span>
      </div>
      <p className={styles.content}>
        We create smart contracts, websites and everything related to your nft
        art.
      </p>
    </div>
  );
};
