import React from "react";
import styles from "./roadmap.module.css";

export const Roadmap = () => {
  return (
    <div id={"roadmap"} className={styles.roadMapWrapper}>
      <h1>Road Map</h1>

      <div className={styles.timeline}>
        <div className={styles.timelineItem}>
          <div className={styles.timelineIcon}>
            <img src={require("../images/roadmap/1s.png")} />
          </div>
          <div className={styles.timelineContent}>
            <h2>launch</h2>
            <p>the smilie nft will be released in mach</p>
          </div>
        </div>

        <div className={styles.timelineItem}>
          <div className={styles.timelineIcon}>
            <img src={require("../images/roadmap/2s.png")} />
          </div>
          <div
            className={`${styles.timelineContent} ${styles.timelineContentRight}`}
          >
            <h2>giftwrap system</h2>
            <p>
              smilies enter their annual soulcheck wrap nft will be airdrop to
              holders
            </p>
          </div>
        </div>

        <div className={styles.timelineItem}>
          <div className={styles.timelineIcon}>
            <img src={require("../images/roadmap/3s.png")} />
          </div>
          <div className={styles.timelineContent}>
            <h2>soul pass</h2>
            <p>
              soul pass will be airdrop to holders according to their soulcheck
              result
            </p>
          </div>
        </div>

        <div className={styles.timelineItem}>
          <div className={styles.timelineIcon}>
            <img src={require("../images/roadmap/4s.png")} />
          </div>
          <div
            className={`${styles.timelineContent} ${styles.timelineContentRight}`}
          >
            <h2>pass utility</h2>
            <p>
              a portion of the holders will be airdrop a fail pass, fail simlie
              will be absorb by a evil forcev...
            </p>
          </div>
        </div>

        <div className={styles.timelineItem}>
          <div className={styles.timelineIcon}>
            <img src={require("../images/roadmap/5s.png")} />
          </div>
          <div className={styles.timelineContent}>
            <h2>phase 2</h2>
            <p>tbd</p>
          </div>
        </div>
      </div>
    </div>
  );
};
