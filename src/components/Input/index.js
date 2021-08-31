import React from 'react';
import classnames from 'classnames';

const Input = (props) => {
    const isCheckbox = props.type === 'checkbox';
    const classes = classnames(
        {'form-control': !isCheckbox},
        {'form-check-input': isCheckbox},
    )

    return (
        <input
            type={props.type}
            className={classes}
            id={props.id} 
            placeholder={props.placeholder}
            value={props.value || ''} 
            onChange={props.onChange}
        />
    )
}

export default Input