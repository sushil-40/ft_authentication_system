import React from "react";
import bgImage from "../../assets/auth-bg.jpg";
import Container from "react-bootstrap/esm/Container";
import { Row, Col } from "react-bootstrap";
const HomePage = () => {
  return (
    <div className="homePage  d-flex align-items-center bg-light">
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="text-center text-md-start mb-4 mb-md-0">
            <h3>Welcome to the Authentication System</h3>
            <p>
              Join us to explore the amazing features. Secure and seamless
              authentication experience awaits you.
            </p>
            <p>
              Already have an account? <a href="/login">Sign in</a> or{" "}
              <a href="/signup">create one</a> today!
            </p>
          </Col>
          <Col md={6} className="text-center">
            <img
              src={bgImage}
              alt="Auth Background"
              className="img-fluid rounded shadow"
              style={{ maxHeight: "60vh", objectFit: "cover" }}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HomePage;
