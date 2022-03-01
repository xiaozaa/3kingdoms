import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { useTranslation } from "react-i18next";

import languageImg from "../images/language.png";

import styles from "./index.module.css";

const lngs = {
  en: { nativeName: "English" },
  zh: { nativeName: "Chinese" },
};

export const Header = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className={styles.headerWrapper}>
      <ul>
        {/* LEFT */}
        <li className={styles.logoImg}>
          <a href="/">{t("home.threekingdoms")}</a>
        </li>

        {/* RIGHT */}
        {/* I18N */}
        <li className={`${styles.headerRight} ${styles.icon} ${styles.lng}`}>
          <Dropdown>
            <Dropdown.Toggle>
              <img src={languageImg} />
            </Dropdown.Toggle>
            <Dropdown.Menu className={styles.dropdownMenu}>
              {Object.keys(lngs).map((lng) => (
                <Dropdown.Item
                  style={{
                    color: i18n.resolvedLanguage === lng ? "#9E3C3D" : "white",
                  }}
                  onClick={() => {
                    i18n.changeLanguage(lng);
                  }}
                >
                  {lngs[lng].nativeName}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </li>
        {/* discord */}
        <li className={`${styles.headerRight} ${styles.icon}`}>
          <a
            href={"https://discord.com/invite/2HGQ7FdJDu"}
            target="_blank"
            className={styles.discord}
          ></a>
        </li>
        {/* twitter */}
        <li className={`${styles.headerRight} ${styles.icon}`}>
          <a
            href={"https://twitter.com/3KingdomsClub"}
            target="_blank"
            className={styles.twitter}
          ></a>
        </li>
      </ul>
    </div>
  );
};
