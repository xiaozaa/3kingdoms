import React from "react";

import sanGuoImg from "../images/sanguo.png";
import { useTranslation } from "react-i18next";
import { Fire } from "./fire";

import styles from "./index.module.css";

export const Content = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.contentWrapper}>
      <div className={styles.banner}>
        {/* <div className={styles.title}>{t("home.comingsoon")}</div> */}
        <div className={styles.centerWrapper}>
          <img src={sanGuoImg} />
          <div className={styles.threeKingdoms}>THREE KINGDOMS</div>
          <Fire />
        </div>
        <div className={styles.subTitle}>4000 Legendary NFTs</div>
      </div>
    </div>
  );
};
