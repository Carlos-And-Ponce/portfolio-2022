import React from "react";
import WrappingLetters from "wrapping-letters-react";

import { ImageWithText } from "../../contexts/projectsContexts";

export function ImageProcess({ project, containerWitdh }) {
   /*
    Hay que ejecutar el llamado de las imagenes solo una vez, puede ser con un useEffect que
    llame a un function que haga ese trabajo y que retorne la infomacion dentro de un array,
    Luego usar la informacion para verificar que clases llevara el componente
   */

   return project.GaleryImages.map((image, index) => {
      let i = new Image();
      i.src = typeof image === "string" ? image : image.Image;
      let height = i.naturalHeight;
      let width = i.naturalWidth;
      console.log(height, width, index);

      if (typeof image === "string") {
         return (
            <div className="project__image">
               <img
                  key={`image ${index}`}
                  className="project__image-img"
                  src={image}
                  alt=""
               />
            </div>
         );
      } else {
         if (!image instanceof ImageWithText) {
            throw new Error(
               "ImageWithText: image must be a string or an ImageWithText"
            );
         }
         return (
            <div
               key={`image ${index}`}
               className="project__image project__image-container"
            >
               <div className="project__image-container__text">
                  <h3 className="project__image-container__text-title">
                     {image.Title}
                  </h3>
                  <p className="project__image-container__text-description">
                     {image.Description}
                  </p>
               </div>
               <img className="project__image-img" src={image.Image} alt="" />
            </div>
         );
      }
   });
}
