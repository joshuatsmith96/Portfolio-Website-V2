import Accordion from "react-bootstrap/Accordion";

interface Props {
  ID: string;
  company: string;
  jobtitle: string;
  jobresponsabilities: string;
  imgpath: string;
}

function Job(props: Props) {

    let imgurl = "url('" + props.imgpath + "')"
    console.log(imgurl)

  return (
    <Accordion.Item eventKey={props.ID}>
      <Accordion.Header><h3>{props.company} - {props.jobtitle}</h3></Accordion.Header>
      <Accordion.Body>
      <div className="job-info">
        <div className="job-img" style={{backgroundImage: imgurl}}/>
        <div className="job-text">
        <em><b>Company:</b></em> {props.company} <br />
        <em><b>Job Title:</b></em> {props.jobtitle} <br />
        <em><b>Responsibilities:</b></em> {props.jobresponsabilities}
        </div>
      </div>
      </Accordion.Body>
    </Accordion.Item>
  );
}

export default Job;
