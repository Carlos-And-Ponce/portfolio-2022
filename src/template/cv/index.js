import React from "react";

import styles from "../../styles/cv.module.scss";

export function CV() {
   const IMG__PROFILE =
      "https://i.ibb.co/8KCs9Mw/AEE83958-944-D-4587-83-F2-993-F55-FE25-EF.jpg";

   return (
      <div className={styles["container--cv"]}>
         <div
            className={`${styles.container__content}  ${styles["container--title"]}`}
         >
            <img src="https://i.ibb.co/f8RVct5/home-image.jpg" alt="Hu Tao" />
            <h1>Frontend developer</h1>
            <span>Carlos Ponce</span>
         </div>
         <div
            className={`${styles.container__content} ${styles['container--info']}`}
         >
            <h2>Profile</h2>
            <div
               className={`${styles.container__content} ${styles['container--info__profile']}`}
            >
               <div className={styles["profile__content"]}>
                  <div className={styles["profile__Info"]}>
                     <div className={styles["profile__Info--imgBox"]}>
                        <img src={IMG__PROFILE} alt="Este soy yo" />
                     </div>
                     <div className={styles["profile__Info--infoBox"]}>
                        <span>Carlos Ponce</span>
                        <a href="mailto:srtager555@gmail.com">
                           srtager555@gmail.com
                        </a>
                     </div>
                  </div>
                  <div className={styles["profile__about"]}>
                     <p>
                        I am a Frontend developer with a background in
                        multimedia and web development. I have a strong passion
                        for creating and developing web applications.
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
   //    https://i.ibb.co/vBK7p1q/profile-pic.jpg
}