import React from 'react';

const Form = (props) => {
    return(
        <form onSubmit={props.onSubmit}>
            {React.Children.map(props.children, child => {
                // if(typeof child === 'string'){
                //     return null
                // }
                return child 
            })}
        </form>
    )
}

export default Form; 