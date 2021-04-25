import React from 'react'

const Col = (props) => {
    return (
        <div className="col">
            {React.Children.map(props.children, child => {
                return child 
            })}
        </div>
    )
}

export default Col;