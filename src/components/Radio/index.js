import Input from '../Input';

const Radio = (props) => {
    return (
        <div class="form-check">
            <Input 
                onChange={props.onChange}
                type="checkbox" 
                value={props.value}
                id={props.id}
            />
            {!props.title && (
                <label class="form-check-label" for="flexCheckDefault">
                    {props.title}
                </label>
            )}
        </div>
    )
}

export default Radio