import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

interface Props{
    Msg: String,
    Bold?: String
    Src?: any
    AltText?: any
}


function TooltipPositionedExample(props: Props) {
  return (
    <div className="ToolTip">
        <OverlayTrigger
          key={"bottom"}
          placement={"bottom"}
          overlay={
            <Tooltip id={`tooltip-${"bottom"}`}>
              {props.Msg}<strong>{props.Bold}</strong>.
            </Tooltip>
          }
        >
          <Button className="ghub" variant="secondary"><img src={props.Src} alt={props.AltText} /></Button>
        </OverlayTrigger>
    </div>
  );
}

export default TooltipPositionedExample;