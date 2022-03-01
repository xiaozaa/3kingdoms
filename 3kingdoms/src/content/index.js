import React from "react";

import csImg from "../images/coming soon.png";
import { useTranslation } from "react-i18next";

import styles from "./index.module.css";

export const Content = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.contentWrapper}>
      <div className={styles.banner}>
        <div className={styles.title}>{t("home.comingsoon")}</div>
      </div>
    </div>
  );
};
