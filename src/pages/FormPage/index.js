import React,{useState} from 'react';
import {Form, FormItem} from '../../components/Form';
import Input from '../../components/Input';
import Button from '../../components/Button';
import {Container, Row} from '../../components/Grid';
import Display from "./Display"
import useForm from '../../hooks/formHook';

const FormPage = (props) =>{
    const {form,setForm, clearForm} = useForm();
    const [formTitle, setFormTitle] = useState("Form Title");
    const changeInput = (e) => {
        const obj = {id: e.target.id , value: e.target.value}
        // setFormTitle(obj.value)
        setForm(obj)
    }
    return (
        <React.Fragment>
            <Container>   
                <Row>             
                    <h2>{props.title}</h2>
                    <hr />
                    <Form>  
                        <h4>{formTitle}</h4>
                        <Button onClick={clearForm}>Clear Form</Button>
                        <FormItem>
                            <Input
                                id="title"
                                placeholder="Type Title Here"
                                value={form.title}
                                onChange={changeInput}
                            />
                        </FormItem>
                        <FormItem>
                            <Input
                                id="formCategory"
                                placeholder="Type Title Here"
                                value={form.formCategory}
                                onChange={changeInput}
                            />
                        </FormItem>
                        <FormItem>
                            <Input
                                id="image"
                                placeholder="Type Title Here"
                                value={form.image}
                                onChange={changeInput}
                            />
                        </FormItem>
                        {/* <Button
                            type="button"
                            className="btn btn-primary"
                            title="Update Title"
                            onClick={updateTitle} 
                        /> */}
                        
                    </Form>
                    
                </Row>
                 <Display formItems={form}/>
            </Container> 
        </React.Fragment>
    )                  
}

export default FormPage;