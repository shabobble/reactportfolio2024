import React from "react";

import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Patrick</h1>
        <p className={styles.description}>
          I'm a full stack developer with 3 years of experience using Drupal,
          React, and C#. Reach out if you're like to learn more!
        </p>
        <a className={styles.contactBtn} href="mailto:pksullivan@yahoo.com">
          Contact Me
        </a>
      </div>
      <img
        className={styles.heroImg}
        src={getImageUrl("hero/avatar.png")}
        alt="Hero image of me"
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
