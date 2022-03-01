import React from "react";
import { useTranslation } from "react-i18next";

import styles from "./index.module.css";

export const Footer = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.footerWrapper}>
      <p>{t("home.copyright")}</p>
    </div>
  );
};
