import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
//Import small icons
import Preview from "../../assets/Images/Preview.png";
import GitHub from "../../assets/Images/GitHub.png";

interface Props {
  Title: string;
  Text: string;
  viewSiteLink?: string;
  viewGithubLink: string;
  mainImage: string;
  id?: string;
}

function ProjectCard(props: Props) {

  return (
    <div className="ProjectCard-Container">
      <div className="ProjectCard">
        <Card style={{border: "none", boxShadow:"1px 1px 6px 1px", color: "gray"}}>
          <Card.Img variant="top" src={props.mainImage} />
          <Card.Body style={{color: "black"}}>
            <Card.Title>{props.Title}</Card.Title>
            <Card.Text>{props.Text}</Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item id="viewsite">
              <div className="listgroup-item-row"  id={props.id}>
                <img src={Preview} alt="" width="25px" height="25px;" />
                <a href={props.viewSiteLink} target="_blank">
                  View Site
                </a>
              </div>
            </ListGroup.Item>
            <ListGroup.Item>
              <div className="listgroup-item-row">
                <img src={GitHub} alt="" width="25px" height="25px;" />
                <a href={props.viewGithubLink} target="_blank">
                  GitHub
                </a>
              </div>
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </div>
    </div>
  );
}

export default ProjectCard;
