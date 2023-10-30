import JobsList from './JobsList';

interface Props {
  Title?: String;
  Text?: String;
  BGColor?: any;
  BGImage?: any;
  Color?: any;
  Img?: any;
  ImgRad?: any;
  Class?: any;
}

function Card(props: Props) {
  // -------------------- For Collapse Effect ------------------------------- */

  // ------------------------------------------------------------------------------------- */

  //If image source is detected, enable image
  let enabled = "none";

  if (props.Img === undefined) {
    enabled = "none";
  } else {
    enabled = "block";
  }

  let CardStyle = {
    backgroundColor: props.BGColor,
    color: props.Color
  };

  let ImageStyle = {
    display: enabled,
    backgroundImage: props.Img,
    borderRadius: props.ImgRad,
  };

  console.log(ImageStyle);
  let classname: string;
  if(props.Class !== undefined){
    classname = "Card " + props.Class
  } else {
    classname = "Card"
  }

  return (
      <div style={CardStyle} className={classname}>
        <div className="ProfileImageContainer">
          <div style={ImageStyle} className="CardImage" />
        </div>
        <h1>{props.Title}</h1>
        <p>{props.Text}</p>
        <JobsList></JobsList>
      </div>
  );
}

export default Card;
