import React, { useState } from "react";
import styles from "../Homepage/Homepage.module.scss";
import images from "./../../data/images";
import { Helmet } from "react-helmet";

const Homepage = () => {
  return (
    <div className={styles.homepageContainer}>
      <Helmet>
        <meta name="description" content="HomePage" />
      </Helmet>

      <div className={styles.header}>
        <div className={styles.logoDiv}>
          <div className={styles.logoImg}>
            <img src={images.homepage.logoNew} alt="logo" />
          </div>
          <div className={styles.logoText}>QuizGenerator</div>
        </div>

        <div className={styles.headerBtn}>
          <button>Sign Up</button>
        </div>
      </div>

      <div className={styles.homeWrapper}>
        <div className={styles.firstBox}>
          <div className={styles.mainTitle}>What’s Next In Your Knowledge Quest</div>
          <div className={styles.boxText}>
            Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s.Lorem ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
          </div>
          <div className={styles.boxBtns}>
            <button className={styles.greenBtn}>Sign Up</button>
            <button className={styles.whiteBtn}>Learn More</button>
          </div>
        </div>

        <div className={styles.secondBox}>
          <div className={styles.class}>
            <img src={images.homepage.newArrow} alt="/" />
            <div className={styles.classTitle}>Mathematics</div>
            <div className={styles.classText}>Lorem ipsum dolor sit amet, consectur adipsicing elit.</div>
          </div>
          <div className={styles.class}>
            <img src={images.homepage.newArrow} alt="/" />
            <div className={styles.classTitle}>Computer Science</div>
            <div className={styles.classText}>Lorem ipsum dolor sit amet, consectur adipsicing elit.</div>
          </div>
          <div className={styles.class}>
            <img src={images.homepage.newArrow} alt="/" />
            <div className={styles.classTitle}>Literature</div>
            <div className={styles.classText}>Lorem ipsum dolor sit amet, consectur adipsicing elit.</div>
          </div>
          <div className={styles.class}>
            <img src={images.homepage.newArrow} alt="/" />
            <div className={styles.classTitle}>CCNA</div>
            <div className={styles.classText}>Lorem ipsum dolor sit amet, consectur adipsicing elit.</div>
          </div>
        </div>

        <div className={styles.thirdBox}>
          <div className={styles.thirdMainTitle}>Lorem ipsum lorem ipsum</div>
          <div className={styles.thirdText}>
            It is a long established fact that a reader will be distracted by the readable content of a page when
            looking at its layout.The point of using Lorem Ipsum is that it has a more-or-less normal distribution of
            letters, as opposed to using 'Content here, content here', making it look like readable English. Many
            desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a
            search for 'lorem ipsum' will uncover many web sites still in their infancy. <br /> <br /> <br /> <br />
            Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour
            and the like).
          </div>
          <div className={styles.lastDiv}>
            <div className={styles.wrappLast}>
              <div className={styles.numberLast}> 20+</div>
              <div className={styles.textLast}>SUBJECTS TO CHOOSE FROM</div>
            </div>
            <div className={styles.wrappLast}>
              <div className={styles.numberLast}> 100</div>
              <div className={styles.textLast}>UP TO 100 QUESTIONS PER SHEET</div>
            </div>
            <div className={styles.wrappLast}>
              <div className={styles.numberLast}> 4</div>
              <div className={styles.textLast}>DIFFERENT TYPES OF SHEETS</div>
            </div>
          </div>
        </div>

        <div className={styles.forthDiv}>
          <div className={styles.forthWrapp}>
            <div className={styles.forthImg}>
              <img src={images.homepage.book} alt="/" />{" "}
            </div>
            <div className={styles.forthText}>Generate Quizzes with multiple answares.</div>
          </div>

          <div className={styles.forthWrapp}>
            <div className={styles.forthImg}>
              <img src={images.homepage.book} alt="/" />{" "}
            </div>
            <div className={styles.forthText}>
              Generate exam sheets with exercises which requires complete solutions.
            </div>
          </div>

          <div className={styles.forthWrapp}>
            <div className={styles.forthImg}>
              <img src={images.homepage.book} alt="/" />{" "}
            </div>
            <div className={styles.forthText}>Choose from a wide range of topics.</div>
          </div>

          <div className={styles.forthWrapp}>
            <div className={styles.forthImg}>
              <img src={images.homepage.book} alt="/" />{" "}
            </div>
            <div className={styles.forthText}>Export documents in PDF, XLSX and other formats.</div>
          </div>
          <div className={styles.forthWrapp}>
            <div className={styles.forthImg}>
              <img src={images.homepage.book} alt="/" />{" "}
            </div>
            <div className={styles.forthText}>More than 20 languages supported.</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
