import React from "react";
import styles from "./header.module.css";

export const Header = () => {
  return (
    <div className={styles.headerWrapper}>
      <span className={styles.headerLeft}>Smiles</span>
      <div className={styles.headerRight}>
        <span>Smerktown Smiles</span>
        <span>Giftwrap System</span>
        <span>Smile Trip</span>
        <span>FAQ</span>
      </div>
    </div>
  );
};
