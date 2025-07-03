import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

const SignInPage = () => {
  return (
    <div className="form-wrapper bg-body-tertiary m-1 d-flex justify-content-center align-items-center flex-column">
      <div className="text-center">
        <h3 className="mb-1">Sign In Here</h3>
        <small className="text-muted">Sign in to get access !</small>
        <hr style={{ color: "blue" }} />
      </div>

      <div className="form-content">
        <Form className="form p-4" style={{ border: "1px solid black" }}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <Button className="w-100" variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
      <div className="text-center mt-3">
        <small>
          <Link to="/forgot-password">Forgot Password?</Link>
        </small>
      </div>
      <div className="text-center mt-1">
        <small>
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </small>
      </div>
    </div>
  );
};

export default SignInPage;
