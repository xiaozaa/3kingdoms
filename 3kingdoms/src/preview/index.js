import React, { useState } from "react";

import { Header } from "../header";
import { Content } from "../content";
import { Footer } from "../footer";
import { ParticleBackground } from "../content/particleBackground";
import styles from "./index.module.css";

import wei from "../images/preview/wei.webp";
import shu from "../images/preview/shu.webp";
import wu from "../images/preview/wu.webp";
import qun from "../images/preview/qun.webp";

export const Preview = () => {
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
    <div>
      <Header />
      <div className={styles.previewWrapper}>
        <header>
          <div>
            <h1>MEET YOUR HEROS</h1>
            <p>👇 Scroll down to choose your kingdom.</p>
          </div>
        </header>
        <main>
          <ul className={styles.cards}>
            <li className={`${styles.card} ${styles.card_1}`}>
              <div className={styles.card__content}>
                <div>
                  <h2>WEI</h2>
                  <p>
                    One of the three major states in the Three Kingdoms period.
                  </p>
                  <p>
                    <a
                      href="#top"
                      className={`{styles.btn} {styles.btn--accent}`}
                    >
                      Join Wei Now
                    </a>
                  </p>
                </div>
                <figure>
                  <img
                    src={wei}
                    alt="Wei"
                  />
                </figure>
              </div>
            </li>
            <li className={`${styles.card} ${styles.card_2}`}>
              <div className={styles.card__content}>
                <div>
                  <h2>SHU</h2>
                  <p>
                    One of the three major states in the Three Kingdoms period.
                  </p>
                  <p>
                    <a
                      href="#top"
                      className={`{styles.btn} {styles.btn--accent}`}
                    >
                      Join Shu Now
                    </a>
                  </p>
                </div>
                <figure>
                  <img
                    src={shu}
                    alt="Shu"
                  />
                </figure>
              </div>
            </li>
            <li className={`${styles.card} ${styles.card_3}`}>
              <div className={styles.card__content}>
                <div>
                  <h2>Wu</h2>
                  <p>
                    One of the three major states in the Three Kingdoms period.
                  </p>
                  <p>
                    <a
                      href="#top"
                      className={`{styles.btn} {styles.btn--accent}`}
                    >
                      Join Wu Now
                    </a>
                  </p>
                </div>
                <figure>
                  <img
                    src={wu}
                    alt="Wu"
                  />
                </figure>
              </div>
            </li>
            <li className={`${styles.card} ${styles.card_4}`}>
              <div className={styles.card__content}>
                <div>
                  <h2>Qun</h2>
                  <p>
                    One of the three major states in the Three Kingdoms period.
                  </p>
                  <p>
                    <a
                      href="#top"
                      className={`{styles.btn} {styles.btn--accent}`}
                    >
                      Join Qun Now
                    </a>
                  </p>
                </div>
                <figure>
                  <img
                    src={qun}
                    alt="Qun"
                  />
                </figure>
              </div>
            </li>
          </ul>
        </main>
      </div>
      <Footer />
      <ParticleBackground />
    </div>
  );
};
