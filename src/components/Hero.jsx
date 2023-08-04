import React from 'react';
import './Hero.css';
import SocialIcon from './SocialIcon';
import marvingc from '../assets/img/perfil.jpg';
import cvmarvin from '../assets/Curriculum Julio 2023.pdf';
import { socialmedia } from '../utils/constants';

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
                    {   socialmedia.map((social) => (
                            <SocialIcon link={social.link} icon={social.icon}/>
                        ))
                    }
                </div>
                <div className="button-general-a">
                    <a
                        href={cvmarvin}
                        download="CV-Ing-Marvin"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Descargar CV
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Hero;