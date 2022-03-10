import React from "react";
import { useTranslation } from "react-i18next";

import styles from "./index.module.css";

export const Footer = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.footerWrapper}>
      <div className={styles.socialMediaWrapper}>
        <ul>
          {/* twitter */}
          <li className={styles.icon}>
            <a
              href={"https://twitter.com/3KingdomsClub"}
              target="_blank"
              className={styles.twitter}
            ></a>
          </li>
          {/* discord */}
          <li className={styles.icon}>
            <a
              href={"https://discord.com/invite/2HGQ7FdJDu"}
              target="_blank"
              className={styles.discord}
            ></a>
          </li>
        </ul>
      </div>
      <div className={styles.copyright}>
        <p>{t("home.copyright")}</p>
      </div>
    </div>
  );
};
