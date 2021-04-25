import {useState} from 'react'

const useForm = () => {
    const [form, setFormState] = useState({});

    function setForm(obj) {
        // console.log('1:[Set Hook]',obj)
        setFormState({...form, [obj.id]: obj.value});
        return
    }

    function clearForm() {
        setFormState({})
    }

    return {
        form,
        setForm,
        clearForm
    }
}

export default useForm;