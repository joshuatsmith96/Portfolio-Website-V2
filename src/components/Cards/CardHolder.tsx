import "./CardStyle.css";
import ScrollAnimations from "../ScrollAnimations";
import HeaderCard from "./HeaderCard";
import Card from "./Card";
import SkillsCard from './SkillsCard';
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

function CardHolder() {
  return (
    <div className="CardHolder">
      <ScrollAnimations />
      <div className="CardAlignment1">
      <HeaderCard />
      <Card
        Title={"Experience"}
        Text={
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores nam ipsum et eius voluptatibus quasi? Labore tempore explicabo sit eum sequi mollitia ipsum? Ab temporibus, quae obcaecati vitae tempora voluptas."
        }
        BGColor={"#5252ce"}
        Color={"white"}
      />
      </div>
      <SkillsCard Icons={[HTMLIcon, CSSIcon, javascriptIcon, PythonIcon, reactIcon, GitHubIcon, PhotoshopIcon, InDesignIcon, IllustratorIcon]}/>
    </div>
  );
}

export default CardHolder;