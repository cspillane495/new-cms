import React from 'react'
import classnames from 'classnames';

const Container = (props) => {
    const classes = classnames(
        {'container': !props.fluid}, 
        {'container-fluid': props.fluid},
        props.className
    )
    return (
        <div className={classes}>
            {React.Children.map(props.children, child => {
                return child 
            })}
        </div>
    )
}

export default Container;