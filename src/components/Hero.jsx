import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook,faInstagram,faYoutube, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import marvingc from '../assets/img/marvingc.jpg';
import './Hero.css';

const Hero = () => {
    return (
        <div className="hero" id="hero">
            <div className="hero-description">
                <img src={marvingc} alt="Marvin"/>
                <h1>Hola mi nombre es <br/> Marvin Gasca Calderón</h1>
                <h3> Soy Ingeniero en Computación <br /> Desarrolador Web <br/> Diseñador UX/UI </h3>
                <p>
                    Encuentrame en las redes sociales:
                </p>
                <div className="hero-socialmedia">
                    <FontAwesomeIcon className="socialmedia-icon" icon={faFacebook} />
                    <FontAwesomeIcon className="socialmedia-icon" icon={faInstagram} />
                    <FontAwesomeIcon className="socialmedia-icon" icon={faYoutube} />
                    <FontAwesomeIcon className="socialmedia-icon" icon={faLinkedin} />
                </div>
            </div>
        </div>
    );
};

export default Hero;