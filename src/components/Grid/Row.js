import React from 'react'

const Row = (props) => {
    return (
        <div className="row">
            {React.Children.map(props.children, child => {
                return child 
            })}
        </div>
    )
}

export default Row;