import {
  Alert,
  Button,
  Form,
  FormFeedback,
  FormGroup,
  Input,
  Label,
  Modal,
} from "reactstrap";
import styles_form from "../styles/form.module.scss";
import styles_main from "../styles/main.module.scss";
import AppLogo from "./app-logo.component";
import { useContext, useState } from "react";
import { validateLoginData } from "../utils/helpers";
import { login } from "../api/api-interface";
import { AppContext } from "../hooks/Context";
import { AUTH_TOKEN_KEY, LOGIN_MODAL_NAME, USER_STORAGE_KEY } from "../utils/constants";

const LoginModal = () => {
  const appContext = useContext(AppContext);
  const [form, setForm] = useState({
    name: "",
    password: "",
  });
  const [validationErrors, setValidationErrors] = useState({});
  const [responseError, setResponseError] = useState();
  const [hasLoggedIn, setHasLoggedIn] = useState(false);

  const resetState = () => {
    setForm({name: "", password: ""});
    setValidationErrors({});
    setResponseError();
    setHasLoggedIn(false);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleCancel = (e) => {
    e.preventDefault();
    closeModal();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validateLoginData(form.email, form.password);
    setValidationErrors(errors);

    if (!Boolean(Object.keys(errors).length)) {
      const response = await login(form.email, form.password);
      if (response.error) return setResponseError(response.error);
        
      sessionStorage.setItem(AUTH_TOKEN_KEY, response.authToken);
      sessionStorage.setItem(USER_STORAGE_KEY, JSON.stringify(response));
      setHasLoggedIn(true);
      setTimeout(() => {
        closeModal();
        resetState();
      }, 1000);
    }
  };

  const closeModal = () => {
    appContext.setState({ ...appContext.state, modal: "" });
  };

  return (
    <Modal isOpen={appContext.state.modal === LOGIN_MODAL_NAME} centered={true}>
      <div className={styles_main.modalBody}>
        <center>
          <AppLogo />
        </center>
        <Form className="py-4 px-4">
          {(Boolean(responseError)  && !hasLoggedIn) && (
            <Alert color="danger">
              <small>{responseError}</small>
            </Alert>
          )}
          {hasLoggedIn && (
            <Alert color="success">
              <small>Login Successful</small>
            </Alert>
          )}
          <FormGroup>
            <Label for="email" className={styles_form.inputLabel}>
              Email
            </Label>
            <Input
              name="email"
              type="text"
              placeholder="example@email.com"
              onChange={(e) => handleChange(e)}
              value={form.email}
              invalid={Boolean(validationErrors.email)}
            />
            <FormFeedback>{validationErrors.email}</FormFeedback>
          </FormGroup>
          <FormGroup>
            <Label for="password"  className={styles_form.inputLabel}>
              Password
            </Label>
            <Input
              name="password"
              type="password"
              autoComplete="current-password"
              onChange={(e) => handleChange(e)}
              value={form.password}
              invalid={Boolean(validationErrors.password)}
            />
            <FormFeedback>{validationErrors.password}</FormFeedback>
          </FormGroup>
          <div className={`${styles_main.modalButtonsContainer} mt-5`}>
            <Button onClick={(e) => handleSubmit(e)}>Submit</Button>
            <Button onClick={(e) => handleCancel(e)}>Cancel</Button>
          </div>
        </Form>
      </div>
    </Modal>
  );
};

export default LoginModal;
