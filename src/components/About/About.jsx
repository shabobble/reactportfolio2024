import React from "react";
import { getImageUrl } from "../../utils";
import Lottie from "react-lottie";
import animationData from "../../../assets/lotties/man-with-laptop";
import styles from "./About.module.css";

export const About = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <div className={styles.lottieContainer}>
          <Lottie
            className={styles.aboutImage}
            options={defaultOptions}
            height={400}
            width={400}
          />
        </div>
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Web Developer</h3>
              <p>
                I'm a web developer with experience in building responsive and
                optimized sites.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>.NET Developer</h3>
              <p>
                I have experience working with C#, Blazor, .NET, Telerik, and
                have contributed to the creation of a new ERP.
              </p>
            </div>
          </li>
          <li className={`${styles.aboutItem} ${styles.drupalItem}`}>
            <img src={getImageUrl("about/drupalIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Drupal Developer</h3>
              <p>
                I have built multiple Drupal sites and have created custom
                themes as well.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
