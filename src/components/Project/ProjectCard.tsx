import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
//Import small icons
import Preview from "../../assets/Images/Preview.png";
import GitHub from "../../assets/Images/GitHub.png";

interface Props {
  Title: string;
  Text: string;
  viewSiteLink: string;
  viewGithubLink: string;
  mainImage: string;
}

function ProjectCard(props: Props) {
  return (
    <div className="ProjectCard-Container">
      <div className="ProjectCard">
        <Card>
          <Card.Img variant="top" src={props.mainImage} />
          <Card.Body>
            <Card.Title>{props.Title}</Card.Title>
            <Card.Text>{props.Text}</Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>
              <div className="listgroup-item-row">
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
