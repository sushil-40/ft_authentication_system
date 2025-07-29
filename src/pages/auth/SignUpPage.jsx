/* eslint-disable no-unused-vars */
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import CustomInput from "../../components/customInput/CustomInput";
import { signUpInputs } from "../../assets/customInputs/userSignUpInput";
import useForm from "../../hooks/useForm";
import { signUpNewUserApi } from "../../services/authAPI";

const initialState = {};
const SignUpPage = () => {
  const { form, setForm, handleOnChange, passwordErrors } =
    useForm(initialState);
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    console.log(form);
    const { confirmPassword, ...rest } = form;
    if (confirmPassword !== rest.password) {
      return alert("Password do not match");
    }

    const result = await signUpNewUserApi(form);
    console.log(result);
  };
  console.log(passwordErrors, "******");
  return (
    <div className="form-wrapper bg-body-tertiary m-1 d-flex justify-content-center align-items-center flex-column">
      <div className="text-center">
        <h3 className="mb-1">Register Here</h3>
        <small className="text-muted">Create your account to get started</small>
        <hr style={{ color: "blue" }} />
      </div>

      <div className="form-content">
        <Form onSubmit={handleOnSubmit} className="form p-4 shadow-lg">
          {signUpInputs.map((input) => (
            <CustomInput
              key={input.name}
              {...input}
              onChange={handleOnChange}
            />
          ))}
          <div className="py-3">
            <ul className="text-danger">
              {passwordErrors.length > 0 &&
                passwordErrors.map((msg) => {
                  return <li key={msg}>{msg}</li>;
                })}
            </ul>
          </div>
          <Button
            className="w-100"
            variant="primary"
            type="submit"
            disabled={passwordErrors.length > 0 ? true : false}
          >
            Submit
          </Button>
        </Form>
      </div>
      <div className="text-center mt-3">
        <small>
          Already have an account? <Link to="/login">Sign In</Link>
        </small>
      </div>
    </div>
  );
};

export default SignUpPage;
