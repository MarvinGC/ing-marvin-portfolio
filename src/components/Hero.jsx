import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook,faInstagram,faYoutube, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import marvingc from '../assets/img/perfil.jpg';
import './Hero.css';

const Hero = () => {
    return (
        <div className="hero" id="home">
            <div className="hero-description">
                <img src={marvingc} alt="Marvin"/>
                <h1>Ingeniero en Computación <br/> Marvin Alejandro <br/> Gasca Calderón</h1>
                <h3> Especialista en <br /> Desarrollo Web </h3>
                <p>
                    Encuentrame en las redes sociales:
                </p>
                <div className="hero-socialmedia">
                    <a href="https://www.facebook.com/profile.php?id=100086570497911" target="_blank"><FontAwesomeIcon className="icon" icon={faFacebook} /></a>
                    <a href="https://www.instagram.com/marlexgc/"><FontAwesomeIcon className="icon" icon={faInstagram} /></a>
                    <a href="https://www.youtube.com/channel/UCfgkvw52ngpktT26C2wqsrQ"><FontAwesomeIcon className="icon" icon={faYoutube} /></a>
                    <a href="https://www.linkedin.com/in/marvin-alejandro-gasca-calderon-344251264/"><FontAwesomeIcon className="icon" icon={faLinkedin} /></a>
                </div>
            </div>
        </div>
    );
};

export default Hero;