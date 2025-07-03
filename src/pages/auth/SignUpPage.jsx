import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

const SignUpPage = () => {
  return (
    <div className="form-wrapper bg-body-tertiary m-1 d-flex justify-content-center align-items-center flex-column">
      <div className="text-center">
        <h3 className="mb-1">Register Here</h3>
        <small className="text-muted">Create your account to get started</small>
        <hr style={{ color: "blue" }} />
      </div>

      <div className="form-content">
        <Form className="form p-4" style={{ border: "1px solid black" }}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>First Name</Form.Label>
            <Form.Control type="text" placeholder="Enter first name" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="text" placeholder="Enter last name" />
          </Form.Group>
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
          Already have an account? <Link to="/login">Sign In</Link>
        </small>
      </div>
    </div>
  );
};

export default SignUpPage;
