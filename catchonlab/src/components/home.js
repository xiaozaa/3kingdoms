import React from "react";

import styles from "./home.module.css";

import { Header } from "./header";

export const Home = () => {
  return (
    <div className={styles.homeWrapper}>
      <Header />
      <div className={styles.smileWrapper}>
        <img
          className={styles.smileFlower}
          alt={""}
          src={require("../images/flower-left.png")}
        />
        <img alt={""} src={require("../images/_24.gif")} />
        <img
          className={styles.smileFlower}
          alt={""}
          src={require("../images/flower-right.png")}
        />
      </div>
      <img
        className={styles.comingSoon}
        alt={""}
        src={require("../images/coming soon_.png")}
      />
      <img
        className={styles.followUsOn}
        alt={""}
        src={require("../images/follow us on.png")}
      />
      <div className={styles.buttonsWrapper}>
        <a
          href="https://discord.gg/wHYaBDgasG"
          target="_blank"
          rel="noreferrer"
        >
          <img src={require("../images/discord.png")} alt={"discord"} />
        </a>
        <a
          href="https://twitter.com/SmiliesNFT"
          target="_blank"
          rel="noreferrer"
        >
          <img src={require("../images/twitter.png")} alt={"twitter"} />
        </a>
      </div>
    </div>
  );
};
