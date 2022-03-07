import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { useTranslation } from "react-i18next";

import languageImg from "../images/language.png";
import { HamburgerMenu } from "./hamburgerMenu";

import styles from "./index.module.css";

const lngs = {
  en: { nativeName: "English" },
  zh: { nativeName: "中文" },
};

export const Header = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className={styles.headerWrapper}>
      <ul>
        {/* LEFT */}
        <li className={`${styles.logoImg} ${styles.webIcon}`}>
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
                  key={lng}
                  style={{
                    color:
                      i18n.resolvedLanguage === lng ? "#d4cbc3" : "#9E3C3D",
                    backgroundColor:
                      i18n.resolvedLanguage === lng ? "#9E3C3D" : "#d4cbc3",
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
        <li
          className={`${styles.headerRight} ${styles.icon} ${styles.webIcon}`}
        >
          <a
            href={"https://discord.com/invite/2HGQ7FdJDu"}
            target="_blank"
            className={styles.discord}
          ></a>
        </li>
        {/* twitter */}
        <li
          className={`${styles.headerRight} ${styles.icon} ${styles.webIcon}`}
        >
          <a
            href={"https://twitter.com/3KingdomsClub"}
            target="_blank"
            className={styles.twitter}
          ></a>
        </li>
        {/* Roadmap */}
        <li
          className={`${styles.headerRight} ${styles.headerText} ${styles.webIcon}`}
        >
          <a href={"/roadmap"}>{t("home.roadmap")}</a>
        </li>
        {/* Team */}
        <li
          className={`${styles.headerRight} ${styles.headerText} ${styles.webIcon}`}
        >
          <a href={"/team"}>{t("home.team")}</a>
        </li>
      </ul>

      <div className={styles.mobileWrapper}>
        <HamburgerMenu />
      </div>
    </div>
  );
};
