interface Props {
  Icons: any;
}


// List Of Skills

let htmlExp = {name: "HTML", text: "Some text for HTML"}
let cssExp = {name: "CSS", text: "Some text for CSS"}
let jsExp = {name: "JavaScript", text: "Some text for JavaScript"}
let pythonExp = {name: "Python", text: "Some text for Python"}
let reactExp = {name: "React", text: "Some text for React"}
let gitExp = {name: "GitHub", text: "Some text for GitHub"}
let psExp = {name: "Photoshop", text: "Some text for PhotoShop"}
let idExp = {name: "InDesign", text: "Some text for InDesign"}
let iaExp = {name: "Illustrator", text: "Some text for Illustrator"}

let skills = [htmlExp, cssExp, jsExp,pythonExp, reactExp, gitExp, psExp, idExp, iaExp]

let previous:any;
let skillClicked = (e:any) => {
  if(previous !== undefined){
    previous.setAttribute("style", "background-color: initial;")
  }
  let indexOf = e.target.id;
  indexOf = indexOf.charAt(indexOf.length-1);
  indexOf = indexOf - 1;
  let skillName = skills[indexOf].name;
  let skillText = skills[indexOf].text;
  console.log(skillName, skillText);

  e.target.setAttribute("style", "background-color: #3EC2C4; padding: 10px;");
  previous = e.target;
}

function SkillsCard(props: Props) {
    //Mapping All Icons
  const allIcons = props.Icons.map((icon: any, i:number) => (
    <img key={i} id={"skill" + (i+1)}className="skillicon" src={icon} onClick={(e) => skillClicked(e)}/>
  ));

  return (
    <div className="Card SkillsCard green">
      <h1>Skills</h1>
      <p className="text-secondary" style={{textAlign:"center"}}>Select A Skill To View Relevant Experience</p>
      <div id="skills-container" className="skills-container">{allIcons}</div>
    </div>
  );
}

export default SkillsCard;
