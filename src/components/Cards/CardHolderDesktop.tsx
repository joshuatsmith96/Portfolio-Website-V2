import "./CardStyle.css";
import ScrollAnimations from "../ScrollAnimations";
import HeaderCard from "./HeaderCard";
import Card from "./Card";
import SkillsCard from './SkillsCard';
import ProjectSection from "../Project/ProjectSection";
//Image Imports
import GitHubIcon from '../../assets/Images/GitHub.png'
import reactIcon from '../../assets/react.svg'
import HTMLIcon from '../../assets/Images/html.png'
import CSSIcon from '../../assets/Images/css.png'
import javascriptIcon from '../../assets/Images/javascript.png'
import PhotoshopIcon from '../../assets/Images/Photoshop.png'
import InDesignIcon from '../../assets/Images/InDesign.png'
import IllustratorIcon from '../../assets/Images/Illustrator.png'
import PythonIcon from '../../assets/Images/Python.png'
import LinkedIn from '../../assets/Images/LinkedIn.webp'
import GitHub from '../../assets/Images/GitHub.png'

function CardHolderDesktop() {
  return (
    <div className="CardHolderDesktop">
      <ScrollAnimations />
      <div className="CardAlignment1">
      <HeaderCard />
      <div className="divider-container">
      <div className="divider"></div>
      </div>
      <SkillsCard Icons={[HTMLIcon, CSSIcon, javascriptIcon, PythonIcon, reactIcon, GitHubIcon, PhotoshopIcon, InDesignIcon, IllustratorIcon]}/>
      </div>
      <p id="socialtext-desktop">Click icons below to view social media pages</p>
      <div className="socials" id="socials-desktop">
                <a href="https://www.linkedin.com/in/joshua-s-90680119b/" target="_blank"><img src={LinkedIn} alt="Linked In" /></a>
                <a href="https://github.com/joshuatsmith96" target="_blank"><img src={GitHub} alt="Git Hub" /></a>
            </div>
      <ProjectSection />
      <Card
        Title={"Work Experience"}
        Text={
          "What makes me unique is my wide range of occupational experiences. Each experience has shaped me in some way that has helped me in my future jobs."
        }
        BGColor={"#5252ce"}
        Color={"white"}
        Class={"desktop-workexperience"}
      ></Card>
    </div>
  );
}

export default CardHolderDesktop;