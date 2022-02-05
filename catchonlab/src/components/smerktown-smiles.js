import React from "react";
import styles from "./smerktown-smiles.module.css";

export const SmerktownSmiles = () => {
  return (
    <div id="welcome">
      <div className={styles.smerktownBackground}>
        <p>SMERKTOWN SMILES</p>
      </div>
      <div className={styles.smerktownSmilesBackground}>
        <div className={styles.smilesText}>
          <h1>The Smiles</h1>
          <p>
            In a distant, radiant land known as Smerk Town, there lived smilies.
            By nature, smilies are jolly, virtuous beings. For thousand of
            years, smilies have survived in peace and prosperity. But as the sun
            continues to shine, shades of darkness begin reflecting upon the
            horizon.
          </p>
        </div>
        <div className={styles.positivelyText}>
          <h1>Spread Positivity</h1>
          <p>
            Join us in an effort to spread happiness and positivity in these
            trying times. Our goals are to modernize and uplift the web3
            revolution and create long lasting, meaningful impact for our
            followers and community. Smilies artwork illustrate a concept
            wholeheartedly known to us, and that is the ideology of staying
            positive, even when the world seems bleak.
          </p>
        </div>
      </div>
      <div className={styles.smerktownSmilesAvatars}>
        <div className={styles.smerktownSmilesAvatarsLine}>
          <img src={require("../images/Layer 8.png")} alt={"Layer 8"} />
          <img src={require("../images/Layer 18.png")} alt={"Layer 18"} />
          <img src={require("../images/Layer 16.png")} alt={"Layer 16"} />
          <img src={require("../images/Layer 17.png")} alt={"Layer 17"} />
          <img src={require("../images/Layer 19.png")} alt={"Layer 19"} />
          <img src={require("../images/Layer 20.png")} alt={"Layer 20"} />
          <img src={require("../images/Layer 23.png")} alt={"Layer 23"} />
          <img src={require("../images/Layer 25.png")} alt={"Layer 25"} />
        </div>
      </div>
    </div>
  );
};
