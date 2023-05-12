import React from 'react';
import './Portfolio.css';
import project1 from '../assets/img/start-bootstrap-mini.png';
import project2 from '../assets/img/gpt3-mini.png';
import project3 from '../assets/img/modern_restaurant-mini.png';
import project4 from '../assets/img/youtube-project-mini.png';
import { BsFillArrowRightSquareFill, BsFillArrowLeftSquareFill } from 'react-icons/bs';

const Portfolio = () => {
    const scrollRef = React.useRef(null);

    const scroll = (direction) => {
        const { current } = scrollRef;

        if (direction === 'left') {
            current.scrollLeft -= 300;
        } else {
            current.scrollLeft += 300;
        }
    };
    return (
        <div className="portfolio section-padding">
            <h1>Mis Proyectos</h1>
            <div className="portfolio-content section-padding">
                <div className="portfolio-section" ref={scrollRef}>
                    <div className="project">
                        <img src={project1} alt="project1"/>
                        <div className="project-description">
                            Ejemplo de plantilla web de un portafolio en ReactJS
                        </div>
                    </div>
                    <div className="project">
                        <img src={project2} alt="project2"/>
                        <div className="project-description">
                            Ejemplo de plantilla web publicitaria de OpenIA GPT-3
                        </div>
                    </div>
                    <div className="project">
                        <img src={project3} alt="project3"/>
                        <div className="project-description">
                            Ejemplo de plantilla web para un restaurante
                        </div>
                    </div>
                    <div className="project">
                        <img src={project4} alt="project4"/>
                        <div className="project-description">
                            Programa en Python para extraer música de un mix
                            Video en youtube
                        </div>
                    </div>
                </div>
                <BsFillArrowLeftSquareFill className="portfolio-arrow-left" onClick={() => scroll('left')}/>
                <BsFillArrowRightSquareFill className="portfolio-arrow-right" onClick={() => scroll('right')}/>
            </div>
        </div>
    );
};

export default Portfolio;