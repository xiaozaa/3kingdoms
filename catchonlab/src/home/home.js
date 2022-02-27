import React from "react";

import { Header } from "../header";
import { Content } from "../content";
import { Footer } from "../footer";

import styles from "./home.module.css";

export const Home = () => {
  return (
    <div className={styles.homeWrapper}>
      <Header />
      <Content />
      <Footer />
    </div>
  );
};
