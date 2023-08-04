import {
  Button,
  Form,
  FormFeedback,
  FormGroup,
  FormText,
  Input,
  Label,
  Modal,
} from "reactstrap";
import styles_form from "../styles/form.module.scss";
import styles_main from "../styles/main.module.scss";
import AppLogo from "./app-logo.component";
import { useState } from "react";
import { validateLoginData } from "../utils/helpers";

const LoginModal = () => {
  const toggle = () => {};
  const [form, setForm] = useState({
    name: '',
    password: '',
  });
  const [validationErrors, setValidationErrors] = useState({});

  const handleChange = (e) => { 
    setForm({...form, [e.target.name]: e.target.value});
  }

  const handleCancel = (e) => { 
    e.preventDefault();
  }


  const handleSubmit = (e) => { 
    e.preventDefault();
    const errors = validateLoginData(form.email, form.password);
    setValidationErrors(errors);
    if (!Boolean(Object.keys(errors).length))
        

  }


  return (
    <Modal isOpen={true} toggle={toggle} centered={true}>
      <div className={styles_main.modalBody}>
        <center>
          <AppLogo />
        </center>
        <Form className="py-4 px-4">
          <FormGroup>
            <Label for="email" className={styles_form.inputLabel}>
              Email
            </Label>
            <Input name="email" type="text" placeholder="example@email.com" onChange={e => handleChange(e)} value={form.email} invalid={Boolean(validationErrors.email)} />
            <FormFeedback>{validationErrors.email}</FormFeedback>
          </FormGroup>
          <FormGroup>
            <Label for="password" className={styles_form.inputLabel}>
              Password
            </Label>
            <Input name="passoword" type="password" onChange={e => handleChange(e)} value={form.password} invalid={Boolean(validationErrors.password)} />
            <FormFeedback>{validationErrors.password}</FormFeedback>
          </FormGroup>
          <div className={styles_main.modalButtonsContainer}>
            <Button onClick={e => handleSubmit(e)}>Submit</Button>
            <Button onClick={e => handleCancel(e)}>Cancel</Button>
          </div>
        </Form>
      </div>
    </Modal>
  );
};

export default LoginModal;
