import React from "react";

import logo from "../images/logo.png";
import languageImg from "../images/language.png";

import styles from "./index.module.css";

export const Header = () => {
  return (
    <div className={styles.headerWrapper}>
      <ul>
        {/* LEFT */}
        <li className={styles.logoImg}>
          <img src={logo} />
        </li>

        {/* RIGHT */}
        <li className={styles.headerRight}>
          <img src={languageImg} />
        </li>
        <li className={styles.headerRight}>
          <span className={styles.discord}></span>
        </li>
        <li className={styles.headerRight}>
          <span className={styles.twitter}></span>
        </li>
        <li className={styles.headerRight}>
          <span className={styles.opensea}></span>
        </li>
        <li className={styles.headerRight}>Roadmap</li>
        <li className={styles.headerRight}>Team</li>
        <li className={styles.headerRight}>
          <a href="/">Home</a>
        </li>
      </ul>
    </div>
  );
};
