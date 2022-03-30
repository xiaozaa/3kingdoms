import React, { useState } from "react";

import styles from "./index.module.css";

export const Preview = () => {
  const authenticate = () => {
    return new Promise((resolve) => setTimeout(resolve, 1000));
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
    <div className={styles.previewWrapper}>
      <header>
        <div>
          <h1>Stacking Cards</h1>
          <p>👇 Scroll down to see the effect.</p>
        </div>
      </header>
      <main>
        <ul className={styles.cards}>
          <li className={`${styles.card} ${styles.card_1}`}>
            <div className={styles.card__content}>
              <div>
                <h2>Card One</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <p>
                  <a
                    href="#top"
                    className={`{styles.btn} {styles.btn--accent}`}
                  >
                    Read more
                  </a>
                </p>
              </div>
              <figure>
                <img
                  src="https://codyhouse.co/demo-tutorials/stacking-cards/assets/img/img-1.jpg"
                  alt="Image description"
                />
              </figure>
            </div>
          </li>
          <li className={`${styles.card} ${styles.card_2}`}>
            <div className={styles.card__content}>
              <div>
                <h2>Card Two</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <p>
                  <a
                    href="#top"
                    className={`{styles.btn} {styles.btn--accent}`}
                  >
                    Read more
                  </a>
                </p>
              </div>
              <figure>
                <img
                  src="https://codyhouse.co/demo-tutorials/stacking-cards/assets/img/img-2.jpg"
                  alt="Image description"
                />
              </figure>
            </div>
          </li>
          <li className={`${styles.card} ${styles.card_3}`}>
            <div className={styles.card__content}>
              <div>
                <h2>Card Three</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <p>
                  <a
                    href="#top"
                    className={`{styles.btn} {styles.btn--accent}`}
                  >
                    Read more
                  </a>
                </p>
              </div>
              <figure>
                <img
                  src="https://codyhouse.co/demo-tutorials/stacking-cards/assets/img/img-3.jpg"
                  alt="Image description"
                />
              </figure>
            </div>
          </li>
          <li className={`${styles.card} ${styles.card_4}`}>
            <div className={styles.card__content}>
              <div>
                <h2>Card Four</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <p>
                  <a
                    href="#top"
                    className={`{styles.btn} {styles.btn--accent}`}
                  >
                    Read more
                  </a>
                </p>
              </div>
              <figure>
                <img
                  src="https://codyhouse.co/demo-tutorials/stacking-cards/assets/img/img-2.jpg"
                  alt="Image description"
                />
              </figure>
            </div>
          </li>
        </ul>
      </main>
    </div>
  );
};
