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
import JobsList from './JobsList';

function CardHolder() {
  return (
    <div className="CardHolder">
      <ScrollAnimations />
      <div className="CardAlignment1">
      <HeaderCard />
      <Card
        Title={"Work Experience"}
        Text={
          "What makes me unique is my wide range of occupational experiences. Each experience has shaped me in some way that has helped me in my future jobs."
        }
        BGColor={"#5252ce"}
        Color={"white"}
      ></Card>
      </div>
      <JobsList />
      <SkillsCard Icons={[HTMLIcon, CSSIcon, javascriptIcon, PythonIcon, reactIcon, GitHubIcon, PhotoshopIcon, InDesignIcon, IllustratorIcon]}/>
      <Card
        Title={"Projects"}
        Text={
          "Hmm"
        }
        BGColor={"#3EBD9F"}
        Color={"white"}
      ></Card>
    </div>
  );
}

export default CardHolder;