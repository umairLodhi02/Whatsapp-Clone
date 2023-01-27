import { Button, Col, Container, Form, FormGroup, Row } from "react-bootstrap";
import { useContext, useState } from "react";
import userContext from "./../../context/userContext";

const Login = () => {
  const { session, setSession } = useContext(userContext);
  const [username, setUsername] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    setSession({ username });
    localStorage.setItem("username", username);
  };

  return (
    <Container>
      <Row>
        <Col md={"6"} className="m-auto">
          <Form onSubmit={handleLogin}>
            <FormGroup>
              <Form.Label>Enter Username</Form.Label>
              <Form.Control
                type={"text"}
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </FormGroup>

            <Button size="lg" variant="primary" type="submit" className="mt-4">
              Login
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};
export default Login;
