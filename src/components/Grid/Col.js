import React from 'react'
import classnames from 'classnames';

const Col = (props) => {
    const classes = classnames(
        {'col': typeof props.col === 'boolean'},
        {[`col-sm-${props.sm}`]: props.sm},
        {[`col-md-${props.md}`]: props.md},
        {[`col-lg-${props.lg}`]: props.lg},
        {[`col-xl-${props.xl}`]: props.xl},
        {[`col-xxl-${props.xxl}`]: props.xxl},
        {[`col-${props.col}`]: props.col},
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

export default Col;