import React from "react";
import { HashLink as Link } from "react-router-hash-link";

import styles from "./header.module.css";

export const Header = () => {
  return (
    <div className={styles.headerWrapper}>
      <span className={styles.headerLeft}>
        <Link to="/">Smiles</Link>
      </span>
      <div className={styles.headerRight}>
        <Link to="/giftwrap">Giftwrap System</Link>
        <Link to="/roadmap">Smile Trip</Link>
      </div>
    </div>
  );
};
