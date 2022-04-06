import useForm from "../../hooks/formHook";
import { Form, FormItem } from "../Form";
import Input from "../Input";
import Button from "../Button";

const LoginForm = (props) => {
  const { form, setForm } = useForm();
  const changeInput = (e) => {
    const obj = { id: e.target.id, value: e.target.value };
    // setFormTitle(obj.value)
    setForm(obj);
  };

  const submitLogin = () => {
    // console.log("[Submit Lgin Form]",form)
    const user = { email: form.loginEmail, password: form.loginPassword };

    props.userLogin(user, props.history);
  };
  return (
    <Form onSubmit={submitLogin}>
      <FormItem>
        <Input
          id="loginEmail"
          placeholder="Email"
          value={form.loginEmail}
          onChange={changeInput}
        />
      </FormItem>
      <FormItem>
        <Input
          type="password"
          id="loginPassword"
          placeholder="Password"
          value={form.loginPassword}
          onChange={changeInput}
        />
      </FormItem>
      <FormItem>
        <Button stretch type="submit" title="Login" onClick={submitLogin} />
      </FormItem>
    </Form>
  );
};

export default LoginForm;
