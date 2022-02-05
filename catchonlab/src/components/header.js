import React from "react";
import { HashLink as Link } from "react-router-hash-link";

import { FaDiscord } from "react-icons/fa";

import styles from "./header.module.css";

export const Header = () => {
  return (
    <div className={styles.headerWrapper}>
      <span className={styles.headerLeft}>Smiles</span>
      <div className={styles.headerRight}>
        <Link to="#welcome">Smerktown Smiles</Link>
        <Link to="#giftwrap">Giftwrap System</Link>
        <Link to="#roadmap">Smile Trip</Link>
        <Link to="#faq">FAQ</Link>
        <a
          href="https://discord.gg/wHYaBDgasG"
          target="_blank"
          rel="noreferrer"
        >
          <FaDiscord size={25} />
        </a>
      </div>
    </div>
  );
};
