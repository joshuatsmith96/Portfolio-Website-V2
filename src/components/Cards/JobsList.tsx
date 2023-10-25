import Accordion from 'react-bootstrap/Accordion';
import Job from './Jobs';
//Job Images
import DPILogo from '../../assets/Images/DPI Logo_NoSlogan.png'
import AutoZoneLogo from '../../assets/Images/AutoZone.png';
import ArmyLogo from '../../assets/Images/Army.png';

function JobsList(){
    return(
        <div className="JobsList">
            <Accordion>
                <Job ID="1" company="Daily Printing" jobtitle='Storefront Developer' jobresponsabilities='stuff' imgpath={DPILogo}/>
                <Job ID="2" company="AutoZone" jobtitle="Commercial Manager" jobresponsabilities='other stuff' imgpath={AutoZoneLogo}/>
                <Job ID="3" company="US Army" jobtitle="25Q (Satellite & Radio Tech)" jobresponsabilities='and some more stuff' imgpath={ArmyLogo}/>
            </Accordion>
        </div>
    )
}

export default JobsList;