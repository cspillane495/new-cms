import React from 'react';
import "./style.css";

const Button = (props) => { 
    return (
        <button 
            className="btn btn-primary"
            onClick={props.onClick}
            type={props.type}
            
        >
            {setTitle(props)}
        </button>
    )
} 

function setTitle({title, children}) {
    if(!title){
        return children
    }
    return title
}

export default Button;