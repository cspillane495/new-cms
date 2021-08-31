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

    function setFormInitValues(initValues) {
        setFormState({...form, ...initValues})
    }

    return {
        form,
        setForm,
        clearForm,
        setFormInitValues
    }
}

export default useForm;