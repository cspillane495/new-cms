
const Select = (props) => {
    const selectedOption = props.value || '';
    const renderOptions = (options, selectedOp) => {
        return options.map((option, i) => {
            return <option key={i} value={option.id}>{option.title}</option>
        });
    }

    return (
        <select 
            className="form-select" 
            onChange={props.onChange}
            id={props.id}
            value={selectedOption}
        >
            <option value="" disabled hidden>{props.placeholder}</option>
            {renderOptions(props.options)}
        </select>
    )
}

export default Select;