import React from "react";
import { useTranslation } from "react-i18next";

import { Header } from "../header";
import { Footer } from "../footer";

import { FlipCard } from "./flipCard";

import front1 from "../images/cards/2_front.png";
import back1 from "../images/cards/1_back.png";
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

import styles from "./index.module.css";

export const Team = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.teamWrapper}>
      <Header />
      <div className={styles.teamContent}>
        <div className={styles.title}>
          <h1>{t("home.bigGuysGather")}</h1>
          <p>{t("home.itsAllYou")}</p>
        </div>
        <hr />
        <div className={styles.main}>
          <FlipCard
            props={{
              front: front1,
              back: back1,
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
              front: founder_front,
              back: founder_back,
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
          <FlipCard
            props={{
              front: front1,
              back: back1,
              isFlipped: false,
            }}
          />
          <FlipCard
            props={{
              front: front1,
              back: back1,
              isFlipped: false,
            }}
          />
          <FlipCard
            props={{
              front: front1,
              back: back1,
              isFlipped: false,
            }}
          />
          <FlipCard
            props={{
              front: front1,
              back: back1,
              isFlipped: false,
            }}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};
