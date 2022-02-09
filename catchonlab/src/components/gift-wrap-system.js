import React from "react";

import styles from "./gift-wrap-system.module.css";

import { Header } from "../components/header";

export const GiftWrapSystem = () => {
  return (
    <div id={"giftwrap"} className={styles.giftWrapSystem}>
      <Header />
      <h1>The GIFTWRAP SYSTEM</h1>
      <div className={styles.giftWrapImagesWrapper}>
        <img src={require("../images/smilie.png")} alt={"gift wrap smilie"} />
        <img
          className={styles.giftWrapImagesIcon}
          src={require("../images/+.png")}
          alt={"plus"}
        />
        <img src={require("../images/giftwrap2.png")} alt={"gift wrap bar"} />
        <img
          className={styles.giftWrapImagesIcon}
          src={require("../images/=.png")}
          alt={"equal"}
        />
        <span>?</span>
      </div>
      <p>
        A yearly tradition of Smerk Town is the soul check festival. During this
        auspicious event, each smilie undergoes a scan revealing the inner
        contents of their soul.
      </p>
      <p>
        During this event, the heads of each smilie are opened and the inner
        characteristics are chosen.
      </p>
      <p>more to come...</p>
    </div>
  );
};
