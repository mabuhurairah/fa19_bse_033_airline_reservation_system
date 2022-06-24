import React from "react";
import { Container, Button } from "react-bootstrap";
import { Form, Row, Col } from "react-bootstrap";
import image from '../../../src/public/images/flights7.png';
import userLoginService from "../../services/UserLoginService";


const Register = (props) => {
    const [fullName, setFullName] = React.useState("User");
    const [contactNumber, setContactNumber] = React.useState("03001234567");
    const [email, setEmail] = React.useState("user@user.com");
    const [password, setPassword] = React.useState("user");


    return ( <Container>
        <Row className='Row mb-5'>
            <Col sm={6} className='Col'>
                <h3>SIGN UP</h3>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Full Name" autoComplete="off" value={fullName} onChange={(e) => {
                            setFullName(e.target.value );
                        }} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicNumber">
                        <Form.Label>Contact Number</Form.Label>
                        <Form.Control type="number" placeholder="Enter Contact Number" autoComplete="off" value={contactNumber} onChange={(e) => {
                            setContactNumber(e.target.value );
                        }} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control type="email" placeholder="Enter Email" autoComplete="off" value={email} onChange={(e) => {
                            setEmail(e.target.value );
                        }} />
                        <Form.Text className="text-muted">
                            We'll never share your contact number and email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" autoComplete="off" value={password} onChange={(e) => {
                            setPassword(e.target.value );
                        }} />
                    </Form.Group>

                    <Row>
                        <Col sm={6}>
                            <Button variant="dark" type="submit" onClick={(e) => {
                                userLoginService
                                .register(fullName, contactNumber, email, password)
                                .then((data) => {
                                    console.log(data);
                                    props.history.push("/login");
                                    window.location.href = "/login";
                                })
                                .catch((err) => {
                                    console.log(err);
                                });
                                e.preventDefault();
                            }} >
                                Sign Up
                            </Button>
                        </Col>
                        <Col sm={6}>
                            Already a member? <a href="/login">Sign in</a>
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
 
export default Register;