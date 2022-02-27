import React from "react";

import logo from "../images/logo.png";

import styles from "./index.module.css";

export const Header = () => {
  return (
    <div className={styles.headerWrapper}>
      <span className={styles.headerLeft}>
        <img src={logo} />
        <span>CatchOn Labs</span>
      </span>
      <span className={styles.headerRight}></span>
    </div>
  );
};
