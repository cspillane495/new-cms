import React from 'react'
import classnames from 'classnames';

const Row = (props) => {
    const classes = classnames(
        props.className,
        'row', 
        // {`gy-${props.gy}`: props.className }   
    );
    return (
        <div className="row">
            {React.Children.map(props.children, child => {
                return child 
            })}
        </div>
    )
}

export default Row;