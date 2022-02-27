import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { recentProjects } from "../../contexts/projectsContexts";
import { MOBILE_SIZE } from "../../contexts/constVarible";

export function ProjectsElement({ SliderProjectsRef, ViewProjectsScroll, ProjectsElementRef }) {
    const [isMobile, setIsMobile] = useState(false);

    const mobileCard = cardElement(SliderProjectsRef, ViewProjectsScroll, ProjectsElementRef, mobileCardElement);
    const desktopCard = cardElement(SliderProjectsRef, ViewProjectsScroll, ProjectsElementRef, desktopCardElement);

    function handleIsMobile() {
        if (window.innerWidth > MOBILE_SIZE) {
            setIsMobile(false);
        } else {
            setIsMobile(true);
        }
    }

    useEffect(() => {
        handleIsMobile();
        window.addEventListener("resize", handleIsMobile);

        return () => {
            window.removeEventListener("resize", handleIsMobile);
        }
    }, [])

    const projectCard = isMobile ? mobileCard : desktopCard;

    return projectCard;
}

function cardElement(SliderProjectsRef, ViewProjectsScroll, ProjectsElementRef, callback) {
    return <div ref={SliderProjectsRef} style={ViewProjectsScroll} className="container__projects-scrollSlider-item">
        {
            recentProjects.map((element, index) => (
                callback(ProjectsElementRef, element, index)
            ))
        }
    </div>
}

function desktopCardElement(ProjectsElementRef, element, index) {
    return <Link to={`project_${index}`} key={`project-${index}`} ref={index === 1 ? ProjectsElementRef : null} className="container__image-projects__scrollSlider">
        <img src={element.PrincipalImageMobile} alt="kda Ahri" />
    </Link>

}

function mobileCardElement(ProjectsElementRef, element, index) {
    return <button key={`project-${index}`} ref={index === 1 ? ProjectsElementRef : null} className="container__image-projects__scrollSlider">
        <img src={element.PrincipalImageMobile} alt="kda Ahri" />
    </button>
}