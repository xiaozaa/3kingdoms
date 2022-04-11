import React, { useState } from "react";
// import { useTranslation } from "react-i18next";

import { Header } from "../header";
import { Footer } from "../footer";
import { ParticleBackground } from "../content/particleBackground";

import { FlipCard } from "./flipCard";

import huaguang_front from "../images/cards/huaguang_front.png";
import huaguang_back from "../images/cards/huaguang_back.png";
import martket_front from "../images/cards/martket_front.png";
import martket_back from "../images/cards/martket_back.png";
import gango_front from "../images/cards/gango_front.png";
import gango_back from "../images/cards/gango_back.png";
import founder_front from "../images/cards/founder_front.png";
import founder_back from "../images/cards/founder_back.png";
import catchon_front from "../images/cards/catchon_front.png";
import catchon_back from "../images/cards/catchon_back.png";
import yao_front from "../images/cards/yao_front.png";
import yao_back from "../images/cards/yao_back.png";
import wy_front from "../images/cards/wy_front.png";
import wy_back from "../images/cards/wy_back.png";
import bad_front from "../images/cards/bad_front.png";
import bad_back from "../images/cards/bad_back.png";

import styles from "./index.module.css";

export const Team = () => {
  // const { t } = useTranslation();

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
    <div className={styles.teamWrapper}>
      <Header />
      <div className={styles.teamContent}>
        <div className={styles.title}>
          <h1>MEET THE TEAM</h1>
          <p>
            If you want to know more about the Three Kingdoms nft team members,
            please check out <a href={"https://mirror.xyz/0x5378FBa192228681473ad1881AaEBff9fB11C9D9/aDhZC6f8ipmaBOZeW-gfzQzdbnAm0ThArUbQvuhxaq0"}>here</a>.{" "}
          </p>
        </div>
        <hr />
        <div className={styles.main}>
          <FlipCard
            props={{
              front: founder_front,
              back: founder_back,
              isFlipped: false,
            }}
          />
          <FlipCard
            props={{
              front: bad_front,
              back: bad_back,
              isFlipped: false,
            }}
          />
          <FlipCard
            props={{
              front: huaguang_front,
              back: huaguang_back,
              isFlipped: false,
            }}
          />
          <FlipCard
            props={{
              front: wy_front,
              back: wy_back,
              isFlipped: false,
            }}
          />
          <FlipCard
            props={{
              front: yao_front,
              back: yao_back,
              isFlipped: false,
            }}
          />
          <FlipCard
            props={{
              front: martket_front,
              back: martket_back,
              isFlipped: false,
            }}
          />
          <FlipCard
            props={{
              front: gango_front,
              back: gango_back,
              isFlipped: false,
            }}
          />

          <FlipCard
            props={{
              front: catchon_front,
              back: catchon_back,
              isFlipped: false,
            }}
          />
        </div>
      </div>
      <Footer />
      <ParticleBackground />
    </div>
  );
};
