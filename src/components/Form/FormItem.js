import React from 'react' ;

const FormItem = (props) => {
    return (
        <div className="mb-3">
            {React.Children.map(props.children, child => {
                return child
            })}
        </div>
    )
}

export default FormItem;