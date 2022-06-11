import React from "react";
import { Link } from "react-router-dom";

import Wl from "wrapping-letters-react";

import styles from "Src/styles/cvStyles/home.module.sass";

export function home() {
   // the navbar style need a new styles
   // and the button need a function to change the page
   let wlprops = {
      SelectClass: {
         wordToSearch: "resume",
         classToAdd: styles.resume,
      },
      PerWord: true,
   };

   return (
      <div className={styles.home}>
         <div className={styles.bgLetters}>
            <span className={styles.letter}>&&&&&&&&&&</span>
            <span className={styles.letter}>&&&&&&&&&&</span>
            <span className={styles.letter}>&&&&&&&&&&</span>
         </div>
         <Link to="/cv/profile" className={styles.seeResume}>
            <span><Wl text="see resime" textOptions={[{ PerWord: true }]} /></span>
            <div className={styles.ahriuwu}></div>
         </Link>
      </div>
   );
}
