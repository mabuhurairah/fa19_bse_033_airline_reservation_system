import React from "react";
import { Container, Button } from "react-bootstrap";
import { Form, Row, Col } from "react-bootstrap";
import image from '../../../src/public/images/flight.png';
import userLoginService from "../../services/UserLoginService";

const Login = () => {
    const [email, setEmail] = React.useState("user@user.com");
    const [password, setPassword] = React.useState("user");

    return ( <Container>
        <Row className='Row mb-5'>
            <Col sm={6} className='Col'>
                <h3>LOGIN</h3>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="" autoComplete="off" value={email} onChange={(e) => {
                            setEmail(e.target.value );
                        }} />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="" autoComplete="off" value={password} onChange={(e) => {
                            setPassword(e.target.value );
                        }} />
                    </Form.Group>
                    <Row>
                        <Col sm={6}>
                            <Button variant="dark" type="submit" onClick={(e) => {
                                userLoginService
                                .login(email, password)
                                .then((data) => {
                                    console.log(data);
                                    window.location.href = "/";
                                })
                                .catch((err) => {
                                    console.log(err);
                                });
                                e.preventDefault();
                            }} >
                                Login
                            </Button>
                        </Col>
                        <Col sm={6}>
                            Don't have a account? <a href="/register">Sign up</a>
                        </Col>
                    </Row>
                </Form>
            </Col>
            <Col sm={6}>
                <img src={image} alt="img" width="110%" height="117%" />
            </Col>
        </Row>
    </Container> );
}
 
export default Login;