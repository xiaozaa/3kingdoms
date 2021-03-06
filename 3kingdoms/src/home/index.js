import React, { Component } from "react";

import { Header } from "../header";
import { Content } from "../content";
import { Footer } from "../footer";
import { ParticleBackground } from "../content/particleBackground";

import styles from "./index.module.css";

export class Home extends Component {
  constructor(props) {
    super(props);
  }

  authenticate() {
    return new Promise((resolve) => setTimeout(resolve, 1500));
  }

  componentDidMount() {
    this.authenticate().then(() => {
      const ele = document.getElementById("ipl-progress-indicator");
      if (ele) {
        ele.classList.add("available");
        setTimeout(() => {
          ele.outerHTML = "";
        }, 1000);
      }
    });
  }

  render() {
    return (
      <div className={styles.HomeWrapper}>
        <Header />
        <Content />
        <Footer />
        <ParticleBackground />
      </div>
    );
  }
}
