import reactwhite from '../../assets/Images/react_WHITE.png';
import reactregular from '../../assets/react.svg';

interface Props {
  Icons: any;
}

// List Of Skills

let htmlExp = { name: "HTML Experience", text: "Some text for HTML" };
let cssExp = { name: "CSS Experience", text: "Some text for CSS" };
let jsExp = { name: "JavaScript Experience", text: "Some text for JavaScript" };
let pythonExp = { name: "Python Experience", text: "Some text for Python" };
let reactExp = { name: "React Experience", text: "Some text for React" };
let gitExp = { name: "GitHub Experience", text: "Some text for GitHub" };
let psExp = { name: "Photoshop Experience", text: "Some text for PhotoShop" };
let idExp = { name: "InDesign Experience", text: "Some text for InDesign" };
let iaExp = { name: "Illustrator Experience", text: "Some text for Illustrator" };

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
  let headerElement = document.getElementById("skills-header");
  let textElement = document.getElementById("skills-text");

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
      <h1 id="skills-header">Skills</h1>
      <p
        id="skills-text"
        className="text-secondary"
        style={{ textAlign: "center" }}
      >
        Select A Skill To View Relevant Experience
      </p>
      </div>
      <div id="skills-container" className="skills-container">
        {allIcons}
      </div>
    </div>
  );
}

export default SkillsCard;
