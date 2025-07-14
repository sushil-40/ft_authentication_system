import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import CustomInput from "../../components/customInput/CustomInput";
import { signUpInputs } from "../../assets/customInputs/userSignUpInput";

const SignUpPage = () => {
  return (
    <div className="form-wrapper bg-body-tertiary m-1 d-flex justify-content-center align-items-center flex-column">
      <div className="text-center">
        <h3 className="mb-1">Register Here</h3>
        <small className="text-muted">Create your account to get started</small>
        <hr style={{ color: "blue" }} />
      </div>

      <div className="form-content">
        <Form className="form p-4 shadow-lg">
          {signUpInputs.map((input) => (
            <CustomInput key={input.name} {...input} />
          ))}

          <Button className="w-100" variant="primary" type="submit">
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
