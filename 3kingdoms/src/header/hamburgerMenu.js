import React from "react";
import { useTranslation } from "react-i18next";
import { slide as Menu } from "react-burger-menu";

import hamburgerMenuStyles from "./hamburgerMenu.module.css";

export const HamburgerMenu = () => {
  var styles = {
    bmBurgerButton: {
      position: "fixed",
      width: "25px",
      height: "20px",
      left: "20px",
      top: "16px",
    },
    bmBurgerBars: {
      background: "var(--color-brown)",
    },
    // bmCrossButton: {
    //   height: "24px",
    //   width: "24px",
    // },
    // bmCross: {
    //   background: "var(--color-brown)",
    // },
    bmMenu: {
      background: "var(--color-dark-grey)",
      padding: "20px",
      fontSize: "18px",
    },
  };
  const { t, i18n } = useTranslation();

  return (
    <Menu styles={styles} className={hamburgerMenuStyles.menuWrapper}>
      <a id="home" href="/">
        {t("home.home")}
      </a>
      <a href="/team">{t("home.team")}</a>
      <a href="/roadmap"> {t("home.roadmap")}</a>
    </Menu>
  );
};
