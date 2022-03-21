import React, { useEffect } from "react";
import WrappingLetters from "wrapping-letters-react";
import { Link, useNavigate } from "react-router-dom";

import { ProjectsElementList } from "../../contexts/projectsContexts";
import { IS_MOBILE_DEVICE } from "../../contexts/constVarible";

export function NextPost({ data, setA }) {
   let dataIndex = ProjectsElementList.getProjectIndexAvailableById(data.Id);
   const navigate = useNavigate()

   function changeNextRoute() {
      console.log("?")
      setA(false)
      setTimeout(()=>{
         navigate(`/p/${data.Id}`)
         console.log("?")
      }, 2000)
   }
   
   return (
      <div onClick={changeNextRoute} className="nextPost__container">
         <div className="nextPost__background">
            <img
               src={
                  IS_MOBILE_DEVICE
                     ? data.BackgroundImageMobile
                     : data.BackgroundImageDesktop
               }
            />
            <div className="nextPost__container--nextWord">
               <span>NEXT</span>
               <span>
                  {dataIndex < 10 ? `0${dataIndex + 1}` : dataIndex + 1}
               </span>
            </div>
         </div>
         <div className="nextPost__container--info">
            <h1 className="nextPost__container--info__title">{data.Title}</h1>
            <div className="nextPost__container--info__margin__bar"></div>
            <span className="nextPost__container--info__typeJob">
               {data.Job[0]}
            </span>
         </div>
      </div>
   );
}