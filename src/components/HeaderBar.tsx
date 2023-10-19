import ToolTip from './ToolTip'
import GitHubImage from '../assets/Images/GitHub.png'

function HeaderBar(){
    return(
        <div className="HeaderBar">
            <h3>Joshua</h3>
            <ToolTip Msg={"Visit Joshua's "} Bold={"GitHub"}/>
        </div>
    )
}

export default HeaderBar;