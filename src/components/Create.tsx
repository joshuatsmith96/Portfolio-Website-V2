interface Props {
  Type: String;
  Width: any;
  Height: any;
  BGC?: any;
  Top?: any;
  Left?: any;
  Bottom?: any;
  Right?: any;
  ZIndex?: any;
}

function Create(props: Props) {

  //Styles entered
  const shapeStyle = {
    width: props.Width + "px",
    height: props.Height + "px",
    backgroundColor: props.BGC,
    top: props.Top,
    left: props.Left,
    right: props.Right,
    bottom: props.Bottom
  };

  //Create Square
  const createSquare = () => {
    if (props.Type.toLowerCase() === "square") {
      return <div className="Square shape-on-hover" style={shapeStyle}></div>;
    }
  };

  //Create Circle
  const createCircle = () => {
    if (props.Type.toLowerCase() === "circle") {
      return <div className="Circle shape-on-hover" style={shapeStyle}></div>;
    }
  };

  return <div>{createSquare()}{createCircle()}</div>;
}

export default Create;
