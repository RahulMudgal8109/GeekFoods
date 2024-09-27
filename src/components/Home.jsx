import React from "react";
import styles from "./../css/Home.module.css";
import home from "./../assets/home.avif";

const Home = () => {
  return (
    <>
      <div className={styles.home}>
        <div className={styles.first}>
          <div className={styles.overlay}></div>
          <div className={styles.left}>
            <h1 className={styles.find}>Let Us Find Your</h1>
            <h1 className={styles.find2}>Forever Food</h1>

            <p className={styles.para}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
              illo tenetur fuga ducimus numquam ea!
            </p>
            <div className={styles.buttons}>
              <button className={styles.search}>Search Now</button>
              <button className={styles.know}>Know More</button>
            </div>
          </div>
        </div>
        <div className={styles.second}>
          <div className={styles.image}>
            <img src={home} />
          </div>
          <div className={styles.secondRight}>
            <div className={styles.text}>
              <h2>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Tempore, debitis.
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aliquid, molestiae! Quidem est esse numquam odio deleniti,
                beatae, magni dolores provident quaerat totam eos, aperiam
                architecto eius quis quibusdam fugiat dicta.
              </p>
              <button className={styles.get}>Get In Touch</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
