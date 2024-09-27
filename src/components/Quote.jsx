import React from 'react'
import styles from './../css/Quote.module.css';


const Quote = (props) => {
    const {data}=props;
    console.log(data)
   
  return (
    <div className={styles.card}>
        <div className={styles.quote}>{data.quote}</div>
        <div className={styles.author}>{data.author}</div> 
    </div>
  )
}

export default Quote