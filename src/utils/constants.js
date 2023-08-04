import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook,faInstagram,faYoutube, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
//projcets
import project1 from '../assets/img/start-bootstrap-mini.png';
import project2 from '../assets/img/gpt3-mini.png';
import project3 from '../assets/img/modern_restaurant-mini.png';
import project4 from '../assets/img/youtube-project-mini.png';

export const socialmedia = [
    // {link: "https://www.facebook.com/profile.php?id=100086570497911", icon: <FontAwesomeIcon className="icon" icon={faFacebook} />},
    // {link: "https://www.instagram.com/marlexgc/", icon: <FontAwesomeIcon className="icon" icon={faInstagram} />},
    {link: "https://www.youtube.com/channel/UCfgkvw52ngpktT26C2wqsrQ", icon: <FontAwesomeIcon className="icon" icon={faYoutube} />},
    {link: "https://www.linkedin.com/in/marvin-alejandro-gasca-calderon-344251264/", icon: <FontAwesomeIcon className="icon" icon={faLinkedin} />},
    {link: "https://github.com/MarvinGC", icon: <FontAwesomeIcon className="icon" icon={faGithub} />}
]
export const projects = [
    {image: project1, description: "Ejemplo de plantilla web para un protafolio en ReactJS", url: "https://startbotstrap.netlify.app/"},
    {image: project2, description: "Ejemplo de plantilla web publicitaria de Open AI GPT-3", url: "https://startbotstrap.netlify.app/"},
    {image: project3, description: "Ejemplo de plantilla web para un restaurante", url: "https://startbotstrap.netlify.app/"},
    {image: project4, description: "Video en youtube Programa en Python para extraer música de un Mix", url: "https://www.youtube.com/watch?v=yxKSSlSr9GY"},
]