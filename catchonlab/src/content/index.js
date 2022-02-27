import React from "react";

import { GrDocumentText, GrShieldSecurity } from "react-icons/gr";
import { MdDraw } from "react-icons/md";
import { CgWebsite } from "react-icons/cg";

import styles from "./index.module.css";

export const Content = () => {
  return (
    <div className={styles.contentWrapper}>
      <div className={styles.banner}>
        <div className={styles.title}>
          <span>Forge</span>
          <span className={styles.greenDecoration}>NFT</span>
          <span>Smoothly</span>
        </div>
        <p className={styles.subtitle}>
          We create smart contracts, websites and everything related to your nft
          art.
        </p>
      </div>

      <div className={styles.content}>
        <h3 id="whatwedo">What We Do</h3>
        <div className={styles.contentTxt}>
          <div className={styles.contentTxtLeft}>
            <GrDocumentText />
          </div>
          <div className={styles.contentTxtRight}>
            <b>Smart contracts:</b>
            <br /> We focus on NFT developments. Help you to launch your own
            NFTs that you’ve wanted. Audit the smart contracts and make it bug
            free.
          </div>
        </div>

        <div className={styles.contentTxt}>
          <div className={styles.contentTxtLeft}>
            <MdDraw className={styles.contentTxtBlackBG} />
          </div>
          <div className={styles.contentTxtRight}>
            <b>Art Generation:</b>
            <br /> We provide services to generate a thousand variations of your
            art with traits. Deliver your art with top security. We are always
            here to help you.
          </div>
        </div>

        <div className={styles.contentTxt}>
          <div className={styles.contentTxtLeft}>
            <GrShieldSecurity />
          </div>
          <div className={styles.contentTxtRight}>
            <b>Mint/Reveal helper:</b>
            <br /> We provide a codebase of smooth mint and reveal. Monitor
            networks during mint and reveal. Protect you from bots/ddos or
            sniper attacks.
          </div>
        </div>

        <div className={styles.contentTxt}>
          <div className={styles.contentTxtLeft}>
            <CgWebsite className={styles.contentTxtBlackBG} />
          </div>
          <div className={styles.contentTxtRight}>
            <b>Web Development:</b>
            <br /> We create a high quality website for you to demonstrate your
            art and collection. Integrate web3 in your website. Bring your
            customers to the metaverse.
          </div>
        </div>

        <h3 id="whoweare">Who We Are</h3>
        <div className={styles.contentTxt}>
          <b>
            CatchOn Labs is born in Silicon Valley. Our team consists of ex-big
            tech engineers. 5 and more years industry experience for software
            development. NFT enthusiasts. We do fullstack!
          </b>
        </div>
      </div>
    </div>
  );
};
