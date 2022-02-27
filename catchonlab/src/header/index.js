import React from "react";

import logo from "../images/logo.png";

import styles from "./index.module.css";

export const Header = () => {
  return (
    <div className={styles.headerWrapper}>
      <ul>
        <li>
          <img src={logo} />
        </li>
        <li>CatchOn Labs</li>

        <li className={styles.headerRight}>
          <a onClick={() => window.open("mailto:info@CatchOnLabs.com")}>
            Contact US
          </a>
        </li>
        <li className={styles.headerRight}>
          <a href="#whoweare">Our Team</a>
        </li>
        <li className={styles.headerRight}>
          <a href="#whatwedo">Our work</a>
        </li>
      </ul>
    </div>
  );
};
