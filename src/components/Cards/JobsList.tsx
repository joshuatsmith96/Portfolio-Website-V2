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
                <Job ID="1" company="Daily Printing" jobtitle='Storefront Developer' jobresponsabilities='Manage and manipulate (as well as add new functionality to) existing storefront templates with HTML, CSS and JavaScript.' imgpath={DPILogo}/>
                <Job ID="2" company="AutoZone" jobtitle="Commercial Manager" jobresponsabilities='Co-managing a multi-million dollar program. Managing high dollar exchanges with commercial customers. Ensuring they recieve their parts in a timely manner' imgpath={AutoZoneLogo}/>
                <Job ID="3" company="US Army" jobtitle="25Q (Satellite & Radio Tech)" jobresponsabilities="Travel to remote locations and provide voice and data services with military communications equipment. A 'secret' security clearance was given for this job." imgpath={ArmyLogo}/>
            </Accordion>
        </div>
    )
}

export default JobsList;