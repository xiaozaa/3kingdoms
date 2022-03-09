import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import { Header } from "../header";
import { Footer } from "../footer";

import xuShengImg from "../images/xusheng.webp";

import phase1 from "../images/phases/phase1.png";
import phase1_click from "../images/phases/phase1_click.png";
import phase2 from "../images/phases/phase2.png";
import phase2_click from "../images/phases/phase2_click.png";
import phase3 from "../images/phases/phase3.png";
import phase3_click from "../images/phases/phase3_click.png";

import styles from "./index.module.css";

export const Roadmap = () => {
  const [phase, setPhase] = useState("phase1");
  const { t } = useTranslation();

  return (
    <div className={styles.roadmapWrapper}>
      <Header />
      <div className={styles.main}>
        <div className={styles.mainLeft}>
          <div>
            <div className={styles.mainBanner}>
              <img
                onClick={() => {
                  setPhase("phase1");
                }}
                src={phase === "phase1" ? phase1_click : phase1}
              />
              <img
                onClick={() => {
                  setPhase("phase2");
                }}
                src={phase === "phase2" ? phase2_click : phase2}
              />
              <img
                onClick={() => {
                  setPhase("phase3");
                }}
                src={phase === "phase3" ? phase3_click : phase3}
              />
            </div>
            {phase === "phase1" && (
              <div>
                <h1>{t("roadmap.p1_1")}</h1>
                <p>{t("roadmap.p1_2")}</p>
                <p>{t("roadmap.p1_3")}</p>
                <p>{t("roadmap.p1_4")} </p>
                <p>{t("roadmap.p1_5")}</p>
                <p>{t("roadmap.p1_6")}</p>
                <p>{t("roadmap.p1_7")}</p>
                {/* <p>{t("roadmap.p1_8")}</p> */}
              </div>
            )}

            {phase === "phase2" && (
              <div>
                <h1>{t("roadmap.p2_1")}</h1>
                <p>{t("roadmap.p2_2")}</p>
                <p>{t("roadmap.p2_3")}</p>
                <p>{t("roadmap.p2_4")} </p>
                <p>{t("roadmap.p2_5")}</p>
                <p>{t("roadmap.p2_6")}</p>
                <p>{t("roadmap.p2_7")}</p>
              </div>
            )}
            {phase === "phase3" && (
              <div>
                <h1>{t("roadmap.p3_1")}</h1>
                <p>{t("roadmap.p3_2")}</p>
                <p>{t("roadmap.p3_3")}</p>
                <p>{t("roadmap.p3_4")} </p>
                <p>{t("roadmap.p3_5")}</p>
                <p>{t("roadmap.p3_6")}</p>
              </div>
            )}
          </div>
        </div>
        <div className={styles.mainRight}>
          <img src={xuShengImg} />
        </div>
      </div>
      <Footer />
    </div>
  );
};
