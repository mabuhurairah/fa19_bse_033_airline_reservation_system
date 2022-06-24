import React from "react";
import { Container, Row, Col, FloatingLabel, Form, Button, Modal } from "react-bootstrap";
import userLoginService from "../services/UserLoginService";

const UserData = () => {
    const [show, setShow] = React.useState(false);
    const handleClose = () => {setShow(false)};
    const handleShow = () => {setShow(true)};

    return ( <Container>
        <Row className="g-2 Row mb-5">
            <Col sm={5} className="Col">

                <h3>PROFILE</h3>

                <FloatingLabel controlId="floatingInputGrid" label="Full Name" className="m-2">
                    <Form.Control type="text" placeholder="Muhammad Abu Hurairah" value={
                        userLoginService.getLoggedInUser().fullName} 
                    />
                </FloatingLabel>
                <FloatingLabel controlId="floatingInputGrid" label="Contact Number" className="m-2">
                    <Form.Control type="string" placeholder="+92-333-0123456"  value={
                        userLoginService.getLoggedInUser().contactNumber} 
                    />
                </FloatingLabel>
                <FloatingLabel controlId="floatingInputGrid" label="Email" className="m-2">
                    <Form.Control type="email" placeholder="example@gmail.com"  value={
                        userLoginService.getLoggedInUser().email} 
                    />
                </FloatingLabel>

                <a href="/not-found" className="m-2">Reset Password ???</a>

                <Row className="mt-4">
                    <Col sm={4}>
                        <Button variant="dark" onClick={handleShow}>Update Profile</Button>
                    </Col>

                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Update Profile</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                        <Form>
                            <Form.Group className="mb-3" controlId="">
                                <Form.Label>Full Name</Form.Label>
                                <Form.Control type="text" placeholder="Full Name" value={
                                    userLoginService.getLoggedInUser().fullName} 
                                />
                                <Form.Label>Contact Number</Form.Label>
                                <Form.Control type="string" placeholder="Contact Number" value={
                                    userLoginService.getLoggedInUser().contactNumber} 
                                />
                                <Form.Label>Email Address</Form.Label>
                                <Form.Control type="email" placeholder="Email Address" value={
                                    userLoginService.getLoggedInUser().email} 
                                />
                            </Form.Group>
                        </Form>
                        </Modal.Body>
                        <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="dark" type="submit" onClick={handleClose}>
                                Update
                        </Button>
                        </Modal.Footer>
                    </Modal>

                    <Col sm={4}>
                        <Button variant="danger">Delete Account</Button>
                    </Col>
                </Row>

            </Col>
            <Col sm={7}>
                <h1 className="Center m-5">bookFlight</h1>
                <p className="Center m-5">bookFlight has satisfied its customers with authentic online flight bookings for both domestic and 
                    international destinations. Peace of mind means changing your travel dates as often as you need. We understand your plans 
                    change, and that is why Bookme offers a fee-free policy to change your booking details before 48 hours of your flight. 
                    Now book your online flight ticket with Bookme and relax knowing that you are in safe hands.
                </p>
            </Col>
        </Row>
    </Container> );
}
 
export default UserData;