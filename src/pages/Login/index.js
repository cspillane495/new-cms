import React from 'react';
import {Form, FormItem } from '../../components/Form';
import { Container, Row } from '../../components/Grid';
import Input from "../../components/Input";
import useForm from '../../hooks/formHook';
import useUser from "../../hooks/userHook";
import Button from '../../components/Button';
import {connect} from 'react-redux';
import {userLogin} from '../../actions';


const Login  = (props) => {
    const {form, setForm} = useForm();
    const {currentUser, setUser} = useUser();
    const changeInput = (e) => {
        const obj = {id: e.target.id , value: e.target.value}
        // setFormTitle(obj.value)
        setForm(obj)
    }

    const submitLogin = () => {
        console.log("[Submit Lgin Form]",form)
        const user = {email: form.loginUserName, password : form.loginPassword};

        props.userLogin(user, props.history) 
    }

    if(props.loading){
        return 'Loading...'
    }

    return (
        <Container className="lgoin-page">
            <h4>Login</h4>
            <Row>
                <Form>
                    <FormItem>
                        <Input  
                                id="loginUserName"
                                placeholder="UserName"
                                value={form.loginUserName}
                                onChange={changeInput}
                                >
                        </Input>
                    </FormItem>
                    <FormItem>
                        <Input 
                                type="password"    
                                id="loginPassword"
                                placeholder="Password"
                                value={form.loginPassword}
                                onChange={changeInput}
                                >
                        </Input>
                    </FormItem>
                    <FormItem>
                        <Button 
                        type="button" 
                        title="Login"
                        onClick={submitLogin}
                        />
                    </FormItem>
                     </Form>
            </Row>
        </Container>
    )
} 
function mapsStateToProps({loading}) {
    return { loading } 
}

export default connect(mapsStateToProps, {userLogin})(Login);