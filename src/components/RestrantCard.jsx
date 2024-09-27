import React from "react";
import styles from "./../css/RestrauntCard.module.css";
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";

const RestrantCard = (data) => {
  // console.log(Math.floor(data.rating));

  return (
    <div>
      <div className={styles.card}>
        <div className={styles.resName}>
          <h3> {data.name}</h3>
          {[...new Array(5)].map((item, index) => {
            return data.rating >= index + 1 ? <FaStar /> : <CiStar />;
          })}
        </div>
        <div className={styles.location}>
          <p>{data.address}</p>
        </div>
        <div className={styles.resName}>
          <p>{data["address line 2"]}</p>
        </div>
        <div className={styles.bottom}>
          <div className={styles.recipe}>
            <h4>{data.address}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestrantCard;
