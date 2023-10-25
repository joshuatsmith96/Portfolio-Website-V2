interface Props{
    label:string;
    name: string;
    type: string;
    placeholder?: string;
    id: string;
}

function InputSection(props: Props){
    return(
        <div className="inputSection">
        <label>{props.label}</label>
        <input className="input" id={props.id} type={props.type} name={props.name} placeholder={props.placeholder}/>
      </div>
    )
}

export default InputSection