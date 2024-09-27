import React from 'react'
import logo from "./../assets/logo.svg"
import styles from "./../css/Navbar.module.css"
import {  Link } from "react-router-dom";


const Navbar = () => {
  return (
    <>
    <div className={styles.navbar}>
    <div className={styles.icon}>
        <img src={logo}/>
        <h4 className="">GeeksFood</h4>

    </div>
    <div className="">
        <ul className={styles.menus}>
            <li className={styles.menu}><Link className={styles.black} to="/">Home</Link></li>
            <li className={styles.menu}><Link className={styles.black} to="quotes">Quote</Link></li>
            <li className={styles.menu}><Link className={styles.black}to="restraunt">Restraunt</Link></li>
            <li className={styles.menu}><Link className={styles.black} to="/">Food </Link></li>
            <li className={styles.menu}><Link className={styles.black} to="/">Contact</Link></li>
        </ul>
    </div>
    <div className={styles.button}>
        <button>Get Started</button>
    </div>
    </div>
    </>
  )
}

export default Navbar