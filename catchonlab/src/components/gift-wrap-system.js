import React from "react";
import styles from "./gift-wrap-system.module.css";

export const GiftWrapSystem = () => {
  return (
    <div id={"giftwrap"} className={styles.giftWrapSystem}>
      <h1>The GIFTWRAP SYSTEM</h1>
      <p>
        A yearly tradition of Smerk Town is the soul check festival. During this
        auspicious event, each smilie undergoes a scan revealing the inner
        contents of their soul. During this event, the heads of each smilie are
        opened and the inner characteristics are chosen.
      </p>
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
        a wrap nft will be airdrop to all smilies holders. You are able to
        reroll one time per festival if you are unhappy with the new
        characteristic of your smilie. Although this is a great event, there are
        chances of failing this procedure, which can lead to possessing an bad
        soul. We are yet to discover what is causing the bad souls, they may be
        part of something bigger.
      </p>
    </div>
  );
};
