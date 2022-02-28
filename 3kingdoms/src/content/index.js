import React from "react";

import csImg from "../images/coming soon.png";

import styles from "./index.module.css";

export const Content = () => {
  return (
    <div className={styles.contentWrapper}>
      <div className={styles.banner}>
        <div className={styles.title}>
          <img src={csImg} />
        </div>
      </div>
    </div>
  );
};
