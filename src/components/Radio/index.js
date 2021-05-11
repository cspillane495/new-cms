import Input from '../Input';

const Radio = (props) => {
    return (
        <div className="form-check">
            <Input 
                onChange={props.onChange}
                type="checkbox" 
                value={props.value}
                id={props.id}
            />
            {!props.title && (
                <label className="form-check-label">
                    {props.title}
                </label>
            )}
        </div>
    )
}

export default Radio