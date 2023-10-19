import ToolTip from './ToolTip'

function HeaderBar(){
    return(
        <div className="HeaderBar">
            <h3>Portfolio</h3>
            <ToolTip Msg={"Visit Joshua's "} Bold={"GitHub"}/>
        </div>
    )
}

export default HeaderBar;