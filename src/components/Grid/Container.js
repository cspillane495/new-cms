import React from 'react'

const Container = (props) => {
    return (
        <div className="container">
            {React.Children.map(props.children, child => {
                return child 
            })}
        </div>
    )
}

export default Container;