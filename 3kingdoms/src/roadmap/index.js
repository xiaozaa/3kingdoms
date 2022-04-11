import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import { Header } from "../header";
import { Footer } from "../footer";
import { ParticleBackground } from "../content/particleBackground";

import phase1 from "../images/phases/phase1.png";
import phase1_click from "../images/phases/phase1_click.png";
import phase2 from "../images/phases/phase2.png";
import phase2_click from "../images/phases/phase2_click.png";
import phase3 from "../images/phases/phase3.png";
import phase3_click from "../images/phases/phase3_click.png";

import rd1 from "../images/roadmap/mk1 2.png";
import rd2 from "../images/roadmap/mk2 2.png";
import rd3 from "../images/roadmap/mk3 2.png";

import styles from "./index.module.css";

export const Roadmap = () => {
  const [phase, setPhase] = useState("phase1");
  const { t } = useTranslation();

  const authenticate = () => {
    return new Promise((resolve) => setTimeout(resolve, 500));
  };

  useState(() => {
    authenticate().then(() => {
      const ele = document.getElementById("ipl-progress-indicator");
      if (ele) {
        ele.classList.add("available");
        setTimeout(() => {
          ele.outerHTML = "";
        }, 1000);
      }
    });
  });

  return (
    <div className={styles.roadmapWrapper}>
      <Header />
      <div className={styles.top}>
        <h1>OUR ROADMAP</h1>
        <p>
          If you want to know more about the Three Kingdoms nft roadmap, please
          check out <a href={"https://mirror.xyz/0x5378FBa192228681473ad1881AaEBff9fB11C9D9/aDhZC6f8ipmaBOZeW-gfzQzdbnAm0ThArUbQvuhxaq0"}>here</a>.
        </p>
      </div>
      <div className={styles.main}>
        <div className={styles.mainLeft}>
          <div>
            <div className={styles.mainBanner}>
              <img
                onClick={() => {
                  setPhase("phase1");
                }}
                src={phase === "phase1" ? phase1 : phase1_click}
              />
              <img
                onClick={() => {
                  setPhase("phase2");
                }}
                src={phase === "phase2" ? phase2 : phase2_click}
              />
              <img
                onClick={() => {
                  setPhase("phase3");
                }}
                src={phase === "phase3" ? phase3 : phase3_click}
              />
            </div>
          </div>
        </div>
        <div className={styles.mainMiddle}></div>
        <div className={styles.mainRight}>
          <div
            className={`${styles.text} ${phase === "phase1" ? styles.active : ""
              }`}
          >
            <div>
              <h2>初出茅庐</h2>
              <p>The token of heros</p>
              {/* <p>{t("roadmap.p1_2")}</p>
              <p>{t("roadmap.p1_3")}</p>
              <p>{t("roadmap.p1_4")} </p> */}
              <p>A total of 4000 NFTs will be created base on 80 classic Three Kingdoms characters.</p>
              <p>Reveal Three Kingdoms character NFTs combo for future various airdrops.</p>
              <p>Regularly hold NFT community education activities, provide tokenized rewards to community contributors.</p>
            </div>
            <img className={styles.textImg} src={rd1} />
          </div>

          <div
            className={`${styles.text} ${phase === "phase2" ? styles.active : ""
              }`}
          >
            <div>
              <h2>群雄割据</h2>
              <p>The token of heros</p>
              {/* <p>{t("roadmap.p2_2")}</p>
              <p>{t("roadmap.p2_3")}</p>
              <p>{t("roadmap.p2_4")} </p>
              <p>{t("roadmap.p2_5")}</p> */}
              <p>Create Three Kingdoms Land NFT for combo holder and start staking system for both NFTs.</p>
              <p>Various of physical airdrops will be delivered according to snapshots and stacking.</p>
              <p>Increase game features and types of game base on character NFT and land NFT.</p>
              <p>Represent, publicity and create NFT projects of traditional oriental culture NFTs.</p>
            </div>
            <img className={styles.textImg} src={rd2} />
          </div>

          <div
            className={`${styles.text} ${phase === "phase3" ? styles.active : ""
              }`}
          >
            <div>
              <h2>壹齐天下</h2>
              <p>The token of heros</p>
              {/* <p>{t("roadmap.p3_2")}</p>
              <p>{t("roadmap.p3_3")}</p>
              <p>{t("roadmap.p3_4")} </p> */}
              <p>Create interactive pfp NFT base on snapshots from phase 1 and phase 2.</p>
              <p>Empower NFT with community cooperation and function development.</p>
              <p>Improve the war system and community system through the Three Kingdoms metaverse.</p>
            </div>
            <img className={styles.textImg} src={rd3} />
          </div>
        </div>
      </div>
      <Footer />
      <ParticleBackground />
    </div >
  );
};
