import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      navigate("/");
    } catch (error) {
      console.log(error);
      setError("Failed to log in");
    }

    setLoading(false);
  }

  return (
    <>
      <Card className="bg-dark text-white">
        <Card.Body>
          <div
            style={{
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              style={{
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
                height: "5rem",
              }}
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/250px-Netflix_2015_logo.svg.png"
              alt="Netflix Logo"
            />
          </div>
          <h2 className="text-center mb-4">Log In</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            <Button disabled={loading} className="w-100 mt-3" type="submit">
              Log In
            </Button>
          </Form>
          {/* <div className="w-100 text-center mt-3">
            <Link to="/auth/forgot-password">Forgot Password?</Link>
          </div> */}
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2 text-white">
        Need an account? <Link to="/auth/signup">Sign Up</Link>
      </div>
    </>
  );
}
