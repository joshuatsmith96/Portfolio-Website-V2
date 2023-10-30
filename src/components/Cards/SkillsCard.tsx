import reactwhite from '../../assets/Images/react_WHITE.png';
import reactregular from '../../assets/react.svg';

interface Props {
  Icons: any;
}

// List Of Skills

let htmlExp = { name: "HTML Experience", text: "3 Years Experience. Used daily for over a year at Daily Printing, Inc. for Storefront customizations." };
let cssExp = { name: "CSS Experience", text: "3 Years Experience. Used daily for over a year at Daily Printing, Inc. for Storefront customizations." };
let jsExp = { name: "JavaScript Experience", text: "3 Years Experience. Used daily for over a year at Daily Printing, Inc. Need to give extra functionality such as dropdown options, extra logic, ect." };
let pythonExp = { name: "Python Experience", text: "1 Year Experience. Made application for Daily Printing that transfers specific color files for our industrial printers." };
let reactExp = { name: "React Experience", text: "2 Years Experience. The React framework has been used for every version of my Portfolio I've ever made. This time around, my website is made with React & TypesSript, not JavaScript." };
let gitExp = { name: "GitHub Experience", text: "2 Years Experience with GitHub Desktop. Used for all portfolio projects." };
let psExp = { name: "Photoshop Experience", text: "1+ Years Experience. Used for creating unique thumbnails for storefront products." };
let idExp = { name: "InDesign Experience", text: "1+ Years Experience. Used for creating product templates (such as business cards) that would later be used for variable data processing through our storefronts." };
let iaExp = { name: "Illustrator Experience", text: "1 Year Experience. Used for editing vector art given to me by customers." };

let skills = [
  htmlExp,
  cssExp,
  jsExp,
  pythonExp,
  reactExp,
  gitExp,
  psExp,
  idExp,
  iaExp,
];

function loadInfo(header: string, text: string) {
  let headerElement:any;
  let textElement:any;
  if (window.innerWidth < 1200) {
    headerElement = document.getElementsByClassName("skills-header")[0];
    textElement = document.getElementsByClassName("skills-text")[0];
  } else {
    headerElement = document.getElementsByClassName("skills-header")[1];
    textElement = document.getElementsByClassName("skills-text")[1];
  }

  headerElement?.setAttribute("style", "opacity: 0;");
  textElement?.setAttribute("style", "opacity: 0;");

  setTimeout(function () {
    headerElement!.innerHTML = header;
    textElement!.innerHTML = text;
    headerElement?.setAttribute("style", "opacity: 1;")
    textElement?.setAttribute("style", "opacity: 1;")
  }, 500);
}

let previous: any;
let skillClicked = (e: any) => {
  if (previous !== undefined) {
    previous.setAttribute("style", "background-color: initial;");
  }
  let indexOf = e.target.id;
  indexOf = indexOf.charAt(indexOf.length - 1);
  indexOf = indexOf - 1;
  let skillName = skills[indexOf].name;
  let skillText = skills[indexOf].text;
  loadInfo(skillName, skillText);
  console.log(skillName, skillText);

  e.target.setAttribute("style", "background-color: #3EC2C4; padding: 10px; border-radius: 100%; box-shadow: 1px 1px 5px 1px;");

  if(e.target.id === "skill5"){
    console.log("CHANGING TO WHITE")
    e.target.setAttribute("src", reactwhite)
  } else {
    let react = document.getElementById("skill5")
    react?.setAttribute("src", reactregular)
  }

  previous = e.target;
};

function SkillsCard(props: Props) {
  //Mapping All Icons
  const allIcons = props.Icons.map((icon: any, i: number) => (
    <img
      key={i}
      id={"skill" + (i + 1)}
      className="skillicon"
      src={icon}
      onClick={(e) => skillClicked(e)}
    />
  ));

  return (
    <div className="Card SkillsCard green">
      <div className="skills-info-content">
      <h1 id="skills-header" className="skills-header">Skills</h1>
      <p
      id="skills-text"
        className="text-secondary skills-text"
        style={{ textAlign: "center" }}
      >
        Select A Skill To View Relevant Experience
      </p>
      <div id="skills-container" className="skills-container">
        {allIcons}
      </div>
      </div>
    </div>
  );
}

export default SkillsCard;
