import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import CustomInput from "../../components/customInput/CustomInput.jsx";
import Card from "react-bootstrap/Card";
import useForm from "../../hooks/useForm.js";
import { useRef } from "react";

const initialState = {};
const SignInPage = () => {
  const { form, handleOnChange } = useForm(initialState);

  const emailRef = useRef();
  const passwordRef = useRef();

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    console.log(email, password);
    // {
    //   console.log(form);
    // }
  };
  return (
    // <div className="form-wrapper bg-body-tertiary m-1 d-flex justify-content-center align-items-center flex-column">
    //   <div className="text-center">
    //     <h3 className="mb-1">Sign In Here</h3>
    //     <small className="text-muted">Sign in to get access !</small>
    //     <hr style={{ color: "blue" }} />
    //   </div>

    //   <div className="form-content">
    //     <Form className="form p-4" style={{ border: "1px solid black" }}>
    //       <Form.Group className="mb-3" controlId="formBasicEmail">
    //         <Form.Label>Email address</Form.Label>
    //         <Form.Control type="email" placeholder="Enter email" />
    //       </Form.Group>

    //       <Form.Group className="mb-3" controlId="formBasicPassword">
    //         <Form.Label>Password</Form.Label>
    //         <Form.Control type="password" placeholder="Password" />
    //       </Form.Group>

    //       <Button className="w-100" variant="primary" type="submit">
    //         Submit
    //       </Button>
    //     </Form>
    //   </div>
    //   <div className="text-center mt-3">
    //     <small>
    //       <Link to="/forgot-password">Forgot Password?</Link>
    //     </small>
    //   </div>
    //   <div className="text-center mt-1">
    //     <small>
    //       Don't have an account? <Link to="/signup">Sign Up</Link>
    //     </small>
    //   </div>
    // </div>

    <div className="signin-page d-flex justify-content-center align-items-center">
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>Welcome Back to the Authentication</Card.Title>
          <hr />
          <Form onSubmit={handleOnSubmit}>
            <CustomInput
              label="Email"
              name="email"
              type="email"
              required
              placeholder="name@email.com"
              // onChange={handleOnChange}
              ref={emailRef}
            />
            <CustomInput
              label="Password"
              name="password"
              type="password"
              required
              placeholder="***********"
              // onChange={handleOnChange}
              ref={passwordRef}
            />
            <div className="d-grid">
              <Button type="submit">Sign In</Button>
            </div>
          </Form>
          <div className="text-end my-3">
            forget Password? <a href="/forget-password">Reset Now</a>{" "}
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default SignInPage;
