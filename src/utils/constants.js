import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook,faInstagram,faYoutube, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
//projcets
import startbootstrap from '../assets/img/start-bootstrap-mini.png';
import gpt3 from '../assets/img/gpt3-mini.png';
import modern_restaurant from '../assets/img/modern_restaurant-mini.png';
import youtube_mix from '../assets/img/youtube-project-mini.png';

export const socialmedia = [
    // {link: "https://www.facebook.com/profile.php?id=100086570497911", icon: <FontAwesomeIcon className="icon" icon={faFacebook} />},
    // {link: "https://www.instagram.com/marlexgc/", icon: <FontAwesomeIcon className="icon" icon={faInstagram} />},
    {link: "https://www.youtube.com/channel/UCfgkvw52ngpktT26C2wqsrQ", icon: <FontAwesomeIcon className="icon" icon={faYoutube} />},
    {link: "https://www.linkedin.com/in/marvin-alejandro-gasca-calderon-344251264/", icon: <FontAwesomeIcon className="icon" icon={faLinkedin} />},
    {link: "https://github.com/MarvinGC", icon: <FontAwesomeIcon className="icon" icon={faGithub} />}
]
export const projects = [
    {image: startbootstrap, description: "Plantilla web", url: "https://startbotstrap.netlify.app/"},
    {image: modern_restaurant, description: "Plantilla web", url: "https://restaurante-moderno.netlify.app/"},
    {image: youtube_mix, description: "Video en YouTube", url: "https://www.youtube.com/watch?v=yxKSSlSr9GY"},
    {image: gpt3, description: "Plantilla web", url: "https://gpt3-openai-plantilla.netlify.app/"},
]