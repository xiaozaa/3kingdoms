import React from "react";

import styles from "./home.module.css";

import { Header } from "./header";
import { SmerktownSmiles } from "./smerktown-smiles";
import { GiftWrapSystem } from "./gift-wrap-system";
import { Roadmap } from "./roadmap";

export const Home = () => {
  return (
    <div className={styles.App}>
      <Header />
      <SmerktownSmiles />
      <GiftWrapSystem />
      <Roadmap />
    </div>
  );
};
