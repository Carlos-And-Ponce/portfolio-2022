import React, { useRef, useEffect } from "react";

import Wl from "wrapping-letters-react";

import upLetter from "../../../../animations/defaultAnimation/upLetter";
import downLetter from "../../../../animations/defaultAnimation/downLetter";

import styles from "Src/styles/cvStyles/home.module.sass";

export function home({ handleClickChangePage, setLoader }) {
   const cursorEffect = useRef(null);

   const profileRef = useRef(null);
   const skillsRef = useRef(null);
   const experienceRef = useRef(null);
   const moreInfoRef = useRef(null);

   let refArray = [profileRef, skillsRef, experienceRef, moreInfoRef];

   const pageNames = ["profile", "sq", "experience", "more Info"];
   const btnProps = {
      className: styles["links--link"],
      onClick: () => handleClickChangePage("profile"),
   };
   const WlComponent = (pageName) => (
      <Wl
         text={pageName.pageName}
         textOptions={[
            {
               ClassToAdd: styles["link--letter"],
            },
         ]}
      />
   );

   return (
      <div className={styles.home}>
         <div className={styles.bgLetters}>
            <span className={styles.letter}>&&&&&&&&&&</span>
            <span className={styles.letter}>&&&&&&&&&&</span>
            <span className={styles.letter}>&&&&&&&&&&</span>
         </div>
         <main className={styles[`main--container`]}>
            <div className={styles[`introduction--container`]}>
               <div className={styles[`introduction--text`]}>
                  <p>
                     Lorem Ipsum is simply dummy text of the printing and
                     typesetting industry. Lorem Ipsum has been the industry's
                     standard dummy text ever since the 1500s
                  </p>
                  <img
                     // here turn off the load screen.
                     onLoad={() => setLoader(true)}
                     width="300"
                     src="https://ttager.netlify.app/img/oaAhri4.jpg"
                     alt=""
                  />
               </div>
            </div>
            <div className={styles["links--container"]}>
               <div className={styles["links--container__links"]}>
                  {pageNames.map((pageName, index) => {
                     return (
                        <button
                           onMouseEnter={() => upLetter(refArray[index])}
                           onMouseLeave={() => downLetter(refArray[index])}
                           ref={refArray[index]}
                           key={index}
                           {...btnProps}
                        >
                           <span className={styles["links--link__letter"]}>
                              <WlComponent pageName={pageName} />
                           </span>
                           <span className={styles["links--link__letter"]}>
                              <WlComponent pageName={pageName} />
                           </span>
                        </button>
                     );
                  })}
               </div>
               <div className={styles["links--container__pointer"]}>
                  <span ref={cursorEffect}>Go To</span>
               </div>
            </div>
         </main>
      </div>
   );
}
