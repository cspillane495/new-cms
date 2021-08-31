import { useState } from 'react';
import './index.css'

const ToggleSwitch = (props) => {
    const [toggled, setToggled] = useState(props.toggled);

    const onChange = (cb) => {
        cb(setToggled)
    }

    return (
        <label className="toggle-switch">
            <input type="checkbox" checked={props.toggled} onChange={onChange(props.onToggle)} />
            <span className="switch" />
        </label>
    )
}

export default ToggleSwitch;